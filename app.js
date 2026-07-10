const { createApp } = Vue;

const isZh = document.documentElement.lang.startsWith('zh');

const galleryImagesData = isZh ? [
    { title: '人工智慧與資料分析', subtitle: '2026職訓課程', src: 'img/AIclass.jpg', alt: '人工智慧與資料分析', link: 'pages/vocational-training/vocational-training-zh.html' },
    { title: '餐廳利潤管理', subtitle: '智慧排班、物料管理、顧客資料', src: 'img/profit.jpg', alt: '餐廳利潤管理', link: 'pages/restaurant-profit/restaurant-profit-zh.html' },
    { title: '功能小幫手', subtitle: '餐廳小幫手\n天氣小幫手\n文章小幫手', src: 'img/helper.jpg', alt: '功能小幫手', link: 'pages/handy-features/handy-features-zh.html' },
    { title: '益智小遊戲', subtitle: 'AI主持海龜湯解謎遊戲', src: 'img/Mystery.png', alt: '益智小遊戲', link: 'pages/puzzle-game/puzzle-game-zh.html' },
    { title: '最偉大作品', subtitle: '女兒陛下Alyssa Sun', src: 'img/family.png', alt: '最偉大作品', link: 'https://jamessun0919-ops.github.io/Alyssa/' }
] : [
    { title: 'AI & Data Analysis', subtitle: '2026 Vocational Training Course', src: 'img/AIclass.jpg', alt: 'AI & Data Analysis', link: 'pages/vocational-training/vocational-training.html' },
    { title: 'Restaurant Profit Management', subtitle: 'Smart Scheduling, Material Management, Customer Data', src: 'img/profit.jpg', alt: 'Restaurant Profit Management', link: 'pages/restaurant-profit/restaurant-profit.html' },
    { title: 'Feature Helper', subtitle: 'Restaurant Helper\nWeather Helper\nArticle Helper', src: 'img/helper.jpg', alt: 'Feature Helper', link: 'pages/handy-features/handy-features.html' },
    { title: 'Puzzle Game', subtitle: 'AI-Hosted Turtle Soup Puzzle Game', src: 'img/Mystery.png', alt: 'Puzzle Game', link: 'pages/puzzle-game/puzzle-game.html' },
    { title: 'Greatest Work', subtitle: 'Her Highness Alyssa Sun', src: 'img/family.png', alt: 'Greatest Work', link: 'https://jamessun0919-ops.github.io/Alyssa/' }
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
            const sections = ['portfolio', 'contact'];
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
