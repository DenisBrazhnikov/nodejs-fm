import {readFile} from 'fs/promises';
import {absolutePath} from '../../helpers/fs.js';

export const cat = async (workDir, source) => {
    try {
        const reader = await readFile(absolutePath(workDir, source));

        return {data: reader.toString()};
    } catch (e) {
        return {error: e};
    }
};