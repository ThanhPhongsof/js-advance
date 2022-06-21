window.addEventListener("load", function () {
  const images = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    [...images].forEach((item) => {
      const itemoOffsetTop = item.offsetTop - item.offsetHeight;
      if (windowScrollTop > itemoOffsetTop) {
        item.classList.add("active");
      }
    });
  });
});
