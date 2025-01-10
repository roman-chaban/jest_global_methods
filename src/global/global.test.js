const { myBeverage } = require("./global");

describe("Example use beforeEach and afterEach", () => {
  let counter = 0;

  beforeEach(() => {
    counter = 10;
  });

  afterEach(() => {
    counter = 0;
  });

  it("add 5 to counter", () => {
    counter += 5;

    expect(counter).toBe(15);
  });

  it("divide 10 from counter", () => {
    counter -= 10;

    expect(counter).toBe(0);
  });
});

describe("Example use beforeAll and afterAll", () => {
  let dataBaseConnection;

  beforeAll(() => {
    dataBaseConnection = { isConnected: true };
  });

  afterAll(() => {
    dataBaseConnection = { isConnected: false };
  });

  it("check that connection to data base is true", () => {
    expect(dataBaseConnection.isConnected).toBeTruthy();

    expect(dataBaseConnection.isConnected).toBe(true);
  });

  it("check that data base is empty", () => {
    expect(dataBaseConnection).toHaveProperty("isConnected", true);
  });
});

describe("myBeverage test", () => {
  let ms;

  beforeEach(() => (ms = 5000));

  test(
    "isDelicious",
    () => {
      expect(myBeverage.delicious).toBeTruthy();
      expect(myBeverage.delicious).not.toBeFalsy();
    },
    ms
  );

  test(
    "isSour",
    () => {
      expect(myBeverage.sour).toBeFalsy();
      expect(myBeverage.sour).not.toBeTruthy();
    },
    ms
  );
});

describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])(".add(i%, i%)", (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});

describe("", () => {
  let numbers = {
    firstNumber: 10,
    secondNumber: 20,
  };

  beforeEach(() => {
    numbers.firstNumber = 10;
    numbers.secondNumber = 20;
  });

  it.concurrent("test concurrent", async () => {
    expect(numbers.firstNumber + numbers.secondNumber).toBe(30);
  });

  afterAll(() => {
    numbers.firstNumber = 0;
    numbers.secondNumber = 0;
  });
});



