/**
 * 
     <div class="lightbox">
      <div class="lightbox-content">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          class="lightbox-image"
        />
      </div>
    </div>
 * 
 */

const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handleZoomImage));

function handleZoomImage(e) {
  const image = e.target.getAttribute("src");
  const template = `
  <div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-previous"></i>
      <img
        src="${image}"
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div>
`;
  document.body.insertAdjacentHTML("beforeend", template);
}

document.body.addEventListener("click", function (e) {
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  }
});
