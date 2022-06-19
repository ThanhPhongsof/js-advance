window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("input", handlerHightlight);
  function handlerHightlight(e) {
    let filter = e.target.value;
    filter = filter.toLowerCase();
    [...items].forEach((item) => {
      const text = item.textContent;
      const index = text.toLowerCase().indexOf(filter);
      if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
        item.innerHTML = `${text.substring(
          0,
          index
        )}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span><span class="text-bold">${text.substring(
          index + filter.length
        )}</span>`;
      }
    });
  }
});
