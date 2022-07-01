const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function reverse(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function reversev2(array) {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i],
    ];
  }
  return array;
}

console.log(reverse(array));
console.log(reversev2(array));
