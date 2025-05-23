#!/usr/bin/env node
import { createLogger } from '../src/logger.js';

const logger = createLogger('AppStarter');

import arg from 'arg';
import chalk from 'chalk';
import getConfig from '../src/config/config-mgr.js';
import start from '../src/commands/start.js';

const usage = () => { 
    console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
};

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    logger.debug('Received args', args);

    if (args['--start']) {
        const config = getConfig();
        start(config);
    } else {
        usage(); 
    }

} catch (e) {
    logger.warning(e.message);
    console.log();
    usage();
} 
