document.addEventListener('DOMContentLoaded', function() {
    
    const closeButton = document.querySelector('.close');
    const menuItems = document.querySelectorAll('.menu-item');
    const menuImages = document.querySelectorAll('.menu-image');
    const menuContainer = document.querySelector('.menu');
    
    let currentImage = null;
    let activeMenuId = null;
    let hideTimeout = null;
    
    // Функция для определения мобильного устройства
    function isMobile() {
        return window.innerWidth <= 480;
    }
    
    // Функция для обработки клика по меню
    function handleMenuClick(menuId, element) {
        console.log('Нажат пункт меню:', element.textContent);
        
        gsap.timeline()
            .to(element, {
                scale: 0.95,
                duration: 0.1,
                ease: "sine.inOut"
            })
            .to(element, {
                scale: 1,
                duration: 0.3,
                ease: "elastic.out(1, 0.2)"
            });
        
        // Навигация
        setTimeout(() => {
            if (menuId === '1') {
                console.log('Переход на главную страницу');
                window.location.href = 'main_index.html';
            } else if (menuId === '2') {
                console.log('Переход на страницу кейсов');
                window.location.href = 'case_index.html';  
            } else if (menuId === '3') {
                console.log('Переход на страницу о нас');
                window.location.href = 'about_index.html'; 
            } else if (menuId === '4') {
                console.log('Переход на страницу медиа');
                window.location.href = 'media_index.html';
            }
        }, 150);
    }
    
    // Разбиваем текст меню на буквы
    menuItems.forEach((item) => {
        const text = item.textContent;
        const letters = text.split('');
        
        item.innerHTML = '';
        
        letters.forEach((letter) => {
            const span = document.createElement('span');
            
            if (letter === ' ') {
                span.innerHTML = '&nbsp;';
                span.classList.add('space');
            } else {
                span.textContent = letter;
            }
            
            span.style.display = 'inline-block';
            item.appendChild(span);
        });
    });
    
    function showImage(menuId) {
        // На мобильных не показываем изображения
        if (isMobile()) {
            return;
        }
        
        if (activeMenuId === menuId) return;
        
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        
        activeMenuId = menuId;
        
        const targetImage = document.querySelector(`.menu-image[data-menu="${menuId}"]`);
        if (!targetImage) return;
        
        if (currentImage) {
            gsap.killTweensOf(currentImage);
            currentImage.style.visibility = 'hidden';
            currentImage.style.opacity = 0;
        }
        
        gsap.killTweensOf(targetImage);
        targetImage.style.visibility = 'visible';
        
        gsap.fromTo(targetImage, 
            {
                opacity: 0,
                scale: 0.95
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            }
        );
        
        currentImage = targetImage;
    }
    
    function hideAllImages() {
        // На мобильных не показываем изображения
        if (isMobile()) {
            return;
        }
        
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
        
        hideTimeout = setTimeout(() => {
            if (currentImage) {
                gsap.killTweensOf(currentImage);
                gsap.to(currentImage, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power2.inOut",
                    onComplete: () => {
                        currentImage.style.visibility = 'hidden';
                        currentImage = null;
                        activeMenuId = null;
                    }
                });
            }
            hideTimeout = null;
        }, 50);
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            console.log('Крестик нажат');
            
            hideAllImages();
            
            gsap.timeline()
                .to(this, {
                    scale: 0.9,
                    duration: 0.1,
                    ease: "sine.inOut"
                })
                .to(this, {
                    scale: 1,
                    duration: 0.2,
                    ease: "back.out(1.2)"
                });
        });
        
        closeButton.addEventListener('mouseenter', function() {
            if (!isMobile()) {
                gsap.killTweensOf(this);
                gsap.to(this, {
                    color: '#E3032E',
                    scale: 1.1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });
        
        closeButton.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                gsap.killTweensOf(this);
                gsap.to(this, {
                    color: '#FFFFFFCC',
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.inOut"
                });
            }
        });

        // Touch события для мобильных
        closeButton.addEventListener('touchstart', function(e) {
            if (isMobile()) {
                gsap.to(this, {
                    color: '#E3032E',
                    scale: 1.1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });

        closeButton.addEventListener('touchend', function(e) {
            if (isMobile()) {
                gsap.to(this, {
                    color: '#FFFFFFCC',
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.inOut"
                });
            }
        });
    }
    
    menuItems.forEach((item) => {
        const menuId = item.getAttribute('data-menu');
        
        item.addEventListener('mouseenter', function() {
            if (!isMobile()) {
                gsap.killTweensOf(this);
                
                gsap.to(this, {
                    color: '#E3032E',
                    duration: 0.2,
                    ease: "power2.out"
                });
                
                if (menuId) {
                    showImage(menuId);
                }
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                gsap.killTweensOf(this);
                
                gsap.to(this, {
                    color: '#FFFFFFCC',
                    duration: 0.2,
                    ease: "power2.inOut"
                });
            }
        });
        
        item.addEventListener('click', function() {
            handleMenuClick(menuId, this);
        });

        // Touch события для мобильных
        item.addEventListener('touchstart', function(e) {
            if (isMobile()) {
                gsap.to(this, {
                    color: '#E3032E',
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });

        item.addEventListener('touchend', function(e) {
            if (isMobile()) {
                gsap.to(this, {
                    color: '#FFFFFFCC',
                    duration: 0.2,
                    ease: "power2.inOut"
                });
                
                // Предотвращаем двойной срабатывание
                e.preventDefault();
                handleMenuClick(menuId, this);
            }
        });
    });
    
    if (menuContainer) {
        menuContainer.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                hideAllImages();
                
                menuItems.forEach(item => {
                    gsap.to(item, {
                        color: '#FFFFFFCC',
                        duration: 0.2
                    });
                });
            }
        });
    }
    
    // Начальная анимация
    gsap.set('.menu-item', { 
        x: 50, 
        opacity: 0 
    });
    
    gsap.set('.logo', { 
        x: -20, 
        opacity: 0 
    });
    
    gsap.set('.close', { 
        x: 20, 
        opacity: 0 
    });
    
    gsap.set('.menu-image', { 
        opacity: 0,
        visibility: 'hidden' 
    });
    
    gsap.set('.contacts', {
        y: 20,
        opacity: 0
    });
    
    gsap.set('.social-icons', {
        y: 20,
        opacity: 0
    });
    
    // Адаптивная начальная анимация
    const animationDelay = isMobile() ? 0 : 0.2;
    const animationDuration = isMobile() ? 0.4 : 0.8;
    
    gsap.to('.menu-item', {
        x: 0,
        opacity: 1,
        duration: animationDuration,
        stagger: isMobile() ? 0.05 : 0.1,
        ease: "power3.out",
        delay: animationDelay
    });
    
    gsap.to('.logo', {
        x: 0,
        opacity: 1,
        duration: isMobile() ? 0.4 : 0.6,
        ease: "power3.out",
        delay: animationDelay
    });
    
    gsap.to('.close', {
        x: 0,
        opacity: 1,
        duration: isMobile() ? 0.4 : 0.6,
        ease: "power3.out",
        delay: animationDelay
    });
    
    gsap.to('.contacts', {
        y: 0,
        opacity: 1,
        duration: isMobile() ? 0.4 : 0.6,
        ease: "power3.out",
        delay: isMobile() ? 0.2 : 0.4
    });
    
    gsap.to('.social-icons', {
        y: 0,
        opacity: 1,
        duration: isMobile() ? 0.4 : 0.6,
        ease: "power3.out",
        delay: isMobile() ? 0.2 : 0.4
    });

    // Слушаем изменение размера окна
    window.addEventListener('resize', function() {
        if (isMobile()) {
            // Скрываем изображения на мобильных
            document.querySelectorAll('.menu-image').forEach(img => {
                img.style.visibility = 'hidden';
                img.style.opacity = 0;
            });
            currentImage = null;
            activeMenuId = null;
        }
    });
    
    // Если мобильное устройство, сразу скрываем изображения
    if (isMobile()) {
        document.querySelectorAll('.menu-image').forEach(img => {
            img.style.visibility = 'hidden';
            img.style.opacity = 0;
        });
        currentImage = null;
        activeMenuId = null;
    }
});