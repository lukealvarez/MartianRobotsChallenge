import { orientationEnum } from './enums/orientationEnum.js'

export default class Robot {
    constructor(positionX, positionY, orientation, instructions) {
        this.currentPosition = {positionX: parseInt(positionX), positionY: parseInt(positionY)};
        this.orientation = orientation;
        this.instructions = instructions;
        this.lost = false;
    }

    executeInstructions(planet){

        let index = 0;

        while (!this.lost && index < this.instructions.length) {

            switch(this.instructions[index]){
                case 'L':
                    this.turnLeft();
                    break;
                case 'R':
                    this.turnRight();
                    break;
                case 'F':
                    this.turnPosition(planet);
                    break;
            }

            index++;
        }
    }

    turnLeft(){
        let orientationIndex = orientationEnum.indexOf(this.orientation);
        
        // If the current orientation is North, then I assign West to make it circular
        this.orientation = orientationIndex == 0 ? orientationEnum[3] : orientationEnum[orientationIndex - 1];
    }

    turnRight(){
        let orientationIndex = orientationEnum.indexOf(this.orientation);

        // If the current orientation is West, then I assign North to make it circular
        this.orientation = orientationIndex == 3 ? orientationEnum[0] : orientationEnum[orientationIndex + 1];
    }

    getNewPosition(){
        let newPosition;

        switch (this.orientation){
            case 'N':
                newPosition = {positionX: this.currentPosition.positionX , positionY:this.currentPosition.positionY + 1};
                break;
            case 'S':
                newPosition = {positionX: this.currentPosition.positionX , positionY:this.currentPosition.positionY - 1};
                break;
            case 'W':
                newPosition = {positionX: this.currentPosition.positionX - 1 , positionY:this.currentPosition.positionY};
                break;
            case 'E':
                newPosition = {positionX: this.currentPosition.positionX + 1 , positionY:this.currentPosition.positionY};
                break;
        }

        return newPosition;
    }

    turnPosition(planet) {
        const newPosition = this.getNewPosition();

        if (!planet.checkIfIsOff(newPosition)){
            this.currentPosition = newPosition;
        } else {
            //Null or undefined are both falsy so the truth value is false when do not exist scent.
            if (!planet.checkIfExistScent(this.currentPosition)) {
                planet.scents.push(this.currentPosition);
                this.lost = true;
            }
        }
    }
}