import * as fs from 'fs';

export function readInstructionFile (file) {
    let fileData = fs.readFileSync(file, 'utf8')
                     .split(/\r?\n/).filter(item => item);

    //To Do: Add validation

    return fileData;
}