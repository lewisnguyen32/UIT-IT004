# Nhật ký ôn tập CSDL

Mốc hiện tại xem [memory.md](../memory.md). Tệp này chỉ lưu kết quả thực tế và chỗ cần chữa; các mốc cũ không thay thế trạng thái hiện tại.

## 27/10/2026 — Khởi tạo

- Người dùng đã có kiến thức sơ bộ theo tự đánh giá; chưa kiểm tra mức nắm kiến thức.
- Đã chuẩn bị nguồn, giới hạn, thứ tự ôn và bản trích xuất. Chưa giảng bài, giao câu hỏi hoặc ghi kết quả luyện đề.
- Sau mỗi lượt thực sự học/làm bài, ghi mã câu hoặc bước ôn, phần đúng, phần thiếu/sai, chỗ đã chữa và điểm tiếp tục. Không cần tạo thêm nhật ký rỗng cho từng chương.

## 27/10/2026 — Bắt đầu R1

- Bắt đầu theo yêu cầu “Bắt đầu học”: nhắc ngắn CSDL/DBMS, thuộc tính/bộ, lược đồ/tân từ và vai trò khóa theo T1, T2. Đây là nội dung nhắc lại, chưa phải kết quả kiểm tra.
- **R1-TK1 — tự kiểm tự soạn, không phải đề gốc:** `LOP(MaLop, TenLop)` và `SINHVIEN(MaSV, HoTen, MaLop)`. Cho sẵn khóa chính `LOP.MaLop`, `SINHVIEN.MaSV`; khóa ngoại `SINHVIEN.MaLop` tham chiếu `LOP.MaLop`; mỗi sinh viên thuộc đúng một lớp đã tồn tại.
- Bốn ý đang chờ: (1) SINHVIEN có mấy thuộc tính, một bộ biểu diễn gì; (2) `{MaSV, HoTen}` có là siêu khóa và khóa ứng viên không, vì sao; (3) điều kiện nối để biết tên lớp của sinh viên; (4) có thể thêm sinh viên mang `MaLop = 'L99'` khi LOP chưa có mã đó không, vì sao.
- Chưa có câu trả lời, chưa chữa hoặc đánh giá thành thạo. Tiếp theo: chấm bốn ý, bổ sung phần thiếu rồi tiếp tục R1/R2 phù hợp.
