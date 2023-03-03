(function () {
    const [...sliders] = document.querySelectorAll(".testimonials__item ");

    for (let i = 0; i < sliders.length; i++) {
        if (window.innerWidth > 768) {
            if (sliders[i].dataset.slide === "2") {
                sliders[i].classList.add("active");
            }
        }
    }

    document.querySelectorAll(".testimonials__arrow").forEach((e) => {
        e.addEventListener("click", (e) => {
            let firstActive;
            let lastActive;
            for (let i = 0; i < sliders.length; i++) {
                if (sliders[i].classList.contains("active")) {
                    if (firstActive === undefined) {
                        firstActive = i;
                    }
                    lastActive = i;
                }
            }
            if (e.target.dataset.direction === "right") {
                if (sliders.length === lastActive + 1) {
                    return;
                }
                sliders[firstActive].classList.remove("active", "animate__animated", "animate__slideInLeft");
                sliders[lastActive].classList.remove("animate__animated", "animate__slideInLeft");
                if (window.innerWidth > 768) {
                    sliders[lastActive].classList.add("animate__animated", "animate__slideInRight");
                }
                sliders[lastActive + 1].classList.add("active", "animate__animated", "animate__slideInRight");
            } else {
                if (firstActive === 0) {
                    return;
                }
                sliders[lastActive].classList.remove("active", "animate__animated", "animate__slideInRight");
                sliders[firstActive].classList.remove("animate__animated", "animate__slideInRight");
                if (window.innerWidth > 768) {
                    sliders[firstActive].classList.add("active", "animate__animated", "animate__slideInLeft");
                }
                sliders[firstActive - 1].classList.add("active", "animate__animated", "animate__slideInLeft");
            }
        });
    });
})();
