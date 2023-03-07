const photos = document.querySelectorAll('.photos img');

// Додавання обробника події click до кожного зображення
photos.forEach((photo) => {
  photo.addEventListener('click', () => {
    // Створення нового елемента div з класом "lightbox"
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    // Створення нового елемента img для зображення в lightbox
    const img = document.createElement('img');
    img.src = photo.src;

    // Додавання зображення в lightbox
    lightbox.appendChild(img);

    // Додавання lightbox до body
    document.body.appendChild(lightbox);

    // Відкриття lightbox
    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});




