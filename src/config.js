// Dán URL "Web app" của Google Apps Script vào đây sau khi deploy
// (xem hướng dẫn ở README-google-sheet.md). Để trống ("") nếu chưa thiết
// lập - ứng dụng vẫn chạy bình thường, chỉ là kết quả sẽ không được gửi
// lên Google Sheet, vẫn được lưu ở lịch sử localStorage như cũ.
export const GOOGLE_SHEET_WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbyjdYHAYl2YoewXBxXQEELlFxCC7EN161ohoDbNVveqcuf-_Ut6a1sO6wg--JBbMwqb/exec";

// Mã đi kèm mỗi lần gửi dữ liệu để Apps Script lọc bớt request rác/spam
// ngẫu nhiên. Lưu ý: vì đây là web tĩnh (không có server), mã này nằm
// trong mã nguồn công khai - người thực sự chủ đích dò trong DevTools/
// GitHub vẫn đọc được. Đây chỉ là hàng rào chắn bot/quét tự động thông
// thường, không phải bảo mật thực sự. Phải khớp với SECRET trong
// google-apps-script.gs.
export const SHEET_SYNC_SECRET = "ea8a5436bc18dd1aa0b28d451178933e";
