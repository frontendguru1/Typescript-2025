
// Factory function
function createUser(name: string, age: number): {name: string, age: number} {
  return { name, age };
}

createUser("John", 30); // returns { name: "John", age: 30 }

// Constructor function
// function User(name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }
// const user = new User("Jane", 25);

// Class example
class User {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  getUserInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const user1 = new User("Jane");
const user02 = new User("Alex", 32);


// class example without constructor
class UserWithoutConstructor {
  private static userName: string = "Default Name";
  static readonly age: number = 18;

  static getUserInfo() {
    return `Name: ${UserWithoutConstructor.userName}, Age: ${UserWithoutConstructor.age}`;
  }
}

const user2 =  UserWithoutConstructor.getUserInfo();

// UserWithoutConstructor.age = 40;


// Class example with validate user's aadhar number
class UserWithAadhar {
  private static adharNumber: string;

  constructor(adhar: string) {
    UserWithAadhar.validateAdhar(adhar);
    UserWithAadhar.adharNumber = adhar;
  }

  private static validateAdhar(adhar: string): void {
    if (adhar.length !== 12) {
      throw new Error("Invalid Aadhar number");
    }
  }

  static getAdhar(): string {
    return UserWithAadhar.adharNumber;
  }
}
const userWithAadhar = new UserWithAadhar("123456789012");