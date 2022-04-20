class Employee {

  constructor(name, title) {
    this.name = name;
    this.title = title;

  }

  #calculateTax(totalSalary) {

    return totalSalary * 0.2;

  }

  calculateSalary(totalSalary) {

    const totalTax = this.#calculateTax(totalSalary);
    const netSalary = totalSalary - totalTax;

    return netSalary;
  }
}

class FullTimeEmployee extends Employee {

  #base;
  #da;

  constructor(name, title, base, da) {
    super(name, title);
    this.#base = base;
    this.#da = da;
  }

  calculateSalary(totalSalary = 0) {

    console.log("FT Employee")
    const netSalary = super.calculateSalary(this.#base + this.#da);
    return netSalary;

  }
}

class Contractor extends Employee {

  #rate;
  #hours;

  constructor(name, title, rate, hours) {
    super(name, title);
    this.#hours = hours;
    this.#rate = rate;
  }

  calculateSalary(totalSalary = 0) {

    console.log("Contractor..")
    const netSalary = super.calculateSalary(this.#rate * this.#hours);
    return netSalary;

  }


}

const ft = new FullTimeEmployee('John', 'Admin', 2000, 200);



// console.log(ft.calculateSalary());

const contractor = new Contractor("Jane", "HR", 80, 100);
console.log(contractor.calculateSalary());
