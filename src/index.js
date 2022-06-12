import {getArguments} from './helpers/args.js';
import {execute} from './exec.js';

const username = getArguments()[0].value;

console.info(`Welcome to the File Manager, ${username}!`);

execute();

process.on('exit', () => {
    console.info(`Thank you for using File Manager, ${username}!`);

    process.exit();
});