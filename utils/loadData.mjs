import { readFile } from 'fs/promises';
import path from 'path';

async function loadData(filename) {
  const filePath = path.resolve(process.cwd(), `./data/${filename}.json`);
  const data = await readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export default loadData;