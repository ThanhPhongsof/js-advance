window.addEventListener("load", function () {
  const tooglePassword = document.querySelector(".toogle");
  tooglePassword.addEventListener("click", function (e) {
    const input = this.previousElementSibling;
    const currentTypeInput = input.getAttribute("type");
    const changeTypeInput =
      currentTypeInput == "password" ? "text" : "password";
    input.setAttribute("type", changeTypeInput);
  });
});
