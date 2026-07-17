# Hướng dẫn kết nối web với Google Sheet

## Bước 1: Tạo Google Sheet

1. Vào [sheets.google.com](https://sheets.google.com), tạo bảng tính mới.
2. Đặt tên, ví dụ: `Kết quả Kiểm tra Giữa kì 1 - Tin 12`.
3. Ở dòng 1, gõ các tiêu đề cột (không bắt buộc nhưng nên có):
   `Thời gian | Họ và tên | Lớp | Điểm trắc nghiệm | Điểm đúng/sai | Tổng điểm tự động | Bài tự luận`

## Bước 2: Gắn Apps Script vào Sheet

1. Trên thanh menu của Sheet, chọn **Tiện ích mở rộng (Extensions) → Apps Script**.
2. Xoá hết đoạn code mẫu (`function myFunction() {...}`).
3. Mở file `google-apps-script.gs` (mình đã tạo sẵn trong thư mục dự án), copy toàn bộ nội dung, dán vào.
4. Nhấn **Lưu** (biểu tượng đĩa mềm, hoặc Ctrl+S). Đặt tên project tuỳ ý, ví dụ "Nhận kết quả bài thi".

## Bước 3: Triển khai (Deploy) thành Web App

1. Góc trên bên phải, bấm **Deploy (Triển khai) → New deployment (Bản triển khai mới)**.
2. Bấm biểu tượng bánh răng cạnh "Select type", chọn **Web app**.
3. Điền:
   - **Execute as (Thực thi với tư cách)**: Me (email của bạn)
   - **Who has access (Ai có quyền truy cập)**: **Anyone (Bất kỳ ai)** — bắt buộc chọn mục này, nếu không web sẽ không gửi được dữ liệu.
4. Bấm **Deploy**.
5. Google sẽ yêu cầu **cấp quyền** (Authorize access) vì đây là script tự viết:
   - Chọn tài khoản Google của bạn.
   - Nếu hiện cảnh báo "Google chưa xác minh ứng dụng này" → bấm **Advanced (Nâng cao)** → **Go to [tên project] (unsafe)** → **Allow (Cho phép)**. Đây là bước bình thường vì script do chính bạn viết, không phải của bên thứ ba.
6. Sau khi deploy xong, Google hiện ra một **Web app URL** dạng:
   `https://script.google.com/macros/s/AKfycb................/exec`
7. **Copy URL đó, gửi cho mình** — mình sẽ gắn vào code của web.

## Lưu ý khi sửa lại script sau này

Nếu bạn (hoặc mình) sửa lại nội dung file `.gs` sau khi đã deploy, phải tạo **bản triển khai mới**: Deploy → Manage deployments → biểu tượng bút chì → chọn "New version" → Deploy, thì thay đổi mới có hiệu lực (sửa code không tự động áp dụng cho URL cũ).
