// Kho câu hỏi Trắc nghiệm khách quan (A/B/C/D) - Giữa kì 1 Tin học 12
// Bám sát KHGD: Chủ đề 1 (Bài 1, 2), Chủ đề 2 (Bài 3, 4, 5),
// Chủ đề 3 (Bài 6), Chủ đề 4 (Bài 7, 8)
const mcqData = [
  // Bài 1. Làm quen với Trí tuệ nhân tạo
  {
    id: 1,
    text: "AI (Trí tuệ nhân tạo) được hiểu là gì?",
    options: {
      A: "Phần mềm chỉ thực hiện đúng các lệnh được lập trình sẵn, không thay đổi",
      B: "Hệ thống máy tính có khả năng học hỏi, suy luận và đưa ra quyết định mô phỏng trí thông minh con người",
      C: "Một loại virus máy tính nguy hiểm",
      D: "Thiết bị phần cứng dùng để tăng tốc độ mạng",
    },
    correct: "B",
  },
  {
    id: 2,
    text: "Điểm khác biệt cơ bản giữa AI và phần mềm thông thường là gì?",
    options: {
      A: "AI luôn chạy nhanh hơn phần mềm thông thường",
      B: "AI không cần cài đặt trên máy tính",
      C: "AI có khả năng học hỏi từ dữ liệu và suy luận để đưa ra kết quả mới, không chỉ làm theo quy tắc cố định",
      D: "AI chỉ hoạt động khi có kết nối Internet",
    },
    correct: "C",
  },
  {
    id: 3,
    text: "Đâu KHÔNG phải là một ví dụ về ứng dụng AI trong đời sống?",
    options: {
      A: "Trợ lý ảo Siri, Google Assistant",
      B: "Hệ thống gợi ý video trên YouTube",
      C: "Máy tính bỏ túi thực hiện phép cộng hai số",
      D: "Xe ô tô tự lái",
    },
    correct: "C",
  },
  {
    id: 4,
    text: "\"AI hẹp\" (Narrow AI) là loại AI như thế nào?",
    options: {
      A: "AI có thể tư duy như con người trong mọi lĩnh vực",
      B: "AI được thiết kế để thực hiện tốt một nhiệm vụ cụ thể (ví dụ: nhận diện khuôn mặt, dịch ngôn ngữ)",
      C: "AI chỉ hoạt động trên điện thoại có màn hình nhỏ",
      D: "AI không cần dữ liệu để hoạt động",
    },
    correct: "B",
  },
  {
    id: 5,
    text: "Khả năng nào sau đây thể hiện rõ nhất \"sự suy luận\" của một hệ thống AI?",
    options: {
      A: "Hiển thị lại nguyên văn một đoạn văn bản đã nhập vào",
      B: "Từ dữ liệu đã học, đưa ra dự đoán hoặc quyết định cho tình huống mới chưa từng gặp",
      C: "Lưu trữ dữ liệu vào ổ cứng",
      D: "Hiển thị đồng hồ thời gian thực trên màn hình",
    },
    correct: "B",
  },

  // Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống
  {
    id: 6,
    text: "AI hiện đang được ứng dụng mạnh mẽ trong lĩnh vực nào sau đây?",
    options: {
      A: "Y tế (hỗ trợ chẩn đoán hình ảnh bệnh lý)",
      B: "Chỉ trong lĩnh vực giải trí",
      C: "Chỉ trong sản xuất ô tô",
      D: "AI chưa được ứng dụng thực tế ở lĩnh vực nào",
    },
    correct: "A",
  },
  {
    id: 7,
    text: "\"Ảo giác AI\" (AI hallucination) là hiện tượng gì?",
    options: {
      A: "AI tự tắt nguồn đột ngột",
      B: "AI đưa ra thông tin sai lệch, không có căn cứ nhưng trình bày như thể là sự thật",
      C: "AI học được nhiều ngôn ngữ khác nhau",
      D: "AI chạy chậm hơn bình thường",
    },
    correct: "B",
  },
  {
    id: 8,
    text: "Để bảo đảm sự phát triển AI có trách nhiệm, điều nào sau đây là cần thiết?",
    options: {
      A: "Chỉ cần AI hoạt động nhanh, không cần quan tâm tính chính xác",
      B: "Đánh giá, giảm thiểu rủi ro đạo đức, thiên vị dữ liệu và bảo vệ quyền riêng tư",
      C: "Cho phép AI tự đưa ra mọi quyết định thay con người trong mọi trường hợp",
      D: "Không công khai cách thức hoạt động của hệ thống AI",
    },
    correct: "B",
  },
  {
    id: 9,
    text: "Hệ thống AI \"có khả năng học\" nghĩa là gì?",
    options: {
      A: "Có thể tự cập nhật, cải thiện kết quả dựa trên dữ liệu mới được cung cấp",
      B: "Cần được lập trình lại hoàn toàn mỗi khi có dữ liệu mới",
      C: "Không bao giờ thay đổi cách xử lí dù có thêm dữ liệu",
      D: "Chỉ hoạt động một lần duy nhất rồi ngừng",
    },
    correct: "A",
  },
  {
    id: 10,
    text: "Khi sử dụng thông tin do AI cung cấp, người dùng nên làm gì?",
    options: {
      A: "Tin tưởng tuyệt đối, sử dụng ngay không cần kiểm tra",
      B: "Kiểm chứng lại thông tin qua nguồn đáng tin cậy trước khi sử dụng",
      C: "Không bao giờ được phép sử dụng AI",
      D: "Chỉ sử dụng AI vào ban đêm",
    },
    correct: "B",
  },

  // Bài 3. Một số thiết bị mạng thông dụng
  {
    id: 11,
    text: "Thiết bị nào có chức năng định tuyến (tìm đường đi) cho gói tin giữa các mạng khác nhau?",
    options: { A: "Switch", B: "Router", C: "Modem", D: "Access Point" },
    correct: "B",
  },
  {
    id: 12,
    text: "Access Point (điểm truy cập không dây) có chức năng chính là gì?",
    options: {
      A: "Mã hoá toàn bộ dữ liệu trên Internet",
      B: "Cho phép các thiết bị không dây (laptop, điện thoại) kết nối vào mạng có dây",
      C: "Tăng tốc độ xử lí của CPU",
      D: "Lưu trữ dữ liệu sao lưu",
    },
    correct: "B",
  },
  {
    id: 13,
    text: "Modem có vai trò gì trong việc kết nối Internet?",
    options: {
      A: "Chuyển đổi tín hiệu giữa thiết bị của người dùng và đường truyền của nhà cung cấp dịch vụ Internet",
      B: "Chỉ dùng để sạc pin cho router",
      C: "Chặn toàn bộ virus xâm nhập vào máy tính",
      D: "In tài liệu qua mạng",
    },
    correct: "A",
  },
  {
    id: 14,
    text: "So với Hub, Switch có ưu điểm gì khi kết nối nhiều máy tính?",
    options: {
      A: "Switch gửi dữ liệu tới đúng cổng đích cần nhận thay vì gửi tới tất cả các cổng, giảm xung đột tín hiệu",
      B: "Switch không cần dùng cáp mạng",
      C: "Switch chỉ kết nối được tối đa 2 máy tính",
      D: "Switch có giá thành luôn thấp hơn Hub",
    },
    correct: "A",
  },
  {
    id: 15,
    text: "Trong một phòng máy tính nhà trường muốn nhiều máy tính cùng dùng chung một máy in nối mạng, cần dùng đến thiết bị nào để kết nối các máy tính với nhau?",
    options: {
      A: "Switch (hoặc thiết bị mạng tương đương)",
      B: "Chuột không dây",
      C: "Bàn phím",
      D: "Màn hình phụ",
    },
    correct: "A",
  },

  // Bài 4. Giao thức mạng
  {
    id: 16,
    text: "Giao thức mạng là gì?",
    options: {
      A: "Là tên gọi khác của địa chỉ IP",
      B: "Là tập hợp các quy tắc chuẩn giúp các thiết bị trong mạng có thể giao tiếp, trao đổi dữ liệu với nhau",
      C: "Là một loại virus máy tính",
      D: "Là phần mềm diệt virus",
    },
    correct: "B",
  },
  {
    id: 17,
    text: "Bộ giao thức TCP/IP là nền tảng của mạng nào?",
    options: {
      A: "Chỉ dùng cho mạng nội bộ (LAN) trong một toà nhà",
      B: "Mạng Internet toàn cầu",
      C: "Chỉ dùng cho mạng điện thoại di động 4G",
      D: "Chỉ dùng để in ấn qua mạng",
    },
    correct: "B",
  },
  {
    id: 18,
    text: "Tầng nào trong mô hình TCP/IP có nhiệm vụ định danh và định tuyến gói tin qua địa chỉ IP?",
    options: {
      A: "Tầng Ứng dụng (Application)",
      B: "Tầng Giao vận (Transport)",
      C: "Tầng Internet",
      D: "Tầng Liên kết (Network Access)",
    },
    correct: "C",
  },
  {
    id: 19,
    text: "Giao thức nào ở tầng Giao vận có nhiệm vụ đảm bảo dữ liệu được truyền tin cậy, kiểm tra và truyền lại nếu bị mất gói tin?",
    options: { A: "TCP", B: "HTTP", C: "FTP", D: "DNS" },
    correct: "A",
  },
  {
    id: 20,
    text: "HTTP/HTTPS là giao thức thuộc tầng nào và dùng để làm gì?",
    options: {
      A: "Tầng Liên kết - dùng để kết nối dây cáp mạng",
      B: "Tầng Ứng dụng - dùng để truyền tải nội dung trang web giữa trình duyệt và máy chủ",
      C: "Tầng Internet - dùng để định tuyến gói tin",
      D: "Không thuộc tầng nào trong mô hình TCP/IP",
    },
    correct: "B",
  },

  // Bài 5. Thực hành chia sẻ tài nguyên trên mạng
  {
    id: 21,
    text: "Trong mạng LAN, việc chia sẻ máy in mạng mang lại lợi ích gì?",
    options: {
      A: "Nhiều máy tính có thể cùng sử dụng chung một máy in mà không cần mỗi máy một máy in riêng",
      B: "Làm máy in in nhanh hơn gấp đôi",
      C: "Giảm độ phân giải bản in",
      D: "Chỉ một máy tính duy nhất được phép sử dụng máy in",
    },
    correct: "A",
  },
  {
    id: 22,
    text: "Khi chia sẻ một thư mục trên mạng, vì sao cần thiết lập quyền truy cập phù hợp (chỉ đọc, toàn quyền...)?",
    options: {
      A: "Để thư mục có dung lượng nhỏ hơn",
      B: "Để kiểm soát ai được xem, ai được chỉnh sửa dữ liệu, tránh truy cập hoặc thay đổi trái phép",
      C: "Để thư mục tự động được sao lưu",
      D: "Không có tác dụng gì, chỉ mang tính hình thức",
    },
    correct: "B",
  },
  {
    id: 23,
    text: "Nếu một thư mục chia sẻ được cấp quyền \"chỉ đọc\" (Read only) cho người dùng khác, người đó có thể làm gì?",
    options: {
      A: "Xoá toàn bộ tệp trong thư mục",
      B: "Chỉ xem, sao chép nội dung nhưng không thể chỉnh sửa hoặc xoá tệp gốc",
      C: "Đổi tên thư mục",
      D: "Cấp quyền truy cập cho người khác",
    },
    correct: "B",
  },
  {
    id: 24,
    text: "Việc chia sẻ tài nguyên trong mạng cục bộ (LAN) chủ yếu nhằm mục đích gì?",
    options: {
      A: "Tăng tốc độ chip xử lí của từng máy tính",
      B: "Cho phép nhiều người dùng cùng sử dụng chung tệp, thư mục, thiết bị mà không cần sao chép hoặc trang bị riêng lẻ",
      C: "Ngắt kết nối Internet để bảo mật",
      D: "Xoá dữ liệu định kỳ trên các máy",
    },
    correct: "B",
  },
  {
    id: 25,
    text: "Trước khi chia sẻ một thư mục chứa dữ liệu nhạy cảm trong mạng LAN của trường học, nên làm gì?",
    options: {
      A: "Chia sẻ công khai cho tất cả mọi người trong mạng, không cần đặt quyền",
      B: "Xác định rõ những ai cần quyền truy cập và giới hạn quyền (đọc/ghi) tương ứng cho từng người/nhóm",
      C: "Xoá hết dữ liệu trong thư mục trước khi chia sẻ",
      D: "Đổi tên thư mục thành tên khó đoán là đủ an toàn",
    },
    correct: "B",
  },

  // Bài 6. Giao tiếp và ứng xử trong không gian mạng
  {
    id: 26,
    text: "\"Không gian mạng\" (cyberspace) được hiểu là gì?",
    options: {
      A: "Một phòng học có kết nối wifi",
      B: "Môi trường kết nối con người, thiết bị và dữ liệu thông qua mạng Internet và các hệ thống thông tin",
      C: "Một loại ổ cứng lưu trữ dữ liệu",
      D: "Không gian vật lý bên trong máy tính",
    },
    correct: "B",
  },
  {
    id: 27,
    text: "Nhược điểm dễ gặp khi giao tiếp qua không gian mạng so với giao tiếp trực tiếp là gì?",
    options: {
      A: "Luôn nhanh hơn giao tiếp trực tiếp",
      B: "Dễ xảy ra hiểu lầm do thiếu biểu cảm, ngôn ngữ cơ thể; dễ lan truyền tin giả",
      C: "Không tốn chi phí",
      D: "Không có nhược điểm nào",
    },
    correct: "B",
  },
  {
    id: 28,
    text: "Hành vi nào sau đây thể hiện ứng xử có văn hoá, nhân văn trên không gian mạng?",
    options: {
      A: "Bình luận xúc phạm người khác khi không đồng ý quan điểm",
      B: "Chia sẻ tin tức chưa kiểm chứng để câu view",
      C: "Tôn trọng người khác, kiểm chứng thông tin trước khi chia sẻ, không phát tán nội dung sai sự thật",
      D: "Dùng tài khoản giả để công kích người khác",
    },
    correct: "C",
  },
  {
    id: 29,
    text: "\"Bắt nạt trực tuyến\" (cyberbullying) là hành vi như thế nào?",
    options: {
      A: "Giúp đỡ bạn bè học tập qua mạng",
      B: "Cố ý đe doạ, xúc phạm, quấy rối người khác nhiều lần thông qua các phương tiện điện tử/mạng xã hội",
      C: "Chia sẻ tài liệu học tập miễn phí",
      D: "Kết bạn với người mới quen trên mạng xã hội",
    },
    correct: "B",
  },
  {
    id: 30,
    text: "Khi nhận được một thông tin gây sốc, chưa rõ nguồn gốc trên mạng xã hội, nên làm gì trước khi chia sẻ?",
    options: {
      A: "Chia sẻ ngay lập tức để mọi người biết sớm nhất",
      B: "Kiểm chứng thông tin qua các nguồn chính thống, đáng tin cậy trước khi quyết định chia sẻ",
      C: "Chỉnh sửa thêm thắt cho hấp dẫn hơn rồi chia sẻ",
      D: "Xoá ngay không cần xem nội dung",
    },
    correct: "B",
  },

  // Bài 7. HTML và cấu trúc trang web
  {
    id: 31,
    text: "HTML là viết tắt của cụm từ nào?",
    options: {
      A: "High Tech Modern Language",
      B: "HyperText Markup Language",
      C: "Home Tool Markup Language",
      D: "Hyperlink and Text Markup Language",
    },
    correct: "B",
  },
  {
    id: 32,
    text: "HTML được dùng để làm gì?",
    options: {
      A: "Tạo cấu trúc và nội dung cho trang web",
      B: "Định dạng màu sắc cơ sở dữ liệu",
      C: "Chỉ dùng để soạn thảo văn bản Word",
      D: "Quản lý hệ điều hành máy tính",
    },
    correct: "A",
  },
  {
    id: 33,
    text: "Một \"phần tử HTML\" (HTML element) thường bao gồm những gì?",
    options: {
      A: "Chỉ có thẻ mở, không cần thẻ đóng",
      B: "Thẻ mở, nội dung bên trong (nếu có) và thẻ đóng tương ứng",
      C: "Chỉ là một hình ảnh",
      D: "Một tệp CSS riêng biệt",
    },
    correct: "B",
  },
  {
    id: 34,
    text: "Thẻ nào sau đây thường được dùng để khai báo phần đầu chứa thông tin mô tả (không hiển thị trực tiếp) của trang web?",
    options: { A: "<body>", B: "<head>", C: "<footer>", D: "<img>" },
    correct: "B",
  },
  {
    id: 35,
    text: "Phần mềm nào sau đây phù hợp để soạn thảo mã HTML?",
    options: {
      A: "Microsoft Excel",
      B: "Visual Studio Code hoặc Notepad++",
      C: "Windows Media Player",
      D: "Paint",
    },
    correct: "B",
  },

  // Bài 8. Định dạng văn bản
  {
    id: 36,
    text: "Thuộc tính (attribute) của thẻ HTML có vai trò gì?",
    options: {
      A: "Thay thế hoàn toàn cho thẻ HTML",
      B: "Cung cấp thêm thông tin, đặc điểm bổ sung cho một thẻ HTML, thường có dạng tên=\"giá trị\"",
      C: "Chỉ dùng trong CSS, không dùng trong HTML",
      D: "Xoá nội dung của thẻ",
    },
    correct: "B",
  },
  {
    id: 37,
    text: "Thẻ nào dùng để tạo tiêu đề lớn nhất trong trang HTML?",
    options: { A: "<h6>", B: "<h1>", C: "<p>", D: "<title>" },
    correct: "B",
  },
  {
    id: 38,
    text: "Thẻ nào dùng để tạo một đoạn văn bản trong HTML?",
    options: { A: "<p>", B: "<br>", C: "<hr>", D: "<li>" },
    correct: "A",
  },
  {
    id: 39,
    text: "Để làm chữ in đậm trong HTML, có thể dùng thẻ nào?",
    options: { A: "<i>", B: "<u>", C: "<b> hoặc <strong>", D: "<small>" },
    correct: "C",
  },
  {
    id: 40,
    text: "Thẻ <br> trong HTML dùng để làm gì?",
    options: {
      A: "Tạo đường viền cho bảng",
      B: "Xuống dòng (ngắt dòng) trong nội dung văn bản",
      C: "Chèn hình ảnh",
      D: "Tạo liên kết tới trang khác",
    },
    correct: "B",
  },

  // Bài 1. Làm quen với Trí tuệ nhân tạo (bổ sung)
  {
    id: 41,
    text: "Thành phần nào sau đây KHÔNG phải là yếu tố cơ bản của một hệ thống AI?",
    options: {
      A: "Dữ liệu (Data)",
      B: "Mô hình (Model)",
      C: "Đầu ra và phản hồi",
      D: "Bàn phím cơ",
    },
    correct: "D",
  },
  {
    id: 42,
    text: "Vai trò của con người trong việc vận hành một hệ thống AI cụ thể là gì?",
    options: {
      A: "Không có vai trò gì, AI tự vận hành hoàn toàn",
      B: "Xác định mục tiêu, giám sát, kiểm soát và chịu trách nhiệm về kết quả của hệ thống AI",
      C: "Chỉ bật/tắt nguồn điện cho máy tính chạy AI",
      D: "Ngăn cản AI hoạt động",
    },
    correct: "B",
  },
  {
    id: 43,
    text: "Một chatbot trả lời tự động các câu hỏi thường gặp trên website bán hàng là ví dụ về ứng dụng của:",
    options: {
      A: "Trí tuệ nhân tạo (AI)",
      B: "Máy in laser",
      C: "Ổ đĩa cứng SSD",
      D: "Bộ nhớ RAM",
    },
    correct: "A",
  },
  {
    id: 44,
    text: "Vì sao một phần mềm tính toán đơn giản (như máy tính bỏ túi) KHÔNG được coi là AI?",
    options: {
      A: "Vì nó chạy quá chậm",
      B: "Vì nó chỉ thực hiện đúng công thức được lập trình sẵn, không học hỏi hay suy luận với dữ liệu mới",
      C: "Vì nó không có màn hình hiển thị",
      D: "Vì nó không dùng điện",
    },
    correct: "B",
  },
  {
    id: 45,
    text: "Hệ thống nhận diện khuôn mặt để mở khoá điện thoại là một ứng dụng thể hiện khả năng nào của AI?",
    options: {
      A: "Khả năng học và nhận diện mẫu (pattern) từ dữ liệu hình ảnh",
      B: "Khả năng in ấn tài liệu",
      C: "Khả năng sạc pin nhanh",
      D: "Khả năng kết nối Bluetooth",
    },
    correct: "A",
  },

  // Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống (bổ sung)
  {
    id: 46,
    text: "Trong lĩnh vực nông nghiệp, AI có thể hỗ trợ công việc nào sau đây?",
    options: {
      A: "Phân tích hình ảnh vệ tinh/drone để phát hiện sớm sâu bệnh trên cây trồng",
      B: "Thay thế hoàn toàn công việc gieo hạt bằng tay",
      C: "Làm tăng độ phì nhiêu của đất một cách tự động không cần phân bón",
      D: "Không có ứng dụng nào trong nông nghiệp",
    },
    correct: "A",
  },
  {
    id: 47,
    text: "Nguyên nhân phổ biến dẫn đến \"thiên vị dữ liệu\" (data bias) trong hệ thống AI là gì?",
    options: {
      A: "Dữ liệu huấn luyện không đại diện đầy đủ, đa dạng cho các nhóm đối tượng thực tế",
      B: "Máy tính chạy AI có cấu hình quá mạnh",
      C: "AI được lập trình bằng ngôn ngữ Python",
      D: "Người dùng sử dụng AI vào ban đêm",
    },
    correct: "A",
  },
  {
    id: 48,
    text: "Phát triển AI \"bền vững, có trách nhiệm\" cần chú trọng điều gì?",
    options: {
      A: "Chỉ cần tăng tốc độ xử lý càng nhanh càng tốt",
      B: "Cân nhắc tác động đạo đức, xã hội, môi trường và quyền lợi con người khi thiết kế, sử dụng AI",
      C: "Giữ bí mật hoàn toàn cách AI hoạt động với người dùng",
      D: "Không cần thử nghiệm trước khi đưa vào sử dụng",
    },
    correct: "B",
  },
  {
    id: 49,
    text: "Trong giáo dục, AI có thể được ứng dụng để làm gì?",
    options: {
      A: "Cá nhân hoá lộ trình học tập phù hợp với năng lực của từng học sinh",
      B: "Thay thế hoàn toàn vai trò của giáo viên trong mọi tình huống",
      C: "Chỉ dùng để chơi trò chơi điện tử",
      D: "Không có ứng dụng nào trong giáo dục",
    },
    correct: "A",
  },
  {
    id: 50,
    text: "Khi một hệ thống AI đưa ra một thông tin, người dùng có trách nhiệm gì để sử dụng AI một cách có đạo đức?",
    options: {
      A: "Chia sẻ ngay thông tin đó cho người khác mà không cần kiểm tra",
      B: "Kiểm chứng độ chính xác, cân nhắc nguồn gốc dữ liệu trước khi tin tưởng và sử dụng",
      C: "Không cần quan tâm ai là người tạo ra hệ thống AI đó",
      D: "Luôn coi thông tin từ AI là tuyệt đối chính xác",
    },
    correct: "B",
  },

  // Bài 3. Một số thiết bị mạng thông dụng (bổ sung)
  {
    id: 51,
    text: "Thiết bị nào sau đây thường được dùng để kết nối mạng LAN của gia đình/văn phòng với mạng Internet của nhà cung cấp dịch vụ?",
    options: { A: "Bàn phím", B: "Modem", C: "Chuột quang", D: "Loa ngoài" },
    correct: "B",
  },
  {
    id: 52,
    text: "Khi số lượng máy tính trong phòng máy tăng lên, thiết bị mạng nào cần được bổ sung để mở rộng số lượng cổng kết nối?",
    options: {
      A: "Switch có nhiều cổng hơn",
      B: "Bàn phím rời",
      C: "Ổ đĩa quang (CD/DVD)",
      D: "Máy chiếu",
    },
    correct: "A",
  },
  {
    id: 53,
    text: "Địa chỉ MAC được Switch sử dụng để làm gì?",
    options: {
      A: "Xác định đúng cổng cần chuyển tiếp dữ liệu tới thiết bị đích trong mạng LAN",
      B: "Tính hóa đơn tiền điện của thiết bị mạng",
      C: "Đặt mật khẩu Wi-Fi",
      D: "Hiển thị hình ảnh trên màn hình",
    },
    correct: "A",
  },
  {
    id: 54,
    text: "Một Access Point (điểm truy cập Wi-Fi) trong nhà thường được kết nối tới thiết bị nào để có Internet?",
    options: { A: "Máy in", B: "Router/Modem", C: "Bàn phím", D: "Ổ cứng ngoài" },
    correct: "B",
  },
  {
    id: 55,
    text: "Ưu điểm chính của việc dùng Switch thay vì Hub trong mạng LAN nhiều máy tính là gì?",
    options: {
      A: "Switch rẻ hơn Hub trong mọi trường hợp",
      B: "Switch giúp giảm xung đột tín hiệu, tăng hiệu quả truyền dữ liệu nhờ chuyển tiếp có định hướng",
      C: "Switch không cần nguồn điện để hoạt động",
      D: "Switch chỉ hỗ trợ tối đa 2 thiết bị",
    },
    correct: "B",
  },

  // Bài 4. Giao thức mạng (bổ sung)
  {
    id: 56,
    text: "Trong mô hình TCP/IP, tầng nào chứa các giao thức gần với người dùng nhất như HTTP, FTP, SMTP?",
    options: {
      A: "Tầng Liên kết (Network Access)",
      B: "Tầng Internet",
      C: "Tầng Giao vận (Transport)",
      D: "Tầng Ứng dụng (Application)",
    },
    correct: "D",
  },
  {
    id: 57,
    text: "Vì sao các thiết bị mạng khác nhau (điện thoại, máy tính, máy chủ...) có thể giao tiếp được với nhau qua Internet?",
    options: {
      A: "Vì chúng cùng sử dụng chung bộ giao thức chuẩn TCP/IP",
      B: "Vì chúng đều có cùng một nhà sản xuất",
      C: "Vì chúng luôn được đặt gần nhau về vị trí địa lý",
      D: "Vì chúng có cùng màu sắc vỏ máy",
    },
    correct: "A",
  },
  {
    id: 58,
    text: "So với TCP, giao thức UDP có đặc điểm gì?",
    options: {
      A: "Truyền dữ liệu nhanh hơn nhưng không đảm bảo độ tin cậy (không kiểm tra, không truyền lại gói tin bị mất)",
      B: "Luôn chậm hơn TCP trong mọi trường hợp",
      C: "Chỉ dùng được trong mạng LAN, không dùng được trên Internet",
      D: "Không cần địa chỉ IP để hoạt động",
    },
    correct: "A",
  },
  {
    id: 59,
    text: "Địa chỉ IP có vai trò gì trong mô hình TCP/IP?",
    options: {
      A: "Định danh duy nhất cho một thiết bị trong mạng, giúp định tuyến gói tin đến đúng đích",
      B: "Chỉ dùng để đặt tên cho máy in",
      C: "Là mật khẩu đăng nhập Wi-Fi",
      D: "Không có vai trò gì trong việc truyền dữ liệu",
    },
    correct: "A",
  },
  {
    id: 60,
    text: "Khi truy cập một trang web bằng trình duyệt, giao thức nào đảm nhiệm việc truyền tải nội dung trang web giữa trình duyệt và máy chủ?",
    options: { A: "HTTP/HTTPS", B: "USB", C: "Bluetooth", D: "VGA" },
    correct: "A",
  },

  // Bài 5. Thực hành chia sẻ tài nguyên trên mạng (bổ sung)
  {
    id: 61,
    text: "Trong mạng LAN, \"tài nguyên\" có thể được chia sẻ giữa các máy tính bao gồm những gì?",
    options: {
      A: "Tệp tin, thư mục và các thiết bị ngoại vi như máy in",
      B: "Chỉ có nguồn điện",
      C: "Chỉ có bàn phím và chuột",
      D: "Không thể chia sẻ bất kỳ tài nguyên nào trong LAN",
    },
    correct: "A",
  },
  {
    id: 62,
    text: "Quyền truy cập \"toàn quyền\" (Full control) đối với một thư mục chia sẻ cho phép người dùng làm gì?",
    options: {
      A: "Chỉ được xem nội dung, không được thay đổi",
      B: "Được xem, chỉnh sửa, thêm mới và xoá tệp trong thư mục đó",
      C: "Chỉ được đổi tên thư mục, không được mở tệp bên trong",
      D: "Không được phép làm gì cả",
    },
    correct: "B",
  },
  {
    id: 63,
    text: "Việc chia sẻ dữ liệu không kiểm soát quyền truy cập trong mạng LAN của trường học có thể dẫn đến rủi ro gì?",
    options: {
      A: "Máy tính chạy nhanh hơn",
      B: "Dữ liệu bị truy cập, chỉnh sửa hoặc xoá trái phép bởi người không có thẩm quyền",
      C: "Tiết kiệm điện năng tiêu thụ",
      D: "Không có rủi ro nào đáng kể",
    },
    correct: "B",
  },
  {
    id: 64,
    text: "Để hai máy tính trong cùng phòng có thể truy cập vào thư mục chia sẻ của nhau, điều kiện cần thiết đầu tiên là gì?",
    options: {
      A: "Cả hai máy phải được kết nối chung vào một mạng LAN",
      B: "Cả hai máy phải cùng một hãng sản xuất",
      C: "Cả hai máy phải tắt nguồn cùng lúc",
      D: "Không cần điều kiện gì",
    },
    correct: "A",
  },
  {
    id: 65,
    text: "Sau khi hoàn thành công việc nhóm cần chia sẻ tài liệu, việc nên làm để đảm bảo an toàn dữ liệu chia sẻ là gì?",
    options: {
      A: "Để nguyên quyền chia sẻ mở mãi mãi cho tất cả mọi người",
      B: "Xem xét thu hồi hoặc điều chỉnh lại quyền truy cập khi không còn cần thiết chia sẻ rộng rãi",
      C: "Xoá toàn bộ mạng LAN của phòng máy",
      D: "Đổi toàn bộ máy tính trong phòng",
    },
    correct: "B",
  },

  // Bài 6. Giao tiếp và ứng xử trong không gian mạng (bổ sung)
  {
    id: 66,
    text: "Vì sao giao tiếp qua không gian mạng có thể \"không giới hạn khoảng cách\"?",
    options: {
      A: "Vì mạng Internet kết nối các thiết bị trên toàn cầu, cho phép trao đổi thông tin dù ở bất kỳ đâu có kết nối",
      B: "Vì mọi người đều sống gần nhau",
      C: "Vì không gian mạng chỉ hoạt động trong phạm vi một quốc gia",
      D: "Vì tin nhắn luôn được gửi qua đường bưu điện",
    },
    correct: "A",
  },
  {
    id: 67,
    text: "Hành vi nào sau đây được xem là vi phạm chuẩn mực ứng xử trên không gian mạng?",
    options: {
      A: "Tôn trọng ý kiến khác biệt của người khác trong bình luận",
      B: "Giả mạo danh tính người khác để đăng tải nội dung sai sự thật",
      C: "Trích dẫn rõ nguồn khi chia sẻ lại bài viết",
      D: "Báo cáo (report) nội dung xấu độc cho quản trị viên",
    },
    correct: "B",
  },
  {
    id: 68,
    text: "Khi phát hiện một người bạn trong lớp đang bị bắt nạt trực tuyến (cyberbullying), hành động phù hợp nhất là gì?",
    options: {
      A: "Tham gia bình luận chê bai thêm cho vui",
      B: "Im lặng bỏ qua, không liên quan đến mình",
      C: "Hỗ trợ, động viên bạn và báo cho giáo viên/người lớn đáng tin cậy để được giúp đỡ",
      D: "Chia sẻ câu chuyện đó cho nhiều người biết hơn để \"cảnh báo\"",
    },
    correct: "C",
  },
  {
    id: 69,
    text: "Vì sao cần thận trọng khi chia sẻ thông tin cá nhân (địa chỉ nhà, số điện thoại) trên mạng xã hội?",
    options: {
      A: "Vì làm tốn dung lượng lưu trữ của điện thoại",
      B: "Vì thông tin cá nhân có thể bị kẻ xấu lợi dụng cho mục đích lừa đảo hoặc xâm phạm quyền riêng tư",
      C: "Vì mạng xã hội sẽ tự động xoá tài khoản",
      D: "Không có lý do gì cần thận trọng",
    },
    correct: "B",
  },
  {
    id: 70,
    text: "\"Tính nhân văn\" trong ứng xử trên không gian mạng thể hiện qua điều gì?",
    options: {
      A: "Luôn tranh cãi để bảo vệ quan điểm của mình bằng mọi giá",
      B: "Đối xử tôn trọng, thấu hiểu và có trách nhiệm với người khác dù giao tiếp gián tiếp qua màn hình",
      C: "Chỉ giao tiếp với người quen biết ngoài đời thực",
      D: "Không bao giờ bày tỏ cảm xúc trên mạng",
    },
    correct: "B",
  },

  // Bài 7. HTML và cấu trúc trang web (bổ sung)
  {
    id: 71,
    text: "Thẻ khai báo nào thường được đặt ở dòng đầu tiên của một tệp HTML để xác định phiên bản tài liệu?",
    options: {
      A: "<!DOCTYPE html>",
      B: "<html-start>",
      C: "<begin>",
      D: "<version>",
    },
    correct: "A",
  },
  {
    id: 72,
    text: "Thẻ <html> trong một trang web có vai trò gì?",
    options: {
      A: "Là thẻ bao ngoài cùng, chứa toàn bộ nội dung của trang HTML",
      B: "Chỉ dùng để chèn hình ảnh",
      C: "Là thẻ dùng để tạo bảng dữ liệu",
      D: "Là thẻ định dạng màu nền",
    },
    correct: "A",
  },
  {
    id: 73,
    text: "Trình duyệt web (Chrome, Firefox, Edge...) có vai trò gì đối với một tệp HTML?",
    options: {
      A: "Biên dịch tệp HTML thành ngôn ngữ máy",
      B: "Đọc và hiển thị (render) nội dung tệp HTML thành trang web trực quan cho người xem",
      C: "Xoá bỏ toàn bộ mã HTML sau khi mở",
      D: "Chuyển tệp HTML thành tệp âm thanh",
    },
    correct: "B",
  },
  {
    id: 74,
    text: "Ưu điểm của phần mềm VS Code khi soạn thảo mã HTML so với ứng dụng Notepad thông thường của Windows là gì?",
    options: {
      A: "Có gợi ý code, tô màu cú pháp (syntax highlighting), giúp phát hiện lỗi dễ dàng hơn",
      B: "VS Code không thể mở tệp .html",
      C: "VS Code chỉ dùng được trên điện thoại",
      D: "VS Code không cho phép lưu tệp",
    },
    correct: "A",
  },
  {
    id: 75,
    text: "Nếu thiếu thẻ đóng của một phần tử HTML (ví dụ thiếu </p>), điều gì có thể xảy ra?",
    options: {
      A: "Trang web chắc chắn không thể mở được",
      B: "Trình duyệt có thể hiển thị sai cấu trúc hoặc định dạng ngoài dự kiến so với thiết kế ban đầu",
      C: "Máy tính sẽ tự động sửa lỗi và không ảnh hưởng gì",
      D: "Tốc độ Internet sẽ chậm lại",
    },
    correct: "B",
  },

  // Bài 8. Định dạng văn bản (bổ sung)
  {
    id: 76,
    text: "Cú pháp chung của một thuộc tính (attribute) trong thẻ HTML thường có dạng nào?",
    options: {
      A: "tên_thuộc_tính=\"giá_trị\"",
      B: "giá_trị:tên_thuộc_tính",
      C: "#tên_thuộc_tính",
      D: "{tên_thuộc_tính}",
    },
    correct: "A",
  },
  {
    id: 77,
    text: "Trong các thẻ tiêu đề từ <h1> đến <h6>, thẻ nào tạo ra tiêu đề có kích thước NHỎ nhất?",
    options: {
      A: "<h1>",
      B: "<h6>",
      C: "<h3>",
      D: "Các thẻ đều có kích thước bằng nhau",
    },
    correct: "B",
  },
  {
    id: 78,
    text: "Để làm chữ hiển thị dạng nghiêng (in nghiêng) trong HTML, người ta thường dùng thẻ nào?",
    options: { A: "<b>", B: "<i> hoặc <em>", C: "<br>", D: "<hr>" },
    correct: "B",
  },
  {
    id: 79,
    text: "Thẻ <u> trong HTML dùng để tạo hiệu ứng gì cho văn bản?",
    options: {
      A: "Gạch chân văn bản",
      B: "Xoá văn bản",
      C: "Tạo danh sách",
      D: "Tạo bảng",
    },
    correct: "A",
  },
  {
    id: 80,
    text: "Nếu muốn trình bày nhiều đoạn văn bản riêng biệt trên trang web (mỗi đoạn xuống dòng và có khoảng cách với đoạn khác), nên dùng thẻ nào cho từng đoạn?",
    options: {
      A: "Nhiều thẻ <br> liên tiếp",
      B: "Mỗi đoạn đặt trong một thẻ <p> riêng",
      C: "Thẻ <hr> cho từng đoạn",
      D: "Thẻ <html> cho từng đoạn",
    },
    correct: "B",
  },
];

export default mcqData;
