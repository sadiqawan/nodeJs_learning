
// declaration of vaiables

let a =20;
var b = 30;
console.log(a + b);

console.log("This is the basics.js file");


// function declaration
 function name(){

    console.log("This is a function declaration");
    a = 10;
    b = 20;
    console.log(a + b);
 }

// function call
 name();




// forloop

for(i=0; i < 10; i++){
    console.log("This is a for loop iteration: " + i);
    if(i == 5){    
        console.log("Breaking the loop at i = " + i);
        break; // breaks the loop when i is 5
    }else { 
        console.log("Continuing the loop at i = " + i);
    }
}   


//while loops

var g= 10;
while(g < 20){
    console.log("This is a while loop iteration: " + g);
    g++;
    // if(g == 15){
    //     console.log("Breaking the loop at g = " + g);
    //     break; // breaks the loop when g is 15
    // }
}


// arrays

 const  khan = ['sadiq', 'abd', 'khan', 'sadiq'];
 for(let i = 0; i < khan.length; i++){
    console.log("Array element at index " + i + ": " + khan[i]);
 }
