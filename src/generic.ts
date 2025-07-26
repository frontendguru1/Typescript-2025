
// simple function that returns the argument passed to it
function identity(arg: number): number {
  return arg;
}
identity(5); // returns 5

// example with any type
function identityTwo(arg: any): any {
  return arg;
}

identityTwo(5)
identityTwo("Five")
identityTwo({ name: "John" })

// generic example
function identityThree<Type>(arg: Type): Type {
  return arg;
}

identityThree(5) // returns 5
identityThree("Five") // returns "Five"
identityThree(false) 


// generic example 2
function identityFour<T>(arg: T): T {
  return arg;
}

const identityFive = <T>(arg: T): T => {
  return arg;
}

const identitySix = <T>(arg: T): T => arg