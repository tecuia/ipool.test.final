document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const socialIcons = document.querySelectorAll('.social-icon');
    const similarArticlesContainer = document.getElementById('similarArticlesContainer');
    const similarArticleLinks = document.querySelectorAll('.similar-article-item-link');
    const footerPolicy = document.querySelector('.footer-policy');
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');
    const carouselContainer = document.getElementById('carouselContainer');
    
    // Функция для определения мобильного устройства
    function isMobile() {
        return window.innerWidth <= 480;
    }
    
    // Начальная анимация
    const animDuration = isMobile() ? 0.4 : 0.8;
    const animDelay = isMobile() ? 0 : 0.2;
    
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.hero-image', { scale: 1.1, opacity: 0 });
    gsap.set('.hero-title', { y: 30, opacity: 0 });
    gsap.set('.hero-description', { y: 30, opacity: 0 });
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
        duration: animDuration, 
        ease: "power3.out", 
        delay: animDelay 
    });
    
    gsap.to('.burger-menu', { 
        x: 0, 
        opacity: 1, 
        duration: animDuration, 
        ease: "power3.out", 
        delay: animDelay 
    });
    
    gsap.to('.hero-image', { 
        scale: 1, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power2.out", 
        delay: animDelay + 0.1 
    });
    
    gsap.to('.hero-title', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 0.4
    });
    
    gsap.to('.hero-description', {
        y: 0,
        opacity: 0.8,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 0.5
    });
    
    gsap.to('.dark-section', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 0.7
    });
    
    gsap.to('.section-title', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 0.8
    });
    
    gsap.to('.text-paragraph', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        stagger: 0.15,
        ease: "power3.out",
        delay: animDelay + 0.9
    });
    
    gsap.to('.carousel-container', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 1.1
    });
    
    gsap.to('.site-link', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 1.2
    });
    
    gsap.to('.red-line', {
        scaleX: 1,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 1.3
    });
    
    gsap.to('.social-section', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 1.4
    });
    
    gsap.to('.similar-articles-section', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 1.5
    });
    
    gsap.to('.footer', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 1.6
    });
    
    // Бургер-меню
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
            if (!isMobile()) {
                gsap.to(this, { scale: 1.1, duration: 0.2, ease: "power2.out" });
            }
        });
        
        burgerMenu.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                gsap.to(this, { scale: 1, duration: 0.2, ease: "power2.inOut" });
            }
        });
    }
    
    // Социальные иконки
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            if (!isMobile()) {
                gsap.to(this, { scale: 1.1, duration: 0.2, ease: "power2.out" });
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                gsap.to(this, { scale: 1, duration: 0.2, ease: "power2.inOut" });
            }
        });
    });
    
    // Drag-to-scroll для карусели
    function initDragScroll(selector) {
        const container = document.querySelector(selector);
        if (!container) return;
        
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.cursor = 'grabbing';
            container.style.userSelect = 'none';
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
            container.style.userSelect = 'auto';
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
            container.style.userSelect = 'auto';
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5;
            container.scrollLeft = scrollLeft - walk;
        });
        
        container.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
        
        container.style.cursor = 'grab';
    }
    
    setTimeout(() => {
        initDragScroll('.carousel-container');
        initDragScroll('.similar-articles-container');
    }, 500);
    
    // Hover-эффекты для похожих статей
    similarArticleLinks.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.similar-article-img');
            if (img) {
                gsap.to(img, {
                    scale: 1.08,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.similar-article-img');
            if (img) {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            }
        });
    });
    
    // Футер ссылки
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
    
    // Политика конфиденциальности
    if (footerPolicy) {
        footerPolicy.addEventListener('click', function(e) {
            e.preventDefault();
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
            
            alert('Политика конфиденциальности');
        });
    }
    
    // Слушаем изменение размера окна
    window.addEventListener('resize', function() {
        // Ничего не делаем, просто обеспечиваем адаптивность через CSS
    });
});