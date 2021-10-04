class Robot {
  constructor() {
    this.directions = ["east", "west", "north", "south"];
    this.bearing = null;
    this.coordinates = [0, 0];
  }
  place(config) {
    var { x, y, direction } = config;
    this.orient(direction);
    this.at(x, y);
  }
  evaluate(instructions) {
    let actions = Robot.instructions(instructions);
    actions.forEach(action => this.doAction(action));
  }
  doAction(action) {
    switch (action) {
      case "turnLeft":
        this.turnLeft();
        break;
      case "turnRight":
        this.turnRight();
        break;
      case "advance":
        this.advance();
        break;
      default:
        null;
    }
  }
  at(x, y) {
    this.coordinates = [x, y];
  }
  orient(currentDirection) {
    if (!this.directions.includes(currentDirection)) {
      throw new InvalidInputError();
    } else {
      this.bearing = currentDirection;
    }
  }
  turnRight() {
    switch (this.bearing) {
      case "north":
        this.orient("east");
        break;
      case "east":
        this.orient("south");
        break;
      case "south":
        this.orient("west");
        break;
      case "west":
        this.orient("north");
        break;
      default:
        null;
    }
  }
  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.orient("west");
        break;
      case "west":
        this.orient("south");
        break;
      case "south":
        this.orient("east");
        break;
      case "east":
        this.orient("north");
        break;
      default:
        null;
    }
  }
  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1]++;
        break;
      case "east":
        this.coordinates[0]++;
        break;
      case "south":
        this.coordinates[1]--;
        break;
      case "west":
        this.coordinates[0]--;
        break;
      default:
        null;
    }
  }
  static instructions(instructions) {
    let translations = {
      L: "turnLeft",
      R: "turnRight",
      A: "advance"
    };
    return instructions.split("").map(instruction => translations[instruction]);
  }
}

class InvalidInputError extends Error {}

export { Robot, InvalidInputError };
