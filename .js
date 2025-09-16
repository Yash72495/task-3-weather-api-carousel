
        document.addEventListener('DOMContentLoaded', function() {
            const carouselContainer = document.querySelector('.carousel-container');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const indicators = document.querySelectorAll('.indicator');
            
            let currentSlide = 0;
            const slideCount = slides.length;
            
            // Function to update carousel position
            function updateCarousel() {
                carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
                
                // Update indicators
                indicators.forEach((indicator, index) => {
                    if (index === currentSlide) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }
            
            // Next slide function
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slideCount;
                updateCarousel();
            }
            
            // Previous slide function
            function prevSlide() {
                currentSlide = (currentSlide - 1 + slideCount) % slideCount;
                updateCarousel();
            }
            
            // Add event listeners to buttons
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Add event listeners to indicators
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentSlide = index;
                    updateCarousel();
                });
            });
            
            // Auto-advance slides every 5 seconds
            setInterval(nextSlide, 5000);
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                }
            });
        });
