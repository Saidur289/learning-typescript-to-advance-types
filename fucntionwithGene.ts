// interface keyValueProcess<T,U>{
//     (key: T, val:U): void;
// }
// function processNumKey(key: number, value: number): void{
//     console.log("processNumKeyPair: key= "+ key + ", value =" ,value);
// }
// function processStringKey(key: number, value: string): void{
//     console.log("processStringKe: key= "+ key + ", value =" ,value);
// }
// let numKVProcessor: keyValueProcess<number, number> = processNumKey
// numKVProcessor(1, 445)
// let strKVProcessor: keyValueProcess<number, string> = processStringKey
// strKVProcessor(1, "bill")
interface KeyValueProcessor<T, U>
{
    (key: T, val: U): void;
};

function processKeyPairs<T, U>(key:T, value:U):void { 
    console.log(`processKeyPairs: key = ${key}, value = ${value}`)
}

let numKVProcessor: KeyValueProcessor<number, number> = processKeyPairs;
numKVProcessor(1, 12345); //Output: processKeyPairs: key = 1, value = 12345 

let strKVProcessor: KeyValueProcessor<number, string> = processKeyPairs;
strKVProcessor(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill

// new example with function with generics 
const createArrayWithGeneric= <T>(value: T) => [value];
const arrSting = createArrayWithGeneric("saidur")
// console.log(arrSting);
const arrNum = createArrayWithGeneric(55)
const arrObj= createArrayWithGeneric({id: 12, name: "riaz"})
// console.log(arrObj, arrNum);
// NEW EXAMPLE 
// Tuple with generic 
const createArrayWithTupleAndGeneric = <T,Y> (param1:T, param2:Y) => {
    return [param1, param2]
}
console.log(createArrayWithTupleAndGeneric(2, 4));
console.log(createArrayWithTupleAndGeneric('saidur', 49));
const student1={
    id: 45, 
    name: "xkdkjdkj",
    hasBike: false
}
const student2 = {
    id: 46,
    name: "saidur",
    hasHappiness: false
}
const addStudentToCourse = <T>(studentInfo:T) =>{
    return{
        course: "next Level",
        ...studentInfo
    }
}
console.log(addStudentToCourse(student1));
console.log(addStudentToCourse(student2));