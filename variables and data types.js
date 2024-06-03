
//objects in JS creating,
const student = {
    Name : "srinivas",
    age : 20,
    CGPA : 5.4,
    isadult : true,
};

//accessing the elements of an object in JS
console.log(student["age"]);   
console.log(student.CGPA);

//assigning a new value to the element of an oject
student.age ++; // or else we can use +=1 as well
console.log(student.age);

/* you can change the variable const in case of object but not in case of variable

const name = "srinivasa";
name = shankar;
this gives error but for object we can change the assigned value */


const profile= {
user_name : "shraddha kapra",
posts : 12,
followers : 209182,
following : 1626,
isVerified : true,
};
console.log(profile.followers);