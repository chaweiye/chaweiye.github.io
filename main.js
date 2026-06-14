/* ============================================
   星河主题 - JavaScript 交互效果
   ============================================ */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initStars();
    initMeteors();
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initActiveNav();
});

// 生成星空背景
function initStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // 随机位置
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // 随机大小
        const size = Math.random() * 3 + 1;
        
        // 随机动画时长
        const duration = Math.random() * 3 + 2;
        
        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            --duration: ${duration}s;
            animation-delay: ${Math.random() * 3}s;
        `;
        
        starsContainer.appendChild(star);
    }
}

// 生成流星效果
function initMeteors() {
    const meteorContainer = document.getElementById('meteor-container');
    const meteorCount = 5;
    
    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        
        // 随机起始位置
        const startX = Math.random() * 100 + 50;
        const startY = Math.random() * 50;
        
        // 随机动画时长
        const duration = Math.random() * 2 + 1;
        
        meteor.style.cssText = `
            right: ${startX}%;
            top: ${startY}%;
            animation-duration: ${duration}s;
            opacity: 0;
        `;
        
        meteorContainer.appendChild(meteor);
        
        // 动画结束后移除
        setTimeout(() => {
            meteor.remove();
        }, duration * 1000);
    }
    
    // 定时生成流星
    setInterval(() => {
        if (Math.random() > 0.7) {
            createMeteor();
        }
    }, 800);
}

// 导航栏滚动效果
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 为所有卡片添加淡入动画
    document.querySelectorAll('.about-card, .journey-card, .word-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// 导航激活状态
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 移动端菜单（预留扩展）
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// 控制台欢迎信息
console.log('%c✦ 星河 · 查伟业 ✦', 'font-size: 24px; color: #a78bfa; font-weight: bold;');
console.log('%c欢迎来到我的个人空间', 'font-size: 14px; color: #8888aa;');
console.log('%cGitHub: https://github.com/chaweiye', 'font-size: 12px; color: #6666aa;');