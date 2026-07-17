// Kho câu hỏi Đúng/Sai (mỗi câu 4 ý a-d) - Giữa kì 1 Tin học 12
const tfData = [
  {
    id: 1,
    text: "Một nhóm học sinh đang thảo luận về Trí tuệ nhân tạo (AI) sau khi xem một video giới thiệu về trợ lý ảo và xe tự lái.",
    statements: {
      a: "AI là phần mềm chỉ thực hiện đúng các lệnh lập trình sẵn, không có khả năng học hỏi thêm.",
      b: "Xe tự lái là một ví dụ ứng dụng AI trong lĩnh vực giao thông.",
      c: "AI hẹp (Narrow AI) được thiết kế để làm tốt một nhiệm vụ cụ thể, không phải mọi lĩnh vực như con người.",
      d: "Việc phát triển AI không cần quan tâm tới vấn đề đạo đức hay thiên vị dữ liệu vì AI luôn khách quan tuyệt đối.",
    },
    correct: { a: "False", b: "True", c: "True", d: "False" },
  },
  {
    id: 2,
    text: "Trường học đang nâng cấp hệ thống mạng, dùng router để kết nối ra Internet và switch để nối các máy trong phòng máy, đồng thời áp dụng bộ giao thức TCP/IP.",
    statements: {
      a: "Router có chức năng định tuyến gói tin giữa mạng LAN của trường và Internet.",
      b: "Switch gửi dữ liệu đồng thời (broadcast) tới tất cả các cổng giống hệt như Hub, không phân biệt cổng đích.",
      c: "TCP/IP là bộ giao thức nền tảng giúp các thiết bị trên Internet giao tiếp với nhau.",
      d: "Giao thức UDP đảm bảo độ tin cậy tuyệt đối, luôn kiểm tra và truyền lại gói tin bị mất giống TCP.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 3,
    text: "Phòng Tin học của trường có 20 máy tính nối mạng LAN dùng chung 1 máy in. Giáo viên phụ trách phòng máy thiết lập chia sẻ máy in và một thư mục tài liệu chung.",
    statements: {
      a: "Việc chia sẻ máy in trong mạng LAN giúp tiết kiệm chi phí, không cần mỗi máy một máy in riêng.",
      b: "Bất kỳ ai trong mạng cũng nên được cấp toàn quyền (đọc, ghi, xoá) đối với thư mục tài liệu chung để thuận tiện.",
      c: "Có thể thiết lập quyền \"chỉ đọc\" để người dùng chỉ xem mà không thể chỉnh sửa, xoá tệp trong thư mục chia sẻ.",
      d: "Sau khi chia sẻ tài nguyên, không cần kiểm tra hay thiết lập lại quyền truy cập dù có thay đổi thành viên sử dụng phòng máy.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 4,
    text: "Trên một nhóm mạng xã hội của lớp, một bạn học sinh vừa đăng tải một thông tin chưa rõ nguồn gốc về lịch thi, khiến nhiều bạn khác hoang mang chia sẻ tiếp.",
    statements: {
      a: "Trước khi chia sẻ, nên kiểm chứng thông tin qua nguồn chính thống (giáo viên, nhà trường) để tránh lan truyền tin sai.",
      b: "Việc lan truyền thông tin sai sự thật trên mạng xã hội không gây ra hậu quả gì đáng kể.",
      c: "Giao tiếp qua mạng xã hội, do thiếu ngôn ngữ cơ thể và biểu cảm, dễ dẫn đến hiểu lầm hơn giao tiếp trực tiếp.",
      d: "Bắt nạt trực tuyến chỉ xảy ra khi có hành vi bạo lực thể chất trực tiếp, không liên quan đến lời nói hay hình ảnh trên mạng.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 5,
    text: "Một học sinh đang tập viết trang web cá nhân bằng HTML, sử dụng các thẻ tiêu đề, đoạn văn và định dạng chữ.",
    statements: {
      a: "HTML là ngôn ngữ lập trình dùng để tính toán các phép toán phức tạp, không liên quan đến cấu trúc trang web.",
      b: "Thẻ <h1> thường dùng cho tiêu đề có kích thước lớn nhất so với các thẻ tiêu đề khác (<h2> đến <h6>).",
      c: "Thẻ <p> dùng để tạo một đoạn văn bản trong trang HTML.",
      d: "Muốn chữ hiển thị in đậm, học sinh phải dùng thẻ <i>.",
    },
    correct: { a: "False", b: "True", c: "True", d: "False" },
  },
  {
    id: 6,
    text: "Một nhóm học sinh sử dụng công cụ AI để được gợi ý cách viết mã HTML tạo trang giới thiệu bản thân.",
    statements: {
      a: "Học sinh có thể sử dụng gợi ý của AI nhưng vẫn cần đọc hiểu, kiểm tra lại đoạn mã HTML trước khi sử dụng.",
      b: "Mọi đoạn mã do AI gợi ý đều chắc chắn chính xác 100%, không cần kiểm tra lại.",
      c: "Phần tử HTML gồm thẻ mở, nội dung và thẻ đóng, ví dụ như thẻ <p>...</p> tạo ra một đoạn văn bản.",
      d: "Việc sử dụng AI hỗ trợ viết mã có nghĩa là học sinh không cần học HTML nữa.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 7,
    text: "Một kênh mạng xã hội sử dụng AI để tự động gợi ý nội dung phù hợp với sở thích người xem, nhưng đôi khi gợi ý các thông tin giật gân, chưa kiểm chứng.",
    statements: {
      a: "Hệ thống gợi ý nội dung dựa trên AI là một ứng dụng AI phổ biến trong đời sống.",
      b: "Người dùng nên tin tưởng tuyệt đối mọi nội dung do hệ thống AI gợi ý mà không cần kiểm chứng.",
      c: "Khi gặp nội dung giật gân, chưa rõ nguồn gốc, người dùng nên ứng xử có trách nhiệm bằng cách kiểm chứng trước khi chia sẻ.",
      d: "AI không có khả năng đưa ra thông tin sai lệch (ảo giác AI).",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 8,
    text: "Phòng máy tính của trường lắp đặt switch nối các máy tính, đồng thời thiết lập chia sẻ chung một máy in nối mạng cho toàn phòng.",
    statements: {
      a: "Switch là thiết bị phù hợp để kết nối nhiều máy tính trong cùng một phòng máy thành mạng LAN.",
      b: "Khi máy in được chia sẻ qua mạng, chỉ duy nhất một máy tính được phép gửi lệnh in tại một thời điểm bất kỳ trong ngày.",
      c: "Việc chia sẻ máy in qua mạng giúp tiết kiệm chi phí so với trang bị máy in riêng cho từng máy tính.",
      d: "Access Point là thiết bị bắt buộc phải có để hai máy tính có dây trong cùng phòng có thể kết nối với nhau qua switch.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 9,
    text: "Một công ty ứng dụng AI để tự động sàng lọc hồ sơ xin việc dựa trên dữ liệu ứng viên trong quá khứ.",
    statements: {
      a: "Nếu dữ liệu huấn luyện trong quá khứ có sự thiên vị (ví dụ ưu tiên một giới tính), hệ thống AI có thể học và lặp lại sự thiên vị đó.",
      b: "AI dùng để sàng lọc hồ sơ chắc chắn công bằng tuyệt đối vì máy móc không có cảm xúc.",
      c: "Đây là một ví dụ ứng dụng AI trong lĩnh vực quản lý nhân sự/tuyển dụng.",
      d: "Công ty không cần đánh giá lại kết quả của hệ thống AI vì máy tính luôn luôn đúng.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 10,
    text: "Một quán cà phê muốn lắp đặt Wi-Fi miễn phí cho khách đồng thời vẫn có hệ thống máy tính tính tiền nối mạng có dây riêng.",
    statements: {
      a: "Access Point cần thiết để phát sóng Wi-Fi cho khách sử dụng thiết bị không dây.",
      b: "Máy tính tính tiền nối dây có thể kết nối qua Switch mà không cần Access Point.",
      c: "Router không có vai trò gì trong việc kết nối hệ thống của quán ra Internet.",
      d: "Chỉ cần duy nhất một thiết bị Hub là đủ để đảm bảo tốc độ và độ ổn định mạng tốt nhất cho toàn quán.",
    },
    correct: { a: "True", b: "True", c: "False", d: "False" },
  },
  {
    id: 11,
    text: "Khi xem video trực tuyến (livestream), đôi khi hình ảnh bị giật, mất khung hình nhưng vẫn tiếp tục phát mà không dừng lại chờ tải đủ dữ liệu.",
    statements: {
      a: "Hiện tượng này thường liên quan đến việc ứng dụng sử dụng giao thức UDP, ưu tiên tốc độ hơn độ tin cậy tuyệt đối.",
      b: "Nếu dùng TCP với đầy đủ cơ chế truyền lại cho mọi gói tin trong truyền hình ảnh trực tiếp, độ trễ (delay) có thể tăng lên.",
      c: "TCP/IP không được sử dụng trong bất kỳ ứng dụng truyền video nào.",
      d: "Địa chỉ IP không có vai trò gì trong việc truyền dữ liệu video qua Internet.",
    },
    correct: { a: "True", b: "True", c: "False", d: "False" },
  },
  {
    id: 12,
    text: "Phòng kế toán của một công ty chia sẻ thư mục chứa bảng lương nhân viên trên mạng LAN nội bộ.",
    statements: {
      a: "Nên cấp quyền truy cập thư mục bảng lương cho tất cả nhân viên trong công ty để minh bạch.",
      b: "Chỉ nên cấp quyền truy cập cho những người có thẩm quyền liên quan (ví dụ: kế toán trưởng, giám đốc).",
      c: "Việc chia sẻ tài nguyên qua mạng LAN chỉ có thể thực hiện với tệp văn bản, không thể chia sẻ được thư mục.",
      d: "Có thể kết hợp đặt mật khẩu và giới hạn quyền truy cập để tăng cường bảo mật cho thư mục chia sẻ.",
    },
    correct: { a: "False", b: "True", c: "False", d: "True" },
  },
  {
    id: 13,
    text: "Một tài khoản mạng xã hội giả danh giáo viên đăng thông báo sai về việc nghỉ học, khiến nhiều học sinh hoang mang.",
    statements: {
      a: "Việc giả mạo danh tính người khác trên mạng xã hội để đăng tin sai là hành vi vi phạm chuẩn mực đạo đức và có thể vi phạm pháp luật.",
      b: "Học sinh nên tin ngay lập tức vì thông báo có tên giáo viên.",
      c: "Nên xác minh lại thông tin qua kênh chính thức của nhà trường (fanpage, group chính thức, giáo viên chủ nhiệm) trước khi tin theo.",
      d: "Việc mạo danh người khác trên mạng không gây ra hậu quả gì vì đó chỉ là \"trên mạng\", không phải đời thực.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 14,
    text: "Một học sinh mở một tệp HTML bằng trình duyệt nhưng thấy trang hiển thị trống trơn, không có nội dung nào xuất hiện.",
    statements: {
      a: "Nguyên nhân có thể do toàn bộ nội dung được đặt nhầm trong thẻ <head> thay vì <body>.",
      b: "Trình duyệt web có chức năng đọc và hiển thị nội dung tệp HTML cho người dùng xem.",
      c: "Việc trang trống chắc chắn là do máy tính bị hỏng ổ cứng.",
      d: "Phần tử HTML luôn chỉ gồm duy nhất thẻ mở, không bao giờ có thẻ đóng.",
    },
    correct: { a: "True", b: "True", c: "False", d: "False" },
  },
  {
    id: 15,
    text: "Một học sinh viết đoạn mã HTML: <h2>Giới thiệu</h2><p>Đây là <b>trang web</b> đầu tiên của em.</p> để giới thiệu bản thân.",
    statements: {
      a: "Thẻ <h2> tạo ra một tiêu đề nhỏ hơn thẻ <h1> nhưng vẫn lớn hơn văn bản thông thường trong thẻ <p>.",
      b: "Cụm từ \"trang web\" trong đoạn trên sẽ được hiển thị in đậm nhờ thẻ <b>.",
      c: "Thẻ <p> trong đoạn mã trên không có tác dụng gì, có thể xoá đi mà không ảnh hưởng cấu trúc.",
      d: "Toàn bộ đoạn mã trên chỉ có thể hiển thị đúng khi mở bằng phần mềm Microsoft Word.",
    },
    correct: { a: "True", b: "True", c: "False", d: "False" },
  },
  {
    id: 16,
    text: "Một học sinh dùng công cụ AI tạo sinh để viết bài văn nghị luận rồi đăng lên nhóm lớp mà không ghi chú gì, khiến các bạn tưởng đó là bài tự viết.",
    statements: {
      a: "Việc sử dụng AI hỗ trợ mà không khai báo rõ ràng khi nộp bài có thể vi phạm tính trung thực học thuật.",
      b: "Sử dụng AI để tham khảo ý tưởng là hành vi bị cấm hoàn toàn trong mọi trường hợp học tập.",
      c: "Ứng xử có trách nhiệm là nên ghi rõ phần nào có sự hỗ trợ của AI khi chia sẻ hoặc nộp bài.",
      d: "AI tạo sinh luôn tạo ra nội dung hoàn toàn chính xác nên không cần học sinh kiểm tra lại.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
];

export default tfData;
