// 3 arrayChunking
// [1,2,3,4,5,6,7,8], 3
// [[1,2,3],[4,5,6],[7,8]]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function arrayChunking(array, size) {
  let result = [];
  for (let i = 0; i < array.length - 1; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

console.log(arrayChunking(array, 3));
