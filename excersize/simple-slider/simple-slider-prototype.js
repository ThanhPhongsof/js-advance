window.addEventListener("load", function () {
  function Slider() {
    this.slider = document.querySelector(".slider");
    this.sliderMain = document.querySelector(".slider-main");
    this.sliderItem = document.querySelectorAll(".slider-item");
    this.dotItem = document.querySelectorAll(".slider-dot-item");

    this.nextBtn = document.querySelector(".slider-next");
    this.nextPrev = document.querySelector(".slider-prev");

    sliderItemWidth = this.sliderItem[0].offsetWidth;
    slidersLength = this.sliderItem.length;
    this.positionX = 0;
    this.index = 0;
    this.nextBtn.addEventListener("click", () => {
      this.handleChangeSlide(1);
    });
    this.nextPrev.addEventListener("click", () => {
      this.handleChangeSlide(-1);
    });
    [...this.dotItem].forEach((item) =>
      item.addEventListener("click", (e) => this.handleChangeDots(e))
    );
  }
  new Slider();
  Slider.prototype.handleChangeDots = function (e) {
    [...this.dotItem].forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");

    slideIndex = parseInt(e.target.dataset.index);
    this.index = slideIndex;
    this.positionX = -1 * this.index * sliderItemWidth;

    this.sliderMain.style = `transform:translateX(${this.positionX}px)`;
  };

  Slider.prototype.handleChangeSlide = function (direction) {
    if (direction === 1) {
      if (this.index >= slidersLength - 1) {
        this.index = slidersLength - 1;
        return;
      }
      this.positionX -= sliderItemWidth;
      this.index++;
    } else if (direction === -1) {
      if (this.index <= 0) {
        this.index = 0;
        return;
      }
      this.positionX += sliderItemWidth;
      this.index--;
    }

    this.sliderMain.style = `transform:translateX(${this.positionX}px)`;
    [...this.dotItem].forEach((el) => el.classList.remove("active"));
    this.dotItem[this.index].classList.add("active");
  };
});
