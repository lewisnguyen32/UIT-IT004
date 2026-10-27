# Ôn thi Cơ sở dữ liệu — UIT

Thư mục ôn giữa kỳ dành cho người đã có kiến thức sơ bộ: ôn tổng quát, kiểm tra chỗ hổng rồi luyện đề và chữa lỗi.

- [Mốc hiện tại](memory.md): đọc khi tiếp tục buổi ôn.
- [Phạm vi và thứ tự ôn](output/PHAM_VI_VA_THU_TU_ON_CSDL.md): nguồn chính, giới hạn Chương 4 và lộ trình.
- [Bản đồ đề thi](output/BAN_DO_DE_THI_CSDL.md): ba PDF, sáu mã đề và các dạng cần luyện.
- [Quy tắc làm việc](AGENTS.md): cách dùng nguồn, đọc ít context và ghi tiến độ.
- [Nhật ký ôn tập](memory/nhat-ky-on-tap.md): chỉ ghi kết quả thực tế sau mỗi lượt học/luyện.
- [Dữ liệu trích xuất dùng lại](tmp/study_audit/README.md): tra đúng trang, tránh mở và trích lại toàn bộ PDF.

## Phạm vi đang dùng

Kiến thức lấy chính từ bốn PDF trong `Lý thuyết/`. Đề luyện, thống kê và xếp trọng tâm chỉ lấy từ ba PDF trong `Giữa kỳ/`, các năm 2023–2024, 2024–2025 và 2025–2026. Mỗi PDF chứa hai mã đề, mỗi mã gồm hai trang và có thời gian 75 phút.

Chương 4 mặc định ôn đến hết phần thao tác dữ liệu, trang PDF **40/98**; trọng tâm đề là ràng buộc và `UPDATE`. Phần truy vấn SQL từ trang 41 chưa đưa vào lộ trình chính. Đại số quan hệ ở Chương 3, gồm kết ngoài, phép chia và gom nhóm, vẫn thuộc trọng tâm. Căn cứ và mức chắc chắn được ghi trong tài liệu phạm vi.

## Tổ chức thư mục

- `Lý thuyết/`, `Giữa kỳ/`: PDF nguồn, giữ nguyên.
- `output/`: phạm vi, thứ tự ôn và bản đồ đề; không chứa đáp án làm sẵn.
- `memory/`: nhật ký chi tiết khi thực sự ôn.
- `tmp/study_audit/`: chữ theo trang, manifest, chỉ mục câu và hình đối chiếu.

## Lịch sử

### 27/10/2026 — Chuẩn bị thư mục ôn tập

Đã kiểm kê bảy PDF, lưu trích xuất của 296 trang và đối chiếu sáu mã đề. Giữ `memory.md` ngắn, tách quy tắc và chi tiết để tránh phình context, đọc lặp PDF và dùng token không hiệu quả. Đây là bước chuẩn bị; chưa đánh dấu người dùng đã ôn hoặc làm đúng câu nào.
