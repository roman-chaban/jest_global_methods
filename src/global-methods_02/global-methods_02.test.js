const { usersInformation, beverageList } = require("./global-methods_02");

describe("Testing user information values", () => {
  test("should return user name", () => {
    expect(usersInformation.userName).toBe("Roman");
    expect(usersInformation.userName).toBeTruthy();
    expect(usersInformation.userName).not.toBeFalsy();
    expect(usersInformation.userProfession).not.toBeTruthy();
  });

  test("should return user age", () => {});

  test("should return user condition isUserAdult", () => {});
});

describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])(".add(%i, %i)", (a, b, expected) => {
  test(`should return ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });
});

describe.skip.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`("$a + $b", ({ a, b, expected }) => {
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

describe("Testing beverageList", () => {
  test("should return Lemon value", async () => {
    await beverageList().then((value) => {
      expect(value[0].value).toContain("Lemon");
    });
  });
});

describe("Testing test.concurrent method", () => {
  test.concurrent("should return sum of two values", async () => {
    expect(5 + 3).toBe(8);
  });

  test.concurrent.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])(".add(%i, %i)", (a, b, expected) => {
    expect(a + b).toBe(expected);
  });
});
