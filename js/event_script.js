document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const socialIcons = document.querySelectorAll('.social-icon');
    const similarArticlesContainer = document.getElementById('similarArticlesContainer');
    const similarArticleLinks = document.querySelectorAll('.similar-article-item-link');
    const footerPolicy = document.querySelector('.footer-policy');
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');
    
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.background-image', { scale: 1.1, opacity: 0 });
    gsap.set('.event-title', { y: 30, opacity: 0 });
    gsap.set('.event-description', { y: 30, opacity: 0 });
    gsap.set('.dark-section', { y: 50, opacity: 0 });
    gsap.set('.section-title', { y: 30, opacity: 0 });
    gsap.set('.text-paragraph', { y: 30, opacity: 0 });
    gsap.set('.carousel-container', { y: 30, opacity: 0 });
    gsap.set('.site-link', { y: 30, opacity: 0 });
    gsap.set('.red-line', { scaleX: 0, opacity: 0 });
    gsap.set('.social-section', { y: 30, opacity: 0 });
    gsap.set('.similar-articles-section', { y: 30, opacity: 0 });
    gsap.set('.footer', { y: 30, opacity: 0 });
    
    gsap.to('.logo', { 
        x: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: "power3.out", 
        delay: 0.2 
    });
    
    gsap.to('.burger-menu', { 
        x: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: "power3.out", 
        delay: 0.2 
    });
    
    gsap.to('.background-image', { 
        scale: 1, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power2.out", 
        delay: 0.3 
    });
    
    gsap.to('.event-title', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6
    });
    
    gsap.to('.event-description', {
        y: 0,
        opacity: 0.8,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8
    });
    
    gsap.to('.dark-section', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.0
    });
    
    gsap.to('.section-title', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.2
    });
    
    gsap.to('.text-paragraph', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1.4
    });
    
    gsap.to('.carousel-container', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.8
    });
    
    gsap.to('.site-link', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 2.0
    });
    
    gsap.to('.red-line', {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 2.2
    });
    
    gsap.to('.social-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 2.4
    });
    
    gsap.to('.similar-articles-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 2.6
    });
    
    gsap.to('.footer', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 2.8
    });
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            gsap.timeline()
                .to(this, { scale: 0.9, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" })
                .to({}, { duration: 0.2 })
                .to({}, {
                    duration: 0.3,
                    onComplete: () => {
                        window.location.href = 'index.html';
                    }
                });
        });
        
        burgerMenu.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.1, duration: 0.2, ease: "power2.out" });
        });
        
        burgerMenu.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.2, ease: "power2.inOut" });
        });
    }
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.1, duration: 0.2, ease: "power2.out" });
        });
        
        icon.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.2, ease: "power2.inOut" });
        });
    });
    
    if (similarArticlesContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        similarArticlesContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - similarArticlesContainer.offsetLeft;
            scrollLeft = similarArticlesContainer.scrollLeft;
            similarArticlesContainer.style.cursor = 'grabbing';
            similarArticlesContainer.style.userSelect = 'none';
        });

        similarArticlesContainer.addEventListener('mouseleave', () => {
            isDown = false;
            similarArticlesContainer.style.cursor = 'grab';
            similarArticlesContainer.style.userSelect = 'auto';
        });

        similarArticlesContainer.addEventListener('mouseup', () => {
            isDown = false;
            similarArticlesContainer.style.cursor = 'grab';
            similarArticlesContainer.style.userSelect = 'auto';
        });

        similarArticlesContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - similarArticlesContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            similarArticlesContainer.scrollLeft = scrollLeft - walk;
        });

        similarArticlesContainer.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        similarArticlesContainer.style.cursor = 'grab';
    }
    
    similarArticleLinks.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.similar-article-img');
            gsap.to(img, {
                scale: 1.08,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.similar-article-img');
            gsap.to(img, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    });
    
    footerNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href !== '#') {
                gsap.timeline()
                    .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                    .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" })
                    .to({}, { duration: 0.2 })
                    .to({}, {
                        duration: 0.3,
                        onComplete: () => {
                            window.location.href = href;
                        }
                    });
            }
        });
    });
    
    if (footerPolicy) {
        footerPolicy.addEventListener('click', function(e) {
            e.preventDefault();
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
            
            alert('Политика конфиденциальности');
        });
    }
    
});