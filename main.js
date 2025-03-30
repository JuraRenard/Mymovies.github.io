(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
     // Initialize carousel
        const carouselTrack = document.getElementById('carouselTrack');
        const carouselDots = document.getElementById('carouselDots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const carouselItems = document.querySelectorAll('.carousel-item');
        
        let currentIndex = 0;
        let autoScrollInterval;
        const visibleItems = 3; // Number of items visible at once
        const scrollSpeed = 3000; // Auto-scroll speed in milliseconds

        // Create dots for navigation
        carouselItems.forEach((item, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            
            carouselDots.appendChild(dot);
        });

        // Auto-scroll function
        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                goToSlide((currentIndex + 1) % carouselItems.length);
            }, scrollSpeed);
        }

        // Stop auto-scroll when interacting
        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }

        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            const slidePosition = index * -320; // Width of each item + margin
            carouselTrack.style.transform = `translateX(${slidePosition}px)`;
            
            // Update active dot
            document.querySelectorAll('.carousel-dot').forEach(dot => {
                dot.classList.remove('active');
            });
            carouselDots.children[index].classList.add('active');
        }

        // Button event listeners
        prevBtn.addEventListener('click', () => {
            goToSlide((currentIndex - 1 + carouselItems.length) % carouselItems.length);
            stopAutoScroll();
            startAutoScroll();
        });

        nextBtn.addEventListener('click', () => {
            goToSlide((currentIndex + 1) % carouselItems.length);
            stopAutoScroll();
            startAutoScroll();
        });

        // Mouse events for pausing auto-scroll
        carouselTrack.addEventListener('mouseenter', stopAutoScroll);
        carouselTrack.addEventListener('mouseleave', startAutoScroll);

        // Start auto-scroll
        startAutoScroll();
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Select the video element by its ID
        const loopingVideo = document.getElementById("looping-video");
    
        // Add a click event listener to the video
        loopingVideo.addEventListener("click", function () {
            // Redirect to the full video page or open a modal
            window.location.href = "full-video-page.html";
        });
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
// Get references to elements
const popupTriggers = document.querySelectorAll('.popup-trigger');
const popupContainer = document.getElementById('popup-container');
const popupText = document.getElementById('popup-text');
const closePopupButton = document.getElementById('close-popup');

// Show popup when a block is clicked
popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Get the content from the data-content attribute
        const content = trigger.getAttribute('data-content');
        popupText.textContent = content; // Update popup text

        // Show the popup
        popupContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Disable scrolling

        // Add overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    });
});

// Close popup when the close button is clicked
closePopupButton.addEventListener('click', () => {
    popupContainer.classList.add('hidden'); // Hide the popup
    document.body.style.overflow = ''; // Re-enable scrolling

    // Remove overlay
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
    }
});

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

