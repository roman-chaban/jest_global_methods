describe("Testing with beforeEach", () => {
  let counter;

  beforeEach(() => {
    counter = 1;
  });

  test("counter should return 1", () => {
    expect(counter).toBe(1);

    counter++;

    expect(counter).toBe(2);
  });

  test("counter should return boolean value", () => {
    expect(counter).toBeTruthy();
    expect(counter).not.toBeFalsy();
  });
});

describe("Testing with beforeAll", () => {
  let db;

  beforeAll(() => {
    db = { users: [] };
  });

  test("Add new user to data base", () => {
    db.users.push("Roman");

    expect(db.users[0]).toEqual("Roman");

    expect(db.users).toHaveLength(1);
  });

  test("Check new users in data base", () => {
    expect(db.users[1]).not.toBe("Ivan");
  });

  test("Find user by name 'Roman'", () => {
    expect(db.users).toContain("Roman");
  });

  afterAll(() => {
    db = { users: [] };
  });
});

describe("Testing with afterEach", () => {
  let luckyNumbers;

  beforeAll(() => {
    luckyNumbers = [3, 4, 5, 7, 10, 12];
  });

  afterEach(() => {
    luckyNumbers = [];
  });

  test("test should return lucky numbers", () => {
    expect(luckyNumbers).toEqual([3, 4, 5, 7, 10, 12]);
  });

  test("should return empty luckyNumbers", () => {
    expect(luckyNumbers).toEqual([]);
  });
});

describe("Testing with afterAll", () => {
  let dataBase;

  beforeAll(() => {
    dataBase = { users: [] };
  });

  afterAll(() => {
    dataBase = null;
  });

  test("should return users", () => {
    dataBase.users.push({ id: 1, name: "Roman", isAdult: true });

    expect(dataBase.users[0]).toEqual({ id: 1, name: "Roman", isAdult: true });

    expect(dataBase.users[0].id).toEqual(1);
  });

  test("should return contain user name", () => {
    expect(dataBase.users[0].name).toContain("Roman");
  });

  test("should return empty users in data base", () => {
    expect(dataBase.users).toHaveLength(1);
  });
});
