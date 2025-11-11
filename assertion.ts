const kgConverter =(input: string | number) : number | string |undefined => {
    if (typeof input === "number") {
       return (input * 1000);
        
    }
    else if(typeof input === "string"){
      const  [value] = input.split(" ")
        return(Number(value) * 1000);
    }

}
// as use when sure its type 
const result = kgConverter(2) as number
console.log(result);
const result2 = kgConverter("2") 
console.log(result2);
// let anything : any;
// (anything as number).toExponential