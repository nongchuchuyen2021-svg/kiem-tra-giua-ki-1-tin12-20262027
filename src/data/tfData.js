// Kho câu hỏi Đúng/Sai (mỗi câu 4 ý a-d) - Giữa kì 1 Tin học 12
// Mỗi câu xếp theo 4 mức độ tăng dần: a) nhận biết, b) thông hiểu,
// c) vận dụng, d) vận dụng cao (áp dụng/suy luận trên chính tình huống nêu ra)
const tfData = [
  {
    id: 1,
    text: "Trong tiết Tin học, cô giáo cho lớp 12A xem một đoạn phim ngắn giới thiệu về trợ lý ảo trên điện thoại và xe ô tô tự lái đang được thử nghiệm tại một số thành phố lớn. Xem xong, bạn Minh thắc mắc rằng phần mềm tính tiền ở căng tin trường - vốn chỉ cộng trừ theo công thức có sẵn - có được coi là một hệ thống AI hay không. Cả lớp cùng thảo luận để phân biệt AI với phần mềm thông thường, đồng thời bàn về những rủi ro có thể gặp khi AI ngày càng phổ biến.",
    statements: {
      a: "AI là phần mềm chỉ thực hiện đúng các lệnh lập trình sẵn, giống hệt như phần mềm tính tiền ở căng tin trường, không có khả năng học hỏi thêm từ dữ liệu.",
      b: "Xe ô tô tự lái phải liên tục phân tích dữ liệu cảm biến để đưa ra quyết định phù hợp với tình huống giao thông thực tế, thể hiện khả năng suy luận của AI.",
      c: "Điểm khác biệt cốt lõi giữa AI và phần mềm tính tiền của căng tin là AI có khả năng học và cải thiện theo dữ liệu, còn phần mềm tính tiền luôn cho kết quả cố định theo công thức đã lập trình.",
      d: "Vì AI được huấn luyện từ dữ liệu thực tế nên kết quả luôn khách quan tuyệt đối, không cần con người đánh giá hay giám sát lại.",
    },
    correct: { a: "False", b: "True", c: "True", d: "False" },
  },
  {
    id: 2,
    text: "Trường THPT Na Rì đang nâng cấp hệ thống mạng cho phòng máy tính gồm 30 máy. Kỹ thuật viên đề xuất lắp 1 router để kết nối ra Internet, 2 switch để chia cổng kết nối cho toàn bộ máy tính, và cấu hình để mọi thiết bị hoạt động theo bộ giao thức chuẩn TCP/IP. Trong buổi họp, một giáo viên đặt câu hỏi liệu có thể thay switch bằng hub cũ đang có sẵn trong kho để tiết kiệm chi phí hay không.",
    statements: {
      a: "Router có chức năng định tuyến, giúp kết nối mạng LAN của phòng máy với Internet bên ngoài.",
      b: "Hub và switch có nguyên lý hoạt động hoàn toàn giống nhau, hai thiết bị này chỉ khác nhau về giá thành nên có thể thay thế cho nhau mà không ảnh hưởng gì.",
      c: "TCP/IP là bộ giao thức chuẩn giúp các thiết bị khác nhau có thể giao tiếp, trao đổi dữ liệu với nhau qua Internet.",
      d: "Nếu thay switch bằng hub cho 30 máy tính cùng hoạt động, khả năng xảy ra xung đột tín hiệu sẽ thấp hơn vì hub gửi dữ liệu nhanh hơn switch.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 3,
    text: "Phòng Tin học của trường có 20 máy tính nối chung một mạng LAN và dùng chung một máy in laser. Thầy Hùng, giáo viên phụ trách phòng máy, đã thiết lập chia sẻ máy in cho cả phòng sử dụng, đồng thời tạo một thư mục chung chứa tài liệu ôn tập để học sinh tải về. Một học sinh đề xuất nên cấp quyền toàn quyền cho tất cả các máy trong phòng đối với thư mục này để ai cũng có thể thêm tài liệu mới bất cứ lúc nào.",
    statements: {
      a: "Việc chia sẻ máy in qua mạng LAN giúp nhiều máy tính cùng sử dụng chung, tiết kiệm chi phí so với trang bị riêng cho từng máy.",
      b: "Nên cấp quyền toàn quyền cho tất cả các máy trong phòng đối với thư mục tài liệu chung, vì càng nhiều người chỉnh sửa được thì tài liệu càng cập nhật nhanh.",
      c: "Sau khi thiết lập chia sẻ máy in và thư mục xong, không cần kiểm tra hay điều chỉnh lại quyền truy cập dù thành phần học sinh sử dụng phòng máy có thay đổi theo từng năm học.",
      d: "Quyền truy cập \"chỉ đọc\" cho phép người dùng xem, sao chép nội dung nhưng không thể chỉnh sửa hay xoá tệp gốc trong thư mục chia sẻ.",
    },
    correct: { a: "True", b: "False", c: "False", d: "True" },
  },
  {
    id: 4,
    text: "Vào tối trước ngày kiểm tra giữa kì, trong nhóm Zalo của lớp 12A xuất hiện một tin nhắn không rõ người gửi, thông báo \"Lịch kiểm tra bị hoãn sang tuần sau\" kèm ảnh chụp màn hình mờ nhoè. Tin nhắn nhanh chóng được nhiều bạn chuyển tiếp sang các nhóm khác mà không ai kiểm tra lại với giáo viên chủ nhiệm. Sáng hôm sau, một số học sinh không mang đủ dụng cụ vì tin rằng bài kiểm tra đã bị hoãn.",
    statements: {
      a: "Vì tin nhắn được gửi trong nhóm lớp (chỉ gồm bạn bè quen biết), độ tin cậy của thông tin chắc chắn cao hơn tin từ người lạ nên không cần kiểm chứng.",
      b: "Trước khi chia sẻ một thông tin quan trọng nhận được trên mạng, nên kiểm chứng qua nguồn chính thống (giáo viên, nhà trường) trước khi tin theo.",
      c: "Việc thông tin sai lan truyền nhanh trong nhóm lớp không gây ra hậu quả gì đáng kể vì đây chỉ là trao đổi nội bộ giữa bạn bè.",
      d: "Việc một số học sinh không mang đủ dụng cụ vì tin theo tin nhắn sai cho thấy tin giả trên mạng xã hội có thể gây ảnh hưởng thực tế ngoài đời sống.",
    },
    correct: { a: "False", b: "True", c: "False", d: "True" },
  },
  {
    id: 5,
    text: "Bạn Lan đang tập viết trang web đầu tiên trong đời để giới thiệu câu lạc bộ Tin học của lớp. Lan mở phần mềm Notepad, gõ một đoạn mã HTML gồm thẻ tiêu đề, một vài đoạn văn bản, và thử dùng thẻ để làm nổi bật một số từ khoá quan trọng. Sau khi lưu tệp với đuôi .html và mở bằng trình duyệt, Lan nhận thấy có một dòng chữ không hiển thị đúng như mong muốn dù đã kiểm tra lại nhiều lần.",
    statements: {
      a: "HTML là ngôn ngữ đánh dấu dùng để tạo cấu trúc và nội dung cho trang web, không phải ngôn ngữ dùng để tính toán.",
      b: "Thẻ <h1> tạo ra tiêu đề có kích thước lớn nhất trong các thẻ tiêu đề từ <h1> đến <h6>.",
      c: "Nếu Lan dùng nhầm thẻ <i> khi muốn làm chữ in đậm, từ khoá đó vẫn hiển thị in đậm đúng như mong muốn vì <i> và <b> có tác dụng giống hệt nhau.",
      d: "Việc thiếu thẻ đóng cho một phần tử (như thiếu </p>) hiếm khi ảnh hưởng đến cách trang web hiển thị, vì trình duyệt luôn tự động sửa lỗi chính xác như ý định ban đầu của người viết.",
    },
    correct: { a: "True", b: "True", c: "False", d: "False" },
  },
  {
    id: 6,
    text: "Nhóm của Hùng được giao nhiệm vụ làm một trang web giới thiệu bản thân bằng HTML. Vì chưa quen viết mã, Hùng nhờ một công cụ AI tạo sinh gợi ý đoạn mã hoàn chỉnh, sau đó sao chép nguyên văn vào tệp mà không đọc lại toàn bộ nội dung. Khi mở bằng trình duyệt, trang web hiển thị lỗi ở một vài chỗ, nhưng Hùng không biết phải sửa từ đâu vì không hiểu đoạn mã AI đã tạo ra.",
    statements: {
      a: "Vì công cụ AI đã được huấn luyện trên khối lượng dữ liệu rất lớn, đoạn mã do AI tạo sinh gợi ý chắc chắn không có bất kỳ lỗi nào.",
      b: "Việc sử dụng AI để hỗ trợ viết mã đồng nghĩa với việc học sinh không cần học và hiểu HTML nữa.",
      c: "Phần tử HTML thường gồm thẻ mở, nội dung bên trong, và thẻ đóng tương ứng, ví dụ thẻ <p>...</p> tạo ra một đoạn văn bản.",
      d: "Cách khắc phục phù hợp cho tình huống của Hùng là đọc hiểu từng phần đoạn mã AI tạo ra, kiểm tra và tự sửa lỗi, thay vì tiếp tục sao chép mã khác mà không tìm hiểu nguyên nhân.",
    },
    correct: { a: "False", b: "False", c: "True", d: "True" },
  },
  {
    id: 7,
    text: "An thường xuyên xem video trên một nền tảng mạng xã hội sử dụng AI để gợi ý nội dung theo sở thích cá nhân. Sau một thời gian, An nhận thấy hầu hết video được gợi ý đều có tiêu đề giật gân, gây sốc, dù An chưa từng chủ động tìm kiếm những chủ đề đó. Một số video có thông tin không rõ nguồn gốc nhưng vẫn được nhiều người chia sẻ lại.",
    statements: {
      a: "Hệ thống gợi ý nội dung theo sở thích người xem là một ứng dụng phổ biến của AI trong đời sống.",
      b: "Vì nội dung do hệ thống AI gợi ý được tạo ra từ thuật toán máy tính, An có thể tin tưởng hoàn toàn mà không cần kiểm chứng trước khi chia sẻ.",
      c: "Việc AI liên tục gợi ý nội dung giật gân cho thấy thuật toán có thể ưu tiên nội dung thu hút tương tác hơn là nội dung chính xác, đáng tin cậy.",
      d: "Vì hệ thống AI đã lọc sẵn nội dung theo sở thích cá nhân, An không có nguy cơ tiếp cận thông tin phiến diện hay thiếu khách quan.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 8,
    text: "Phòng máy tính mới của trường được trang bị 25 máy tính, kết nối với nhau qua một switch trung tâm và dùng chung một máy in laser nối mạng. Trong buổi hướng dẫn sử dụng đầu năm, giáo viên phụ trách nhấn mạnh rằng học sinh ở bất kỳ máy nào trong phòng cũng có thể gửi lệnh in tới máy in dùng chung, không cần ngồi đúng vị trí gần máy in nhất.",
    statements: {
      a: "Vì máy in được chia sẻ qua mạng, tại một thời điểm chỉ duy nhất một học sinh trong toàn phòng được phép gửi lệnh in, các lệnh in khác sẽ bị từ chối hoàn toàn.",
      b: "Switch là thiết bị phù hợp để kết nối nhiều máy tính trong cùng phòng máy thành một mạng LAN.",
      c: "Chỉ những máy tính đặt gần máy in nhất mới có thể gửi được lệnh in tới máy in dùng chung qua mạng.",
      d: "Việc chia sẻ máy in qua mạng giúp tiết kiệm chi phí so với trang bị riêng một máy in cho mỗi máy tính trong phòng.",
    },
    correct: { a: "False", b: "True", c: "False", d: "True" },
  },
  {
    id: 9,
    text: "Một công ty công nghệ quyết định sử dụng hệ thống AI để tự động sàng lọc hồ sơ ứng viên, dựa trên việc phân tích hàng nghìn hồ sơ tuyển dụng thành công trong 10 năm qua của công ty. Sau một thời gian sử dụng, bộ phận nhân sự nhận thấy hệ thống có xu hướng đánh giá thấp hồ sơ của một số nhóm ứng viên nhất định, dù trình độ chuyên môn của họ không hề thua kém.",
    statements: {
      a: "Việc ứng dụng AI để sàng lọc hồ sơ xin việc là một ví dụ về ứng dụng AI trong lĩnh vực quản lý nhân sự.",
      b: "Nếu dữ liệu hồ sơ tuyển dụng trong quá khứ vốn đã có sự thiên vị với một số nhóm ứng viên, hệ thống AI có thể học và lặp lại sự thiên vị đó.",
      c: "Vì AI là hệ thống máy tính không có cảm xúc cá nhân, kết quả đánh giá của AI chắc chắn khách quan, công bằng tuyệt đối, không thể xảy ra thiên vị.",
      d: "Một khi đã triển khai hệ thống AI sàng lọc hồ sơ, công ty không cần rà soát hay điều chỉnh lại vì AI luôn tự động cải thiện độ chính xác theo thời gian.",
    },
    correct: { a: "True", b: "True", c: "False", d: "False" },
  },
  {
    id: 10,
    text: "Phòng Kế toán của một công ty lưu trữ bảng lương nhân viên trong một thư mục trên mạng LAN nội bộ để tiện cập nhật hằng tháng. Kế toán trưởng đề xuất chỉ cấp quyền truy cập thư mục này cho một số vị trí nhất định, đồng thời đặt thêm mật khẩu bảo vệ, thay vì để toàn bộ nhân viên công ty có thể mở xem.",
    statements: {
      a: "Nên cấp quyền truy cập thư mục bảng lương cho tất cả nhân viên trong công ty để đảm bảo tính minh bạch tuyệt đối.",
      b: "Việc chia sẻ tài nguyên qua mạng LAN chỉ áp dụng được với từng tệp văn bản riêng lẻ, không thể chia sẻ nguyên một thư mục chứa nhiều tệp.",
      c: "Chỉ nên cấp quyền truy cập thư mục bảng lương cho những vị trí có thẩm quyền liên quan, như kế toán trưởng hoặc giám đốc.",
      d: "Kết hợp giới hạn quyền truy cập và đặt mật khẩu bảo vệ cho thư mục bảng lương là một biện pháp hợp lý để tăng cường bảo mật dữ liệu nhạy cảm.",
    },
    correct: { a: "False", b: "False", c: "True", d: "True" },
  },
  {
    id: 11,
    text: "Trong một buổi livestream trực tiếp trên mạng xã hội, người xem thỉnh thoảng thấy hình ảnh bị giật, mất một vài khung hình, nhưng video vẫn tiếp tục phát mà không dừng lại để tải bù phần dữ liệu bị thiếu. Một bạn học sinh thắc mắc tại sao ứng dụng không \"chờ tải đủ\" giống như khi tải xuống một tệp tin quan trọng.",
    statements: {
      a: "Hiện tượng hình ảnh bị giật nhưng video vẫn tiếp tục phát thường liên quan đến việc ứng dụng livestream sử dụng giao thức ưu tiên tốc độ hơn độ tin cậy tuyệt đối.",
      b: "Các ứng dụng truyền video trực tuyến hoàn toàn không sử dụng bất kỳ giao thức nào thuộc bộ giao thức TCP/IP.",
      c: "Nếu livestream sử dụng TCP với đầy đủ cơ chế kiểm tra, truyền lại mọi gói tin bị mất, độ trễ giữa người phát và người xem chắc chắn sẽ giảm xuống.",
      d: "Việc chấp nhận mất một vài khung hình để ưu tiên tốc độ là hợp lý với livestream, vì mục tiêu chính là truyền hình ảnh theo thời gian thực.",
    },
    correct: { a: "True", b: "False", c: "False", d: "True" },
  },
  {
    id: 12,
    text: "Chủ một quán cà phê muốn lắp đặt hệ thống mạng gồm hai phần: Wi-Fi miễn phí phục vụ khách hàng dùng điện thoại, laptop, và một mạng có dây riêng biệt kết nối máy tính tính tiền với máy in hoá đơn để đảm bảo tốc độ ổn định. Nhân viên kỹ thuật đề xuất chỉ cần mua duy nhất một thiết bị Access Point là có thể đáp ứng được toàn bộ nhu cầu trên.",
    statements: {
      a: "Chỉ cần duy nhất một thiết bị Access Point là có thể đáp ứng toàn bộ nhu cầu mạng của quán, bao gồm cả kết nối ra Internet và kết nối có dây cho máy tính tính tiền.",
      b: "Access Point là thiết bị cần thiết để phát sóng Wi-Fi, cho phép các thiết bị không dây của khách hàng kết nối vào mạng.",
      c: "Máy tính tính tiền dùng dây mạng có thể được kết nối tới hệ thống thông qua Switch mà không nhất thiết phải qua Access Point.",
      d: "Router hoàn toàn không liên quan đến việc kết nối hệ thống mạng của quán ra Internet.",
    },
    correct: { a: "False", b: "True", c: "True", d: "False" },
  },
  {
    id: 13,
    text: "Một tối trước kỳ nghỉ lễ, trên một trang Facebook mang tên và ảnh đại diện giống hệt giáo viên chủ nhiệm xuất hiện bài đăng thông báo lịch nghỉ học thay đổi, kèm yêu cầu học sinh nhắn tin riêng để \"xác nhận danh sách\". Một số học sinh đã nhắn tin cung cấp thông tin cá nhân trước khi phát hiện đây là tài khoản giả mạo, không phải trang thật của giáo viên.",
    statements: {
      a: "Việc giả mạo danh tính người khác trên mạng xã hội để đăng tải thông tin sai là hành vi vi phạm chuẩn mực đạo đức và có thể vi phạm pháp luật.",
      b: "Trước khi làm theo yêu cầu trong một bài đăng đáng ngờ, nên xác minh lại qua kênh chính thức của nhà trường hoặc liên hệ trực tiếp với giáo viên.",
      c: "Vì bài đăng có tên và ảnh đại diện giống giáo viên chủ nhiệm, học sinh nên tin tưởng và làm theo ngay lập tức mà không cần xác minh thêm.",
      d: "Việc một số học sinh nhắn tin cung cấp thông tin cá nhân cho tài khoản giả mạo không gây ra rủi ro gì đáng kể vì đây chỉ là trao đổi trên mạng.",
    },
    correct: { a: "True", b: "True", c: "False", d: "False" },
  },
  {
    id: 14,
    text: "Bạn Tùng viết một tệp HTML để giới thiệu về câu lạc bộ bóng đá của lớp, gồm đầy đủ tiêu đề, đoạn văn mô tả và một vài hình ảnh. Sau khi lưu và mở tệp bằng trình duyệt, Tùng ngạc nhiên vì trang web hiển thị hoàn toàn trống trơn, không có bất kỳ nội dung chữ hay hình ảnh nào xuất hiện, dù tệp vẫn mở được bình thường.",
    statements: {
      a: "Vì tệp HTML của Tùng vẫn mở được bình thường mà không báo lỗi, nguyên nhân trang trống chắc chắn là do máy tính bị hỏng phần cứng.",
      b: "Nội dung đặt trong thẻ <head> sẽ luôn được hiển thị trên trang giống như nội dung đặt trong thẻ <body>.",
      c: "Trình duyệt web có chức năng đọc và hiển thị nội dung của tệp HTML thành trang web trực quan cho người xem.",
      d: "Để tìm nguyên nhân trang trống, Tùng nên kiểm tra lại cấu trúc thẻ HTML (đúng thẻ head/body, đủ thẻ đóng) trước khi nghĩ đến khả năng máy tính gặp sự cố phần cứng.",
    },
    correct: { a: "False", b: "False", c: "True", d: "True" },
  },
  {
    id: 15,
    text: "Trong bài thực hành, bạn Chi được yêu cầu viết đoạn mã HTML giới thiệu về bản thân: <h2>Giới thiệu</h2><p>Đây là <b>trang web</b> đầu tiên của em.</p>. Sau khi mở bằng trình duyệt, Chi so sánh kết quả hiển thị với đoạn mã đã gõ để kiểm tra xem các thẻ có hoạt động đúng như mong đợi hay không.",
    statements: {
      a: "Thẻ <h2> tạo ra một tiêu đề có kích thước nhỏ hơn thẻ <h1> nhưng vẫn lớn hơn văn bản thông thường trong thẻ <p>.",
      b: "Thẻ <p> trong đoạn mã trên không có tác dụng gì và có thể xoá đi mà không ảnh hưởng đến cấu trúc hiển thị.",
      c: "Cụm từ \"trang web\" trong đoạn mã trên sẽ được hiển thị in đậm nhờ thẻ <b>.",
      d: "Đoạn mã HTML trên sẽ hiển thị đúng như mong đợi khi mở trực tiếp bằng phần mềm soạn thảo văn bản Microsoft Word, không cần dùng đến trình duyệt web.",
    },
    correct: { a: "True", b: "False", c: "True", d: "False" },
  },
  {
    id: 16,
    text: "Trước hạn nộp bài văn nghị luận, bạn Đức sử dụng một công cụ AI tạo sinh để viết toàn bộ nội dung bài, chỉ chỉnh sửa vài từ rồi nộp lên nhóm lớp mà không ghi chú gì về việc đã dùng AI. Các bạn trong lớp đọc và khen bài viết mạch lạc, không ai biết đây không phải là bài Đức tự viết hoàn toàn.",
    statements: {
      a: "Sử dụng công cụ AI để tham khảo ý tưởng, gợi ý cách triển khai là hành vi hoàn toàn bị cấm trong mọi trường hợp học tập, không có ngoại lệ.",
      b: "Việc sử dụng AI hỗ trợ viết bài mà không khai báo rõ ràng khi nộp có thể vi phạm tính trung thực học thuật.",
      c: "Vì các bạn trong lớp đều khen bài viết mạch lạc, điều đó chứng tỏ chắc chắn Đức đã tự viết hoàn toàn bài văn mà không có sự hỗ trợ của AI.",
      d: "Việc các bạn khen bài viết mà không biết đó là sản phẩm của AI cho thấy rủi ro: người đọc có thể đánh giá sai năng lực thực sự của người nộp bài.",
    },
    correct: { a: "False", b: "True", c: "False", d: "True" },
  },
];

export default tfData;
