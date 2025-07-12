
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
// const isChecked : Array<boolean> = [true, false, true, false,];

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

interface Zipcode {
  code: number;
  area: string;
}

interface Address {
  city: string;
  country: string;
  zipcode: Zipcode
}
interface IAdminUser {
  name: string;
  age: number;
  isAdmin: boolean;
  address: Address;
}

const adminUser: IAdminUser = {
  name: "Admin",
  age: 40,
  isAdmin: true,
  address: {
    city: "New York",
    country: "USA",
    zipcode: {
      code: 10001,
      area: "Downtown"
    }
  }
}

adminUser.isAdmin = false; //valid
// adminUser.isAdmin = 'false'; //invalid

// adminUser.address = {
//   city: "New York",
//   country: "USA"
// }


// adminUser.address.zipcode.code = "10002"; //invalid
// adminUser.address.zipcode.code = 122001; //valid

interface IUser {
  id: number;
  name: string;
  age: number;
  isAdmin: boolean;
  address : IAddress
}

interface IAddress {
  city: string;
  country: string;
  zipcode: IZipcode
}

interface IZipcode {
  code: number;
  area: string;
}

const userList: IUser[] = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    isAdmin: false,
    address: {
      city: "Los Angeles",
      country: "USA",
      zipcode: {
        code: 90001,
        area: "Downtown"
      }
    }
  },
  {
    id: 2,
    name: "Alice 2",
    age: 28,
    isAdmin: false,
    address: {
      city: "Los Angeles",
      country: "USA",
      zipcode: {
        code: 90001,
        area: "Downtown"
      }
    }
  },
  {
    id: 3,
    name: "Alice 3",
    age: 28,
    isAdmin: false,
    address: {
      city: "Los Angeles",
      country: "USA",
      zipcode: {
        code: 90001,
        area: "Downtown"
      }
    }
  },
  {
    id: 4,
    name: "Alice 4",
    age: 28,
    isAdmin: false,
    address: {
      city: "Los Angeles",
      country: "USA",
      zipcode: {
        code: 90001,
        area: "Downtown"
      }
    }
  }
]

// userList[0].isAdmin = "test" //invalid
userList[0].isAdmin = true; //valid

/*** Function */
function add(num1: number, num2: number): number {
  return num1 + num2;
  // return num1 + "2";
}
add(5, 5); //valid

const addTwoNumber = (num1: number, num2: number): number => {
  return num1 + num2;
}
addTwoNumber(5, 7);

const addThreeNumber = (num1: number, num2: number, num3: number): number => num1 + num2 + num3;
addThreeNumber(5, 7, 5);


/*** --------------------- */
// let test: any;

interface ICreateUser {
  name: string;
  age: number;
  isAdmin: boolean;
  fullName?: string;
}

// const createUser = ({name, age, isAdmin}: ICreateUser): ICreateUser => {
//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//     fullName: "test user",
//   }
// }

// createUser({name: "John", age: 30, isAdmin: true});


const createUser = ({name, age, isAdmin}: ICreateUser): ICreateUser[] => {
  return [
    {
      name: name,
      age: age,
      isAdmin: isAdmin,
      fullName: "test user",
    },
    {
      name: name,
      age: age,
      isAdmin: isAdmin,
      fullName: "test user",
    }
  ]
}

createUser({name: "John", age: 30, isAdmin: true});


const getUserName = (name: string): string => {
  return `Username is: ${name}`;
}

getUserName("John Doe");

const checkIsAdmin = (isAdmin: boolean | number): boolean => {
  // return isAdmin;
  return isAdmin ? true : false;
}

checkIsAdmin(true)
getUserName("John Doe");

/*** --------------------- */




export {}
