

// let and const 
// array functions 
// template literals baktik 
// default parameters 
// rest and spread 
// destructing 
// classes 

// promises 
// async await 
// try catch 

const { PanoramaPhotosphereRounded } = require("@mui/icons-material")


///////////////////////////////////////////////////////////////

let and const behave differently 
let can be updated but not const 

let doesnt need to be initialized 
but const needs to be initialized with a value 

//
let and const added to window object
//
let and const are block or braces scoped 
//



///////////////////////////////////////////////////////////////


fat arror function 

has 3 types or forms 
basic one  
with one parameter 
with implicit return 

//
var fun = () => {}; // stored in a variable fun 

fun(); /// and then can be called 



//


var fun2 = (param) => {}
fun2(12);
// we can remove the fat for one parameter but have to add for more parameters 



//


//implicit return means not expressed 

var fun3 = ()=>12 // here the 12 will get return 

fun3();



//

///////////////////////////////////////////////////////////////

// template literals also called backtick ``

"hey" + 2+2 + " is four "  /// used to be earlier like this which might give wrong output like it make it string 

console.log(`hey  ${2+2} ` ) //// now this will give right answer



///////////////////////////////////////////////////////////////


// default parameters

function name(params =0) {
    console.log(params)

}
name(12);
name(); // when not sending a value  will print undefined so rather just give default value to params like here its given 0 



///////////////////////////////////////////////////////////////


// rest and spread ... used for copying 

// spread is 

var a = [1,2,3,4,43];

var b = a ;/// this is not copy this is referencing 

var c = [...a]; /// this is now copy 

/// difference in spread and rest
//spread is spreading the array values in c 
// spread is used to copy or spreading the values 


// rest is used when you want to take remaining values in a variable
function funcs(a,b,c, ...d) {

    /// here all the remaining values are in d which is an array 
    console.log(d);

    
}

funcs(2,4,5,54,5);




///////////////////////////////////////////////////////////////
// destructing 

var arr = [2,3,4,5];


var [b,c] = arr ; //// two variables are created b and c whose values will be 2 3 from arr 

var [a,,d] = arr; //skips the middle value


/// destructing for objects

var obj = {
    name : 'na',
    age:234
}

var {age} = obj; 


///////////////////////////////////////////////////////////////

// promises 

// code in future will either resolve or reject 


/// it accepts a function that will resolve or rejects

/// promise is basically a construtor it need new word to invoke it otherwise gives error


 var ans = new Promise((res,rej)=> {

    if(true)
    {
        return res();
    }
    else
    {
        return rej();
    }

})

 //// if ans has res then then otherwise catch
ans
.then(()=>{
    console.log("got resolved")
})
.catch(()=>{

    console.log("get rejected")

})

//////////

var ans = new Promise((res,rej)=> {

   var n = Math.floor(Math.random()*10)

   if(n<5)return res()
   else return rej();

})



ans 
.then(()=>{
    console.log("below")
})
.catch(()=>{
    console.log("above")
})

///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// async await 

/// reduced the code line of then and catch of the promises 

//// make the funciton asynchrounous
async function abcd()
{
    let ans =  await fetch(``)    ///// will fetch the data by sending the request 

    let raw = await ans.json();

    console.log(raw);


     //// .then(function(data){ console.log(data )}) this line was saved


}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 // try catch  try some code if their error in try catch it and still run other code after that

 console.log("geas")

try{
 console.log(agea)}
 catch(error)
 {
    console.log(error)
 }

 console.log("adg")  /// this will still work 
 








