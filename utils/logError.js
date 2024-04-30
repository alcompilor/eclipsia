import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(resolve(__dirname, '..'), 'errors.txt');

export const logError = (req, err) => {
    const log = `${req.method} '${req.path}' | ${err.message} | ${err.statusCode}\n`
    fs.appendFileSync(filePath, log);
};