import {stat} from 'fs/promises';
import {absolutePath} from '../../helpers/fs.js';

export const cd = async (workDir, source) => {
    const path = absolutePath(workDir, source);
    const directory = (await stat(path)).isDirectory();

    return directory ? {workDir: path} : {error: new Error()};
};