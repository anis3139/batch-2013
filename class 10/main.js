


/* 
Data Type 
*/

// string, number, boolean, object, undefined, null, 


// Varriable
var name= "Kamal"
console.log("This is " + name);
console.log(name+ " is 10 years Old");
console.log(name + " goes to school");

var x =10;
var y=5;
var result=x+y
console.log(result);

// array  is data collection

var arr=['anis', 'shakib', 'pixel', 12, 25, 30, 55, "Mohona", 25]
console.log(arr[5]);

var arrLength=arr.length;
console.log(arrLength);


var obj={
    name:"Anis",
    age:29,
    district:"comilla"
}

console.log(obj.age);


for(var i=0; i<arrLength; i++){
    console.log(arr[i]);
}


var userName="admin0";
var password=12345;

// if(userName === "admin" && password===12345){
//     alert("You are loged in")
// }else if(userName === "admin"){
//     alert("user Name Correct but password is wrong")
// }else if(password === 12345){
//     alert("password is Correct but userName is wrong")
// }else{
//     alert("Wrong Username or Password")
// }

function test2(m,n){
    var result= m+n;
    alert(result);
 }

function test(m,n){
   var result= m+n;
   return result;
}

console.log(test(10,5));
console.log(test(100,500));
console.log(test(1000,50));
console.log(test(50,70));
