const arrayOfNum: number[] = [1, 4, 6]
const arrayOfString: string[] = arrayOfNum.map((num) => num.toString())
console.log(arrayOfString);
type AreaNum = {
    height: number,
    width: number,
}
// type height = AreaNum['height']  log number 
type AreaOfString = {
    [key in "height" | "width"] : string
}
type Area<T> = {
    [key in keyof T] : T[key]
}
const area22: Area<{height: number, width: string}> = {height: 59, width: '50'}
const area24: Area<{height: number, width: number}> = {height: 59, width: 89}