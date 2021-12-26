# SLIDER

## 1. Vanilla JavaScript🎉

- 1.1

  ![](img/slider1.png)

  ```javascript
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';
  const slides = document.querySelectorAll(".slide");
  const sliderBtnLeft = document.querySelector(".slider__btn--left");
  const sliderBtnRight = document.querySelector(".slider__btn--right");
  let curSlide = 0;

  const changeSlide = function (targetSlide) {
    slides.forEach(function (slide, i) {
      slide.style.transform = `translateX(${(i - targetSlide) * 100}%)`;
    });
  };
  changeSlide(0);

  const nextSlide = function () {
    if (curSlide === 0) {
      curSlide = slides.length - 1;
    } else {
      curSlide--;
    }
    changeSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === slides.length - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    changeSlide(curSlide);
  };
  sliderBtnLeft.addEventListener("click", nextSlide);
  sliderBtnRight.addEventListener("click", prevSlide);
  ```

- 1.2

  ![](img/slider1.png)

  ```javascript
  const a = 1;
  ```
