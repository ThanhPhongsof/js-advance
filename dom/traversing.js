// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
span.parentNode.removeChild(span);

// 2. nextElementSibling: tìm tới phàn tử kế tiếp
//    previousElementSibling: tìm tới phần tử đứng sau nó
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);

// 3. childNode: trả về hết các node bên trong bao gồm textNodes vs children: trả về các node không bao gồm textNodeslog
console.log(span.childNodes);
console.log(span.children);

// 4. firstChild vs firstElementChild
console.log(span.firstChild);
console.log(span.firstElementChild);

// 5. lastChild vs lastElementChild
console.log(span.lastChild);
console.log(span.lastElementChild);

// 6. nextSibling vs previousSibling
