function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

function Employee(firstName, lastName, eId, designation) {
    Person.call(this, firstName, lastName);
    this.id = eId;
    this.designation = designation;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getEmployeeInfo = function () {
    let fullName = this.getFullName();
    return `Employee Details are as follows:-
            EmployeeId: ${this.id}
            Name: ${fullName}
            Designation: ${this.designation}`;
}

function Engineer(firstName, lastName, eId, designation, department) {
    Employee.call(this, firstName, lastName, eId, designation);
    this.department = department;
}
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

Engineer.prototype.getDepartment = function () {
    return this.department;
}

let newJoinee = new Engineer('Sanjay', 'Singh', 5, 'Software Engineer', 'Software');

console.log(newJoinee.getFullName());
console.log(newJoinee.getEmployeeInfo());
console.log(newJoinee.getDepartment());
