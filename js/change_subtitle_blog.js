(function () {
    const text = document.getElementById("gradient-text");
    const gradient = document.createElement("span");
    gradient.innerText = text.innerText;
    gradient.style.backgroundImage = "linear-gradient(to right, red, orange)";
    gradient.style.webkitBackgroundClip = "text";
    gradient.style.webkitTextFillColor = "transparent";
    gradient.style.animation = "gradient 3s linear infinite";
  
    text.innerText = "";
    text.appendChild(gradient);
  
    function animateGradient() {
      let colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
      ];
      let index = 0;
  
      setInterval(() => {
        if (index >= colors.length) {
          index = 0;
        }
        gradient.style.backgroundImage = `linear-gradient(to right, ${
          colors[index]
        }, ${colors[index + 1]})`;
        index++;
      }, 5000);
    }
  
    animateGradient();
  })();
  