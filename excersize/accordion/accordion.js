const accordionHeaders = document.querySelectorAll(".accordion-header");
const activeStr = "is-active";
const handleClickAccordion = (e) => {
  const content = e.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(activeStr);

  if (!content.classList.contains(activeStr)) {
    content.style.height = "0px";
  }

  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
};
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
