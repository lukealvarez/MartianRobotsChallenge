import * as dotenv from 'dotenv';

import { readInstructionFile } from './helpers.js';
import planet from './model/planet.js';
import robot from './model/robot.js';

dotenv.config();

const SPLIT_CHAR = ' ';

try {
    const data = readInstructionFile('./data');

    const planetCoordinates = data[0].split(SPLIT_CHAR);

    if (planetCoordinates[0] <= process.env.MAX_PLANET_COORDINATES &&
        planetCoordinates[1] <= process.env.MAX_PLANET_COORDINATES) {

        const mars = new planet(process.env.PLANET_NAME, planetCoordinates[0], planetCoordinates[1]);

        for(let index = 1; index < data.length; index = index + 2) {
            
            const initialCoordinates = data[index].split(SPLIT_CHAR);
        
            if (data[index+1].length < process.env.MAX_INSTRUCTIONS) {
                const newRobot = new robot(initialCoordinates[0], initialCoordinates[1], initialCoordinates[2], data[index+1]);
            
                mars.robots.push(newRobot);
            }
        }
        
        mars.executeRobotsInstructions();

    } else {
        console.log(`The planet max coordinates are higher than ${process.env.MAX_PLANET_COORDINATES}`);
    }
}

catch{
    // Add catch code to handle fileReader errors.
}


