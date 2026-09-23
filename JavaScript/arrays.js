// let ar =[1,2,3,4,5];
// console.log(ar.splice(2,0,30));
// console.log(ar);
// console.log(ar.slice(1,3));
let ar =[1,2,3,344,677,88];
console.log(ar.sort((a,b)=>{
  a-b;
}));

console.log(ar.sort((a,b)=>{
  b-a;
}));
// let arr = [
//     { name: "Osana"},
//      {
//         name: "TTTT"
//      }
// ];
// for(let x in arr){
//     console.log(" x = ", x, arr[x]);
// }

// for(let x of arr){
//     console.log(" x = ", x.name, arr[x]);
// }
// console.log("arr.at(-1)" ,arr.at(-1));

// let arr = [10, 20, 30,40, 50,70];

// let i;
// for(i=0; i< 4; i++){
//     console.log(arr[i],"Lenght = " ,arr.length);

// }

// for(let item of arr){
//       console.log(item,"Lenght form for of loop = " ,arr.length);
// }

// arr.unshift("Unshift");
// console.log(arr,"After unshift");

// let remove = arr.splice(2,1);// remove one elemnt begin from item number 2
// console.log(remove);
// let add =arr.splice(2,0,600);// begin at item number 2 . remove nothing add 600
// console.log(add);
// console.log(arr);
// let addMoreThanOne = arr.splice(2,1,570,680,800, );
// console.log(arr);

// let newArr;
// //  newArr = arr.map(function squar(x)
// // {
// //     return Math.sqrt(x);
// // });

// newArr= arr.map((x )=> Math.sqrt(x));

// console.log(newArr);



