# 工作日誌 (Worklog)

> 說明：本專案在 2026-07-10 之前並未依 CLAUDE.md 規則維護工作日誌，以下 2026-06-08 ～ 2026-07-06 的紀錄是依 `git log` 回溯重建，僅反映 commit 訊息記載的內容，可能遺漏未提交的討論或嘗試過但被捨棄的方案。2026-07-10 起的紀錄為即時彙整。

---

## 2026-06-08
- 建立 James Sun 個人網頁初版：明亮主題、即時時鐘、多語言（中/英）支援、開發流程圖。

## 2026-06-09
- 部署更新：新增頁面與資源檔案。

## 2026-06-12
- 新增 AI 專案頁面：HW1 列加入 Repository／Demo 按鈕、HW2-HW6 設定 Repo/Demo 按鈕、HW7-HW10 佔位項目。
- 移除 project-row 容器的 hover 效果，改為靜態方框。
- 更新 HW5 的 repository／demo 網址（Hw5-Top10MLplatform、Vercel 端點）。
- Showcase 區塊內容調整：第三項改為 FinalProject.jpg／職訓課程專案，第四項改為 Mystery.png／邏輯、謎題、思考。
- 首頁區塊標題調整：「核心專長領域/Core Focus Areas」→「成果展示/Showcase」；導覽列「專業領域/Expertise」→「成果展示/Showcase」。
- 對調首頁 About Me 與 Portfolio/Expertise 區塊順序（含導覽選單連結）。
- Hero 區塊高度由 100vh 縮減為 50vh，並調整 padding。

## 2026-06-17
- 新增 HW7 細節與 HW7.1 專案；HW7／HW7.1 標題翻譯為英文版。
- 更新 About Me 描述（中英文版同步）。

## 2026-06-19
- Showcase 項目更名：「整體解決方案」→「最偉大的作品」，圖示改為 family.png；點擊後導向外部 Alyssa 專案頁面。
- 專案標籤由 HW1/02-05 改為 L1-L5。
- 程式語言專案頁面 L2-L5 按鈕文字標題更新（中英文）。

## 2026-06-20
- 聯絡區塊調整：Email 改為文字呈現（移除按鈕）、移除 LinkedIn、GitHub 移至 Email 下方。

## 2026-07-06
- 新增 CLAUDE.md 專案規則，並依規定章節順序重整 README.md。

## 待討論事項（下次工作開始前先討論）
> 2026-07-10 收工前 agent 提出的 7 點建議，尚未決策，下次工作前需先逐項討論再動工：
1. 首頁移除 Hero 後，最上方沒有任何個人自我介紹（名字/頭銜/一句話定位），About Me 要往下捲才看得到——確認這是否為預期的定位，如果不是要設計新的簡短開場。
2. 「信息技術整合／待補充」卡片目前無連結、對外顯示「TBD」字樣，觀感像半成品——討論是否先隱藏此卡，等有內容再上架。
3. `restaurant-helper(.html/-zh.html)` 與 `turtle-soup(.html/-zh.html)` 四個檔案的 `.action-btn`／`.project-description p`／`.back-link` 等樣式是複製四份而非共用，之後每次微調都要改四處——討論是否搬進 `style.css` 變成共用 class。
4. 目前排版驗證仰賴使用者截圖回報、agent 端沒有瀏覽器截圖工具，反覆來回較慢——確認是否要導入可截圖驗證的工具/流程。
5. 兩個介紹頁的 `background-attachment: fixed` 尚未在舊版 iOS Safari 實機測試，是已知平台限制風險點——排入驗證清單。
6. 兩個專案介紹頁的英文說明文字為 agent 直接翻譯，語感屬堪用而非潤飾文案——正式對外前使用者需要親自校閱潤飾。
7. 今天發現三個非本次對話操作刪除的圖片檔案（後確認為使用者自行刪除）——之後若在 Claude Code 外部動過檔案，建議開工前先過一次 `git status` 再繼續，避免類似情況被忽略。

## 2026-07-10
- 安裝 `grill-me` / `grilling` skill（使用者範圍，`~/.claude/skills/`），確認其用途後標記本專案暫不使用。
- 討論下一階段任務：調整首頁排版、將兩個已完成的工作方案連結進 Showcase，形成作品集展示。已確認的方案之一為 `restaurent Decision Paralysis`（已部署 https://restaurent-decision.vercel.app ）；第二個方案與具體排版調整內容尚待使用者補充。
- 依 CLAUDE.md 規則，建立 `worklog.md`、`chatlog.md`、`Handover.md` 三份文件，補齊本專案先前未建立的工作流程文件。
- 建立本機測試伺服器（Python `http.server`，port 8090）與 `mobile-preview.html`（中英文並排手機外框預覽工具，含頁面切換下拉選單），供後續排版調整即時檢視。
- 首頁調整：「成果展示/Showcase」全站改名為「作品集/Portfolio」（含子頁面導覽列與返回連結）；移除作品集標題下方的說明文字。
- 發現並移除 Hero 區塊：Hero 的自我介紹文字與即時時鐘因既有 GSAP `.from()` 動畫寫法與 CSS 起始 `opacity:0` 衝突，其實從未真正顯示過（此問題自初版即存在，過去被背景照片視覺遮蔽），今日拿掉背景圖後才曝光；決定直接移除整個 Hero 區塊，而非修復，並清除連帶產生的死程式碼（時鐘邏輯、CTA/Clock 相關 CSS、GSAP tween、`.about-features` 死選擇器）。首頁「首頁/Home」導覽項改為捲動回頁首。
- 將 `hero_bg2.jpg` 的浮水印背景處理手法從 Hero 區塊搬到作品集區塊。
- 作品集卡片重整：卡片順序調整、標題/小字說明更新、新增「職訓課程小組專題」與「個人興趣專題」兩張連向新介紹頁的卡片，移除「運營優化」「跨學科專業整合」佔位卡與對應 SVG，「信息技術整合」標記為「待補充/To Be Added」。同時把 `app.js` 的點擊路由從標題字串比對改為資料裡的 `link` 欄位（`handleGalleryClick` 簡化為一行判斷）。
- 新建兩個專案介紹頁並補上正式內容（各自中英文版）：
  - `restaurant-helper.html`/`-zh.html`（職訓課程小組專題-餐廳選擇小幫手）：標題/副標、DEMO（Vercel）與程式碼倉庫按鈕、三段專案說明。
  - `turtle-soup.html`/`-zh.html`（興趣專題-AI主持海龜湯解謎遊戲）：標題/副標、DEMO（Render）與程式碼倉庫按鈕、六段專案說明（含 RAG 技術說明）。
- 兩個介紹頁多輪排版微調：手機標題斷行修正（全站 `.section-header h2` 手機字級縮小規則）、英文版說明文字改回左對齊（避免 justify 造成字距異常）、DEMO/Repo 按鈕從左右並排改為上下堆疊＋等寬等高、按鈕文字統一 28px（英文版手機另外縮到 22px 避免斷行）、副標字體改 24px、返回連結與標題間距縮小。
- 兩個介紹頁加入固定浮水印背景圖（`restaurant-helper*`用 `ResDecBgPic.jpg`、`turtle-soup*`用 `puzzleparty.jpg`），桌面 `auto 100vh` 置中等比例、手機 `cover`，並加深返回連結／副標／內文文字顏色與陰影以提高背景圖上的可讀性對比度。
- 確認 `img/Turtle.jpg`、`img/brain.jpg`、`img/hero_bg.jpg` 三個既有死檔案（早已無程式碼引用）為使用者自行刪除，一併納入本次推送。
- 收工前依 CLAUDE.md 規則更新 README.md（新增今日完成項目、未完成事項、檔案架構）、`worklog.md`、`chatlog.md`、`Handover.md`，關閉本機測試伺服器，推送至 GitHub。
- 記錄作品集卡片圖片生成風格對照（供之後新增卡片圖片時參考一致風格）：
  - AI課程：科技風格
  - 餐廳利潤：科技風格
  - 小幫手：彩色素描風格
  - 小遊戲：卡通風格
  - 偉大作品：卡通風格

### 下半場：移除 About、共用樣式、截圖工具、作品集多層目錄重構
- 移除首頁「關於我/About Me」整個區塊（含導覽項、標題、文字、大頭照 `img/MCD01.JPG`），並清除 `app.js`／`style.css` 對應的 GSAP 動畫與 CSS；同步移除 10 個子頁面頁尾導覽列裡失效的 About 連結。
- 把 `restaurant-helper`/`turtle-soup` 四個檔案裡複製四份的內嵌 `<style>` 搬進 `style.css` 共用 class（`.projects-page`、`.project-detail-bg`），中英文差異改用 `html[lang="zh-TW"]` 選擇器處理，不再需要逐檔案改樣式。
- 導入 Playwright 截圖工具（`package.json`、`scripts/screenshot.js`、`.gitignore`），可對本機伺服器上的任一頁面產出桌機/手機截圖供視覺驗證；發現並記錄 Playwright `fullPage` 截圖對 `background-attachment: fixed` 的已知限制。
- 討論待辦事項 7（img 資料夾外部異動）：確認開發者手動用 `profit.jpg`/`Crew.jpg`/`material.jpg`/`customer.jpg` 等圖檔取代 `it_integration.svg`；決定維持既有「開新一批編輯前跑 git status、發現異動就提醒確認」的作法，不新增額外流程，未被程式碼使用的新檔案先忽略即可。
- 作品集卡片與目錄頁大改版（多輪迭代）：
  - 新增「AI課程/AI & Data Analysis」卡片，連到新建 `vocational-training` 目錄頁，內含「職訓課程小組專題」「機器學習演算法學習紀錄」「程式語言課程實作」三張卡片。
  - 新增「餐廳利潤管理/Restaurant Profit Management」卡片取代原「待補充」，連到新建 `restaurant-profit` 目錄頁，內含「班表轉換」「物料控管」「顧客資料整合」三張待補充子頁。
  - 新增「功能小幫手/Feature Helper」卡片（歷經「待補充」→「好用小功能」→「功能小幫手」三次更名），連到新建 `handy-features` 目錄頁，內含「餐廳小幫手」（重新導向既有 `restaurant-helper` 內容）、「天氣小幫手」（新頁，已補上 Vercel Demo／GitHub Repo／專案說明：練習網路爬蟲的課堂作業）、「文章小幫手」（新頁，僅佔位）。
  - 「個人興趣專題」更名「益智小遊戲」，連到新建 `puzzle-game` 目錄頁，內含「AI海龜湯」卡片（重新導向既有 `turtle-soup` 內容，介紹頁標題同步改為「AI海龜湯」並移除副標）。
  - 「最偉大的作品」更名「最偉大作品」，補上小字說明「女兒陛下Alyssa Sun」。
  - 原本「職訓課程小組專題」的實際內容（DEMO/Repo/說明）確定改由「餐廳小幫手」承接後，在 `vocational-training` 目錄頁新建 `group-project(-zh).html` 空白佔位介紹頁銜接。
- 檔案結構重構：因新增大量 html 頁面，依開發者要求把今天新建與相關聯的 30 個頁面依類別搬進 `pages/<category>/`（`vocational-training`／`handy-features`／`puzzle-game`／`restaurant-profit`），修正每個檔案裡連回根目錄資源（`style.css`／`img/`／`index.html`）的相對路徑（改用 `../../`），同資料夾內頁面互連維持原檔名；同步更新 `app.js` 的 hub 連結欄位與 `mobile-preview.html` 預覽下拉選單路徑；把資料夾配置規則寫入 `CLAUDE.md`。用截圖工具抽測整條連結鏈（首頁→目錄頁→子頁，含最複雜的 `ex0602.html` 互動 Demo 頁）確認搬遷後正常運作。
- 收工前產出交接文件（`Handover.md`）、更新 `README.md`，關閉本機測試伺服器（port 8090），推送至 GitHub。
