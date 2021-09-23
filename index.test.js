const { expect } = require('@jest/globals');
const {getOver18, sortEmployeesByName} = require('./index.js');

// test('', () => {
//     expect(false).toBeTruthy();
// })

describe('As shop owner I want to view a list of all employees, which are older than 18 years, so that I know who is allowed to work on Sundays.', () => {
    it('returns an array', () => {
        const employeesDb = [{ name: 'Max', age: 17 }];
        expect(getOver18(employeesDb)).toEqual([])
    });
    it('returns an array only with employees over 18', () => {
        const employeesDb = [{ name: 'Max', age: 17 },
        { name: 'Sepp', age: 18 },
        { name: 'Nina', age: 15 },
        { name: 'Mike', age: 51 }];

        const expectedResult = [{ name: 'Sepp', age: 18 },
        { name: 'Mike', age: 51 }]

        expect(getOver18(employeesDb)).toEqual(expectedResult)
    });
}
)

describe('As shop owner I want the list of employees to be sorted by their name, so I can find employees easier.', () => {
    it('returns an array', () => {
        const employeesDb = []
        expect(sortEmployeesByName(employeesDb)).toEqual([])
    })
    it('returns an array of employees sorted by their names alphabetically', () => {
        const employeesDb = [{ name: 'Max', age: 17 },
        { name: 'Sepp', age: 18 },
        { name: 'Nina', age: 15 },
        { name: 'Mike', age: 51 }];

        const expectedResult = [{ name: 'Max', age: 17 },
        { name: 'Mike', age: 51 },
        { name: 'Nina', age: 15 },
        { name: 'Sepp', age: 18 }
        ];
        
        expect(sortEmployeesByName(employeesDb)).toEqual(expectedResult)
    })
})