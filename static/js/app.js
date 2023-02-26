// 1
// i did it on lesson

// //2
// let arr = [
//     15, 29, 29, 6, 1, 22, 24, 28, 24, 27, 
//     20, 29, 1, 13, 22, 30, 25, 22, 19, 3
// ]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// if (sum < 0) {
//     console.log("No")
// }
// else {
//     console.log("Yes")
// }

// // 3
// let arr = [
//     15, 29, 29, 6, 1, 22, 
//     24, 28, 24, 27, 20, 29, 1, 13, 22, 30, 25, 
//     22
// ]
// let sum_prog = 0
// let sum_krot = 0
// let sum_proz = 0
// for (let i = 0; i < arr.length; i++) {
//     if (i < 6) {
//         sum_prog += arr[i]
//     }
//     if (i > 6 && i < 12) {
//         sum_krot += arr[i]
//     }
//     if (i == 13) {
//         sum_proz += arr[i]
//     }
// }

// if (sum_prog > sum_krot) {
//     if (sum_prog > sum_proz) {
//         console.log(sum_prog)
//     }
//     else {
//         console.log(sum_proz)
//     }
// }
// else {
//     console.log(sum_krot)
// }

// // 4
// let arr = [
//     15, 29, 293, 6, 1, 22, 24, 28, 24, 27, 
//     20, 29, 1, 13, 223, 30, 253, 22, 19, 3
// ]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 9 && arr[i] < 100) {
//         console.log(arr[i])
//     }
//     if (arr[i] > 99 && arr[i] < 1000) {
//         console.log(arr[i])
//     }
// }

// // 5
// let arr = [
//     15, 29, 293, 6, 1, 22, 24, 28, 24, 27, 
//     20, 29, 1, 13, 223, 30, 253, 22, 19, 3
// ]
// let a = 10
// let b = 5
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 10 == 4) {
//         console.log(arr[i] / 2)
//     }
//     if (arr[i] % 2 == 0) {
//         arr[i] = (arr[i] ** 2) + a
//         console.log(arr[i] ** 2)
//     }
//     else {
//         console.log(arr[i] ** 2)
//     }
//     if (i % 2 == 0) {
//         arr[i] = arr[i] - b
//         console.log(arr[i] - b)
//     }
// }

// // 6
// let arr = [
//     15, 29, 293, 6, 1, 22, 24, 28, 24, 27, 
//     20, 29, 1, 13, 223, 30, 253, 22, 19, 3
// ]
// let r = 25
// let cnt = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 25) {
//         cnt++
//     }
// }
// console.log(cnt)

// // 7
// let arr = [
//     15, 29, 293, 6, 1, 22, 24, 28, 24, 27, 
//     20, 29, 1, 13, 223, 30, 253, 22, 19, 3
// ]
// let k = 6
// arr.splice(2, 1)
// arr.splice(k, 1)
// console.log(arr)

// // 8
// let arr = [
//     15, 29, 293, 6, 1, 22, -24, 28, 24, 27, 
//     20, 29, 1, 13, 223, 30, 253, 22, 19, 3
// ]
// let r = 25
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         arr.splice(i, 1)
//     }
//     if (arr[i] > r) {
//         arr.splice(i, 1)
//     }
// }
// console.log(arr)

// // 9
// let arr = [
//     15, 29, 293, 5, 1, 22, -24, 28, 24, 27, 
//     20, 29, 1, 13, 223, 30, 5, 22, 19, 3
// ]
// console.log(arr.indexOf(5))
// console.log(arr.lastIndexOf(5))