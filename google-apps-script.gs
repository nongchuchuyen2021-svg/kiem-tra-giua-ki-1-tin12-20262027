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

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  if (data.secret !== SECRET) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: "invalid secret" }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADER_ROW);
  }

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
