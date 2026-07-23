# James Sun 個人網頁

為 James Sun 打造的質感個人網站，互動流暢、簡潔明亮，具備現代化排版、玻璃擬物化時鐘、雙語支援與流暢的 GSAP 動畫效果。

🌐 **線上展示**：[https://jamessun0919-ops.github.io/HW2MyHomepage/](https://jamessun0919-ops.github.io/HW2MyHomepage/)

---

## 🎯 專案目標

以清晰明亮、雙語（中／英）呈現的方式，為 James Sun 打造個人首頁，具備 GSAP 動態滾動效果與玻璃擬物化即時時鐘，並以 `https://quantumwings.github.io/` 為設計範本。

---

## 🏗️ 計畫架構

- **前端技術**：Vue 3（CDN）處理互動狀態、GSAP + ScrollTrigger 處理動畫效果、Font Awesome 圖示。
- **首頁**：`index.html` / `index-zh.html` — 資料驅動的作品集網格（`app.js` 的 `galleryImagesData`），每張卡片可直接連到外部連結，或連到分類目錄頁。
- **頁面結構**：依 `pages/<category>/` 分類存放，每個資料夾內含該類別的目錄頁與所有子頁（中英文版成對）：
  - `pages/vocational-training/` — 人工智慧與資料分析目錄頁、`ai-projects*.html`、`prog-projects*.html`（含其內嵌的示範頁 `ex0602.html`、`python-work-platform.html`）、`group-project*.html`。
  - `pages/handy-features/` — 功能小幫手目錄頁、`restaurant-helper*.html`、`weather-helper*.html`、`article-helper*.html`。
  - `pages/puzzle-game/` — 益智小遊戲目錄頁、`turtle-soup*.html`。
  - `pages/restaurant-profit/` — 餐廳利潤管理目錄頁、`restaurant-profit-schedule*.html`、`-material*.html`、`-customer*.html`。
  - 分類資料夾內的頁面連回根目錄資源一律用 `../../`；連到同資料夾內的其他頁面則直接用檔名。
- **核心資源**：`style.css`（設計系統）、`app.js`（作品集資料、動畫、語言切換邏輯）、`img/`（背景圖與各分類素材）。
- **開發工具**：
  - `mobile-preview.html` — 本機專用工具，可並排預覽任一頁面的中英文手機版排版。
  - `scripts/screenshot.js`（Playwright）— 針對本機開發伺服器批次產出桌機/手機截圖的 CLI 工具，詳見 `package.json`。

---

## ✅ 已完成進度

### 1. 需求研究與規格分析
- 研究範本網站架構（`https://quantumwings.github.io/`）。
- 確立核心技術棧：Vue 3（CDN）、GSAP 與 ScrollTrigger、Montserrat + Cormorant Garamond 字體。

### 2. 實作規劃
- 定調明亮簡潔的設計色盤（Slate-900 `#0f172a`、Slate-50 `#f8fafc`、Sky-600 `#0284c7`）。
- 規劃自訂玻璃擬物化數位時鐘，含跳動動畫與在地時間格式。

### 3. 樣式與基礎 CSS 建置
- 完成 `style.css`：變數、版面重置、動畫、響應式網格、導覽互動。

### 4. 中英文網頁建構
- 建立英文版 `index.html` 與繁體中文版 `index-zh.html`。
- 建構標準語意區塊：導覽列、Hero、關於我、作品集、聯絡我。

### 5. App 核心與 GSAP 腳本
- 撰寫 `app.js`：Vue 3 處理即時時鐘更新與語言切換的反應式邏輯。
- 整合 GSAP ScrollTrigger 時間軸，處理版面載入與卡片淡入效果。

### 6. 視覺與素材製作
- 生成 AI Hero 背景圖 `hero_bg.jpg`。
- 產出 8 張自訂分類向量 SVG 圖示至 `img/`。

### 7. 自動化瀏覽器測試
- 針對即時時鐘、版面對齊、語言切換過場、響應式寬度執行瀏覽器子代理驗證。

### 8. 首頁作品集重整（2026-07-10）
- 移除失效的 Hero 區塊：其自我介紹文字與即時時鐘因既有 GSAP/CSS `opacity:0` 衝突，其實從未真正顯示過（此問題被背景照片視覺遮蔽數月），因此決定直接移除整個區塊而非修復，並清除連帶的死時鐘/CTA JS 與 CSS。
- 全站將「成果展示/Showcase」改名為「作品集/Portfolio」（導覽列、區塊標題、CTA、每個子頁的返回連結）。
- 將 `hero_bg2.jpg` 浮水印背景從已移除的 Hero 區塊搬到作品集區塊。
- 重整作品集網格：卡片重新排序與更名、把 `app.js` 裡脆弱的標題字串點擊比對改為逐項 `link` 欄位、移除「運營優化／跨學科專業整合」兩張佔位卡與對應孤兒 SVG，並將「信息技術整合」標記為「待補充/To Be Added」等候未來內容。

### 9. 新增專案介紹頁（2026-07-10）
- `restaurant-helper.html` / `-zh.html`：「職訓課程小組專題 - 餐廳選擇小幫手」介紹頁，含 DEMO（Vercel）與 GitHub Repo 按鈕、完整雙語專案說明、固定浮水印背景（`ResDecBgPic.jpg`）。
- `turtle-soup.html` / `-zh.html`：「興趣專題 - AI主持海龜湯解謎遊戲」介紹頁，同樣的按鈕/說明版型，背景圖 `puzzleparty.jpg`。
- 多輪調整手機版排版：標題/按鈕字級、DEMO/Repo 按鈕改上下堆疊等寬等高、背景圖上的文字對比度、表頭與標題間距。
- 新增 `mobile-preview.html` 作為本機開發工具，可並排檢視中英文手機版排版。

### 10. 作品集多層目錄重構與檔案結構重組（2026-07-10）
- 完全移除失效的「關於我」區塊（導覽項、文字、大頭照）及其死 GSAP/CSS。
- 將 `restaurant-helper*`/`turtle-soup*` 重複複製貼上的內嵌 `<style>` 整併進 `style.css` 共用 class（`.projects-page`、`.project-detail-bg`）。
- 新增以 Playwright 為基礎的截圖工具（`scripts/screenshot.js`），供本機桌機/手機視覺驗證。
- 重建作品集為 5 張首頁卡片，多數改為連到分類目錄頁而非直接連到內容頁：**人工智慧與資料分析**（職訓課程作業）、**餐廳利潤管理**（排班/物料/顧客資料子頁，內容待補）、**功能小幫手**（餐廳小幫手、天氣小幫手已上線正式 Demo、文章小幫手待補）、**益智小遊戲**（AI海龜湯）、**最偉大作品**。
- 將 30 個分類相關的 HTML 檔案從平舖的根目錄重新整理進 `pages/<category>/` 資料夾，修正所有相對路徑（連回根目錄資源改用 `../../`），並將此規則記錄於 `CLAUDE.md`。

---

## 📌 未完成事項

- `pages/vocational-training/group-project*.html`（職訓課程小組專題目錄頁佔位）與 `pages/handy-features/article-helper*.html`（文章小幫手）目前都是空白待補充頁面。
- 使用者需清除快取後，在實機（含舊版 iOS Safari）上做一次 `restaurant-helper*.html`／`turtle-soup*.html` 的最終視覺確認（背景、對比度、間距、`fixed` 背景相容性）。
- 部分英文文案為字面直譯，尚未潤飾，正式對外前需要人工校閱。

---

## 📂 檔案架構

- 📄 `index.html` / `index-zh.html` - 首頁，資料驅動的作品集網格。
- 📄 `style.css` - UI 設計系統樣式表（也包含所有子頁共用的樣式類別）。
- 📄 `app.js` - Vue 3 反應式邏輯、作品集資料、GSAP 動畫邏輯。
- 📄 `mobile-preview.html` - 本機開發工具，供中英文手機版排版檢查（非正式網站導覽的一部分）。
- 📁 `pages/vocational-training/` - 人工智慧與資料分析目錄頁 + `ai-projects*`、`prog-projects*`（含 `ex0602.html`、`python-work-platform.html`）、`group-project*`。
- 📁 `pages/handy-features/` - 功能小幫手目錄頁 + `restaurant-helper*`、`weather-helper*`、`article-helper*`。
- 📁 `pages/puzzle-game/` - 益智小遊戲目錄頁 + `turtle-soup*`。
- 📁 `pages/restaurant-profit/` - 餐廳利潤管理目錄頁 + `-schedule*`、`-material*`、`-customer*`。
- 📁 `scripts/` - `screenshot.js`（Playwright 本機驗證工具）；詳見 `package.json`。
- 📄 `workflow_infographic.png` - 開發流程視覺化圖表。
- 📄 `worklog.md` / `chatlog.md` / `Handover.md` - 工作日誌、開發者與 agent 對話紀錄、交接文件。
- 📁 `img/` - 圖片資源目錄（背景圖與各分類素材）。
