// Getting Started
// The main goals of TypeScript are:
// Introduce optional types to JavaScript.
// Implement planned features of future JavaScript, a.k.a. ECMAScript Next or ES Next to the current JavaScript.

interface Product{
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product{
  return {
    id: 10,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  };
}

// Basic Types
let i: number;
i = 10;
console.log(i);

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

let person: {
  name: string;
  age: number
};

person = {
  name: 'John',
  age: 25
}; // valid

let firstName = 'John';

let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
};
let skills: string[] = [];
skills[0] = 'Problem Solving';
skills[1] = 'Programming';
skills.push('Software Design');

let scores: (string | number)[] = [];
scores = ['Programming', 5, 'Software Design', 4];

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

// any type macht, dass keine Typprüfung Anwendung findet, lieber mit Interface arbeiten

let count: number;
count = 10;

if (count > 10) {
  console.log('haha');
}

const max = 100;
let counter = 100;

counter < max ? counter++ : counter = 1;

let targetId = 'btnDelete';

switch (targetId) {
  case 'btnUpdate':
    console.log('Update');
    break;
  case 'btnDelete':
    console.log('Delete');
    break;
  case 'btnNew':
    console.log('New');
    break;
}


// change the month and year
let month = 2;
let year = 2020;

let day = 0;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    day = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    day = 30;
    break;
  case 2:
    // leap year
    if (((year % 4 === 0) &&
        !(year % 100 === 0))
      || (year % 400 === 0)) {
      day = 29;
    }
    else {
      day = 28;
    }
    break;
  default:
    throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);

let j: number;
j = 10;

for (i = 1; i++; i < j) {
  console.log(10);
}

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 19));

function multiply(a: number, b: number, c?: number): number {

  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}

function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}

function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}

class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}



// Shorter
class Person2 {
  constructor(private _name: string) {}

  greet() {
    console.log(`Hello, my name is ${this._name}.`);
  }
}

abstract class Employee {
  constructor(private firstName: string, private lastName: string) {
  }
  abstract getSalary(): number
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}

interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}

let varName = typeA | typeB;

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}
// type Employee = Identity & Contact;
// let e: Employee = {id: 100, name: 'John Doe', email: 'john.doe@example.com', phone: '(408)-897-5684'};

// function isCustomer(partner: any): partner is Customer {
//   return partner instanceof Customer;
// }

function getNetPrice(price: number, discount: number, format: boolean): number | string {
  const netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/

