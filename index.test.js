const { describe, expect, it } = require("@jest/globals");
const {
  getOver18,
  sortEmployeesByName,
  capitalNamesList,
  sortEmployeesByNameDesc,
} = require("./index.js");

// test('', () => {
//     expect(false).toBeTruthy();
// })

describe("As shop owner I want to view a list of all employees, which are older than 18 years, so that I know who is allowed to work on Sundays.", () => {
  it("returns an array", () => {
    const employeesDb = [{ name: "Max", age: 17 }];
    expect(getOver18(employeesDb)).toEqual([]);
  });
  it("returns an array only with employees over 18", () => {
    const employeesDb = [
      { name: "Max", age: 17 },
      { name: "Sepp", age: 18 },
      { name: "Nina", age: 15 },
      { name: "Mike", age: 51 },
    ];

    const expectedResult = [
      { name: "Sepp", age: 18 },
      { name: "Mike", age: 51 },
    ];

    expect(getOver18(employeesDb)).toEqual(expectedResult);
  });
});

describe("As shop owner I want the list of employees to be sorted by their name, so I can find employees easier.", () => {
  it("returns an array", () => {
    const employeesDb = [];
    expect(sortEmployeesByName(employeesDb)).toEqual([]);
  });
  it("returns an array of employees sorted by their names alphabetically", () => {
    const employeesDb = [
      { name: "Max", age: 17 },
      { name: "Sepp", age: 18 },
      { name: "Nina", age: 15 },
      { name: "Mike", age: 51 },
    ];

    const expectedResult = [
      { name: "Max", age: 17 },
      { name: "Mike", age: 51 },
      { name: "Nina", age: 15 },
      { name: "Sepp", age: 18 },
    ];

    expect(sortEmployeesByName(employeesDb)).toEqual(expectedResult);
  });
});

describe("As shop owner I want the list of employees to be capitalized, so I can read it better.", () => {
  it("returns an array", () => {
    const employeesDb = [];
    expect(capitalNamesList(employeesDb)).toEqual([]);
  });
  it("returns the list of employees with their names capitalised", () => {
    const employeesDb = [
      { name: "Max", age: 17 },
      { name: "Sepp", age: 18 },
      { name: "Nina", age: 15 },
      { name: "Mike", age: 51 },
    ];

    const expectedResult = [
      { name: "MAX", age: 17 },
      { name: "SEPP", age: 18 },
      { name: "NINA", age: 15 },
      { name: "MIKE", age: 51 },
    ];

    expect(capitalNamesList(employeesDb)).toEqual(expectedResult);
  });
});

describe("As shop owner I want the employees to be sorted by their names descending instead of ascending.", () => {
  it("returns an array", () => {
    const employees = [];
    expect(sortEmployeesByNameDesc(employees)).toEqual([]);
  });
  it("returns an array where the employees are sorted by descending order of their names", () => {
    const employeesDb = [
      { name: "Max", age: 17 },
      { name: "Sepp", age: 18 },
      { name: "Nina", age: 15 },
      { name: "Mike", age: 51 },
    ];

    const expected = [
      { name: "Sepp", age: 18 },
      { name: "Nina", age: 15 },
      { name: "Mike", age: 51 },
      { name: "Max", age: 17 },
    ];
    expect(sortEmployeesByNameDesc(employeesDb)).toEqual(expected);
  });
});
