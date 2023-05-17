const glob = require('glob');
const path = require('path');
const Mocha = require('mocha');

// Crea una nueva instancia de Mocha
const mocha = new Mocha();

// Encuentra todos los archivos .test.js en la carpeta /src y subdirectorios
const testFiles = glob.sync(path.resolve('./src/**/*.spec.js'));

// Agrega los archivos de prueba a Mocha
testFiles.forEach(file => {
  mocha.addFile(file);
});

// Ejecuta las pruebas
mocha.run(function (failures) {
  process.exitCode = failures ? 1 : 0;
});