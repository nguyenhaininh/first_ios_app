/* eslint-disable */

const fs = require('fs');
const Mustache = require('mustache');
const path = require('path');
const kebab = require('lodash.kebabcase');
const camel = require('lodash.camelcase');

// const name = camel(process.argv[2]);
const name = process.argv[2];

if (!name) {
  console.error('please specify generate Action name.');
  process.exit(1);
}

const actionPath = path.join('src', 'actions');
const storePath = path.join('src', 'stores');

const actionSkeleton = fs.readFileSync('./skeletons/action.mustache', { encoding: 'utf8' });
const stateSkeleton = fs.readFileSync('./skeletons/store-state.mustache', { encoding: 'utf8' });
const reducerSkeleton = fs.readFileSync('./skeletons/reducer.mustache', { encoding: 'utf8' });

const action = Mustache.render(actionSkeleton, {
  name,
  kebabName: kebab(name),
});
fs.writeFileSync(path.join(actionPath, `${kebab(name)}-actions.ts`), action);

const state = Mustache.render(stateSkeleton, {
  name,
  kebabName: kebab(name),
});
fs.writeFileSync(path.join(storePath, `${kebab(name)}-state.ts`), state);

const reducer = Mustache.render(reducerSkeleton, {
  name,
  kebabName: kebab(name),
});
fs.writeFileSync(path.join(storePath, `${kebab(name)}-reducer.ts`), reducer);