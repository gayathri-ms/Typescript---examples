class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning, ${this.employeeName}`);
    }
}

let emp1 = new Employee('Gayathri');
console.log(emp1.employeeName);
emp1.greet();

/**
 * BELOW IS AN EXAMPLE OF INHERITANCE
 * WHICH EXTENDS CLASS Employee
 */
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    kataKatKam() {
        console.log(`Manager Giving Work`);
    }
}

let m1 = new Manager("chandana");
m1.kataKatKam();
m1.greet();
console.log(m1.employeeName);