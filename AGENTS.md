# Quy tắc ôn thi CSDL

Người dùng đã có kiến thức sơ bộ. Ưu tiên ôn tổng quát rồi luyện đề, chữa đúng chỗ hổng; không mặc định dạy lại từ đầu. Thư mục dùng theo đợt ôn thi.

## Đọc theo nhu cầu

- Khi tiếp ôn hoặc hỏi tiến độ, đọc `memory.md` nếu chưa có bản mới nhất. Chỉ mở mục liên quan trong `output/` hoặc `memory/nhat-ky-on-tap.md`; không nạp toàn bộ lịch sử.
- Tra `output/PHAM_VI_VA_THU_TU_ON_CSDL.md` để biết bước/trang; tra `output/BAN_DO_DE_THI_CSDL.md` để chọn câu. Chỉ đọc đúng trang trong `tmp/study_audit/T1.txt` đến `T4.txt` hoặc `E23.txt`, `E24.txt`, `E25.txt`.
- Dùng lại cache đã đối chiếu. Chỉ trích lại khi PDF hoặc cache thay đổi/hỏng; xem trang PDF gốc khi cần hình, gạch chân khóa, ký hiệu toán hoặc chữ bị ghép/mất. Không chạy OCR lại khi bản chữ đang dùng đủ rõ.

## Nguồn và giới hạn

- **Kiến thức lấy chính từ bốn PDF lý thuyết người dùng gửi**, T1/T2/T3/T4. **Đề chuẩn để luyện và xếp trọng tâm chỉ lấy từ ba PDF đã gửi**, E23/E24/E25. Tên và đường dẫn chính xác ở tài liệu phạm vi và manifest; không tự thêm đề mạng, đề mẫu, ngân hàng hay đáp án ngoài vào căn cứ.
- Chỉ dùng phần câu hỏi. Không đưa trước lời giải khi người dùng đang làm đề. Câu tự soạn chỉ là tự kiểm, phải phân biệt với đề gốc; không tính thành bằng chứng tần suất.
- Ch4 mặc định đến hết trang PDF 40/98: DDL/ràng buộc và DML. Trọng tâm theo sáu mã đề là `CHECK`, `FOREIGN KEY` và `UPDATE`. Phần truy vấn SQL từ trang 41 trở đi chưa thuộc lộ trình chính; không tự thêm. T4 trang 32–33 có ví dụ chép dữ liệu dùng SELECT, chỉ nhận diện trong DML.
- **Đại số quan hệ Ch3 vẫn phải ôn đủ dạng đề**: chọn/chiếu/kết, kết ngoài, giao/trừ, phép chia, gom nhóm/đếm/tính tỷ lệ. Không loại các dạng này vì đang giới hạn truy vấn SQL Ch4.
- Giới hạn trên là phạm vi làm việc dựa trên yêu cầu và đề đã gửi, chưa phải xác nhận chính thức về đề sắp thi. Khi người dùng cung cấp giới hạn mới, đối chiếu rồi cập nhật.
- Nếu PDF thiếu/sai/mơ hồ, chỉ rõ vị trí. Nguồn chính thống bên ngoài chỉ dùng bổ sung có nhãn, không thay nguồn chính hoặc tự mở rộng phạm vi. Không suy đoán khóa/bản số từ text thiếu gạch chân hay từ tên thuộc tính.

## Cách ôn và lưu tiến độ

- Ôn theo lộ trình R1–R8 rồi luyện từng dạng, sau đó làm đề 75 phút. Kiểm tra ngắn để tìm chỗ hổng; phần người dùng làm được thì chuyển tiếp, không ép lặp lại toàn bộ lý thuyết.
- Phân biệt kiến thức tự đánh giá, nội dung đã nhắc lại, câu đã trả lời, đã chữa và đã thành thạo. Không gán % thành thạo, điểm hay kết quả cho câu chưa làm.
- Giữ nguyên tên bảng, thuộc tính, ngày, điều kiện và mã đề khi giao/chấm. Chấp nhận biểu thức tương đương về ngữ nghĩa; nêu giả thiết khi đề không đủ rõ. Cú pháp SQL ưu tiên MS SQL Server theo T4.
- `memory.md` chỉ giữ mốc hiện tại, câu đang chờ, bài tiếp và liên kết. Kết quả/lỗi cụ thể ghi một lần trong nhật ký; không chép bài giảng hoặc đồng bộ tiến độ vào README/cache.
- Giữ nguyên PDF nguồn; không tự đặt lịch, bắt đầu giảng/luyện khi đang chỉ chuẩn bị thư mục, hoặc mang tiến độ/quỹ giờ của môn khác sang CSDL.
