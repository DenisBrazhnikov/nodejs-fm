import { isAbsolute, join } from 'path';

export const absolutePath = (workDir, dest) => {
    return isAbsolute(dest) ? dest : join(workDir, dest);
};