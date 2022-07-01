const linearSearch = (array, value) => {
  const arr = [...array];
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) index = i;
  }
  return index;
};

const data = [3, 5, 4, 33, 1, 2, 9, 4, 10, 8, 877, 22];
console.log("search value", linearSearch(data, 9));
