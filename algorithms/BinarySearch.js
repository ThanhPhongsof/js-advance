const binarySearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;
  while (low < high) {
    const midIndex = Math.floor((low + high) / 2);
    const midValue = array[midIndex];
    const logValue = {
      low: low,
      high: high,
      midIndex: midIndex,
      midValue: midValue,
    };
    console.log("logValue", logValue);
    if (midValue === value) return midIndex;

    if (midValue > value) {
      hight = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }
  return null;
};

// const data = [3, 5, 9, 10, 15, 22, 36, 39, 45, 88, 88, 99, 101, 2000];
const data = [3, 5, 9];
console.log("search value", binarySearch(data, 5));
