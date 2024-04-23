class Slider {
  defaultOptions = {
      autoplay: false,
      autoplayTimeout: 1500,
      nav: true,
      infinite: true,
      pauseIfMouseOver: false,
      dots: 5,
  };

  slider;
  slideItems;
  prevNav;
  nextNav;
  nav;
  activeSlide;
  autoplayIntervalID;

  constructor(selector, params) {
      this.slider = document.querySelector(selector);
      this.nav = params.nav ?? this.defaultOptions.nav;
      this.infinite = params.infinite ?? this.defaultOptions.infinite;
      this.autoplay = params.autoplay ?? this.defaultOptions.autoplay;
      this.autoplayTimeout = params.autoplayTimeout ?? this.defaultOptions.autoplayTimeout;
      this.pauseIfMouseOver = params.pauseIfMouseOver ?? this.defaultOptions.pauseIfMouseOver;
      this.dots = params.dots ?? this.defaultOptions.dots;

      if (this.slider) {
          this.init();
      } else {
          throw new Error(`Slider selector ${selector} is not valid.`);
      }
  }

  prevSlide() {
      if (this.activeSlide > 0) {
          this.activeSlide--;
      } else {
          this.activeSlide = this.slideItems.length - 1;
      }
      this.renderSlides();
  }

  nextSlide() {
      if (this.activeSlide < this.slideItems.length - 1) {
          this.activeSlide++;
      } else {
          this.activeSlide = 0;
      }
      this.renderSlides();
  }

  updateDots() {
      const dots = this.slider.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
          if (index === this.activeSlide) {
              dot.classList.add('active-dot');
          } else {
              dot.classList.remove('active-dot');
          }
      });
  }

  goToSlide(index) {
      this.activeSlide = index;
      this.renderSlides();
  }

  renderNav() {
      const navWrapper = document.createElement('div');
      navWrapper.classList.add('navigation');
      this.prevNav = document.createElement('button');
      this.nextNav = document.createElement('button');
      this.prevNav.innerText = '<';
      this.nextNav.innerText = '>';
      this.prevNav.addEventListener('click', () => this.prevSlide());
      this.nextNav.addEventListener('click', () => this.nextSlide());
      navWrapper.appendChild(this.prevNav);
      navWrapper.appendChild(this.nextNav);

      const dotsContainer = document.createElement('div');
      dotsContainer.classList.add('dots-container');
      for (let i = 0; i < this.dots; i++) {
          const dot = document.createElement('button');
          dot.classList.add('dot');
          dot.addEventListener('click', () => this.goToSlide(i));
          dotsContainer.appendChild(dot);
      }
      navWrapper.appendChild(dotsContainer);

      this.slider.appendChild(navWrapper);
      this.updateDots();
  }

  renderSlides() {
      this.slideItems.forEach((slide, index) => {
          if (index === this.activeSlide) {
              slide.classList.add("active");
          } else {
              slide.classList.remove("active");
          }
      });
      this.updateDots();
  }

  init() {
      this.slideItems = this.slider.querySelectorAll('.slide-item');
      if (this.slideItems.length === 0) {
          throw new Error(`No slide items found in slider ${this.slider}`);
      }
      this.activeSlide = 0;
      this.nav && this.renderNav();
      this.renderSlides();
      if (this.autoplay) {
          this.autoplayIntervalID = setInterval(() => this.nextSlide(), this.autoplayTimeout);
      }
      if (this.pauseIfMouseOver) {
          this.slider.addEventListener('mouseenter', () => {
              clearInterval(this.autoplayIntervalID);
          });
          this.slider.addEventListener('mouseleave', () => {
              this.autoplayIntervalID = setInterval(() => this.nextSlide(), this.autoplayTimeout);
          });
      }
  }
}
