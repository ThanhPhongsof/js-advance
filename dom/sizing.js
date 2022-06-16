const box = document.createElement("div");
box.classList.add("boxed");
box.textContent = "Boxed";
document.body.appendChild(box);

const boxed = document.querySelector(".boxed");
console.log(boxed.offsetHeight); // chiều cao của phần tử
console.log(boxed.offsetWidth); // độ rộng của phần tử
console.log(boxed.offsetLeft); // vị trí của nó so với bên trái
console.log(boxed.offsetTop); // vị trí của nó so với phía trên
console.log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha

console.log(boxed.clientHeight); // chiều cao của phần tử trừ đi border
console.log(boxed.clientWidth); // độ rộng của phần tử trừ đi border
console.log(boxed.clientLeft); // vị trí của nó so với phần bên trái border
console.log(boxed.clientTop); // vị trí của nó so với phần phía trên border

console.log("innerHeight", window.innerHeight);
console.log("outerHeight", window.outerHeight);
console.log("innerWidth", window.innerWidth);
console.log("outerWidth", window.outerWidth);

// selector.getBoundingClientRect() -> lấy ra tọa độ, kích thước của phần tử
console.log("getBoundingClientRect", boxed.getBoundingClientRect());
