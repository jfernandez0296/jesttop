const createRobot = require("./robot");

describe("Robot", () => {
  let robot;

  beforeEach(() => {
    robot = createRobot(7, 3);
  });

  test("should initialize with correct position and orientation", () => {
    expect(robot.getPosition()).toEqual({ x: 7, y: 3 });
  });

  test("should advance correctly when facing North", () => {
    robot.advance();
    expect(robot.getPosition()).toEqual({ x: 7, y: 4 });
  });

  test("should advance correctly when facing East", () => {
    robot.turnRight();
    robot.advance();
    expect(robot.getPosition()).toEqual({ x: 8, y: 3 });
  });

  test("should advance correctly when facing South", () => {
    robot.turnRight();
    robot.turnRight();
    robot.advance();
    expect(robot.getPosition()).toEqual({ x: 7, y: 2 });
  });

  test("should advance correctly when facing West", () => {
    robot.turnLeft();
    robot.advance();
    expect(robot.getPosition()).toEqual({ x: 6, y: 3 });
  });

  test("should turn right correctly", () => {
    robot.turnRight();
    expect(robot.getPosition()).toEqual({ x: 7, y: 3, orientation: "E" });
  });

  test("should turn left correctly", () => {
    robot.turnLeft();
    expect(robot.getPosition()).toEqual({ x: 7, y: 3, orientation: "W" });
  });

  test("should execute instructions correctly", () => {
    robot.instructions("RAALAL");
    expect(robot.getPosition()).toEqual({ x: 9, y: 4, orientation: "W" });
  });

  test("should throw error when advancing out of bounds", () => {
    robot.turnRight();
    robot.turnRight();
    expect(() => {
      robot.advance();
    }).toThrow("Out of bounds");
  });

  test("should throw error when receiving invalid instruction", () => {
    expect(() => {
      robot.instructions("RAALALX");
    }).toThrow("Invalid instruction");
  });
});
