import fs from "fs";
import Chain from "../classes/Chain.js";
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(resolve(__dirname, '..'), 'data/eclipsia.json');

export const loadChain = () => {
    let eclipsia = new Chain(4);

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        Object.assign(eclipsia, JSON.parse(data));
    }

    return eclipsia;
};