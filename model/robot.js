export default class Robot {
    constructor(positionX, positionY, orientation, instructions) {
        this.coordinate = {positionX: positionX, positionY: positionY};
        this.orientation = orientation;
        this.instructions = instructions;
    }

    executeInstructions(){}
}