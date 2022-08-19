const employee = {
    name: "Sam",
    streetAddress: "Amboseli",

  };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    for (const key in employee) {
        delete employee[key];
      }
      employee.name = 'Sam';
    const newEmployeeObj = {...employee, streetAddress: value }
    return newEmployeeObj;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    
}
function deleteFromEmployeeByKey(employee, key, value) {
    let newEmployee = {employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
    
}