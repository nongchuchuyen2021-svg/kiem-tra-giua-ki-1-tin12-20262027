// === DÁN TOÀN BỘ ĐOẠN CODE NÀY VÀO GOOGLE APPS SCRIPT ===
// Xem hướng dẫn thiết lập ở README-google-sheet.md
//
// SECRET phải khớp với SHEET_SYNC_SECRET trong file src/config.js của web.
var SECRET = "ea8a5436bc18dd1aa0b28d451178933e";

var HEADER_ROW = [
  "Thời gian",
  "Họ và tên",
  "Lớp",
  "Điểm trắc nghiệm",
  "Điểm đúng/sai",
  "Tổng điểm tự động",
  "Bài tự luận",
];

function ensureHeaderRow(sheet) {
  // Kiểm tra trực tiếp ô A1 thay vì dựa vào "Sheet có trống hay không" -
  // cách này chắc chắn hơn, hoạt động đúng dù Sheet còn sót định dạng/dữ
  // liệu cũ ở đâu đó khiến getLastRow() không trả về 0 như mong đợi.
  var firstCell = sheet.getRange(1, 1).getValue();
  if (firstCell !== HEADER_ROW[0]) {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, HEADER_ROW.length).setValues([HEADER_ROW]);
  }
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  if (data.secret !== SECRET) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: "invalid secret" }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  ensureHeaderRow(sheet);

  var essayText = (data.essayAnswers || [])
    .map(function (item, i) {
      return (
        "Câu " +
        (i + 1) +
        ": " +
        item.question +
        "\nTrả lời: " +
        (item.answer || "(bỏ trống)")
      );
    })
    .join("\n\n");

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.class || "",
    data.mcqScore != null ? data.mcqScore : "",
    data.tfScore != null ? data.tfScore : "",
    data.totalScore != null ? data.totalScore : "",
    essayText,
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ result: "success" }),
  ).setMimeType(ContentService.MimeType.JSON);
}
