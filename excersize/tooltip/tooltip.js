window.addEventListener("load", function () {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function (e) {
    const title = e.target.dataset.tooltip;
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);
    const cords = e.target.getBoundingClientRect();
    const { top, left, width } = cords;
    const tooltipHeight = tooltipDiv.offsetHeight;
    const triangleHeight = 20;
    tooltipDiv.style.left = `${left - width / 2}px`;
    tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;
  });
  text.addEventListener("mouseleave", function (e) {
    const tooltip = document.querySelector(".tooltip-text");
    if (!tooltip) return;
    tooltip.parentNode.removeChild(tooltip);
  });
});
