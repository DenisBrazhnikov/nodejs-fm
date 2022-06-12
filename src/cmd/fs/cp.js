import {cp as copy} from 'fs/promises';
import {absolutePath} from '../../helpers/fs.js';

export const cp = async (workDir, source, destination) => {
    try {
        await copy(absolutePath(workDir, source), absolutePath(workDir, destination),
            {
                errorOnExist: true,
                recursive: true,
                force: false
            }
        );
    } catch (e) {
        return {error: e};
    }
};