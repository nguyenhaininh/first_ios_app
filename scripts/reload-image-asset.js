const fs = require('fs');
const path = require('path');
const camel = require('lodash.camelcase');

const assetsPath = path.join('src', 'assets');
const indexPath = path.join(assetsPath, 'images.ts');

const isExistFile = file => {
  try {
    fs.statSync(file);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;
  }
};

if (isExistFile(indexPath)) {
  fs.unlinkSync(indexPath);
}

fs.writeFileSync(indexPath);

const content = [];
fs.readdirSync(path.join(assetsPath, 'images')).forEach(file => {
  const match = file.match(/^([a-z-_]+).(png)/);
  if (match) {
    let variableName = camel(match[1]);
    variableName = variableName.replace(/Ico$/, 'Icon');
    content.push(`export const ${variableName} = require('./images/${file}');`)
  }
});

content.push('');

const stream = fs.createWriteStream(indexPath);
stream.once('open', function(fd) {
  stream.write(content.join('\n'));
  stream.end();
});
