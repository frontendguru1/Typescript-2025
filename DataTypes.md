// Data type

/*
**** Primitive types
* - string = "Hello, World!"
* - number/integer = 42  | 3.14
* - boolean = true/false
* - null = null
* - undefined = undefined
* - symbol = Symbol("id")
* - bigint = 12345678901234567890n
* */

/*
***** Object types
* Array = [1, 2, 3] | ["apple", "banana"] | ["Hello", 42, true]
* Tuple = [string, number] = ["Hello", 42]
* Object: {name: string, age: number} = { name: "Alice", age: 30 }

* */


/*
***** Special types
* Any = any type, can be used when the type is not known
* Unknown = similar to any, but safer, must be type-checked before use
* Void = used for functions that do not return a value
* Never = represents a value that never occurs, used for functions that always throw an error or never return
* Enum = a way to define a set of named constants
* Type assertions = a way to tell the compiler to treat a value as a specific type
* Intersection types = combines multiple types into one
* Union types = allows a value to be one of several types
* Literal types = specific values that a variable can hold, e.g., "red" | "green" | "blue"
* Type aliases = a way to create a new name for a type
* Type guards = a way to narrow down the type of a variable
* Type inference = TypeScript can automatically infer the type of a variable based on its value
* TypeScript utility types = built-in types that help with common type transformations, e.g., Partial, Readonly, Record, Pick, Omit
* Mapped types = a way to create new types by transforming existing ones
* Conditional types = a way to create types based on conditions, e.g., T extends U ? X : Y
* Template literal types = allows the creation of types based on string templates
* keyof operator = used to get the keys of an object type
* typeof operator = used to get the type of a variable
* Infer keyword = used in conditional types to infer a type variable

**/


/** Project setup - steps**/
* Download VS code
* Create a project folder
* Download node setup
* npm init -y
* npm i typescript -g



/** To generate the - tsconfig.json file **/
// tsc --init 


