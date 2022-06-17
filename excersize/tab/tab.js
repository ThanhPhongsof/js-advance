const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
const handleTabClick = (e) => {
  [...tabItems].forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
  const tabNumber = e.target.dataset.tab;
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
};
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
