import { join } from 'path';

export const up = (workdir) => {
    workdir = join(workdir, '..');

    return { workdir };
};