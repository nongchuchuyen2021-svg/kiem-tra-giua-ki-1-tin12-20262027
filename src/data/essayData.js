// Kho câu hỏi Tự luận (có gợi ý đáp án) - Giữa kì 1 Tin học 12
const essayData = [
  {
    id: 1,
    text: "Hãy giải thích sự khác biệt giữa một phần mềm thông thường (ví dụ: máy tính bỏ túi) và một hệ thống AI (ví dụ: trợ lý ảo) khi cùng phải xử lý một yêu cầu chưa từng gặp trước đó.",
    hint: "Gợi ý: Phần mềm thông thường chỉ thực hiện đúng các lệnh được lập trình sẵn, không xử lý được tình huống ngoài phạm vi lập trình. AI có khả năng học từ dữ liệu và suy luận, nên có thể đưa ra phản hồi hợp lý cho tình huống mới, dù không được lập trình cứng cho trường hợp đó.",
  },
  {
    id: 2,
    text: "Nêu một ví dụ ứng dụng AI trong lĩnh vực y tế hoặc giáo dục mà em biết, và phân tích một rủi ro có thể gặp phải nếu con người quá phụ thuộc vào AI trong lĩnh vực đó mà không kiểm chứng lại.",
    hint: "Gợi ý: Ví dụ AI hỗ trợ chẩn đoán hình ảnh y tế (X-quang, MRI) giúp bác sĩ phát hiện bệnh nhanh hơn. Rủi ro: AI có thể đưa ra kết quả sai lệch (dữ liệu huấn luyện thiên vị, ảo giác AI); nếu bác sĩ hoàn toàn tin tưởng mà không kiểm chứng có thể dẫn đến chẩn đoán sai, ảnh hưởng tới sức khoẻ bệnh nhân.",
  },
  {
    id: 3,
    text: "Trong một phòng máy tính có 20 máy cần kết nối thành mạng LAN và kết nối ra Internet, em hãy đề xuất các thiết bị mạng cần dùng (switch, router, access point, modem) và giải thích vai trò của từng thiết bị trong sơ đồ kết nối đó.",
    hint: "Gợi ý: Switch: kết nối 20 máy tính trong LAN. Router: định tuyến, kết nối LAN với Internet. Modem: chuyển đổi tín hiệu với đường truyền của nhà cung cấp dịch vụ. Access Point (nếu cần): cho phép thiết bị không dây (laptop, điện thoại) truy cập mạng.",
  },
  {
    id: 4,
    text: "Giải thích ngắn gọn vì sao khi tải một tệp tin quan trọng (ví dụ: bài kiểm tra) qua mạng, người ta thường ưu tiên sử dụng giao thức TCP thay vì UDP.",
    hint: "Gợi ý: TCP đảm bảo truyền tin cậy: kiểm tra lỗi, chia nhỏ gói tin có đánh số thứ tự, truyền lại nếu bị mất hoặc sai - quan trọng khi cần dữ liệu chính xác tuyệt đối. UDP nhanh hơn nhưng không đảm bảo gói tin đến đủ và đúng thứ tự, phù hợp hơn cho các ứng dụng cần tốc độ như xem video trực tuyến.",
  },
  {
    id: 5,
    text: "Em hãy đề xuất cách thiết lập quyền truy cập phù hợp cho một thư mục tài liệu chung của lớp (chứa đề cương ôn tập) được chia sẻ trên mạng LAN của phòng máy, sao cho vừa tiện lợi vừa an toàn.",
    hint: "Gợi ý: Cấp quyền \"chỉ đọc\" (Read only) cho học sinh để chỉ xem/sao chép tài liệu, không thể chỉnh sửa hay xoá; chỉ cấp quyền \"toàn quyền\" (ghi/chỉnh sửa) cho giáo viên hoặc người quản trị phòng máy để cập nhật tài liệu khi cần.",
  },
  {
    id: 6,
    text: "Giả sử em nhận được một tin nhắn trong nhóm lớp có nội dung gây tranh cãi, chưa rõ nguồn gốc, kêu gọi mọi người chia sẻ gấp. Em sẽ ứng xử như thế nào để thể hiện là một người dùng mạng có trách nhiệm?",
    hint: "Gợi ý: Không vội chia sẻ ngay; kiểm chứng thông tin qua nguồn chính thống (giáo viên, nhà trường, báo chí uy tín) trước khi tin và chia sẻ; nếu phát hiện tin giả, có thể nhắc nhở bạn bè, không lan truyền thêm; giữ thái độ tôn trọng, không công kích người đăng tin.",
  },
  {
    id: 7,
    text: "Hãy mô tả ngắn gọn cấu trúc cơ bản của một tệp HTML (gồm những phần nào) và nêu vai trò của phần <head> so với phần <body>.",
    hint: "Gợi ý: Cấu trúc cơ bản gồm khai báo <!DOCTYPE html>, thẻ <html> bao ngoài, bên trong có <head> và <body>. <head> chứa thông tin mô tả trang (tiêu đề tab trình duyệt, liên kết CSS...) không hiển thị trực tiếp trên trang; <body> chứa nội dung hiển thị cho người xem (văn bản, hình ảnh, liên kết...).",
  },
  {
    id: 8,
    text: "Em hãy mô tả cách sử dụng các thẻ HTML để trình bày một đoạn giới thiệu bản thân gồm: một tiêu đề lớn là tên của em, một đoạn văn giới thiệu ngắn, trong đó có một từ được in đậm.",
    hint: "Gợi ý: Có thể dùng <h1>Tên của em</h1> rồi <p>Đoạn giới thiệu, trong đó có <b>một từ in đậm</b>.</p>. Thẻ <h1> tạo tiêu đề lớn nhất, <p> tạo đoạn văn, <b> (hoặc <strong>) làm chữ in đậm.",
  },
  {
    id: 9,
    text: "Trường em có một phòng máy 20 máy tính cần vừa kết nối LAN để chia sẻ máy in dùng chung, vừa kết nối Internet để tra cứu tài liệu. Em hãy đề xuất sơ đồ thiết bị mạng cần dùng và giải thích vì sao cần thiết lập quyền truy cập phù hợp khi chia sẻ máy in/thư mục trong phòng máy đó.",
    hint: "Gợi ý: Cần Switch để nối 20 máy trong LAN, Router (kết hợp Modem) để kết nối ra Internet. Về quyền truy cập: nên cho phép mọi máy trong phòng gửi lệnh in tới máy in dùng chung nhưng giới hạn quyền chỉnh sửa cấu hình máy in chỉ cho giáo viên/quản trị phòng máy, tránh học sinh vô tình thay đổi cài đặt hoặc gây sự cố cho cả phòng.",
  },
  {
    id: 10,
    text: "Nhiều nền tảng mạng xã hội hiện nay dùng AI để gợi ý nội dung theo sở thích người xem, nhưng đôi khi vô tình khiến người dùng chỉ tiếp xúc với những quan điểm giống mình (gọi là 'bong bóng lọc' - filter bubble). Em hãy phân tích ảnh hưởng của hiện tượng này đến cách nhìn nhận thông tin của người dùng, và đề xuất một cách ứng xử có trách nhiệm để tránh bị 'bó hẹp' trong bong bóng lọc đó.",
    hint: "Gợi ý: Ảnh hưởng - người dùng dễ chỉ thấy thông tin/quan điểm một chiều, khó tiếp cận góc nhìn đa dạng, dễ tin vào tin giả trong \"bong bóng\" của mình, hạn chế tư duy phản biện. Cách ứng xử: chủ động tìm đọc thông tin từ nhiều nguồn khác nhau, kiểm chứng thông tin trước khi tin, không chỉ dựa vào những gì AI gợi ý, giữ thái độ cởi mở với các quan điểm khác biệt.",
  },
];

export default essayData;
