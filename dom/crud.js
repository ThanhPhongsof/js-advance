// Thêm xóa sửa node trong js
// 1. Tạo ra element trong js: document.createElement("tag")
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector

// 3. document.createTextNode
const text = document.createTextNode("Hello my name is Phong");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// 4. element.cloneNode
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);

// 5. element.hasChildNodes -> kiểm tra có phần tử hay không, có -> true, không thì trả về false
document.querySelector("h3").hasChildNodes();
