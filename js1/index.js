// // easy start here
// // bodlogo1
// for (let too = 1; too <= 100; too++){
//     console.log(`${too}`)
// }

// // bodlogo2
//  let niilber = 0;
// for (let Ntoo = 1; Ntoo < 6; Ntoo++){
//     if (Ntoo % 2 == 0){
//         niilber += Ntoo;
//     }
// }
// console.log(`${niilber}`)

// // bodlogo3
// let sum = 0;
// for (let num = 1; num <= 3; num++){
//     sum += num;
// }
// console.log(`${sum}`)


// // bodlogo4

// let n = 1;
// let nk = 1;
// for(let k = 1; k < 12 ; k++){ 
//     nk = k **= n;
//     console.log(`${n} zereg ni 1000 aas ih ${nk} baina`)
// }


// // While bodlogo1

// let number = 0, niiilber = 0;

// while (number <= 1000){
//     number++;
//     if(number % 2 == 0){
//         niiilber += number;
//     }
// }
// console.log(`${niiilber}`)



// // While bodlogo2


// // let ehniiToo = prompt("ehnii toog oruulna uu");
// // let hoyrdohToo = prompt("hoyrdoh toog oruulna uu");
// // let huwaagch = 1;

// // while (ehniiToo % huwaagch == 0 && hoyrdohToo % huwaagch == 0){
// //     ehniiToo / huwaagch ==
// // }
// // console.log(`huwaagch bol ${huwaagch}`)

// // do while bodlogo1

// let Too = 101;
// let iToo = 1;
// do {
//     Too--;
//     console.log(Too)
// } while (iToo < Too);

// // do while bodlogo2

// // 0 bolon 1 iig gargaj irne


// // for bodlogo1

// for (let tooo = 10; tooo > 0; tooo--){
//     console.log(tooo)
// }



// // any loop 1






// // any loop 2

// // let paliToo = prompt("toog oruulna u. Palindrom mun esehiig shalgay");

// // while ()



// // any loop 3

// let summ = 0;
// for (let numb = 0; numb < 999; numb++ ){
//     if (numb % 3 == 0){
//         summ += numb
//     }
// }
// console.log(summ);

// // any loop 4

// for (let numbe = 3; numbe < 37; numbe++){
//     if (numbe % 5 == 0){
//         console.log(numbe)
//     }
// }


// // any loop 5

let aToo = prompt("too oruul");
let summm = 0;
for (; aToo > 0; aToo = Math.floor(aToo / 10)){
    summm += aToo % 10; 
}console.log(summm);


// // let tooo = prompt("too oruul");
// // for (let k = 1; k <= tooo; k++){
// //     let res = "";
// //     for (let j = 1; j <= k; j++){
// //         res +="*";
// //     }console.log(res)
// // }

// let utga = prompt("utga oruulna uu");
// for (let u = 1; u <= utga; u++){
//     let res = "";
//     for (let m = utga; m >= u; m--){
//         res +="*";
//     }console.log(res);
// }