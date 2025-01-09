/*
  Your task will be to create two classes – Employee and Manager.

  The Employee class should include:

  a name property, which will be available to everyone.

  a department property, which will be available only within the Employee class.

  a salary property, which will be available only within the Employee class and its subclasses.

  The Manager class should be a subclass of the Employee class.

  You need to implement a constructor in the Manager class that will call the superclass constructor and increment salary by 10000.

*/

class Employee {
  // Fill in the access modifiers

  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Implement the constructor and increase salary by 10000
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary);
    this.salary += 10000;
  }
}

export {};
