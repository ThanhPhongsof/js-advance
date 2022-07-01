const insertionSort = (array) => {
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
};

const data = [3, 5, 4];
console.log("new array", insertionSort(data));
console.log("old array", data);
