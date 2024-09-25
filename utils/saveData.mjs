import { writeFile } from 'fs/promises';
import path from 'path';

async function saveData(filename, data) {
  const filePath = path.join(process.cwd(), 'data', `${filename}.json`);
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    throw new Error(`Error saving data to ${filename}.json: ${error.message}`);
  }
}

export default saveData;