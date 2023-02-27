class Employee {
  empid?: number | string;
  empname: string;
  designation: string;
  empsalary: number;
  empproject: string;



  public constructor(empid: string | number, empname: string, empdesignation: string, empsalary: number, empproject: string) {
    this.empid = empid;
    this.empname = empname;
    this.designation = empdesignation;
    this.empsalary = empsalary;
    this.empproject = empproject;

  }

  public disp() {
    console.log(this.empid + " " + this.empname + " " + this.designation + " " + this.empsalary + " " + this.empproject);

  }


  public backtick(){
    console.log(`NAME OF THE EMPLOYEE :${this.empname} , EMPLOYEE ID IS: ${this.empid} , EMPLOYEE DESIGNATION IS: ${this.designation} , EMPLOYEE SALARY IS : ${this.empsalary} , EMPLOYEE PROJECT IS : ${this.empproject}`);
  }
  
}


const emp = new Employee(18, "vikram", "TRAINEE", 20000, "react");
emp.disp();
emp.backtick();

