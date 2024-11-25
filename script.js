
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




  
  const carouselInner = document.querySelector('.carousel-inner');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.dots');
  
  const images = carouselInner.children;
  let currentIndex = 0;
  let isDragging = false;
  let startX;
  
  const slide = () => {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  };
  
  const createDots = () => {
    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        currentIndex = i;
        slide();
        updateDots();
      });
      dotsContainer.appendChild(dot);
    }
  };
  
  const updateDots = () => {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };
  
  createDots();
  slide();
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slide();
    updateDots();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slide();
    updateDots();
  });
  
  carouselInner.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
  });
  
  carouselInner.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    carouselInner.style.transform = `translateX(-${currentIndex * 100 + diff}%)`;
  });
  
  carouselInner.addEventListener('touchend', () => {
    isDragging = false;
    if (Math.abs(startX - currentX) > 50) {
      if (startX > currentX) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });