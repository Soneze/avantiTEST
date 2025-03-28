// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    // Swiper initialization
    const swiper = new Swiper('.newArrivalsSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });

    // Add more product slides
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    for (let i = 0; i < 4; i++) {
        const slide = document.querySelector('.swiper-slide').cloneNode(true);
        swiperWrapper.appendChild(slide);
    }

    // Mobile dropdown handling
    const dropdown = document.querySelector('.nav-item.dropdown');
    const dropdownMenu = document.querySelector('.mega-menu');
    
    if (window.innerWidth < 992) {
        dropdown.addEventListener('click', function(e) {
            if (!dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.toggle('show');
            }
        });
    }
});

// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResult = document.getElementById('searchResult');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        searchResult.textContent = `Você buscou por: "${searchTerm}"`;
        searchResult.classList.remove('d-none');
    } else {
        searchResult.classList.add('d-none');
    }
} 