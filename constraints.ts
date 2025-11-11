const students1={
    id: 45, 
    name: "xkdkjdkj",
    hasBike: false
}
const students2 = {
    id: 46,
    name: "saidur",
    hasHappiness: false
}
const students3 = {
    hasCar: true
}
type student = {id: number, name: string}
const addStudentToCourses = <T extends student>(studentInfo:T) =>{
    return{
        course: "next Level",
        ...studentInfo
    }
}
// console.log(addStudentToCourses(student1));
// console.log(addStudentToCourses(student2));
// console.log(addStudentToCourses(students3));
// keyof constraint
type RichVehicle = {
    car: string,
    bike: string,
    cng: string,
}
type MyVehicle = "car" | "bike" | "cng"
type MyVehicle1 = keyof RichVehicle;
// const MyVehicle3 : MyVehicle1 = "ship" give me error 
// example - 2 
type Users ={
    id: number, 
    address: string,
    name:string
}

const user7:Users = {id: 24, address: "shersha", name: 'shed'}

const products = {name: "mongo"}
const getObjectProperty = <X> (obj: X, key: keyof X) => {
    return obj[key]
}
console.log(getObjectProperty(user7, "address"));
console.log(getObjectProperty(products, "name"));