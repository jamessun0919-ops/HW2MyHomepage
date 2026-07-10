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
- **Home**: `index.html` / `index-zh.html` — data-driven portfolio grid (`app.js`'s `galleryImagesData`), each card either links straight out or into a category hub page.
- **Pages**: organized under `pages/<category>/`, one folder per portfolio category, each containing its hub page plus all child pages (paired EN/ZH):
  - `pages/vocational-training/` — AI & Data Analysis hub, `ai-projects*.html`, `prog-projects*.html` (+ its embedded demo pages `ex0602.html`, `python-work-platform.html`), `group-project*.html`.
  - `pages/handy-features/` — Feature Helper hub, `restaurant-helper*.html`, `weather-helper*.html`, `article-helper*.html`.
  - `pages/puzzle-game/` — Puzzle Game hub, `turtle-soup*.html`.
  - `pages/restaurant-profit/` — Restaurant Profit Management hub, `restaurant-profit-schedule*.html`, `-material*.html`, `-customer*.html`.
  - Pages inside a category folder link to root assets via `../../`; links to sibling pages in the same folder use bare filenames.
- **Assets**: `style.css` (design system), `app.js` (portfolio gallery data, animations, language switching), `img/` (backgrounds + category assets).
- **Dev tools**:
  - `mobile-preview.html` — local-only harness that renders any page side-by-side (ZH/EN) inside phone-width frames for responsive QA.
  - `scripts/screenshot.js` (Playwright) — CLI screenshot tool for desktop/mobile QA against the local dev server; see `package.json`.

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

### 10. Portfolio Multi-Level Restructure & File Reorganization (作品集多層目錄重構與檔案結構重組, 2026-07-10)
- Removed the non-functional "About Me" section entirely (nav item, text, headshot) along with its dead GSAP/CSS.
- Deduplicated `restaurant-helper*`/`turtle-soup*`'s copy-pasted inline `<style>` blocks into shared `style.css` classes (`.projects-page`, `.project-detail-bg`).
- Added a Playwright-based screenshot tool (`scripts/screenshot.js`) for local desktop/mobile visual QA.
- Rebuilt the portfolio into 5 top-level cards, most now leading into category hub pages instead of linking straight to content: **AI & Data Analysis** (vocational-training coursework), **Restaurant Profit Management** (scheduling/inventory/customer-data sub-pages, pending content), **Feature Helper** (Restaurant Helper, Weather Helper — now live with a real demo, Article Helper — pending), **Puzzle Game** (AI Turtle Soup), and **Greatest Work**.
- Reorganized all 30 category-related HTML files from a flat root directory into `pages/<category>/` folders, fixing every relative path (`../../` back to root assets) and documenting the convention in `CLAUDE.md`.

---

## 📌 Next Steps | 未完成事項

- `pages/vocational-training/group-project*.html` ("Vocational Training Group Project" hub placeholder) and `pages/handy-features/article-helper*.html` ("Article Helper") are both empty pages pending real content.
- User to do a final visual/cache-cleared check of `restaurant-helper*.html` and `turtle-soup*.html` (background, contrast, spacing) on real devices, including older iOS Safari (`background-attachment: fixed` support risk).
- Some English copy (translated card/page titles) is literal, not polished — needs a human pass before this goes fully public.
- `pages/vocational-training/group-project*.html`（職訓課程小組專題目錄頁佔位）與 `pages/handy-features/article-helper*.html`（文章小幫手）目前都是空白待補充頁面。
- 使用者需清除快取後，在實機（含舊版 iOS Safari）上做一次 `restaurant-helper*.html`／`turtle-soup*.html` 的最終視覺確認（背景、對比度、間距、`fixed` 背景相容性）。
- 部分英文文案為字面直譯，尚未潤飾，正式對外前需要人工校閱。

---

## 📂 File Directory | 檔案架構

- 📄 `index.html` / `index-zh.html` - Home page, data-driven portfolio grid.
- 📄 `style.css` - UI Design System stylesheet (also holds shared classes for all sub-pages).
- 📄 `app.js` - Vue 3 reactivity, portfolio gallery data, & GSAP animations logic.
- 📄 `mobile-preview.html` - Local dev tool for ZH/EN mobile layout QA (not part of the deployed site's nav).
- 📁 `pages/vocational-training/` - AI & Data Analysis hub + `ai-projects*`, `prog-projects*` (+ `ex0602.html`, `python-work-platform.html`), `group-project*`.
- 📁 `pages/handy-features/` - Feature Helper hub + `restaurant-helper*`, `weather-helper*`, `article-helper*`.
- 📁 `pages/puzzle-game/` - Puzzle Game hub + `turtle-soup*`.
- 📁 `pages/restaurant-profit/` - Restaurant Profit Management hub + `-schedule*`, `-material*`, `-customer*`.
- 📁 `scripts/` - `screenshot.js` (Playwright local QA tool); see `package.json`.
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
