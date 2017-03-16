var dtsGen = require('dts-generator').default;
const path = require('path');
const _ = require('lodash');


function convertImportPath(params) {
  let toImportFilePath = params.importedModuleId;
  let currentFilePath = params.currentModuleId;
  if (!toImportFilePath.startsWith('.')) {
    return toImportFilePath;
  }
  if (toImportFilePath.endsWith('index')) {
    toImportFilePath = toImportFilePath.substr(0, toImportFilePath.length - 5);
  }
  const currentFilePathSplit = _.split(currentFilePath, '/');
  const currentDirPath = _.dropRight(currentFilePathSplit).join('/');

  toImportFilePath = toImportFilePath === '' ?
    'react-analytics-context'
     : path.join('react-analytics-context/lib/', currentDirPath, toImportFilePath);
  return toImportFilePath;
}

function convertFilePath(params) {
  let filePath = params.currentModuleId;
  if (filePath === 'index') {
    return 'react-analytics-context';
  }
  filePath = 'react-analytics-context/lib/' + filePath;
  if (filePath.endsWith('index')) {
    filePath = filePath.substr(0, filePath.length - 6);
  }
  return filePath;
}

dtsGen({
  name: 'react-analytics-context',
  project: 'tsconfig.lib.json',
  out: 'react-analytics-context.d.ts',
  resolveModuleId: convertFilePath,
  resolveModuleImport: convertImportPath,
});