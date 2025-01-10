const { bestLaCroixFlavor, value } = require("./expects-methods_01");

describe("the best flavor is grapefruit", () => {
  test("should return grapefruit", () => {
    expect(bestLaCroixFlavor("grapefruit")).toBe("grapefruit");
    expect(bestLaCroixFlavor("grapefruit")).not.toBe("coconut");
  });

  test("should return a car model", async () => {
    await expect(new Promise((resolve) => resolve("BMW"))).resolves.toBe("BMW");

    await expect(new Promise((resolve) => resolve("BMW"))).resolves.not.toBe(
      "Audi"
    );
  });

  test("should return reject with octopus", async () => {
    await expect(
      new Promise((resolve, reject) => reject(new Error("Error")))
    ).rejects.toThrow(Error);
  });
});

describe("Testing value function", () => {
  let mockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
  });

  test("should return array with value", () => {
    value(mockFunction, 10);

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith([10]);
  });

  test("should return array with value", () => {
    value(mockFunction, 20);

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith([20]);
  });

  test("should return number of mock function", () => {
    const testFunction = jest.fn();

    value(testFunction, 10, 20);

    expect(testFunction).toHaveBeenCalled();
    expect(testFunction).toHaveBeenCalledTimes(1);
    expect(testFunction).toHaveBeenCalledWith([10, 20]);
    expect(testFunction).toHaveBeenLastCalledWith([10, 20]);
  });
});
