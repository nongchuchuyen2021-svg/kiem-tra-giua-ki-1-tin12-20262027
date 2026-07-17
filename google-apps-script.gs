// === DÁN TOÀN BỘ ĐOẠN CODE NÀY VÀO GOOGLE APPS SCRIPT ===
// Xem hướng dẫn thiết lập ở README-google-sheet.md
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

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
