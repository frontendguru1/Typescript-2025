
// Interface

interface IAddress {
    street: string;
    city: string;
    country: string;
}

interface IGrades {
    Math: number;
    Science: number;
    History: number;
}

interface IStudent {
    readonly id: number;
    name: string;
    age?: number; // Optional property
    courses: string[];
    isEnrolled: boolean;
    address: IAddress;
    grades: IGrades;
}


// example of using the IStudent interface
const student: IStudent = {
    id: 324256234,
    name: "John Doe",
    courses: ["Math", "Science", "History"],
    isEnrolled: true,
    address: {
        street: "123 Main St",
        city: "New Delhi",
        country: "India"
    },
    grades: {
        Math: 90,
        Science: 85,
        History: 88
    }
}

student.name = "Alex Smith";
student.age = 25;
// student.id = 123123; // This will cause an error because id is a readonly property
// student.address.city = 3223; // This will cause an error because city should be a string


console.log('student name: ', student.name);
console.log('city: ', student.address.city);
console.log('User Id: ', student.id);










export {}

