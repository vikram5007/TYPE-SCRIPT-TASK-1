"use strict";
class Employee {
    constructor(empid, empname, empdesignation, empsalary, empproject) {
        this.empid = empid;
        this.empname = empname;
        this.designation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    disp() {
        console.log(this.empid + " " + this.empname + " " + this.designation + " " + this.empsalary + " " + this.empproject);
    }
    backtick() {
        console.log(`NAME OF THE EMPLOYEE :${this.empname} , EMPLOYEE ID IS: ${this.empid} , EMPLOYEE DESIGNATION IS: ${this.designation} , EMPLOYEE SALARY IS : ${this.empsalary} , EMPLOYEE PROJECT IS : ${this.empproject}`);
    }
}
const emp = new Employee(18, "vikram", "TRAINEE", 20000, "react");
emp.disp();
emp.backtick();
