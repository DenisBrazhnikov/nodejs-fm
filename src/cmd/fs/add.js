import {open} from 'fs/promises';
import {join} from 'path';

export const add = async (path, destination) => {
    try {
        destination = join(path, destination);
        const stream = (await open(destination, 'w+')).createWriteStream();

        stream.close();
    } catch (e) {
        return {error: e};
    }
};