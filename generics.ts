type GenericArray<Type> = Array<Type>;
const friends3 : GenericArray<string> = ["a","b"]
const rollNumber: GenericArray<number> = [1, 2, 3]
const booleanArray: GenericArray<boolean> = [true, false];
type Coordinates<X,Y> = [X, Y]
const coordinates1: Coordinates<number, number> = [2, 3]
const coordinates2: Coordinates<string, string> = ["s", "d"]
// object generic 
type User5 = {name: string, age: number}
const userList: GenericArray<User5> = [
    {name: "xx", age: 35}, {name: "yy", age: 40}
]