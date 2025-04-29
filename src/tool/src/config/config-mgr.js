import path from 'path';
import { fileURLToPath } from 'url';
import { cosmiconfigSync } from 'cosmiconfig';
import { readFile } from 'fs/promises';
import betterAjvErrors from 'better-ajv-errors';
import Ajv from 'ajv';
import { createLogger } from '../logger.js'; // Импортируем createLogger

// Получаем текущий путь к файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Создаем экземпляр логгера
const logger = createLogger('ConfigManager');

const ajv = new Ajv();
const configLoader = cosmiconfigSync('tool');

async function loadSchema() {
    const data = await readFile(new URL('./schema.json', import.meta.url), 'utf8');
    return JSON.parse(data);
}

export default async function getConfig() {
    const schema = await loadSchema();
    const result = configLoader.search(process.cwd());

    if (!result) {
        logger.warning('Could not find configuration, using default');
        return { port: 1234 };
    } else {
        const isValid = ajv.validate(schema, result.config);
        if (!isValid) {
            logger.warning('Invalid configuration was supplied');
            console.log();
            console.log(betterAjvErrors(schema, result.config, ajv.errors));
            process.exit(1);
        }
        logger.debug('Found configuration', result.config);
        return result.config;
    }
}
