var gulp = require('gulp');
var del = require('del');
var watch = require('gulp-watch');
var tslint = require("gulp-tslint");
var fs = require('fs-extra');
var exec = require('child_process').exec;
var childProcess = require('child_process');
var runSequence = require('run-sequence');
var jest = require('jest-cli');
var tslintconfigFile = './tslint.json';
var tsFiles = './src/**/*.{ts,tsx}';
var plist = require('plist');

var appDir = './build/';

gulp.task('default', ['build'], () => {
});

gulp.task('build', ['tsc', "lint",], (done) => {
  fs.copySync("src/locales", "build/locales");
  fs.copySync("src/configs/", "build/configs");
  fs.copySync("src/assets/images", "build/assets/images");
  done();
});

gulp.task('watch', () => {
  watch(tsFiles, () => {
    gulp.run('tsc');
  });
});

gulp.task('build:production', ['tsc', "lint", 'acknowledgements'], (done) => {
  fs.copySync("src/locales", "build/locales");
  fs.copySync("src/configs/production", "build/configs");
  fs.copySync("src/resources/images", "build/resources/images");
  done();
});

gulp.task('clean', del.bind(null, ['.tmp', 'build']));

// build by tsc
gulp.task('tsc', (done) => {
  return exec('node ./node_modules/typescript/bin/tsc', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

// Run test
gulp.task('test', () => {
  jest.runCLI({}, [__dirname]);
});

gulp.task("lint", () =>
  gulp.src(tsFiles)
    .pipe(tslint({ configuration: tslintconfigFile, formatter: 'verbose' }))
    .pipe(tslint.report({ summarizeFailureOutput: true }))
);

gulp.task('acknowledgements:npm', async () => {
  const util = require('util');
  const readPackageTree = util.promisify(
    require('read-package-tree'));

  const flattenNodeMap = (node) => {
    const { package } = node;
    const { dependencies, devDependencies } = package;
    let nodeMap = node.parent ? { [package.name]: [node] } : {};
    if (node.children.length === 0) {
      return nodeMap;
    }
    node.children.forEach((child) => {
      const inProd = dependencies && Object.keys(dependencies).find((name) => name === child.package.name);
      const inDev = devDependencies && Object.keys(devDependencies).find((devName) => devName === child.package.name);
      if (!inProd || inDev) {
        return;
      }
      const childNodeMap = flattenNodeMap(child);
      Object.keys(childNodeMap).forEach((childName) => {
        const nodes = childNodeMap[childName];
        const exists = nodeMap[childName];
        nodeMap[childName] = exists ? [...exists, ...nodes] : nodes;
      });
    });
    return nodeMap;
  };
  const node = await readPackageTree('.');
  const nodeMap = flattenNodeMap(node);
  const getLicense = (node) => {
    if (node.package.private) {
      return undefined;
    }
    const files = fs.readdirSync(node.path);
    const licenseFile = files.find((file) => file.match(/LICENSE(|\.\w+)$/i));
    if (licenseFile) {
      return {
        text: fs.readFileSync(node.path + '/' + licenseFile, 'utf8'),
      };
    }
    const homepage = node.package.homepage;
    if (homepage) {
      const text = node.package.license ? node.package.license + ' License: ' + homepage : homepage;
      return {
        text: text,
        url: homepage
      };
    }
    return undefined;
  };
  const licenses = Object.keys(nodeMap).reduce((result, name) => {
    const nodes = nodeMap[name];
    const licenseMap = nodes.reduce((license, node) => {
      return { ...getLicense(node), ...license };
    }, {});
    if (!licenseMap.text && !licenseMap.url) {
      return result;
    }
    return { ...result, [name]: licenseMap };
  }, {});
  fs.writeJSONSync('build/resources/acknowledgements/npm.json', licenses);
});

// gulp.task('acknowledgements:ios', (done) => {
//   fs.mkdirpSync('build/resources/acknowledgements');
//   var file = fs.readFileSync('ios/Pods/Target Support Files/Pods-PhoebeMobile/Pods-PhoebeMobile-acknowledgements.plist', 'utf8')
//   var parsed = plist.parse(file);
//   var result = parsed['PreferenceSpecifiers'].reduce((r, d) => {
//     var title = d['Title'];
//     var footerText = d['FooterText'];
//     if (!title || title === '' || title === 'Acknowledgements') {
//       return r;
//     }
//     r[title] = { text: footerText };
//     return r;
//   }, {});
//   fs.writeJSONSync('build/resources/acknowledgements/native.ios.json', result);
//   done();
// });

// gulp.task('acknowledgements:android', (callback) => {
//   fs.mkdirpSync('build/resources/acknowledgements');
//   return exec('./android/gradlew -p android downloadLicenses', (err, stdout, stderr) => {
//     console.log(stdout);
//     console.error(stderr);
//     if (err) {
//       callback(err);
//       return;
//     }
//     var report = fs.readJsonSync('android/build/reports/license/dependency-license.json');
//     var result = report.dependencies.reduce((r, d) => {
//       var title = d && d.name && d.name.match(/^.*:(.*):.*$/)[1];
//       var license = d.licenses[0];
//       if (!license.name || !license.url) {
//         return r;
//       }
//       var text = license.name + ': ' + license.url;
//       var url = license.url;
//       r[title] = { text: text, url: url };
//       return r;
//     }, {});
//     fs.writeJSONSync('build/resources/acknowledgements/native.android.json', result);
//     callback();
//   });

// });

gulp.task('acknowledgements', [
  'acknowledgements:npm',
  // 'acknowledgements:android',
  // 'acknowledgements:ios'
]
);

// Run this task to reload asset images when any new png files are added
gulp.task('reload-image-asset', (done) => {
  return exec('node scripts/reload-image-asset.js', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});
