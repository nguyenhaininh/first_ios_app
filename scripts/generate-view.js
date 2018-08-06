/* eslint-disable */

const fs = require('fs');
const mkdirp = require('make-dir');
const Mustache = require('mustache');
const path = require('path');
const kebab = require('lodash.kebabcase');
const camel = require('lodash.camelcase');

// const name = camel(process.argv[2]);
const name = process.argv[2];

if (!name) {
  console.error('please specify generate component name.');
  process.exit(1);
}

const componentPath = path.join('src', 'views');

const isExistFile = file => {
  try {
    fs.statSync(file);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;
  }
};

if (isExistFile(path.join(componentPath, 'index.js'))) {
  console.error(`${name} is already exist.`);
  process.exit(1);
}

mkdirp(componentPath).then(() => {
  const compSkeleton = fs.readFileSync('./skeletons/view.mustache', { encoding: 'utf8' });
  const comp = Mustache.render(compSkeleton, {
    name,
    kebabName: kebab(name),
    camelName: camel(name),
  });
  fs.writeFileSync(path.join(componentPath, `${kebab(name)}-view.tsx`), comp);
});
