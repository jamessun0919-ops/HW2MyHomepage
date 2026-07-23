# 交接文件 (Handover)

## 專案目標 (Project Goal)
以雙語（中／英）呈現的個人網頁作為作品集入口，將已完成／進行中的獨立專案依類別整理進「作品集」多層目錄結構，形成完整的成品展示。

## 已完成進度 (Completed)
- **2026-07-23（第1階段）**：補回 `CLAUDE.md` 遺漏的具體檔案結構規則（`pages/<category>` 清單／`../../` 路徑寫法／`app.js` link 欄位規則），只補在本專案 `CLAUDE.md`，不動 Desktop 層級 master 樣板。
- **2026-07-23（第1階段）**：「文章小幫手」（`pages/handy-features/article-helper(-zh).html`）補上正式內容：Demo `https://newsnovelcrawer.onrender.com/`、Repo `https://github.com/jamessun0919-ops/NewsNovelCrawer`，中英文皆已補（英文為直譯非潤飾）。
- **2026-07-23（第1階段）**：「班表轉換」（`pages/restaurant-profit/restaurant-profit-schedule(-zh).html`）補上正式內容：Demo `https://shift-schedule-b5ne.onrender.com/`、Repo `https://github.com/jamessun0919-ops/Shift-schedule`，中英文皆已補（英文為直譯非潤飾），並新增「使用說明」按鍵（連 `manual.html`）。
- **2026-07-23（第1階段）**：`mobile-preview.html` 下拉選單改為本專案 5 個 hub 頁（首頁／人工智慧與資料分析／餐廳利潤管理／功能小幫手／益智小遊戲），移除英文版 iframe（外部連結類卡片如「最偉大作品」不適合放入本機 iframe 預覽，已排除）。
- **2026-07-23（第2階段）**：中文版首頁加入 PWA 可安裝支援——新增 `manifest.json`（預設語言中文、`start_url` 指向 `index-zh.html`、`display: standalone`）、`img/icon-192.png`／`icon-512.png`（以 `family.png` 置中裁方形產出）；只在 `index-zh.html` 加 manifest/meta 標籤；不含 Service Worker（開發者決定不做離線功能）。
- **2026-07-23（第2階段）**：餐廳利潤管理新增第 4 張子卡片「顧客評論即時警告」（圖片 `alert.png`），新建 `restaurant-profit-alert(-zh).html` 空白介紹頁。
- **2026-07-23（第2階段）**：補齊「物料控管」（`restaurant-profit-material(-zh).html`）與「顧客資料整合」（`restaurant-profit-customer(-zh).html`）兩頁正式專案說明文字，中英文皆已補（英文為直譯非潤飾）；目前這兩頁都還沒有 Demo/Repo 連結，純文字說明。
- **2026-07-23（第2階段）**：刪除過期文件 `today_workflow.md`（內容為已移除的舊版 Hero 設計，與現況不符），同步移除 `README.md` 對應失效引用。
- 首頁「關於我/About Me」區塊已整個移除（含導覽項、標題、文字、大頭照），並清除 `app.js`／`style.css` 對應死程式碼與孤兒圖檔。
- 作品集卡片全面重整為 5 張一級卡片，各自帶出多層目錄頁：
  1. **人工智慧與資料分析** → `pages/vocational-training/vocational-training(-zh).html`，內含「職訓課程小組專題」（純佔位，圖＋標題）、「機器學習演算法學習紀錄」、「程式語言課程實作」（後者內部連到 `ex0602.html`／`python-work-platform.html` 兩個互動 Demo 頁）。
  2. **餐廳利潤管理** → `pages/restaurant-profit/restaurant-profit(-zh).html`，內含「班表轉換」「物料控管」「顧客資料整合」三個待補充子頁。
  3. **功能小幫手**（原「待補充」→「好用小功能」→現名）→ `pages/handy-features/handy-features(-zh).html`，內含「餐廳小幫手」（承接原職訓課程小組專題的完整內容：DEMO/Repo/說明）、「天氣小幫手」（已有正式內容：Vercel Demo + GitHub Repo + 說明）、「文章小幫手」（空白介紹頁）。
  4. **益智小遊戲**（原「個人興趣專題」）→ `pages/puzzle-game/puzzle-game(-zh).html`，內含「AI海龜湯」（承接原海龜湯完整內容）。
  5. **最偉大作品**（原「最偉大的作品」，小字說明「女兒陛下Alyssa Sun」）→ 外部連結不變。
- 「職訓課程小組專題」的原始內容因改由「餐廳小幫手」承接，另建 `group-project(-zh).html` 空白佔位頁銜接。
- `restaurant-helper`/`turtle-soup` 四個檔案原本複製四份的內嵌樣式，已搬進 `style.css` 共用 class（`.projects-page`、`.project-detail-bg`、`.feature-grid`/`.feature-card`），中英文差異用 `html[lang="zh-TW"]` 選擇器處理。
- **全站檔案結構重構**：30 個 html 頁面依類別搬進 `pages/<category>/` 資料夾（`vocational-training`／`handy-features`／`puzzle-game`／`restaurant-profit`），根目錄僅留 `index.html`／`index-zh.html`／`style.css`／`app.js`／`mobile-preview.html`。所有相對路徑已修正（連回根目錄資源用 `../../`，同資料夾內頁面互連維持原檔名），規則寫入 `CLAUDE.md`。
- 導入 Playwright 截圖工具（`scripts/screenshot.js`）供本機視覺驗證，桌機(1440×900)/手機(390×844)雙尺寸批次截圖；已知限制：`fullPage` 截圖對 `background-attachment: fixed` 背景會失真，需要驗證 fixed 背景效果時要另外用非 fullPage 截圖。
- 待辦事項 1-4、7 已於本次全部處理完畢（詳見下方 Next Steps 的殘留分項）；5、6 仍為「暫不處理」狀態。

## 目前的瓶頸或停頓點 (Current Blocker/Status)
無阻塞中的問題。以下為已知待補事項：
- 「職訓課程小組專題」（`pages/vocational-training/group-project(-zh).html`）確認先跳過，仍是空白佔位頁，等開發者提供內容再補。
- 「顧客評論即時警告」（`restaurant-profit-alert(-zh).html`）仍是空白佔位頁，等開發者提供內容（是否有 Demo/Repo 連結、專案說明）再補。
- 兩個介紹頁（`restaurant-helper*`/`turtle-soup*`）的 `background-attachment: fixed` 尚未在舊版 iOS Safari 實機測試。
- 部分介紹頁英文文案為 agent 直接翻譯或字面翻譯，語感堪用非潤飾文案，正式對外前需使用者親自校閱（例如「班表轉換」譯為 Schedule Conversion、「陛下」譯為 Her Highness，都是字面對應）。開發者已在 2026-07-23 第2階段中途明確宣告：**本階段起，中英文內容一律同步（只翻譯不潤飾，不須顯示驗證）**，此規則預期會延續到後續階段，如有變動需再確認。

## 下一步行動 (Next Steps)
1. 「職訓課程小組專題」`pages/vocational-training/group-project(-zh).html`、「顧客評論即時警告」`pages/restaurant-profit/restaurant-profit-alert(-zh).html` 有實際內容時，比照既有模式（有連結用 action-buttons + project-description，純文字用 project-description）補上，並依「中英文同步」規則同時補英文版。
2. 之後若有新完成的專案要補進作品集，於 `app.js` 的 `galleryImagesData` 新增項目並附上完整相對路徑的 `link`（例如 `'pages/<category>/<file>.html'`），不需要再動 `handleGalleryClick`。
3. 新增 html 頁面一律依 `CLAUDE.md`「檔案結構規則」放進對應 `pages/<category>/` 資料夾，同資料夾內頁面互連不加路徑前綴，連回根目錄資源一律 `../../`。
4. `mobile-preview.html` 目前只保留中文版 iframe 與 5 個 hub 頁選項（首頁／人工智慧與資料分析／餐廳利潤管理／功能小幫手／益智小遊戲）；若之後要恢復英文並排預覽或加回子頁選項，需要再與開發者確認範圍。
5. 待討論事項（iOS Safari fixed 背景實機測試、英文文案潤飾）尚未排入時程，需要時再與開發者確認。

## 關鍵設定與上下文 (Key Context & Rules)
- **雙語同步規則**：任何排版/文字/腳本/樣式修改，中英文版本（`*.html` 與 `*-zh.html`）必須同步更新。
- **檔案結構規則**：新 html 頁面依類別放 `pages/<category>/`，該類別 hub 頁與所有子頁（含中英文版）同資料夾；根目錄只留首頁/`style.css`/`app.js`/`mobile-preview.html`。`pages/<category>/*.html` 內連回根目錄資源用 `../../`，同資料夾內頁面互連維持檔名直接引用。詳見 `CLAUDE.md`。
- **作品集資料結構**：`app.js` 的 `galleryImagesData`（中／英各一份陣列）驅動首頁 `.gallery-grid` 渲染；`link` 欄位要寫完整相對路徑（含 `pages/...` 前綴），沒有 `link` 就是純佔位卡片；`subtitle` 支援 `\n` 換行（`.gallery-subtitle` 已加 `white-space: pre-line`）。
- **多層目錄頁樣式**：hub 頁（人工智慧與資料分析／功能小幫手／益智小遊戲／餐廳利潤管理）用 `.feature-grid`/`.feature-card`（純標題疊圖）或 `.gallery-grid`/`.gallery-item`（含小字說明，需加 `.static-gallery` 修飾類別讓卡片預設可見，因為這些頁面沒有載入 GSAP）呈現子卡片；子頁一律用 `.projects-page` + `.project-description`（無內容時填「內容待補充。」/「Content to be added.」）。
- **對比度規則**：欄位底色與文字顏色需維持足夠對比度；背景圖上的文字用「加深文字顏色＋白色 text-shadow」處理（見 `restaurant-helper*`/`turtle-soup*` 的 `.back-link`、`.section-header p`、`.project-description p`）。
- **部署規則**：修改確認後需 commit + push 到 `https://github.com/jamessun0919-ops/HW2MyHomepage`，觸發 GitHub Pages 自動部署。
- **本機測試伺服器**：本次交接時已關閉（原在 port 8090，`python -m http.server`）。下次要本機預覽需重新啟動。`mobile-preview.html` 目前僅顯示中文版單一手機外框（英文版 iframe 已暫時移除），下拉選單為本專案 5 個 hub 頁（首頁／人工智慧與資料分析／餐廳利潤管理／功能小幫手／益智小遊戲），子頁（如 `article-helper-zh.html`）需要手動改網址列或暫時改 iframe 的 `src` 才能預覽，未加入下拉選單。
- **PWA**：`manifest.json`（根目錄）＋ `img/icon-192.png`／`icon-512.png`，只有 `index-zh.html` 有 link 這個 manifest；`start_url` 固定指向 `index-zh.html`；無 Service Worker，純安裝功能無離線快取。iOS Safari 透過「加到主畫面」安裝後是獨立 WebView，看到舊內容時無法用私密瀏覽強制重整，需改用「完全關閉 App 重開」或「設定→Safari→進階→網站資料，刪除該網域」排查。
- **中英文同步規則（本階段起生效）**：開發者已明確要求後續所有新增/修改的專案說明文字，中英文都要同步補上，英文只需直譯、不必潤飾、也不需要特別顯示驗證。
- **截圖驗證工具**：`node scripts/screenshot.js [page1.html page2.html ...]`（相對本機伺服器根目錄的路徑，例如 `pages/vocational-training/ai-projects.html`），輸出到 `screenshots/`（已 gitignore，不進版控）；`fullPage` 截圖對 `background-attachment: fixed` 背景有已知失真限制。
- **git status 檢查慣例**：開發者會頻繁在 Claude Code 外部手動編輯文字/圖片，每次開始新一批編輯前先跑 `git status`，發現非本次操作的異動就提醒確認；確認後若該檔案未被程式碼引用則不需主動清理，維持現有做法即可，不新增額外流程。
- **grill-me / grilling skill**：已安裝於 user-level（`~/.claude/skills/`），本專案任務決定暫不使用。
