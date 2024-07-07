
console.log(user); //prints undefined

var user; 

var user = "mark76" //can be reassigned

console.log(user);


try{
    console.log(name);
}catch(err){
    console.log("Cannot use a let variable before definind it.",err);
}

let name = "Joe";

//let name = "Name"; <- synthax error
name = "Bill"; //let can be reassigned

console.log(name); 


try{
    console.log(lastName);
}catch(err){
    console.log("Cannot use a const variable before definind it.",err);
}

const lastName = "Westwood";

//const name = "Name"; <- synthax error

try{
    
lastName = "Bill"; //const can not be reassigned
}catch(err){
    console.log("Cannot reassign a const variabvle.",err);
}

console.log(lastName); 