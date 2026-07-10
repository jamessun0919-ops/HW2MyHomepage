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
