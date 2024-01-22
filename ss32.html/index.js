// let person = {
//     name :"Thieu gia" ,
//     age :19,
//     school :"PTIT",
//     curly  :"nhu phoc",
//     // phuong thuc ;
//     eat : function () {
//         console.log("an nhom nhoam");
//     },
//     flirt : function () {
//         console.log("chap em , anh dung day tu chieu");
//     },
//     nhinThaygai : function (){
//         console.log("chao em , helooo be cung");  
//     }

// };
// person.height = 1.94;
// person.weight = "100kg"
// console.log("doi tuong ",person)

// let Dung = {
//     name : "Quang Dung",
//     age : 20,
//     school :"PTIT",
//     infor :"Trong ngu vai lonnnnnnnnnnnnn",

//     eat : function(){
//         console.log("an nhom nhoam");
//     },
//     favorite : function(){
//         console.log("an cap vat");
//     },
//     yeuDuyAnh  : function(){
//         console.log("Yeu lam lam lam ");
//     },


// }
// let Huyen = {
//     name : "Thi Huyen",
//     age : 19,
//     school :"PTIT",
//     infor :"Trong doncle vai",

//     eat : function(){
//         console.log("an nhom nhoam");
//     },
//     favorite : function(){
//         console.log("ngu nhu chet :((");

//     },
//     play : function(){
//         console.log("choi do , choi thuoc , du cac the loai ");
//     },


// }


// let Huyen = {
//         name : "Thi Huyen",
//         age : 19,
//         school :"PTIT",
//         infor :"Trong doncle vai",
// }
// let Dung = {
//     name : "Thi Dung",
//     age : 20,
//     school :"PTIT",
//     infor :"Trong doncle vai",
// }
// let Thieu = {
//     name : "Thi Thieu",
//     age : 19,
//     school :"PTIT",
//     infor :"Trong doncle vai",
// }
 // constructor Function

 //function Student (name , age , grade) {
    // this.name = name;
    // this.age = age;
    // this.grade = grade;
    // this.introduction = function (){
    //     console.log(`Hello , my nam is ${this.name}`)
    // }
 //}
//  class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello (){
//         console.log("Hello");
//     }
//     }
//     let person = new Person("Khánh Dương",19);
//     console.log(person)
 


//     let Student1 = new Student("Khanh Duong",10,"Good");
//     let Student2 = new Student("Manh Duong",20,"Bad");
//     let Student3 = new Student("Khac Hung",30,"Very Bad");
//     console.log("Student 1",Student1)
//     console.log("Student 2",Student2)
//     console.log("Student 3",Student3)
    
//     Student1.introduction();
//     Student2.introduction();
//     Student3.introduction();

// class Student {
//     constructor(name ,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         console.log(`Hello my name is ${this.name} , Im ${this.age} tuoi `)
//     }
// }

// let student1 = new Student("Duy Anh",20);
// let student2 = new Student("Duy TAnh",21);
// let student3 = new Student("Duy VAnh",22);

// student1.introduce();
// student2.introduce();
// student3.introduce();
// //read all
// for(let key in person){
//     console.log(key)
// }
// //update

// person.name = "Gia Thieu dep trai hoc gioi nha giau"
// console.log(person.name)

// //delete
// delete person.curly;
// console.log(person)

class Student {
    constructor(id,name){
        this.id = id;
        this.name = name
    }
}