const INITIAL_PLANET_VALUE = 0;

export default class Planet {
    constructor(name, maxX, maxY){
        this.name = name;
        // validate when start coordinates are 0 0
        this.coordinate = {positionX: maxX, positionY: maxY};
        this.scents = [];
        this.robots = [];
    }

    checkIfIsOff(coordinate){
        return  coordinate.positionX > this.coordinate.positionX ||
                coordinate.positionX < INITIAL_PLANET_VALUE ||
                coordinate.positionY > this.coordinate.positionY ||
                coordinate.positionY < INITIAL_PLANET_VALUE;
    }

    checkIfExistScent(coordinate){
        let result = null;

        if (this.scents.length > 0) {
            result = this.scents.find(scent => scent.positionX == coordinate.positionX &&
                                          scent.positionY == coordinate.positionY);
        }

        return result;
    }

    addScent(coordinate){
        this.scents.push(coordinate);
    }

    executeRobotsInstructions() {
        this.robots.forEach( robot => {
            robot.executeInstructions(this);
        });
    }

    printReport() {
        this.robots.forEach(robot => {
                                let result = `${robot.currentPosition.positionX} ${robot.currentPosition.positionY} ${robot.orientation}`;
                                result += robot.lost ? ' LOST' : '';
                                console.log(result)
                            });
    }
}
