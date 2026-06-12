const { createApp } = Vue;

const isZh = document.documentElement.lang.startsWith('zh');

const galleryImagesData = isZh ? [
    { title: '人工智慧課程實作', src: 'img/AIwork.png', alt: '人工智慧課程實作' },
    { title: '程式語言課程實作', src: 'img/PythonWork.jpg', alt: '程式語言課程實作' },
    { title: '職訓課程成果專案', description: '', src: 'img/FinalProject.jpg', alt: '職訓課程成果專案' },
    { title: '邏輯、謎題、思考', description: '', src: 'img/Mystery.png', alt: '邏輯、謎題、思考' },
    { title: '信息技術整合', description: '融合最先進的雲端架構與服務，優化現有 IT 系統。', src: 'img/it_integration.svg', alt: '信息技術整合' },
    { title: '整體解決方案', description: '設計端到端的系統解決方案，一次性解決多元業務痛點。', src: 'img/holistic_solution.svg', alt: '整體解決方案' },
    { title: '運營優化', description: '重塑業務流程，降低營運成本，提升日常運作效率。', src: 'img/operational_optimization.svg', alt: '運營優化' },
    { title: '跨學科專業整合', description: '融合管理戰略與硬核軟體技術，提供全面的專家級洞察。', src: 'img/interdisciplinary.svg', alt: '跨學科專業整合' }
] : [
    { title: 'AI Course Projects', src: 'img/AIwork.png', alt: 'AI Course Projects' },
    { title: 'Programming Language Projects', src: 'img/PythonWork.jpg', alt: 'Programming Language Projects' },
    { title: 'Vocational Training Showcase Project', description: '', src: 'img/FinalProject.jpg', alt: 'Vocational Training Showcase Project' },
    { title: 'Logic, Puzzles, Thinking', description: '', src: 'img/Mystery.png', alt: 'Logic, Puzzles, Thinking' },
    { title: 'Information Technology', description: 'Integrating modern cloud infrastructure with core enterprise systems.', src: 'img/it_integration.svg', alt: 'Information Technology' },
    { title: 'Holistic Solutions', description: 'Designing end-to-end solutions that address multi-dimensional business pains.', src: 'img/holistic_solution.svg', alt: 'Holistic Solutions' },
    { title: 'Operational Optimization', description: 'Streamlining business workflows to reduce overhead and improve execution.', src: 'img/operational_optimization.svg', alt: 'Operational Optimization' },
    { title: 'Interdisciplinary Professional', description: 'Merging strategic management with deep software engineering capabilities.', src: 'img/interdisciplinary.svg', alt: 'Interdisciplinary Professional' }
];

createApp({
    data() {
        return {
            scrolled: false,
            menuActive: false,
            activePage: 'home',
            selectedLanguage: isZh ? 'zh' : 'en',
            currentYear: new Date().getFullYear(),
            currentTime: new Date(),
            galleryImages: galleryImagesData
        }
    },
    computed: {
        formatTime() {
            const date = this.currentTime;
            const pad = (num) => String(num).padStart(2, '0');
            return {
                hours: pad(date.getHours()),
                minutes: pad(date.getMinutes()),
                seconds: pad(date.getSeconds())
            };
        },
        formatDate() {
            const date = this.currentTime;
            if (isZh) {
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                const weekday = weekdays[date.getDay()];
                return `${year}年${month}月${day}日 ${weekday}`;
            } else {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                return date.toLocaleDateString('en-US', options);
            }
        }
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 50;
            
            // Highlight current section in navbar based on scroll position
            const sections = ['home', 'about', 'portfolio', 'contact'];
            const scrollPos = window.scrollY + 150; // offset for nav header height
            
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        this.activePage = sectionId;
                        break;
                    }
                }
            }
        },
        toggleMenu() {
            this.menuActive = !this.menuActive;
        },
        setActivePage(pageId) {
            this.activePage = pageId;
            this.menuActive = false;
        },
        handleGalleryClick(image) {
            if (image.title === '人工智慧課程實作' || image.title === 'AI Course Projects') {
                window.location.href = isZh ? 'ai-projects-zh.html' : 'ai-projects.html';
            } else if (image.title === '程式語言課程實作' || image.title === 'Programming Language Projects') {
                window.location.href = isZh ? 'prog-projects-zh.html' : 'prog-projects.html';
            }
        },
        changeLanguage() {
            if (this.selectedLanguage === 'en') {
                window.location.href = 'index.html';
            } else if (this.selectedLanguage === 'zh') {
                window.location.href = 'index-zh.html';
            }
        },
        initClock() {
            this.clockInterval = setInterval(() => {
                this.currentTime = new Date();
            }, 1000);
        },
        initAnimations() {
            gsap.registerPlugin(ScrollTrigger);

            // Initial load animations (Timeline)
            const tl = gsap.timeline();
            
            tl.from('header', { 
                y: -100, 
                opacity: 0, 
                duration: 1, 
                ease: 'power4.out' 
            });
            
            tl.from('.hero-text h1', { 
                y: 40, 
                opacity: 0, 
                duration: 0.8, 
                ease: 'power3.out' 
            }, '-=0.5');
            
            tl.from('.hero-text h2', { 
                y: 30, 
                opacity: 0, 
                duration: 0.8, 
                ease: 'power3.out' 
            }, '-=0.6');
            
            tl.from('.cta-group .cta-button', { 
                y: 20, 
                opacity: 0, 
                stagger: 0.15,
                duration: 0.6, 
                ease: 'power3.out' 
            }, '-=0.5');

            tl.from('.hero-clock-panel', { 
                y: 45, 
                opacity: 0, 
                duration: 1, 
                ease: 'power3.out' 
            }, '-=0.8');

            // Scroll triggers for sections
            // About Section Elements
            gsap.from('.about .section-header', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 80%'
                }
            });

            gsap.from('.about-text p', {
                opacity: 0,
                x: -30,
                stagger: 0.15,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.about-text',
                    start: 'top 80%'
                }
            });

            gsap.from('.about-features .feature-box', {
                opacity: 0,
                y: 35,
                stagger: 0.15,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.about-features',
                    start: 'top 80%'
                }
            });

            // Gallery / Portfolio Items
            gsap.utils.toArray('.gallery-item').forEach((item, index) => {
                gsap.to(item, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom-=80',
                        toggleActions: 'play none none reverse'
                    },
                    delay: (index % 4) * 0.1, // Stagger effect by column row index
                    ease: 'power3.out'
                });
            });

            // Parallax scroll on hero background
            gsap.to('.hero', {
                backgroundPositionY: '60%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.initClock();
        this.$nextTick(() => {
            this.initAnimations();
        });
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
        if (this.clockInterval) {
            clearInterval(this.clockInterval);
        }
    }
}).mount('#app');
