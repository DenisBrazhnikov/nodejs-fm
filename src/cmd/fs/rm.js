import {rm as remove} from 'fs/promises';
import {absolutePath} from '../../helpers/fs.js';

export const rm = async (workDir, source) => {
    try {
        await remove(absolutePath(workDir, source));
    } catch (e) {
        return {error: e};
    }
};