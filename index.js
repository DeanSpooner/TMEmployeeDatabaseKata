const { emptyTypeAnnotation } = require("@babel/types");

const getOver18 = (employees) => {
    const over18 = [];
    for (let i =0; i < employees.length; i++){
        if (employees[i].age >= 18){
            over18.push(employees[i])
        }
    }
    return over18;
}

const sortEmployeesByName = (employees) => {
    employees.sort((a,b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0
    })
    return employees;
}


module.exports = {getOver18, sortEmployeesByName}