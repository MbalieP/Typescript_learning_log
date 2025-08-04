// Define a type for an address with street, city, and country
type Address = {
    street: string
    city: string
    country:string
    }


// Define a type for a person, which may optionally include an address
type Person={
    name: string
    surname: string
    age: number
    isStudent: boolean
    address?: Address
}
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

let people: Person[] = [person1,person2]

