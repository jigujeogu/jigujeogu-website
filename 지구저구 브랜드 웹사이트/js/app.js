document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.main-image');
  
  if (mainImage) {
    // If the image is already loaded from cache or loaded before DOMContentLoaded
    if (mainImage.complete) {
      mainImage.classList.add('loaded');
    } else {
      // Trigger class once image fully loads
      mainImage.addEventListener('load', () => {
        mainImage.classList.add('loaded');
      });
      
      // Fallback in case load event fails or image path is broken
      setTimeout(() => {
        mainImage.classList.add('loaded');
      }, 1500);
    }
  }
});
