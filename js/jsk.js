// const a = 5;
// const b = "myo";

// const af = () => {
//     const x = 10;
//     const y = 20;
//     const z = x + y;
//     return "this is af "+ z;

// }

// function fs() {
//     const j = "jjj";
//     const k = "kkk";
//     return "this is fs "+ j + k;

// }

// af();
// fs()

// function run() {
//   console.log("a");

//   setTimeout(() => {
//     console.log("b");
//   }, 1);


//   let z=0;
//   for(let i = 1; i <= 999999999; i++){
//     z += i;
//   }
//   console.log("z");

//   console.log("c");
// }

// run();


//random number(num > 5 ? "aung tal":"kya tal")

// function run() {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const num = Math.floor(Math.random() * 10);
//       if(num <= 5){
//         resolve(num);
//       }else{
//         reject(num);
//       }
//     }, 3000);
//   });
  
//   // console.log(p);
  
//   p.then((data) => console.log("aung tal",data));
//   p.catch((data) => console.log("kya tal",data));

//   return p;
// }

// const f = fetch("https://dummyjson.com/products/1");
// console.log(f);
// const ff = f.then((data) => data.json());
// ff.then ((json) => console.log(json))

// function run() {
//   const f = fetch("https://dummyjson.com/products/1");
// // console.log(f);
// const ff = f.then((data) => data.json());
// ff.then ((json) => console.log(json))
// }

// run();

async function go() {
  const product1 = await fetch("https://dummyjson.com/products/1");
  const response1 = await product1.json();
  console.log(response1);

  const product2 = await fetch("https://dummyjson.com/products/2");
  const response2 = await product2.json();
  console.log(response2);

  const product3 = await fetch("https://dummyjson.com/products/3");
  const response3 = await product3.json();
  console.log(response3);

  const product4 = await fetch("https://dummyjson.com/products/4");
  const response4 = await product4.json();
  console.log(response4);

  const product5 = await fetch("https://dummyjson.com/products/5");
  const response5 = await product5.json();
  console.log(response5);
}

// go();

const btn = document.querySelector("button");
// const openUploader = () => {
//   const openFile = showOpenFilePicker(
//     {
//       types: [
//         {
//           description: "Images",
//           accept: {
//             "image/*": [".png", ".gif", ".jpeg", ".jpg"],
//           },
//         },
//       ],
//       excludeAcceptAllOption: true,
//       multiple: false,
//     });
//   // console.log(openFile);
//   const file = openFile.then((data) =>  data[0].getFile())
//   file.then(data => console.log(data))
// };

const openUploader = async () => {
  const openFile =await showOpenFilePicker(
    {
      types: [
        {
          description: "Images",
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    });
  // console.log(openFile);
  const file = await openFile[0].getFile();
  console.log(file)
};
btn.addEventListener("click", openUploader)