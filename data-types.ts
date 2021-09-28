//! ADD THIS SO THAT IT BECOME A MODULE NOT A SCRIPT
export {};

let sum;
const title = "Hello There";

let isBegineer: boolean = false;
let theNumber: number = 24;
let thatString: string = "thequickbrownfoxjumpsoverthelazydog";

let sentence: string = `the sentence is ${thatString}
and the special number is ${theNumber}`;

let u: null = null;
let v: undefined = undefined;

/**
 * BOTH THE BELOW LINES DOES THE SAME THING
 */
let numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
let numbers2: Array<number> = [1,2,3,4,5,6,7,8,9,10];


/**
 * BOTHE THE BELOW LINES DOES THE SAME THING
 */
let sentence1: string[] = ["Joe","Andy","Smith","Mark"];
let sentence2: Array<string> = ["Joe","Andy","Smith","Mark"];

/**
 * Red - 0
 * Green - 1
 * Blue - 2
 */
enum Colors {Red, Green, Blue};
let c: Colors = Colors.Green;
console.log(c); // 1

/**
 * any type in Typescript
 * can be assigned to anything
 */
let randomValue: any = '10';
randomValue = 10;
randomValue = true;

/**
 * Typescript >3.0 has new type called 'unknown'
 * You can't access any properties of an unknown type
 * Nor can you call and construct them
 */
let myVariable: unknown = 10;
myVariable = true;
// myVariable.toUpperCase();
(myVariable as string).toUpperCase();

console.log(sentence);