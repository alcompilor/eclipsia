import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(resolve(__dirname, '..'), 'data');

export const persistChain = (eclipsia) => {
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
    }
    fs.writeFileSync(`${filePath}/eclipsia.json`, JSON.stringify(eclipsia, null, 2));
};