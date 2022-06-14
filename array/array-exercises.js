// Đảo ngược 1 chuỗi. Ví dụ: "My name is Phong" -> "Phong is name My"
const reverseString = (str) => {
  if (!str) return str;
  return str.split(" ").reverse().join(" ");
};
console.log(reverseString("My name is Phong"));

// In hoa chữ cái đầu trong chữ ví dụ: "my name is phong" -> "My Name Is Phong"
const capitalizedWord = (word = "") => {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
};

const capitalizedString = (str) => {
  if (!str) return str;
  const arrStr = str
    .split(" ")
    .map((item) => capitalizedWord(item))
    .join(" ");
  console.log(arrStr);
};

capitalizedString("my name is phong");
