import * as fs from 'fs';

export function readInstructionFile (file) {
    const fileData = fs.readFileSync(file, 'utf8');

    const instructions = fileData.split(/\r?\n/).filter(item => item);

    return instructions;
}

function validateFile() {

}