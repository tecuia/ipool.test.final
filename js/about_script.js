document.addEventListener('DOMContentLoaded', function() {
    

    const burgerMenu = document.querySelector('.burger-menu');
    const footerLinks = document.querySelectorAll('.footer-nav-link');
    const policyLink = document.querySelector('.footer-policy');

    
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.hero-text', { y: 30, opacity: 0 });
    gsap.set('.dark-section', { y: 30, opacity: 0 });
    gsap.set('.map-section', { y: 30, opacity: 0 });
    gsap.set('.contacts-section', { y: 30, opacity: 0 });
    gsap.set('.form-section', { y: 30, opacity: 0 });
    gsap.set('.team-section', { y: 30, opacity: 0 });
    
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
    
    gsap.to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
    });
    
    gsap.to('.dark-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7
    });
    
    gsap.to('.map-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9
    });
    
    gsap.to('.contacts-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1
    });
    
    gsap.to('.form-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.3
    });
    
    gsap.to('.team-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.5
    });
    
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
            gsap.to(this, { scale: 1.1, duration: 0.2, ease: "power2.out" });
        });
        
        burgerMenu.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.2, ease: "power2.inOut" });
        });
    }
    
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
    
    // Функция для инициализации drag-to-scroll
    function initDragScroll(selector) {
        const container = document.querySelector(selector);
        if (!container) {
            console.log(`Контейнер ${selector} не найден`);
            return;
        }
        
        console.log(`Инициализация drag-to-scroll для ${selector}`);
        
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

    // Инициализация drag-to-scroll для секции Команда
    setTimeout(() => {
        initDragScroll('.team-container');
    }, 500);
    
});