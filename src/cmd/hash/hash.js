import {readFile} from 'fs/promises';
import {createHash} from 'crypto';

import {absolutePath} from '../../helpers/fs.js';

const hash = async (workDir, source) => {
    try {
        const hashSum = createHash('sha256');

        hashSum.update(await readFile(absolutePath(workDir, source)));

        return {data: hashSum.digest('hex')};
    } catch (e) {
        return {error: e};
    }
};

export default {hash};