const interpolationSearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const midIndex =
      low +
      Math.floor((high - low) * (value - array[low])) /
        (array[high] - array[low]);
    const midValue = array[midIndex];
    if (midValue === value) return midIndex;

    if (midValue > value) {
      hight = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }
  return high;
};

// const data = [3, 5, 9, 10, 15, 22, 36, 39, 45, 88, 88, 99, 101, 2000];
const data = [3, 5, 9, 10, 11];
console.log("search value", interpolationSearch(data, 5));
