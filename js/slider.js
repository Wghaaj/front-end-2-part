class Slider {
  defaultOptions = {
    autoplay: true,
    autoplayTimeout: 1500,
    nav: true,
    infinite: true,
    pauseIfMouseOver: false,
  }

  slider;
  slideItems;
  prevNav;
  nextNav;
  nav;
  activeSlide;
  autoplayTimeout;
  autoplayIntervalId;
  pauseIfMouseOver;

  constructor(selector, params) {
    this.slider = document.querySelector(selector);
    this.nav = params.nav ?? this.defaultOptions.nav;
    this.infinite = params.infinite ?? this.defaultOptions.infinite;
    this.autoplay = params.autoplay ?? this.defaultOptions.autoplay;
    this.autoplayTimeout = params.autoplayTimeout ?? this.defaultOptions.autoplayTimeout;
    this.pauseIfMouseOver = params.pauseIfMouseOver ?? this.defaultOptions.pauseIfMouseOver;

    if (this.slider) {
      console.log(this.slider);
      this.init();
    } else {
      throw new Error(`Slider selector ${selector} is not valid.`)
    }
  }

  prevSlide() {
    if (this.activeSlide > 0) {
      this.activeSlide--;
      this.renderSlides();
      this.activeSlide === 0 && !this.infinite
        ? this.prevNav.setAttribute("disabled", "true")
        : this.nextNav.removeAttribute("disabled");
    } else if (this.activeSlide === 0) {
      if (this.infinite) {
        this.activeSlide = this.slideItems.length - 1;
        this.renderSlides();
      }
    }
    clearInterval(this.autoplayIntervalId);
    this.autoplayIntervalId = setInterval(() => this.nextSlide(), this.autoplayTimeout);
  }

  nextSlide() {
    if (this.activeSlide < this.slideItems.length - 1) {
      this.activeSlide++;
      this.renderSlides();
      this.activeSlide === this.slideItems.length - 1 && !this.infinite
        ? this.nextNav.setAttribute("disabled", "true")
        : this.prevNav.removeAttribute("disabled");
    } else if (this.activeSlide === this.slideItems.length - 1) {
      if (this.infinite) {
        this.activeSlide = 0;
        this.renderSlides();
      }
    }
    clearInterval(this.autoplayIntervalId);
    this.autoplayIntervalId = setInterval(() => this.nextSlide(), this.autoplayTimeout);
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
    this.slider.appendChild(navWrapper);
  }

  renderSlides() {
    this.slideItems = this.slider.querySelectorAll('.slide-item');

    this.slideItems.forEach((slide, index) => {
      if (index === this.activeSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    })
  }

  init() {
    console.dir(this.slider);
    this.activeSlide = 0;
    this.nav && this.renderNav();
    this.renderSlides();
    !this.infinite && this.prevNav.setAttribute("disabled", "true");
    if (this.autoplay) {
      this.autoplayIntervalId = setInterval(() => this.nextSlide(), this.autoplayTimeout);
    }
    if (this.pauseIfMouseOver) {
      this.slider.addEventListener('mouseenter', () => {
        clearInterval(this.autoplayIntervalId);
      });
      this.slider.addEventListener('mouseleave', () => {
        this.autoplayIntervalId = setInterval(() => this.nextSlide(), this.autoplayTimeout);
      });
    }
  }
}