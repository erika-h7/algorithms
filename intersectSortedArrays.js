const arr1 = [1, 3, 3, 6, 23, 34, 547];
const arr2 = [2, 3, 5, 10, 34, 547, 999];

// [ 3, 34, 547 ]

function intersectSortedArrays(arr1, arr2) {
  let newArray = [];
  let j = 0;

  for (let i = 0; i < arr2.length; i++) {
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        newArray.push(arr1[i]);
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  }
  return newArray;
}

console.log(intersectSortedArrays(arr1, arr2));
