window.addEventListener("load", function () {
  function renderSweetAlert() {
    const template = `
    <div class="sweet-alert">
    <i class="fa fa-check sweet-icon"></i>
    <p class="sweet-text">Chúc mừng bạn đã học Js thành công</p>
    </div>  
    `;
    document.body.insertAdjacentHTML("beforeend", template);
  }

  const btnDemo = document.querySelector(".button-demo");
  btnDemo.addEventListener("click", function () {
    renderSweetAlert();
    const sweetItem = document.querySelector(".sweet-alert");
    if (sweetItem) {
      setTimeout(function () {
        sweetItem && sweetItem.parentNode.removeChild(sweetItem);
      }, 3000);
    }
  });
});
