// function add (x,y) {
//     console.log(arguments)
//     return x + y;
// }

// console.log(add(1, 2))

// const add2 = function(x,y){
//     return x + y;
// }
// console.log(add2)

// const add3 = (x,y) => x + y;
// console.log(add3)


// console.dir(new Function);
// const add4 = new Function("x","y", "return x + y");
// console.log(add(1,2))

// console.log(add(10, 20));
// console.log(add.bind(null,10,20).call())



// function sum(x,y,...nums) {
//     return nums.reduce((pv,cv) => pv + cv,0);
// };

// console.log(sum(1,3,4,5,6,6))



const obj = {
    a : "aaa",
    b : "bbb",
    c : "ccc",
};

const {a,b,c} = obj;
console.log(a)
console.log(b)
console.log(c)

