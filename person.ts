// Define a type for an address with street, city, and country
type Address = {
    street: string
    city: string
    country:string
    }


// Define a type for a person, which may optionally include an address
type Person={
    name: string // First name of the person
    surname: string  // Last name of the person
    age: number  // Age in years
    isStudent: boolean  // Indicates if the person is a student
    address?: Address // Optional address field
}

// Create a person object with full address
let person1 : Person = {
    name: "joe",
    surname: "Doe",
    age:43,
    isStudent: false,
    address:{
        street: "Gilspie",
        
        city:"pretoria",
        country:"south Africa"
    }
}
// Create a person object without an address
let person2 : Person ={
    name:"jill",
    surname: "jamea",
    age: 66,
    isStudent: false
    
}

let person3 : Person={
    name: "Mbali",
    surname: "Phulwane",
    age: 27,
    isStudent: true,
    address:{
        city: "pretoria",
        street: "koosPrinsloo",
        country: "Azania"
    }
}
// An array to store multiple people (currently person1 and person2)
let people: Person[] = [person1,person2]
// Note: person3 is defined but not yet added to the array
