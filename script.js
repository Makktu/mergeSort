'use strict';

let sortArr = [
    36, 24, 14, 81, 13, 35, 9, 20, 92, 85, 23, 71, 73, 42, 96, 39, 78, 72, 50,
    88, 87, 90, 68, 8, 32, 79, 30, 55, 62, 46, 29, 44, 84, 98, 11, 12, 74, 27,
    54, 4, 40, 52, 64, 63, 51, 37, 28, 99, 38, 17, 7, 58, 60, 95, 6, 91, 2, 70,
    33, 86, 15, 80, 76, 66, 41, 49, 89, 45, 47, 25, 83, 16, 10, 43, 94, 97, 22,
    18, 3, 34, 59, 67, 8888, 21, 53, 19, 82, 26, 93, 56, 5, 31, 75, 100, 65, 57,
    61, 1, 48, 69,
];

console.log(
    '>>>',
    sortArr.sort((a, b) => a - b)
);

// const msgArea = document.querySelector('.messages');

// msgArea.innerHTML = `Unsorted: ${sortArr}`;

// function sortEm(arr1, arr2) {
//     console.log(arr1, arr2, '✅');
//     let sortedArr = [];
//     if (arr1[0] > arr2[0]) {
//         sortedArr.push(arr1[0]);
//         sortedArr.push(arr2[0]);
//     } else {
//         sortedArr.push(arr2[0]);
//         sortedArr.push(arr1[0]);
//     }

//     console.log('>>>', sortedArr);
// }

// const splitEm = (arr) => {
//     // if (arr.length == 1) return arr;
//     // return splitEm(arr.splice(arr.length / 2 + 1));
//     let tempArr1 = [];
//     let tempArr2 = [];

//     // if (tempArr1.length === 1) {
//     //     console.log(tempArr1, tempArr2);
//     //     sortEm(tempArr1, tempArr2);
//     // }

//     for (let a = 0; a < arr.length / 2; a++) {
//         tempArr1.push(arr[a]);
//     }

//     for (let b = arr.length / 2; b < arr.length; b++) {
//         tempArr2.push(arr[b]);
//     }

//     if (tempArr1.length > 1) splitEm(tempArr1);
//     if (tempArr2.length > 1) splitEm(tempArr2);

//     // console.log(tempArr1, tempArr2);
//     sortEm(tempArr1, tempArr2);
// };

// const mergeSort = (arr) => {
//     // first, split the array into 2;
//     // if it can be split again, repeat
//     msgArea.innerHTML += `<br><br><p>${splitEm(arr)}</p>`;
// };

// mergeSort(sortArr);
