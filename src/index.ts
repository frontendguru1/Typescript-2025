
// string
let userName: string;
userName = "John Doe";
let name: string = "Alex";

// number
let age: number = 30;

// boolean
let isAdmin: boolean = false;

// bigint
let bigNumber: bigint = 1234567890123456789012345678901234567890n;

// symbol
let uniqueSymbol: symbol = Symbol("unique");

// null
let nullableValue: null = null;

// undefined
let undefinedValue: undefined = undefined;

// any
let randomValue = "Could be anything";

// Object types
// Array
const users: string[] = ["admin", "guest", "normal", "user", "superuser"];
const specialUser: Array<string> = ["admin", "guest", "normal"];
const studentMarks: number[] = [85, 90, 78, 92];
const specialMarks: Array<number> = [88, 76, 95];
const isChecked : boolean[] = [true, false, true, false,];

// Objects
const myUser: {name: string, age: number, isAdmin: boolean} = {
  name: "John Doe",
  age: 30,
  isAdmin: true
}


// Union
let id: string | number;
id = 32 //valid
id = "12345"; //valid

const ids: (string | number)[] = [234234, 345345 , 456456, "12345", "67890"]; 

// Interface

const adminUser: {name: string, age: number, isAdmin: boolean} = {
  name: "Admin",
  age: 40,
  isAdmin: true
}
adminUser.isAdmin = false;




export {}
