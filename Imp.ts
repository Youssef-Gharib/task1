abstract class Employee {
  public name: string;
  public age: number;
  public id: number; 
  public jobTitle: string;

  constructor(name: string, age: number, id: number, jobTitle: string) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.jobTitle = jobTitle;
  }

  public abstract calculateSalary(): number;
}

class MonthlyEmployee extends Employee {
  public salary: number;

  constructor(name: string, age: number, id: number, jobTitle: string, salary: number) {
    super(name, age, id, jobTitle);
    this.salary = salary;
    console.log("the employee's salary");
  }

  public calculateSalary(): number {
    return this.salary;
  }
}

class HourlyEmployee extends Employee {
  public totalHours: number;
  public hourprice: number;

  constructor(name: string, age: number, id:number, jobTitle:string,  totalHours: number, hourprice: number) {
    super(name, age, id, jobTitle);
    this.totalHours = totalHours;
    this.hourprice = hourprice;
  }

  public calculateSalary(): number {
    return this.totalHours * this.hourprice;
  }
}

// Example usage:
const monthlyEmployee = new MonthlyEmployee("Youssef Gharib",24 , 4, "IT", 5000);
console.log(monthlyEmployee.calculateSalary()); // Output: 5000

const hourlyEmployee = new HourlyEmployee("Youssef Gharib",24 , 4, "IT", 45, 200);
console.log(hourlyEmployee.calculateSalary()); // Output: 3200