// operators (binary operators)
let a = 5;
let b = 2;
console.log("a+b =", a+b);
console.log("reminder of a/b is ",a%b); 
//another operator thet is a**b which means a^b

//unary operators
a++; //a = a+1
console.log(a);
console.log(a++); //this does the operation on a in the given line and then it increases the value 
console.log(++a); // thhis incriment the value and then does the operation on a in the given line

// assignme t operaters
// = , += , -=. *=\, %=, **=
 let c = 5;
 let d = 7;
 c**=d;
 console.log(c);

 console.log("a==b",a==b)//false
 console.log("c<d", c<d)//True\
 a = 3;
 b= 5;
 console.log("a==b",a==b);//True (here the memory address for number 3 and string 3 both will be same as they will be stored at the same location)
 console.log("a===b", a===b);// false (here === checks the value stored and the daa type but == checks only the value stored in the variable)

 //logical operators

 s1 = a<b;
 s2 = a==b;
 console.log("s1 and s2 are",s1 && s2);
 console.log("anything among s1 or s2 is", s1||s2);

 
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CONDITIONAL STATEMENTS

/*let mode = "dark";
let color;
if (mode === "dark"){
    color = "black";
};
console.log(color);


mode = "light";
if(mode === "dark"){
    color = "black";
}
else {
    color = "white";
}
console.log(color);*/

mode = "red";
if( mode === "ligth"){
    console.log("white");
}
else  if( mode === "dark"){
    console.log("black");
}
else{
    console.log(mode);
}

// terinary operator 
// condition ? true : false 

let cg = 5.5;
cg > 4.5 ? "pass": "fail"; //compact if else statement