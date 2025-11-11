interface Developer<T,X=null>{
    name: string, 
    salary: number,
    device:{
        brand: string,
        model: string,
        releasedYear: number
    },
    smartWatch: T,
    bike?: X
}
interface TakaAsche{
    heartBeat: string, stopWatch: boolean
}
const poorDeveloper : Developer<TakaAsche,{brands: string}>= {
    name: "Saidur",
    salary: 20000,
    device: {
        brand: 'ajdjj',
        model: 'dkjkfj',
        releasedYear:2012,
    },
    smartWatch: {
        heartBeat: '180',
        stopWatch: false,
    },
    bike:{
        brands: "Gixer"
    }

}
console.log(poorDeveloper);