#!/usr/bin/env node
import { createLogger } from '../src/logger.js'; // Импортируем createLogger

// Создаем экземпляр логгера
const logger = createLogger('AppStarter');

// Теперь вы можете использовать logger
logger.highlight('  Starting the app  ');

import arg from 'arg'; // Импортируем arg
import chalk from 'chalk'; // Импортируем chalk
import getConfig from '../src/config/config-mgr.js'; // Импортируем getConfig
import start from '../src/commands/start.js'; // Импортируем start

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    logger.debug('Received args', args);

    if (args['--start']) {
        const config = getConfig();
        start(config);
    }
} catch (e) {
    logger.warning(e.message);
    console.log();
    usage();
}

const usage = () => {
    console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
};
