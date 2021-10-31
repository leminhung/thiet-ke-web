const divElement = document.querySelector(".result");
const arr = [3, 8, 7, 6, 5, -4, -3, 2, 1];

arr.sort((a, b) => a - b);

// for(var i=0; i<arr.length; i++) {
//   let k = arr[i]
//   divElement
// }

divElement.innerHTML = arr;
