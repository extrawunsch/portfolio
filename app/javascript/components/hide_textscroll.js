const initScrollFunc = () => {
  const textscroll = document.getElementById("marquee__container")
  console.log(textscroll);
  window.addEventListener("scroll", () => {
    if ( window.scrollY >= 40) {
      textscroll.classList.add('hide');
    } else {
      textscroll.classList.remove('hide');
    }
  });
};

export { initScrollFunc };