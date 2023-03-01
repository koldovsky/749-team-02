(function () {
        const slides = document.querySelectorAll(".carousel__slide");
        const nextBtn = document.querySelector('#next');
        const prevBtn = document.querySelector('#prev');

        let currentSlideInd = 0;
        let secondSlideInd, thirdSlideInd;

        function renderSlide() {
            let slidesToShow = [slides[currentSlideInd]];
            const slideContainer = document.querySelector(".carousel__slider");
            if (window.innerWidth > 768) {
                secondSlideInd = currentSlideInd + 1 >= slides.length ? 0 : currentSlideInd + 1;
                slidesToShow.push(slides[secondSlideInd]);
                if (window.innerWidth > 992) {
                    thirdSlideInd = secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
                    slidesToShow.push(slides[thirdSlideInd]);
                }
            }
            slideContainer.replaceChildren(...slidesToShow);
        }

        function nextSlide() {
            currentSlideInd = currentSlideInd + 1 >= slides.length ? 0 : currentSlideInd + 1;
            renderSlide();
        }

        function prevSlide() {
            currentSlideInd = currentSlideInd - 1 < 0 ? slides.length - 1 : currentSlideInd - 1;
            renderSlide();
        }

        renderSlide();

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        window.addEventListener('resize', renderSlide)
    }
)();
