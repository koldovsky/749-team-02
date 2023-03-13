(function () {
const spanText = function spanText(text) {
    let string = text.innerText;
    let spaned = '';
    for (let i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
  }
  
  const headline = document.querySelector(".header__title");
  
  spanText(headline);
  
  let animations = document.querySelectorAll('.header__title');
  
  animations.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
      letter.style.animationDelay = (i * 0.1) + 's';
    })
  })
})();
  