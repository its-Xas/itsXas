




let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}


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




/*
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
  });*/