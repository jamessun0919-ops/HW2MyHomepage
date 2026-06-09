"""
讓用戶輸入一個整數秒，計算？天？時？分？秒
輸出格式：ＸＸＸ秒＝Ｘ天Ｘ時Ｘ分Ｘ秒

進階運用：計算停車費用（半小時Ｘ元，單日最高Ｘ元）
"""

#取得資料
tot_secs = int(input("請輸入待計算的秒數："))
#取不足分的秒數
#某數除以某術後餘數的計算符號為 % 
rem_secs = tot_secs % 60
#總分鐘數等於全部秒數減去不足一分鐘的秒數後,再換算為分鐘數
#亦可用直接計算整數商值計算出一分鐘的分鐘數,tot_mins = tot_secs // 60
tot_mins = int((tot_secs - rem_secs)/60)
#不足小時的分鐘數
rem_mins = tot_mins % 60
#總小時數等於全部分鐘數減去不足一小時的分鐘數後,再換算為小時數
tot_hours = int((tot_mins - rem_mins)/60)
#不足一天的小時數
rem_hours = tot_hours % 24
#總天數等於全部小時數減去不足一天的小時數後，再換算為總天數
tot_days = int((tot_hours - rem_hours)/24)
#輸出最後格式
print(tot_secs,"秒可換算為",tot_days,"天",rem_hours,"小時",rem_mins,"分鐘",rem_secs,"秒")
