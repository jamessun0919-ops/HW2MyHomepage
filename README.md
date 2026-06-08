# James Sun's Personal Homepage | 個人網頁

A premium, interactive, clean and bright personal website for James Sun. Fully responsive and styled with modern typography, glassmorphism clock, dual-language support, and smooth GSAP animations.

🌐 **Live Demo / 線上展示**: [https://jamessun0919-ops.github.io/HW2MyHomepage/](https://jamessun0919-ops.github.io/HW2MyHomepage/)

---

## 🎨 Visual Preview & Workflow Infographic | 開發流程圖

![Workflow Infographic](workflow_infographic.png)

---

## 📅 Today's Workflow | 今日開發流程

### 1. Spec Research & Requirements Analysis (範本研究與需求分析)
- Investigated template structure (`https://quantumwings.github.io/`).
- Identified key technology stack: Vue 3 (CDN), GSAP & ScrollTrigger, and Montserrat + Cormorant Garamond fonts.

### 2. Implementation Planning (實作計劃)
- Defined a sleek bright design palette (Slate-900 `#0f172a`, Slate-50 `#f8fafc`, Sky-600 `#0284c7`).
- Structured a custom Glassmorphic digital clock with ticking animations and local date formatting.

### 3. Styling & Base CSS Setup (設計系統建置)
- Implemented `style.css` containing variables, layout resets, animations, responsive grids, and navigation interactions.

### 4. HTML Page Coding (中英文網頁建構)
- Created English `index.html` and Traditional Chinese `index-zh.html`.
- Structured standard semantic blocks: Navigation Header, Hero, About, Gallery (Portfolio), and Contact.

### 5. App Core & GSAP Scripting (邏輯與動畫實作)
- Wrote `app.js` integrating Vue 3 for reactive live clock updates and language switching.
- Integrated GSAP ScrollTrigger timeline for layout loading and card fade-ins.

### 6. Assets Design & Production (視覺與向量資源生成)
- Generated AI hero background image `hero_bg.jpg`.
- Compiled and exported 8 beautiful custom-designed category vector SVGs to `img/`.

### 7. Automated browser Testing (測試驗證)
- Conducted browser subagent verification checks on the live clock, layout alignment, language switcher transitions, and responsive widths.

---

## 📂 File Directory | 檔案架構

- 📄 `index.html` - Core English HTML layout.
- 📄 `index-zh.html` - Core Traditional Chinese HTML layout.
- 📄 `style.css` - UI Design System stylesheet.
- 📄 `app.js` - Vue 3 reactivity & GSAP animations logic.
- 📄 `workflow_infographic.png` - Visual workflow infographic.
- 📄 `today_workflow.md` - Chronological development log.
- 📁 `img/` - Image directories (Hero background & 8 customized SVG focus icons).

---

## 🚀 How to Run Locally | 本地運行

1. Clone this repository:
   ```bash
   git clone https://github.com/jamessun0919-ops/HW2MyHomepage.git
   ```
2. Navigate to the directory and open `index.html` directly in any web browser of your choice.
