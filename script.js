var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const paragraph = faq.querySelector('p');
    paragraph.style.display = 'none';
    paragraph.style.transition = 'all ease 0.3s';
    paragraph.style.overflow = 'hidden';
    
    faq.addEventListener('click', () => {
        if(paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
            paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
            paragraph.style.opacity = '1';
        } else {
            paragraph.style.maxHeight = '0';
            paragraph.style.opacity = '0';
            setTimeout(() => {
                paragraph.style.display = 'none';
            }, 300);
        }
    });
});

// Create a new loading design with circular spinner
const loadingOverlay = document.createElement('div');
loadingOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s;
`;

const loadingContainer = document.createElement('div');
loadingContainer.style.cssText = `
    position: relative;
    text-align: center;
`;

// Create spinner element
const spinner = document.createElement('div');
spinner.style.cssText = `
    width: 60px;
    height: 60px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid lightseagreen;
    border-radius: 50%;
    animation: spin 1s linear infinite;
`;

// Create loading text
const loadingText = document.createElement('div');
loadingText.style.cssText = `
    margin-top: 20px;
    color: lightseagreen;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
`;
loadingText.textContent = 'Loading...';

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Assemble and add to DOM
loadingContainer.appendChild(spinner);
loadingContainer.appendChild(loadingText);
loadingOverlay.appendChild(loadingContainer);
document.body.appendChild(loadingOverlay);

// Remove loading screen after 4 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loadingOverlay);
        }, 500);
    }, 3000);
});
// Create heart loading animation
const heartContainer = document.createElement('div');
heartContainer.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -80px;
`;

const heart = document.createElement('div'); 
heart.style.cssText = `
    position: relative;
    width: 100px;
    height: 90px;
    margin: 0 auto;
    animation: heartBeat 1.2s infinite;
`;

const style2 = document.createElement('style');
style2.textContent = `
    @keyframes heartBeat {
        0% {
            transform: scale(1);
        }
        14% {
            transform: scale(1.3);
        }
        28% {
            transform: scale(1);
        }
        42% {
            transform: scale(1.3);
        }
        70% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style2);

heart.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100" height="90">
        <path fill="lightseagreen" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
    </svg>
`;

heartContainer.appendChild(heart);
loadingContainer.insertBefore(heartContainer, spinner);
// Remove spinner element
loadingContainer.removeChild(spinner);
