

const showSlide = (index) => {
    images.forEach((image, i) => {
      image.classList.remove('active');
      if (i === index) {
        image.classList.add('active');
      }
    });
  };
  
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  };
  
  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  };