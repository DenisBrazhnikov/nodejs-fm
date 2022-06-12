import system from 'os';

export const os = (_, arg) => {
    switch (arg) {
        case '--EOL':
            return {data: JSON.stringify(system.EOL)};
        case '--cpus':
            return {
                data: system.cpus().map((cpu) => ({
                    name: cpu.model,
                })),
                type: 'table',
            };
        case '--homedir':
            return {data: system.homedir()}
        case '--username':
            return {data: system.userInfo().username}
        case '--architecture':
            return {data: system.arch()}
        default:
            return {error: 'Invalid input'}
    }
};

export default {
    os
}