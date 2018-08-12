class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, eId, designation) {
        super(firstName, lastName);
        this.id = eId;
        this.designation = designation;
    }

    getEmployeeInfo() {
        let fullName = this.getFullName();

        return `Employee Details are as follows:-
                EmployeeId: ${this.id}
                Name: ${fullName}
                Designation: ${this.designation}`;
    }
}

class Engineer extends Employee {
    constructor(firstName, lastName, eId, designation, department) {
        super(firstName, lastName, eId, designation);
        this.department = department;
    }

    getDepartment() {
        return this.department;
    }
}

let newJoinee = new Engineer('Sanjay', 'Singh', 5, 'Software Engineer', 'Software');

console.log(newJoinee.getFullName());
console.log(newJoinee.getEmployeeInfo());
console.log(newJoinee.getDepartment());
