import * as path from 'path';
import * as _ from 'lodash';
import * as sass from 'node-sass';
const recursivelyReadDir = require('recursive-readdir');
const DtsCreator = require('typed-css-modules');
import * as fs from 'mz/fs';

async function generateDtsFor(filePath: string) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const renderedSass = sass.renderSync({
      file: filePath,
      data: content,
    });
    const sassContent = renderedSass.css.toString('utf-8');
    // console.error(sassContent);
    const creator = new DtsCreator();
    const dtsContent = await creator.create(
      filePath, sassContent
    );
    const writePath = `${filePath}.d.ts`;
    await fs.writeFile(writePath, dtsContent.formatted);
  } catch (e) {
    console.error(filePath);
    console.error(e);
  }
}

const srcPath = path.join(__dirname, '../app');
recursivelyReadDir(srcPath, ['!*.scss'], async (err: Error, filePaths: Array<string>) => {
  if (err) { console.error(err) }
  _.map(
    filePaths,
    async (filePath: string) => await generateDtsFor(filePath)
  );
});