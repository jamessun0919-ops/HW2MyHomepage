const { createApp } = Vue;

const isZh = document.documentElement.lang.startsWith('zh');

const galleryImagesData = isZh ? [
    { title: '職訓課程小組專題', subtitle: '餐廳選擇小幫手', src: 'img/FinalProject.jpg', alt: '職訓課程小組專題', link: 'restaurant-helper-zh.html' },
    { title: '機器學習演算法\n學習紀錄', subtitle: '陳煥老師指導', src: 'img/AIwork.png', alt: '機器學習演算法學習紀錄', link: 'ai-projects-zh.html' },
    { title: '程式語言課程實作', subtitle: '蔡正一老師指導', src: 'img/PythonWork.jpg', alt: '程式語言課程實作', link: 'prog-projects-zh.html' },
    { title: '個人興趣專題', subtitle: 'AI主持海龜湯解謎遊戲', src: 'img/Mystery.png', alt: '個人興趣專題', link: 'turtle-soup-zh.html' },
    { title: '待補充', description: '', src: 'img/it_integration.svg', alt: '待補充' },
    { title: '最偉大的作品', description: '', src: 'img/family.png', alt: '最偉大的作品', link: 'https://jamessun0919-ops.github.io/Alyssa/' }
] : [
    { title: 'Vocational Training Group Project', subtitle: 'Restaurant Decision Helper', src: 'img/FinalProject.jpg', alt: 'Vocational Training Group Project', link: 'restaurant-helper.html' },
    { title: 'Machine Learning Algorithms\nLearning Log', subtitle: 'Instructed by Prof. Huan Chen', src: 'img/AIwork.png', alt: 'Machine Learning Algorithms Learning Log', link: 'ai-projects.html' },
    { title: 'Programming Language Projects', subtitle: 'Instructed by Prof. Cheng-Yi Tsai', src: 'img/PythonWork.jpg', alt: 'Programming Language Projects', link: 'prog-projects.html' },
    { title: 'Personal Interest Project', subtitle: 'AI-Hosted Turtle Soup Puzzle Game', src: 'img/Mystery.png', alt: 'Personal Interest Project', link: 'turtle-soup.html' },
    { title: 'To Be Added', description: '', src: 'img/it_integration.svg', alt: 'To Be Added' },
    { title: 'Greatest Work', description: '', src: 'img/family.png', alt: 'Greatest Work', link: 'https://jamessun0919-ops.github.io/Alyssa/' }
];

createApp({
    data() {
        return {
            scrolled: false,
            menuActive: false,
            activePage: 'home',
            selectedLanguage: isZh ? 'zh' : 'en',
            currentYear: new Date().getFullYear(),
            galleryImages: galleryImagesData
        }
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 50;
            
            // Highlight current section in navbar based on scroll position
            const sections = ['portfolio', 'about', 'contact'];
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
            if (image.link) {
                window.location.href = image.link;
            }
        },
        changeLanguage() {
            if (this.selectedLanguage === 'en') {
                window.location.href = 'index.html';
            } else if (this.selectedLanguage === 'zh') {
                window.location.href = 'index-zh.html';
            }
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
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.$nextTick(() => {
            this.initAnimations();
        });
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}).mount('#app');
