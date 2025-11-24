// BloodLink - Homepage Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize functionality
    initNavigation();
    initCTAButton();
    initAnimations();
    checkImageLoad();
});

function initNavigation() {
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });
}

function initCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 150);
            
            // Redirect to signup page
            setTimeout(() => {
                window.location.href = 'signup.html';
            }, 500);
        });
    }
}

function initAnimations() {
    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-background');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
    
    // Add floating animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                ctaButton.style.transform = 'translateY(-3px)';
            }, 1000);
        }, 3000);
    }
}

function checkImageLoad() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const img = new Image();
        img.src = './images/don.jpg';
        
        img.onload = function() {
            console.log('Image loaded successfully');
        };
        
        img.onerror = function() {
            console.log('Image failed to load, using fallback background');
            heroBackground.classList.add('fallback');
            // Apply gradient background directly
            heroBackground.style.background = 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)';
        };
    }
}

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (hero) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

console.log('BloodLink homepage loaded successfully!');
