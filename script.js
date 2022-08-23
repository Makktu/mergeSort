'use strict';

let sortArr = [2, 34, 9, 1];

const msgArea = document.querySelector('.messages');

msgArea.innerHTML = `Unsorted: ${sortArr}`;

function sortEm(arr1, arr2) {
    console.log(arr1, arr2, '✅');
    let sortedArr = [];
    if (arr1[0] > arr2[0]) {
        sortedArr.push(arr1[0]);
        sortedArr.push(arr2[0]);
    } else {
        sortedArr.push(arr2[0]);
        sortedArr.push(arr1[0]);
    }

    console.log('>>>', sortedArr);
}

const splitEm = (arr) => {
    // if (arr.length == 1) return arr;
    // return splitEm(arr.splice(arr.length / 2 + 1));
    let tempArr1 = [];
    let tempArr2 = [];

    // if (tempArr1.length === 1) {
    //     console.log(tempArr1, tempArr2);
    //     sortEm(tempArr1, tempArr2);
    // }

    for (let a = 0; a < arr.length / 2; a++) {
        tempArr1.push(arr[a]);
    }

    for (let b = arr.length / 2; b < arr.length; b++) {
        tempArr2.push(arr[b]);
    }

    if (tempArr1.length > 1) splitEm(tempArr1);
    if (tempArr2.length > 1) splitEm(tempArr2);

    // console.log(tempArr1, tempArr2);
    sortEm(tempArr1, tempArr2);
};

const mergeSort = (arr) => {
    // first, split the array into 2;
    // if it can be split again, repeat
    msgArea.innerHTML += `<br><br><p>${splitEm(arr)}</p>`;
};

mergeSort(sortArr);
