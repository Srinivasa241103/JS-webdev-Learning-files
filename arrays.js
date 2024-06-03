let Marks = [1,2,3,4,5,6];
console.log(Marks);
console.log(Marks.lenght);

let heroes = ["spiderman","superman","antman","batman"];
console.log(heroes.length);

let arr = [];
//arr[0] = prompt("enter the element");
//console.log(arr); 
/*n = prompt("how many elements");
for(i=0;i<n;i++){
    arr[i]=prompt(`enter the ${i+1}th element`);
}
console.log("the array is \n",arr);

//loopin over an Array
let l = arr.length;
for (let i=0;i<l;i++){
    console.log(arr[i]);
}

for(let city of arr){
    console.log(city.toUpperCase());
}*/
let sum = 0;
let Mk = [29,87,75,99,96];
for(let ele of Mk){
    sum+=ele;
} 
console.log("avg marks of the class is",sum/Mk.length);
i=0;
for(let val of Mk){
    let offer = val/10;
    Mk[i]-=offer; 
    console.log(`the update value of ${i+1}th = ${Mk[i]}`) // printing the re valued elements of the array after cutting the offer price
    i++;
}
console.log(Mk);

//methods of arrays
let food = ["rice","veggies"];
food.push("curd rice");    //appends to the array
console.log(food);
let delitem = food.pop();
console.log(delitem);      // deletes from the last  
console.log(food); 
    
let new_arr = Mk.concat(food);
console.log(new_arr);

// more methods refer to video notes