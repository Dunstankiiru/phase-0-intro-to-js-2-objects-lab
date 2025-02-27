// Write your solution in this file!
const employee = {
    "name": "Alex",
    "streetAddress": "Cardiff",
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee ={ ...employee,[key] : value}
    return newEmployee;
}
//name 
const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
console.log(updatedEmployee1);
//streetAddress
const updatedEmployee2 = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
console.log(updatedEmployee2);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const updatedEmployee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log(updatedEmployee3); 

function deleteFromEmployeeByKey(employee, key){
    const { [key]: name, ...updatedEmployee } = employee;
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee [key];
    return employee;
}