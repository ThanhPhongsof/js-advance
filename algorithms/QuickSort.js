const quickSort = (array) => {
  const arr = [...array];
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const smaller = arr.filter((item) => item < pivot);
  const bigger = arr.filter((item) => item > pivot);
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
};

const data = [3, 5, 4, 33, 1, 2, 9, 4, 10, 8, 877, 22];
console.log("new array", quickSort(data));
console.log("old array", data);
