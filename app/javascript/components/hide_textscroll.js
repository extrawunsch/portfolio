const initScrollFunc = () => {
  const windowHeight = window.scrollY;
  const textscroll = document.getElementById("marquee__container")
  window.addEventListener("scroll", () => {
    if (windowHeight <= 30) {
      textscroll.classList.add('show');
    } else {
      textscroll.classList.remove('show');
    }
  });
};

export { initScrollFunc };