type UserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: UserRole

}

const user: User[] = [
    {username: "john_doe", role: "member"},
    {username: "jane_doe", role: "admin"},
    {username: "guest_user", role: "guest"},

];


function fetchUserDetails(username: string): User{
    const user = user.find(user => user.username === username)
    if (!user){
        throw new Error(`User with username ${username} not found`)
    
    }
    return user
}