(function () {
    const photos = document.querySelectorAll('.photos img');
    let currentImageIndex = 0;
    const images = [];

    photos.forEach((photo) => {
        photo.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;

            images.push(img);

            const prevButton = document.createElement('button');
            prevButton.classList.add('prev-button');
            prevButton.innerHTML = '&#8592;';
            prevButton.addEventListener('click', () => {
                currentImageIndex--;
                if (currentImageIndex < 0) {
                    currentImageIndex = images.length - 1;
                }
                updateLightboxImage();
            });

            const nextButton = document.createElement('button');
            nextButton.classList.add('next-button');
            nextButton.innerHTML = '&#8594;';
            nextButton.addEventListener('click', () => {
                currentImageIndex++;
                if (currentImageIndex >= images.length) {
                    currentImageIndex = 0;
                }
                updateLightboxImage();
            });

            const closeButton = document.createElement('button');
            closeButton.classList.add('close-button');
            closeButton.innerHTML = '&times;';
            closeButton.addEventListener('click', () => {
                lightbox.remove();
            });

            lightbox.appendChild(img);
            lightbox.appendChild(prevButton);
            lightbox.appendChild(nextButton);
            lightbox.appendChild(closeButton);

            lightbox.classList.add('visible');
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });

            currentImageIndex = images.length - 1;
        });
    });

    function updateLightboxImage() {
        const lightboxImg = document.querySelector('.lightbox img');
        const currentImage = images[currentImageIndex];
        lightboxImg.src = currentImage.src;
        lightboxImg.alt = currentImage.alt;
    }

})();