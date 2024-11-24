

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
  const menuButton = document.querySelector('.menubutton');
  const sidebar = document.querySelector('.sidebar');
  const sidebarElements = sidebar.querySelectorAll('*'); // Select all elements within the sidebar
  
  menuButton.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
  });
  
  sidebarElements.forEach(element => {
    element.addEventListener('click', () => {
      sidebar.style.display = 'none';
    });
  });