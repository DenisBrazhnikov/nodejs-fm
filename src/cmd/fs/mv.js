import {rename} from 'fs/promises';
import {absolutePath} from '../../helpers/fs.js';

export const mv = async (workDir, source, destination) => {
    try {
        await rename(absolutePath(workDir, source), absolutePath(workDir, destination));
    } catch (e) {
        return {error: e};
    }
};