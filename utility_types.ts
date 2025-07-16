//like a function they take other tyoes in as parameter and return
//a new type,with some changes made to it

//build in to typeScript, perform commonly- needed modifications to
//existting types

// generics syntaax using angle brackets(<>)

// partial type: this modifies the type you pass in and
//turns all properrties into optional propertied

type user ={
    id: number
    username: string
    role: "member" | "contributor"|"admin"
}
type UpdatedUser = Partial <User>

const users: user[] = [
    {id: 1, username: "john_doe", role: "member"},
    {id: 2, username: "jane_doe", role: "contributor"},
    {id: 3, username: "alice_jones", role: "admin"},
    {id: 4, username: "charlie_brown", role: "member"}
];
function updateUser(id:number,updates:any){
    const foundUser = users.find(user => user.id ===id)
    if(!foundUser){
        console.error("user not found!")
        return
    }
    Object.assign(foundUser, updates)
}


updateUser(1,{username: "new_john_doe"});
updateUser(4,{role: "contributor"});

console.log(users)