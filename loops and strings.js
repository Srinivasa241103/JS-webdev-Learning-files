//loops
// print 1 to n
/*let input = prompt("enter the number");
let sum = 0;
for (let i=1; i<=input;i++){
    sum+=i;
    console.log("hello world");

}
console.log("the sum is ",sum);

// while loop
let add = 0;
let j = 1;
while(j<=input){
    console.log("hello");
    add+=j;
    j++;
}
console.log("the sum is ",add);

//do while loop (it runs the code and then checks for the condition)
let num = 5;
let i=6;
do{
    console.log("hello");
    i++;
}while(i<=num);

//for-of loop
//this is used to access the elements of strings or arrays

let str = prompt("enter any string");
for(let i of str){
    console.log("i=",i);
}

//for in loop (used to iterate the objects)

const stu = {
    Name:"Srinivasa",
    Cg:5.4,
    id:1711,
    Branch: "Civil",
};

for(let j in stu){
    console.log(stu[j]);

}*/

// print the even numbers from 1-100
/*num = 100;
for(let i = 0; i<100; i++){
    if (i%2===0){
        console.log(i); //prints even numbers
    }
}*/

/*let n = "hi";
userNum = prompt("guess the word ");
while(userNum != n){
    userName = prompt("you entered wrong word, enter again");

}
console.log("CONGRATULATIONS...!!! you have matched the word");*/

//strings
let str = "Srinivasa";
let hi  = " Shnakar";
let l = str.length; // collects the length of string
console.log(l);
console.log(str[0]);//accessing the elements of a string(here it returns S)

//Templates Literals
let specialstr = `This is a special string`
console.log(typeof specialstr);
console.log(specialstr);

const stu = {
    Name:"Srinivasa",
    Cg:5.4,
    id:1711,
    Branch: "Civil",
};
console.log("the name of the student is ",stu.Name,"and his id is ",stu.id);
 let spstr = `the name of the student is ${stu.Name} and his ID is ${stu.id}`;
 console.log(spstr);     //this method is more easier than writing the console.log and printing the str
console.log("srinivasa\nshankar");  //new line character


//string methods

let string = "Apna college";
let newStr = string.toUpperCase();
console.log(newStr);
console.log(string);

let newstr2 = newStr.toLowerCase();
console.log(newstr2);                    
/* strings in JS are immutable that's why the new string that we make change to uppercase or 
lower are to stored in a new string. strings value cannot be changed in JS*/

let newstr3 = newstr2.trim();   // trims the white spaces at the beggining and ending of a string if any
console.log(newstr3); 

//there are some more methods for strings google them and learn (no need to memorize)

let Str1 = "Apna";
let Str2 = "College";
let s = `I am learnig coding from ${Str1} ${Str2}`;
console.log(s);

// ques) user input "shradhakhapra" and output "@shradhakhapra"
let input = prompt("enter your name");
let n = prompt("enter the number to append");
let nstr = `@${input}1${n}`;
console.log(nstr);



