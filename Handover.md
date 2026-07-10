# 交接文件 (Handover)

## 專案目標 (Project Goal)
以雙語（中／英）呈現的個人網頁作為作品集入口，並將已完成的獨立專案整合進「作品集」區塊，形成完整的成品展示。

## 已完成進度 (Completed)
- 首頁 Hero 區塊已移除（原本的自我介紹文字與即時時鐘因 GSAP/CSS 起始 `opacity:0` 衝突從未真正顯示過，決定直接移除而非修復），連帶清除死程式碼（時鐘邏輯、CTA/Clock CSS、GSAP tween、`.about-features` 死選擇器）。
- 全站「成果展示/Showcase」已改名為「作品集/Portfolio」（首頁、所有子頁面導覽列與返回連結同步）。
- `hero_bg2.jpg` 浮水印背景已從 Hero 搬到作品集區塊。
- 作品集卡片（`app.js` 的 `galleryImagesData`）已重整：
  - 「職訓課程小組專題」（餐廳選擇小幫手）移到第一位，連到新建的 [restaurant-helper.html](restaurant-helper.html) / [restaurant-helper-zh.html](restaurant-helper-zh.html)。
  - 「個人興趣專題」改標題含小字說明，連到新建的 [turtle-soup.html](turtle-soup.html) / [turtle-soup-zh.html](turtle-soup-zh.html)。
  - 移除「運營優化」「跨學科專業整合」佔位卡與對應孤兒 SVG；「信息技術整合」標記為「待補充/To Be Added」，暫無連結。
  - 點擊路由從標題字串比對改為資料裡的 `link` 欄位（`handleGalleryClick` 簡化為一行）。
- 兩個新專案介紹頁已補上正式內容（標題/副標/DEMO 按鈕/GitHub Repo 按鈕/專案說明），並完成多輪排版微調：手機標題不斷行、DEMO/Repo 按鈕改上下堆疊等寬等高（字體統一 28px，英文版手機額外縮到 22px 避免斷行）、固定浮水印背景圖（`ResDecBgPic.jpg` / `puzzleparty.jpg`，桌面 `auto 100vh` 置中、手機 `cover`）、加深文字顏色＋白色陰影提高背景圖上的對比度、副標 24px、返回鍵間距縮小。
- 新增 [mobile-preview.html](mobile-preview.html) 本機測試工具：中英文手機外框並排預覽，含頁面切換下拉選單。
- 已補齊本專案先前缺少的工作流程文件：`worklog.md`（2026-06-08～07-06 為回溯重建）、`chatlog.md`（自 2026-07-10 起記錄）、本檔案；README.md 已同步更新已完成進度／未完成事項／檔案架構。
- 本機測試伺服器已於本次交接時關閉。

## 目前的瓶頸或停頓點 (Current Blocker/Status)
無阻塞中的問題。以下為待補事項，非卡關：
- 「信息技術整合／待補充」卡片尚無內容或連結，等未來有新專案時再補上。
- 兩個新介紹頁的最終視覺效果（背景／對比度／間距）尚未經使用者在清除快取、實機環境下最終確認。

## 下一步行動 (Next Steps)
1. 使用者清快取後於實機（含手機）確認 `restaurant-helper*.html` / `turtle-soup*.html` 的背景、文字對比度、按鈕排版是否符合預期，有問題再回報微調。
2. 未來若有新完成的專案要補進作品集，於 `app.js` 的 `galleryImagesData`（[app.js:5-18](app.js#L5-L18)）新增項目並附上 `link`，不需要再動 `handleGalleryClick`。
3. 「信息技術整合」卡片未來若有對應專案，比照 `restaurant-helper`/`turtle-soup` 的模式建立介紹頁並更新該卡片的 title/subtitle/link。

## 關鍵設定與上下文 (Key Context & Rules)
- **雙語同步規則**：任何排版/文字/腳本/樣式修改，中英文版本（`*.html` 與 `*-zh.html`）必須同步更新。
- **對比度規則**：欄位底色與文字顏色需維持足夠對比度；本次已用「加深文字顏色＋白色 text-shadow」的手法處理背景圖上的文字可讀性問題（見 `restaurant-helper*.html`/`turtle-soup*.html` 的 `.back-link`、`.section-header p`、`.project-description p`）。
- **部署規則**：修改確認後需 commit + push 到 `https://github.com/jamessun0919-ops/HW2MyHomepage`，觸發 GitHub Pages 自動部署。
- **作品集資料結構**：`app.js` 的 `galleryImagesData`（中／英各一份陣列）驅動首頁 `.gallery-grid` 渲染；每個項目可帶 `link`（有才可點擊），`handleGalleryClick` 只是 `if (image.link) window.location.href = image.link;`，新增/修改項目不需要再碰點擊邏輯。
- **背景浮水印手法**（沿用於 Hero 原本的作法，現用於作品集區塊與兩個介紹頁）：`background-image: radial-gradient(...), url(...)` 疊加淡化圖片，桌面版視需求可用 `auto 100vh` 置中等比例縮放，手機版用 `cover` 填滿，需要固定不隨滑動時加 `background-attachment: fixed`（注意：舊版 iOS Safari 對 `fixed` 支援不佳，是已知平台限制）。
- **本機測試伺服器**：本次交接時已關閉（原在 port 8090，`python -m http.server`）。下次要本機預覽需重新啟動，並可搭配 `mobile-preview.html` 檢查響應式排版。
- **grill-me / grilling skill**：已安裝於 user-level（`~/.claude/skills/`），本專案任務決定暫不使用。
