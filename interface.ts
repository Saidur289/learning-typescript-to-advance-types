interface IUser{
    name: string,
    age: number
}
interface IUserWithRole extends IUser{
    role: "admin" | 'user'
}
const user: IUserWithRole = {
    name: "x",
    age: 14,
    role: "user"
}
console.log(user);
//interface with function 
// example - 1 
// old type alias
type Friends = string[];
const friends: Friends = ['1', 'b'];
// now with interface 
interface IFriends {
    [index: number]: string
}
const friends1 : IFriends = ["B", "V"]
// now with function 
interface IAdd {
    (num1: number, num2: number) : number
}
const add : IAdd = (num1, num2) => num1 + num2;