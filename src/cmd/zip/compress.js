import {open} from 'fs/promises';
import {createGzip} from 'zlib';
import {absolutePath} from '../../helpers/fs.js';

export const compress = async (workDir, source, destination) => {
    const sourceStream = (await open(absolutePath(workDir, source))).createReadStream();
    const destinationStream = (await open(absolutePath(workDir, destination), 'w+')).createWriteStream();

    sourceStream.pipe(createGzip()).pipe(destinationStream);
};