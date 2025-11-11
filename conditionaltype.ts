type A = null;
type B = undefined ;
// type C = A extends null? true : false;
type C = A extends number ?true : B extends undefined? true: false;
type TakaAlaVehicle = {
    bike: string,
    car: string, 
    ship: string
}
// type CheckVehicles<T> = T extends "bike" | "car" | "ship" ? true : false;
type CheckVehicles<T> = T extends keyof TakaAlaVehicle ? true : false;
type hasBikes = CheckVehicles<"bike">
