# 詹姆斯·孫 (James Sun) 個人網頁開發工作流程

本文件記錄了於 2026 年 6 月 8 日為 James Sun 製作個人首頁的完整開發與部署流程。

---

## 📅 開發日期
2026 年 6 月 8 日

## 🎯 專案目標
以 `https://quantumwings.github.io/` 網頁為範本，製作一個設計色調清晰明亮、具備動態滾動效果、支持中英文切換，且包含一個即時顯示時間時鐘的 James Sun 個人網站。

---

## 🛠️ 核心開發步驟

### 1. 範本研究與需求分析
- 深入分析範本網站 `https://quantumwings.github.io/` 的結構與所用技術：
  - 前端框架：**Vue 3 (CDN)** 管理響應式資料與組件狀態。
  - 動畫庫：**GSAP & ScrollTrigger** 管理載入及滾動觸發動畫。
  - 圖標庫：**Font Awesome 6.4.0**。
  - 字型：**Montserrat** (無襯線體) 與 **Cormorant Garamond** (優雅襯線體)。

### 2. 實作計劃擬定 (Planning Phase)
- 規劃清晰明亮的配色系統：
  - 主色調：`#0f172a` (Slate-900 深石板藍，用於主要文字與標題)。
  - 背景色：`#ffffff` (純白) 與 `#f8fafc` (Slate-50 淺灰，用於區塊交替)。
  - 強調色：`#0284c7` (Sky-600 天空藍，用於按鈕、連結與懸停狀態)。
- 設計**即時時鐘組件**：採用玻璃擬物化 (Glassmorphic) 風格，具備動態閃爍的冒號與微呼吸動畫的 Live 狀態指示燈。

### 3. 設計系統與樣式建置 (`style.css`)
- 實作 [style.css](file:///C:/Users/User/Desktop/HW2MyHomepage/style.css)：
  - 導入 Google Fonts (Montserrat, Cormorant Garamond, Outfit)。
  - 定義 CSS 全域變數，方便日後維護。
  - 撰寫響應式導航欄（滾動時縮小並增加半透明毛玻璃背景，手機版自動切換為漢堡選單）。
  - 實作時鐘面板與專長領域卡片（懸停時放大並從底部滑入敘述文字）的 CSS 動效。

### 4. HTML 頁面結構實作
- 實作英文版首頁 [index.html](file:///C:/Users/User/Desktop/HW2MyHomepage/index.html)。
- 實作繁體中文版首頁 [index-zh.html](file:///C:/Users/User/Desktop/HW2MyHomepage/index-zh.html)。
- 頁面包含五大區塊：
  1. **固定導航欄 (Navigation Header)**：包含 Logo、連結與語系下拉選單。
  2. **首頁英雄區 (Hero Section)**：文字自介、主要行動按鈕以及**即時時鐘面板**。
  3. **關於我 (About Me)**：生平簡介與四大核心能力盒（戰略規劃、技術整合、團隊領導、數據智能）。
  4. **專長領域 (Core Focus Areas)**：動態渲染的八張專長卡片。
  5. **聯絡我 (Get In Touch) & 頁尾**：快速聯繫按鈕與社群媒體連結。

### 5. 時鐘邏輯與動畫腳本撰寫 (`app.js`)
- 實作 [app.js](file:///C:/Users/User/Desktop/HW2MyHomepage/app.js)：
  - **Vue 3 實例**：
    - 綁定時間變數 `currentTime` 並以 `setInterval` 每秒更新一次。
    - 透過計算屬性 (Computed Properties) 格式化為 `HH:MM:SS` 與本地化日期（中英文不同格式）。
    - 偵測網頁語言屬性 (`document.documentElement.lang`) 動態渲染對應語言的專長卡片數據。
    - 管理滾動時的 Navbar 高亮效果與手機選單狀態。
  - **GSAP 動畫**：
    - 使用 Timeline 建立首頁加載時 Navbar、標題、時鐘與按鈕的循序淡入動畫。
    - 使用 ScrollTrigger 建立滾動到特定區域時卡片的 staggered (交錯) 滑入起動畫。
    - 實作 Hero 背景在滾動時的視差 (Parallax) 偏移。

### 6. 靜態與向量資源生成
- **背景生成**：使用 AI 圖像工具生成一張明亮、現代的辦公空間背景圖，存於 [img/hero_bg.jpg](file:///C:/Users/User/Desktop/HW2MyHomepage/img/hero_bg.jpg)。
- **卡片圖示生成**：撰寫 Node.js 腳本，為 8 個專長類別自動輸出獨立的高畫質漸層向量圖檔 (`.svg`)：
  - 領導力與戰略 (`leadership.svg`)
  - 項目管理 (`project_management.svg`)
  - 數據驅動決策 (`data_decision.svg`)
  - 創新與轉型 (`innovation.svg`)
  - 信息技術整合 (`it_integration.svg`)
  - 最偉大的作品 (`family.png`)
  - 運營優化 (`operational_optimization.svg`)
  - 跨學科專業整合 (`interdisciplinary.svg`)
- 部署至 [img/](file:///C:/Users/User/Desktop/HW2MyHomepage/img) 後清理暫存腳本。

### 7. 自動化測試與完整性驗證
- 啟動瀏覽器測試代理程式進行多項驗證：
  - **即時時鐘**：每秒更新正常、冒號閃爍正常、中文日期顯示「星期X」正常。
  - **多語系切換**：下拉選單功能正常，可在英文及中文網頁間順暢切換。
  - **動畫流暢度**：GSAP 加載動效與滾動觸發動效皆在 60fps 穩定運行。
  - **響應式排版**：在不同視窗寬度下，網頁元件自動伸縮，無跑版或文字重疊。

---

## 📂 產出檔案清單
所有檔案均已產出至您的工作目錄 [HW2MyHomepage](file:///C:/Users/User/Desktop/HW2MyHomepage/)：
- [index.html](file:///C:/Users/User/Desktop/HW2MyHomepage/index.html) (英文網頁首頁)
- [index-zh.html](file:///C:/Users/User/Desktop/HW2MyHomepage/index-zh.html) (中文網頁首頁)
- [style.css](file:///C:/Users/User/Desktop/HW2MyHomepage/style.css) (樣式表)
- [app.js](file:///C:/Users/User/Desktop/HW2MyHomepage/app.js) (邏輯與動畫)
- [img/](file:///C:/Users/User/Desktop/HW2MyHomepage/img/) (圖片與 SVG 向量圖目錄)

---

## 📝 網頁修改與部署規則

為確保網站中英文內容的一致性以及線上版本能即時更新，所有後續的修改必須遵守以下規則：

1. **中英文網頁同步修改**：
   - 任何涉及網頁版面、文字內容、功能邏輯（JS）或排版樣式（CSS）的修改，皆須同步在英文版（如 `index.html`、`prog-projects.html`）與繁體中文版（如 `index-zh.html`、`prog-projects-zh.html`）進行對應更新，以維持雙語內容的完整與對等。
2. **同步部署至 GitHub**：
   - 本地代碼修改完成並通過驗證後，必須將所有變更即時提交（Commit）並推送（Push）部署至 GitHub 遠端倉庫：
     [https://github.com/jamessun0919-ops/HW2MyHomepage](https://github.com/jamessun0919-ops/HW2MyHomepage)
