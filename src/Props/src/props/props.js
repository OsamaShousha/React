const arr = ["red", "blue", "green"];

let [fc, sc, tc, nc="No color"] = arr;
console.log(fc, sc, tc, nc);
let a = 10;
let b=  20;
console.log("a =" + a, "b =" + b);
[a,b ]= [b,a];
console.log("a =" + a, "b =" + b);
console.log([fc, , tc]);

let person = {
    firstName: "Osama",
    secoundName: "Shousha",
    age: 52,
    address:{
        street: "fornbacken",
      city : "Sodert'lje",
        PC: 15256
    }
}

function display(fName, sName, age){
    console.log(fName);
    console.log(sName);
    console.log(age);
    
    
}
display(person);


let {firstName, secoundName, age:num, address:{city }} = person;
console.log(firstName, secoundName, "has", num, "years and live in");
console.log(secoundName, firstName, "has", num, "years", person);