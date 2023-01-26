interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: 'red'
};

/*
const user: User = {
  name: "Hayes",
  id: 0,
};
*/

type MyBool2 = true | false;
const one: MyBool2 = true;
console.log(one);

type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

interface Point {
  x: number;
  y: number;
}

// tslint:disable-next-line:typedef
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = {x: 12, y: 26};
logPoint(point);

function flipCoin(): boolean {
  // Meant to be Math.random()
  return Math.random() < 0.5;
}

function greet(name: string): void {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

type MyBool = true | false;


function getTime(): number {
  return new Date().getTime();
}

let data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let testData = data
  .filter(i => i > 2)
  .map(i => i * 2)
  .reduce((a, b) => a + b);
console.log(testData);
