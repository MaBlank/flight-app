let a = 10;

let harry = {name: 'Harry Smith', age: 42}
delete harry.age
harry.money = 10
console.log(harry)
const numbers = [1, 2, 3, 'many']
string = {"name": "Harry Smith", "age": 42, "lucky numbers": [17, 29], "lucky": false}

/*
if (yourSales > target) {
  performance = 'Good'
  bonus = 100
} else {
  performance = 'Mediocre'
  bonus = 0
}
*/

const average = (x, y) => (x + y) / 2
let result = Math.max(3, 1, 4, 1, 5, 9, 2, 6)

harry = {
  name: 'Harry Smith', salary: 90000, raiseSalary: function (percent) {
    this.salary *= 1 + percent / 100
  }
}

class Person {
  constructor(last, first) {
    this.last = last;
    this.first = first
  }

  get fullName() {
    return `${this.last}, ${this.first}`
  }
}

let list = [1, 2, 3, 4, 5]
console.log(list.map(i => i * 2))

let index = 'Hello yellow'.indexOf('el')

const arrayLike = {length: 3, '0': 'Peter', '1': 'Paul', '2': 'Mary'}

arr = [0, 1, 16, 25, 4, 9]
arr.sort((x, y) => x - y)

arr = [0, 1, 16, 25, 4, 9]
//arr = arr.filter(i => i > 20);
arr = arr.every(i => i > 2)
console.log(arr);
[1, 7, 2, 9].reduce((accum, current) => accum - current, 0)
const weekdays = new Map([["Mon", 0], ["Tue", 1], ["Wed", 2], ["Thu", 3], ["Fri", 4], ["Sat", 5], ["Sun", 6],])


const newYearsEve = new Date(1999, 11, 31, 23, 59)
newYearsEve.toLocaleString('de')

