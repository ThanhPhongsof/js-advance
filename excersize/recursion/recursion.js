const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5, [7777, [12, 99]]],
    [1, 2],
  ],
];

function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, b) => a.concat(Array.isArray(b) ? flatArray(b, deep - 1) : b),
          []
        )
      : arr.slice();

  return result;
}
console.log(flatArray(complexArr, Infinity));
