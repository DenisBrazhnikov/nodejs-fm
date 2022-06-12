import os from './os/index.js';
import hash from './hash/hash.js';
import fs from './fs/index.js';
import zip from './zip/index.js';

export default {
    ...os,
    ...hash,
    ...fs,
    ...zip,
};