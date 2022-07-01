// 1. arrayReplace
// [1,2,3,1,1] => [5,2,3,5,5]
const data = [1, 2, 3, 1, 1];
function arrayReplace(data, elementToReplace, newElement) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === elementToReplace) {
      data[i] = newElement;
    }
  }
  return data;
}
console.log(arrayReplace(data, 1, 5));
