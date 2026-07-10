# James Sun's Personal Homepage | 個人網頁

A premium, interactive, clean and bright personal website for James Sun. Fully responsive and styled with modern typography, glassmorphism clock, dual-language support, and smooth GSAP animations.

🌐 **Live Demo / 線上展示**: [https://jamessun0919-ops.github.io/HW2MyHomepage/](https://jamessun0919-ops.github.io/HW2MyHomepage/)

---

## 🎯 Project Goal | 專案目標

Build a bright, clean, dual-language (English / Traditional Chinese) personal homepage for James Sun, featuring smooth GSAP scroll animations and a live glassmorphic digital clock, modeled after `https://quantumwings.github.io/`.

以清晰明亮、雙語（中／英）呈現的方式，為 James Sun 打造個人首頁，具備 GSAP 動態滾動效果與玻璃擬物化即時時鐘，並以 `https://quantumwings.github.io/` 為設計範本。

---

## 🏗️ Architecture | 計畫架構

- **Frontend**: Vue 3 (CDN) for reactive state, GSAP + ScrollTrigger for animations, Font Awesome icons.
- **Pages**: `index.html` / `index-zh.html` (home), `prog-projects*.html`, `ai-projects*.html`, `python-work-platform.html`, `restaurant-helper*.html`, `turtle-soup*.html` — each with a paired EN/ZH version.
- **Assets**: `style.css` (design system), `app.js` (portfolio gallery data, animations, language switching), `img/` (backgrounds + category assets).
- **Dev tool**: `mobile-preview.html` — local-only harness that renders any page side-by-side (ZH/EN) inside phone-width frames for responsive QA.

---

## 🎨 Visual Preview & Workflow Infographic | 開發流程圖

![Workflow Infographic](workflow_infographic.png)

---

## ✅ Completed Progress | 已完成進度

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

### 8. Homepage Portfolio Restructure (首頁作品集重整, 2026-07-10)
- Removed the non-functional Hero section: its intro text and live-clock widget never actually rendered due to a pre-existing GSAP/CSS opacity bug (masked for months by the hero background photo), so the section was removed rather than fixed, along with all now-dead clock/CTA JS and CSS.
- Renamed "成果展示/Showcase" to "作品集/Portfolio" across the whole site (nav, section header, CTA, back-links on every sub-page).
- Moved the `hero_bg2.jpg` watermark background from the removed Hero section onto the Portfolio/gallery section.
- Restructured the portfolio gallery: reordered and retitled cards, replaced the fragile title-string click routing in `app.js` with a per-item `link` field, removed two placeholder cards (運營優化／跨學科專業整合) and their unused SVGs, and marked "信息技術整合" as "待補充/To Be Added" pending future content.

### 9. New Project Intro Pages (新增專案介紹頁, 2026-07-10)
- `restaurant-helper.html` / `-zh.html`: intro page for "職訓課程小組專題 - 餐廳選擇小幫手", with DEMO (Vercel) and GitHub repo buttons, full bilingual project description, and a fixed watermark background (`ResDecBgPic.jpg`).
- `turtle-soup.html` / `-zh.html`: intro page for "興趣專題 - AI主持海龜湯解謎遊戲", same button/description pattern, background (`puzzleparty.jpg`).
- Iterated on mobile-specific layout: title/button font sizing, stacked equal-size DEMO/Repo buttons, text contrast against the background photos, and header/title spacing.
- Added `mobile-preview.html` as a local dev tool for checking ZH/EN mobile layout side by side.

---

## 📌 Next Steps | 未完成事項

- "信息技術整合/To Be Added" portfolio card has no content or link yet — pending a future project to fill it.
- User to do a final visual/cache-cleared check of `restaurant-helper*.html` and `turtle-soup*.html` (background, contrast, spacing) on real devices.
- 「信息技術整合／待補充」作品集卡片目前沒有連結，等未來有新專案時再補上。
- 使用者需清除快取後，在實機上做一次 `restaurant-helper*.html`／`turtle-soup*.html` 的最終視覺確認（背景、對比度、間距）。

---

## 📂 File Directory | 檔案架構

- 📄 `index.html` - Core English HTML layout.
- 📄 `index-zh.html` - Core Traditional Chinese HTML layout.
- 📄 `style.css` - UI Design System stylesheet.
- 📄 `app.js` - Vue 3 reactivity, portfolio gallery data, & GSAP animations logic.
- 📄 `restaurant-helper.html` / `restaurant-helper-zh.html` - Project intro page: Restaurant Decision Helper.
- 📄 `turtle-soup.html` / `turtle-soup-zh.html` - Project intro page: AI-Hosted Turtle Soup Puzzle Game.
- 📄 `mobile-preview.html` - Local dev tool for ZH/EN mobile layout QA (not part of the deployed site's nav).
- 📄 `workflow_infographic.png` - Visual workflow infographic.
- 📄 `today_workflow.md` - Chronological development log.
- 📄 `worklog.md` / `chatlog.md` / `Handover.md` - Daily worklog, dev-agent conversation log, and handover doc.
- 📁 `img/` - Image directory (backgrounds & category assets).

---

## 🚀 How to Run Locally | 本地運行

1. Clone this repository:
   ```bash
   git clone https://github.com/jamessun0919-ops/HW2MyHomepage.git
   ```
2. Navigate to the directory and open `index.html` directly in any web browser of your choice.

---

## 📝 Webpage Modification & Deployment Rules | 網頁修改與部署規則

To maintain bilingual consistency and ensure that the live presentation is always up-to-date, all future modifications must follow these rules:

1. **Synchronous Modification of EN/ZH Pages | 同步修改中英文版網頁**:
   - Any layout, text, script, or style updates made to the Chinese version (`*-zh.html`) must be applied correspondingly to the English version (`*.html`), and vice versa, to ensure bilingual parity.
2. **Synchronous Deployment to GitHub | 同步部署至 GitHub**:
   - All approved modifications must be immediately committed and pushed to the remote GitHub repository:
     [https://github.com/jamessun0919-ops/HW2MyHomepage](https://github.com/jamessun0919-ops/HW2MyHomepage)
     This triggers the deployment of the updated live website.
