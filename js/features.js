(function () {
    const photos = document.querySelectorAll('.photos img');
    const images = [];
    let currentImageIndex = 0;
    let prevButton, nextButton, lightboxImg;

    photos.forEach((photo) => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;
        images.push(img);


        photo.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
    
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;
    
            images.push(img);
    
            lightbox.appendChild(img);
            
            prevButton = document.createElement('button');
            prevButton.classList.add('prev-button');
            prevButton.innerHTML = '&lt;';
            prevButton.addEventListener('click', () => {
                currentImageIndex--;
                if (currentImageIndex < 0) {
                    currentImageIndex = images.length - 1;
                }
                updateLightboxImage();
            });
            lightbox.appendChild(prevButton);
    
            nextButton = document.createElement('button');
            nextButton.classList.add('next-button');
            nextButton.innerHTML = '&gt;';
            nextButton.addEventListener('click', (e) => {
                e.stopPropagation();
                currentImageIndex++;
                if (currentImageIndex >= images.length) {
                    currentImageIndex = 0;
                }
                updateLightboxImage();
            });
            lightbox.appendChild(nextButton);
    
            function updateLightboxImage() {
                const currentImage = images[currentImageIndex];
                img.src = currentImage.src;
                img.alt = currentImage.alt;
            }
    
            const closeButton = document.createElement('button');
            closeButton.classList.add('close-button');
            closeButton.innerHTML = '&times;';
            closeButton.addEventListener('click', () => {
                lightbox.remove();
            });
            lightbox.appendChild(closeButton);
    
            lightbox.classList.add('visible');
            document.body.appendChild(lightbox);
        });
    });
})();