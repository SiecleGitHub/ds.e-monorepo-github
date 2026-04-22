const Fs = require('fs');
const Path = require('path');
const Sass = require('sass');

const getComponents = () => {
  let allComponents = [];

  const types = ['atoms', 'molecules'];

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -4) + 'css'}`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (path, fileName) => {
  const result = Sass.compile(Path.resolve(path), {
    style: 'expanded',
    loadPaths: [Path.resolve('src'), Path.resolve('.')],
    quietDeps: true,
  });

  Fs.writeFileSync(Path.resolve(fileName), result.css.toString());
};

try {
  Fs.mkdirSync(Path.resolve('lib'));
} catch (e) {}

compile('src/global.scss', 'lib/global.css');

getComponents().forEach((component) => {
  compile(component.input, component.output);
});
