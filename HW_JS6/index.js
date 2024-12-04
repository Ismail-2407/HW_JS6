//1.Klass marker
class Marker {
  constructor(color, inkPercentage) {
    this.color = color;
    this.inkPercentage = inkPercentage;
  }

  print(text) {
    let printedText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.inkPercentage <= 0) {
        console.log("Cernila zakocilisy!");
        break;
      }
      if (text[i] !== " ") {
        this.inkPercentage -= 0.5;
      }
      printedText += text[i];
    }
    console.log(`%c${printedText}`, `color: ${this.color}`);
    console.log(`Ostalosy cernil: ${this.inkPercentage}%`);
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkPercentage) {
    super(color, inkPercentage);
  }

  refill() {
    this.inkPercentage = 100;
    console.log("Marker zapralven do 100%");
  }
}

let simpleMarker = new Marker("blue", 10);
simpleMarker.print("Hello, world!");

let refillableMarker = new RefillableMarker("red", 5);
refillableMarker.print("Etot matker mojno zapravity.");
refillableMarker.refill();
refillableMarker.print("posle zapravki mojno snova pisaty.");

//2.Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date
class ExtendedDate extends Date {
  getDateText() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = this.getDate();
    let month = this.getMonth();
    return `${day} ${months[month]}`;
  }

  isFutureDate() {
    let currentDate = new Date();
    return this >= currentDate;
  }

  isLeapYear() {
    let year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  getNextDate() {
    let nextDate = new Date(this);
    nextDate.setDate(this.getDate() + 1);
    return nextDate;
  }
}

let myDate = new ExtendedDate(2006, 6, 24);
console.log(myDate.getDateText());
console.log(myDate.isFutureDate());
console.log(myDate.isLeapYear());
console.log(myDate.getNextDate());

//3.Реализовать класс Employee, описывающий работника b и четвертое задание то же с помощью этого кода
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

const employees = [
  new Employee("John Doe", "Manager", 5000),
  new Employee("Jane Smith", "Clerk", 3000),
  new Employee("Sam Brown", "Security", 2000),
];

const tableBody = document.querySelector("#employeeTable tbody");

employees.forEach((employee) => {
  let row = document.createElement("tr");
  row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.salary}</td>
    `;
  tableBody.appendChild(row);
});
