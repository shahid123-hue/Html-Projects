Full_Name = "ENGR SHAHID UR REHMAN";
Profession = "Frontend Developer";
Qualification = "Bsc Software Engineer";
age = 27;
//console .log is used for print anything
console.log(Full_Name,Profession,Qualification,age);

//variables Rules Defined
//1: varaibles are case sensitive ,it mean when you create two variable like Age,and age so both are different let understand by example
Age = 23;
age=30;
console.log(Age);
console.log(age);
//in that case both value are print
//2:in varaible name you can used _,number,$but mot used space in it
Full_Name;
Age123 = 45;
Age$=30;
console.log(Full_Name,Age123,Age$);
//all are valid
//3:varaibles first character start from letter,_, but not $,number 
//best way fro varaible name creation are that
//fullName
//totalPrice
//myAge

// varaible types
//let keyword:
let myName = "Ayza Waheed";
//let myName = "zeeshan"; error in that because it can't re declared
myName = "zeeshan";
let ageAyza = 5;
console.log(myName,age);

//const keyword: are used for constant value like 
const g = 9.8;
console.log(g);

//var keyword:first problem in that keyword are they are re declared which are not a good way
 var myFirst_Name = "Shahid";
 var myFirst_Name = "Zeeshan"
 myFirst_Name = "rahul"
 console.log(myFirst_Name);
 
 //DataTypes in JS
 //two Type of datatype
 //1:Primitive datatye:
 //number,string,boolean,undefined,null,bigint,symbol
 //2:Non Primitive datatype
 //objects>Array,function
 //object work in key-value pairs

 const student = {
    Full_Name : "Zeeshan Waheed",
    age : 10,
    isadult:false
 };
 console.log(student);
 student.Full_Name="Engr Shahid Ur Rehman";
 console.log(student);
 student.age=27;
 console.log(student)