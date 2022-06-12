import {createInterface} from 'readline';
import {EOL, homedir} from 'os';
import commands from './cmd/commands.js';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

let workDir = homedir();

export const execute = () => {
    readline.question(
        'You are currently in ' + workDir + EOL + '>',
        async (input) => {
            if (input === '.exit') {
                process.exit();
            }

            const [command, ...args] = input.split(' ');

            if (Object.keys(commands).includes(command)) {
                const result = await commands[command](workDir, ...args);

                if (result?.workDir) {
                    workDir = result.workDir;
                }

                if (result?.data) {
                    console[result.type || 'info'](result.data);
                }

                if (result?.error) {
                    console.error('Operation failed');
                }
            } else {
                console.error('Invalid input')
            }

            execute();
        }
    );
};