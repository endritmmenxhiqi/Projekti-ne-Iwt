document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.EM-image-container img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
  }

  // Show the first image initially
  showImage(currentIndex);

  // Change image on mouse click
  document.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Change image on arrow key press
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  });
});
