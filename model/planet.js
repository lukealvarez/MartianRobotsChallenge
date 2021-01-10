export default class Planet {
    constructor(name, maxX, maxY){
        this.name = name;
        this.coordinate = {positionX: maxX, positionY: maxY};
        this.scents = [];
        this.robots = [];
    }

    checkIfIsOff(coordinate){}

    checkIfExistScent(coordinate){}

    executeRobotsInstruction() {}
}