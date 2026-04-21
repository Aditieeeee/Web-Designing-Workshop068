let person={
    name:"john",
    age:30,
    city:"lko"

};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

// typeof
console.log(typeof(person));

// array data type
let numbers=[1,2,3,4,5]; 
console.log(numbers[0]);//1
console.log(numbers[1]);//2
console.log(numbers[2]);//3
console.log(numbers[3]);//4

// array with multiple data types
let mixedArray=[1,"hello" , true, ,[1,2,3] ,{ name: "alice", age:25}];
console.log(mixedArray[0]); //1
console.log(mixedArray[1]);//hello
console.log(mixedArray[2]);//true
console.log(mixedArray[3]);//[1,2,3]
console.log(mixedArray[4]);//name alice

// find length of array
// console.log(length.mixedArray)

function greet(){
    console.log("hello,world");
}
greet();

// normal function
function multiply(a,b){
    return a*b;
}

console.log(multiply(2,3));

// function xpression : direcrly create the function
let divide=function(a,b){
    return a/b;
}
console.log(divide(10,2));

// normal func with expression
let add=function(a,b){
return a+b;
}

let sayHi=() => console.log("HI");
sayHi(); //HI

// arrow func with single paarmeter
let square=x =>x*x;
console.log(square(4));
// arrow func with one parameter
const greetUser=(name) =>{
    console.log(`Hello, ${name}!`);

}
greetUser("Alice"); //Hello,Alice!

// map in array : map each and every Element iterate and perform a pRTICAULAR OPERATION ORTASK ON THE ELEMNTS

let newarray=[1,23,4,5,5];
let squaredarray = newarray.map((num) => num *5);
console.log(squaredarray);

let evenNumbers=[1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.
filter(num => num %2===0);//=== checks value same and also check data type is equal or not
console.log(filteredEvenNumbers); //[2,4]


let sum=[1,2,3,4,5];
let total=sum.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
console.log(total); //15


let students =[
    { name:"alice", marks:85 },
    { name: "bob", marks:92},
    { name: "charr", marks:82},
];

let marks=students.map(student => student.marks);
console.log(marks);
let names=students.map(student => student.name);
console.log(names); //[alice , "bob","charlie"]

let totalMarks= students.reduce((acc,student)=> acc + student.marks, 0);
console.log(totalMarks); //255

