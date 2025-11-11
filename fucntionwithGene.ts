interface keyValueProcess<T,U>{
    (key: T, val:U): void;
}
function processNumKey(key: number, value: number): void{
    console.log("processNumKeyPair: key= "+ key + ", value =" ,value);
}
function processStringKey(key: number, value: string): void{
    console.log("processStringKe: key= "+ key + ", value =" ,value);
}
let numKVProcessor: keyValueProcess<number, number> = processNumKey
numKVProcessor(1, 445)
let strKVProcessor: keyValueProcess<number, string> = processStringKey
strKVProcessor(1, "bill")