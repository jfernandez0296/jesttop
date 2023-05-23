function createRobot(x, y) {
    let positionX = x;
    let positionY = y;
    let orientation = "N";
  
    function advance() {
      switch (orientation) {
        case "N":
          if (positionY < 10) {
            positionY++;
          } else {
            throw new Error("Out of bounds");
          }
          break;
        case "E":
          if (positionX < 10) {
            positionX++;
          } else {
            throw new Error("Out of bounds");
          }
          break;
        case "S":
          if (positionY > 0) {
            positionY--;
          } else {
            throw new Error("Out of bounds");
          }
          break;
        case "W":
          if (positionX > 0) {
            positionX--;
          } else {
            throw new Error("Out of bounds");
          }
          break;
      }
    }
  
    function turnRight() {
      switch (orientation) {
        case "N":
          orientation = "E";
          break;
        case "E":
          orientation = "S";
          break;
        case "S":
          orientation = "W";
          break;
        case "W":
          orientation = "N";
          break;
      }
    }
  
    function turnLeft() {
      switch (orientation) {
        case "N":
          orientation = "W";
          break;
        case "E":
          orientation = "N";
          break;
        case "S":
          orientation = "E";
          break;
        case "W":
          orientation = "S";
          break;
      }
    }
  
    function instructions(instructionString) {
      for (let i = 0; i < instructionString.length; i++) {
        const instruction = instructionString[i];
        switch (instruction) {
          case "A":
            advance();
            break;
          case "R":
            turnRight();
            break;
          case "L":
            turnLeft();
            break;
          default:
            throw new Error("Invalid instruction");
        }
      }
    }
  
    function getPosition() {
      return { x: positionX, y: positionY };
    }
  
    return {
      advance,
      turnRight,
      turnLeft,
      instructions,
      getPosition,
    };
  }
  
  module.exports = createRobot;
  