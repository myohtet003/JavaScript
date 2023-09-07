// class Student {
//     constructor(name,age, gender,major) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.major = major;

//         //profit
//         this.birthYear = 2023 - this.age;
//         this.nameProfix = this.name === "male" ? "Mg" : "Ma";
//         this.pronoun = this.name === "male" ? "he" : "she";

//         this.subjects = [
//             "Myan",
//             "Eng",
//             "Math",
//             "Phys",
//             "Chem",
//             this.major == "bio" ? "bio" : "eco",
//         ]
//     }
//     learn() {
//         return this.name + " can learn " + this.subjects;
//     }
//     about() {
//         return `${this.name} is ${this.age} year${this.age > 1 && "s"} and ${this.pronoun} was born in ${this.birthYear}.`
//     }
// }

// class Monitor extends Student {
//     room = "Grade A"
// }

// const ga1 = new Monitor ("Mg Myo", "male", 17,"bio")
// console.log(ga1)
// const st1 = new Student("Mg Mg",20,"male","bio");
// console.log(st1);
// console.log(st1.learn());
// console.log(st1.about());

// const st2 = new Student("Mya Mya",20,"female","bio");
// console.log(st1);

// const st3 = new Student("Zaw Zaw",19,"male","eco");
// console.log(st1);

//inheritance

// class A{
//     a = "aaa"
//     x = "xxx"
//     y = "yyy"
// }

// class B extends A{
//     b = "bbb"
// }
// const b = new B
// console.log(b);

//method changing

// class A {
//     x() {
//         console.log("this is x")
//         return this; //the importance is this tag
//     }
//     y() {
//         console.log("this is y")
//         return this;
//     }
//     z() {
//         console.log("this is z")
//         return this;
//     }
// }

// const aa = new A ()

// // aa.x();
// // aa.y()
// // aa.z()

// aa.x().y().z()

// //String

// const str = new String("Min Gar Lar Par");

// console.log(str)
// console.log(str.length);
// console.log(str.toUpperCase());

//number

// const num = Number(123.45678);

// console.log(num.toString())
// console.log(num.toFixed(3))
// console.log(num.toPrecision(2))
// console.log(Number(123.333))

// //built-in function

// const munSt = new Number(124.333345);

// console.log(parseInt(munSt))
// console.log(parseFloat(munSt))

// const h1 = document.getElementsByTagName("h1")[0];

// console.dir(h1)
// console.log(h1);
// console.log(h1.innerText);
// console.log(h1.style.color);
// console.log(h1.title);

// const arr = ["a","b","c","d","r"];

const obj = {
    "brand" : "apple",
    "model" : "macbook pro",
    "spec" : { "cpu" : "17", "ram" : "16gb", "ssd" : "1TB"}
}

// const j = '["a","b","c","d","r"]';

// const j2 = `{
//     "brand" : "apple",
//     "model" : "macbook pro",
//     "spec" : { "cpu" : "17", "ram" : "16gb", "ssd" : "1TB"}
// }`;

// //json to js
// console.log(JSON.parse(j)[1]);
// console.log(JSON.parse(j2).model);

// console.log(typeof(j2));

// //js to json
// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(arr));

// function run() {
// //     const req = new XMLHttpRequest();
// // // console.log(req);

// // req.open ("GET", "https://fakestoreapi.com/products");
// // req.send();
// // req.addEventListener("load", (event) => {
// //     console.log(event.target.responseText);
// //     const data = JSON.parse(event.target.responseText);
// //     console.log(data);
// // });


// fetch("https://fakestoreapi.com/products").then(data => data.json())
// .then(json => {
//     console.log(json)
// })
// };


localStorage.setItem("myName", "myo htet kyaw");
localStorage.setItem("myAge", 20);
