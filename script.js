tailwind.config = {
    theme: {
        extend: {
            colors: {
                'lyhana-blue': '#0073E6',
                'lyhana-light-blue': '#00BFFF',
                'lyhana-purple': '#8A2BE2'
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite'
            }
        }
    }
}

// Initialisation des animations et fonctionnalités
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Fermer le menu mobile après clic
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 100) {
                nav.classList.add('shadow-lg');
                nav.classList.add('bg-white/95');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.remove('bg-white/95');
            }
        }
        
        // Back to top button
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.add('opacity-0', 'invisible');
                backToTop.classList.remove('opacity-100', 'visible');
            }
        }
    });

    // Back to top functionality
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Ici vous pouvez ajouter le code pour envoyer le formulaire
            alert('Thank you for your message! We will get back to you soon. ✨');
            this.reset();
        });
    }

    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Compteurs animés
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    };

    // Observer pour déclencher les compteurs
    const statsSection = document.querySelector('#about');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // Filtrage du portfolio
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mise à jour du bouton actif
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-lyhana-blue', 'text-white'));
            button.classList.add('active', 'bg-lyhana-blue', 'text-white');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const closeLightbox = document.getElementById('close-lightbox');

    if (lightboxTriggers.length > 0 && lightboxModal && lightboxImage && lightboxTitle && closeLightbox) {
        lightboxTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const imageSrc = trigger.getAttribute('data-image');
                const title = trigger.getAttribute('data-title');
                
                lightboxImage.src = imageSrc;
                lightboxImage.alt = title;
                lightboxTitle.textContent = title;
                
                lightboxModal.classList.remove('opacity-0', 'pointer-events-none');
                lightboxModal.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
            });
        });

        closeLightbox.addEventListener('click', () => {
            lightboxModal.classList.add('opacity-0', 'pointer-events-none');
            lightboxModal.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        });

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.add('opacity-0', 'pointer-events-none');
                lightboxModal.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = '';
            }
        });
    }

    // Animation du marquee pour les clients
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        const contentWidth = marqueeContent.scrollWidth;
        const containerWidth = document.querySelector('.marquee-container').offsetWidth;
        let position = 0;
        
        function animateMarquee() {
            position -= 1;
            if (position <= -contentWidth) {
                position = containerWidth;
            }
            marqueeContent.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animateMarquee);
        }
        
        animateMarquee();
    }

    // Handle window resize
    function handleResize() {
        // Adjust marquee speed based on screen size
        const marqueeContent = document.querySelector('.marquee-content');
        if (marqueeContent) {
            const speed = window.innerWidth < 768 ? 0.5 : 1;
            marqueeContent.style.animationDuration = `${100/speed}s`;
        }
        
        // Adjust process timeline for mobile
        const processSteps = document.querySelectorAll('.process-step');
        if (window.innerWidth < 1024) {
            processSteps.forEach(step => {
                step.style.marginLeft = '0';
                step.style.marginRight = '0';
            });
        }
    }

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
});