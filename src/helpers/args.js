export const getArguments = () => {
    return process.argv.slice(2)
        .filter((arg) => {
            return arg.startsWith('--');
        })
        .map((arg) => {
            const [key, value] = arg.split('=');

            return {key: key.replace('--', ''), value: value};
        });
};