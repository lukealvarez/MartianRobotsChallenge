import * as dotenv from 'dotenv';

import { readInstructionFile } from './helpers.js';
import planet from './model/planet.js';
import robot from './model/robot.js';

dotenv.config();

const SPLIT_CHAR = ' ';

try {
    const data = readInstructionFile('./data');

    const planetCoordinates = data[0].split(SPLIT_CHAR);

    const posPlanetX = parseInt(planetCoordinates[0]);
    const posPlanetY = parseInt(planetCoordinates[1]);

    if (posPlanetX <= parseInt(process.env.MAX_PLANET_COORDINATES) &&
        posPlanetY <= parseInt(process.env.MAX_PLANET_COORDINATES)) {

        const mars = new planet(process.env.PLANET_NAME, posPlanetX, posPlanetY);

        for(let index = 1; index < data.length; index = index + 2) {
            
            const initialCoordinates = data[index].split(SPLIT_CHAR);
            const instructions = data[index+1].split('');

            if (instructions.length < process.env.MAX_INSTRUCTIONS) {
                const newRobot = new robot(initialCoordinates[0], initialCoordinates[1], initialCoordinates[2], instructions);
            
                mars.robots.push(newRobot);
            }
        }

        mars.executeRobotsInstructions();
        mars.printReport();

    } else {
        console.log(`The planet max coordinates are higher than ${process.env.MAX_PLANET_COORDINATES}`);
    }
}

catch{
    // Add catch code to handle fileReader errors.
    console.log('error');
}
