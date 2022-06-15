// 1. element.insertAdjacentText(position,text)
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "before-begin");
h3.insertAdjacentText("afterbegin", "after-begin");
h3.insertAdjacentText("beforeend", "before-end");
h3.insertAdjacentText("afterend", "after-end");

// 2. element.insertAdjacentElement(position,element)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentHTML("beforeend", strong);

// 3. element.insertAdjacentHTML
const template = `
<ul class="menu2">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>`;

document.body.insertAdjacentHTML("beforeend", template);
