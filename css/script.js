// Testimonial Carousel
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Auto-slide every 4 seconds
    setInterval(nextSlide, 4000);
});

<!-- Link to Swiper CSS -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

<!-- Link to Swiper JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
    var swiper = new Swiper('.testimonial-carousel', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
</script>
