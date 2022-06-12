import {open} from 'fs/promises';
import {createGunzip} from 'zlib';
import {absolutePath} from '../../helpers/fs.js';

export const decompress = async (workDir, source, destination) => {
    const sourceStream = (await open(absolutePath(workDir, source))).createReadStream();
    const destinationStream = (await open(absolutePath(workDir, destination), 'w+')).createWriteStream();

    sourceStream.pipe(createGunzip()).pipe(destinationStream);
};