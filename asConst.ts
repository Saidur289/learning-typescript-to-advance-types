// const userRoles = {
//     Admin : "Admin",
//     Editor: "Editor"
// } as const;
// const canEdit = (role: keyof typeof userRoles ) =>{
//     if(role === userRoles.Admin || userRoles.Editor){
//         return true
//     }
//     return false
// }
// console.log(canEdit(userRoles.Admin));
const userRoles = {
    Admin: 'ADMIN',
    Editor: 'EDITOR'
} as const;
const canEdit = (role: (typeof userRoles[keyof typeof userRoles])) => {
if(role === userRoles.Admin || userRoles.Editor){
        return true
    }
    return false
}
console.log(canEdit(userRoles.Admin));