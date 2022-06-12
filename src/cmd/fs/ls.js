import {readdir, stat} from 'fs/promises';
import {join} from 'path';

export const ls = async (path) => {
    try {
        const items = await readdir(path);

        let data = await Promise.all(items.map(async (item) => {
            const isFile = (await stat(join(path, item))).isFile();

            return {
                type: isFile ? 'File' : 'Directory',
                name: item,
            };
        }));

        return {data, type: 'table'};
    } catch (e) {
        return {error: e};
    }
};