document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const footerLinks = document.querySelectorAll('.footer-nav-link');
    const policyLink = document.querySelector('.footer-policy');
    
    // Функция для определения мобильного устройства
    function isMobile() {
        return window.innerWidth <= 480;
    }
    
    // Начальная анимация
    const animDuration = isMobile() ? 0.4 : 0.8;
    const animDelay = isMobile() ? 0 : 0.2;
    
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.hero-text', { y: 30, opacity: 0 });
    gsap.set('.dark-section', { y: 30, opacity: 0 });
    gsap.set('.team-section', { y: 30, opacity: 0 });
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
    
    gsap.to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 0.3
    });
    
    gsap.to('.dark-section', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 0.5
    });
    
    gsap.to('.team-section', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 0.7
    });
    
    gsap.to('.footer', {
        y: 0,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        delay: animDelay + 0.9
    });
    
    // Бургер-меню
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            console.log('Бургер-меню нажато - переход в меню');
            
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
    
    // Футер ссылки
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href !== '#') {
                console.log('Переход по ссылке:', href);
                
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
    if (policyLink) {
        policyLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Политика конфиденциальности');
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
            
            alert('Политика конфиденциальности');
        });
    }
    
    // Drag-to-scroll для секции Команда
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
        initDragScroll('.team-container');
    }, 500);
    
    // Hover-эффекты для карточек команды
    const teamCards = document.querySelectorAll('.team-item-link');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.team-img');
            if (img) {
                gsap.to(img, {
                    scale: 1.08,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.team-img');
            if (img) {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            }
        });
    });
    
    // Слушаем изменение размера окна
    window.addEventListener('resize', function() {
        // Ничего не делаем, просто обеспечиваем адаптивность через CSS
    });
});