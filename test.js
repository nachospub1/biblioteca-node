const glob = require('glob');
const path = require('path');
const Mocha = require('mocha');

const mocha = new Mocha();

const testFiles = glob.sync(path.resolve('./src/**/*.spec.js'));

testFiles.forEach(file => {
  mocha.addFile(file);
});

mocha.run(function (failures) {
  process.exitCode = failures ? 1 : 0;
});