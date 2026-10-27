# Trích xuất và đối chiếu nguồn CSDL

Cache để dùng lại bảy PDF đã chọn; không phải nơi ghi tiến độ. Mốc học ở [memory.md](../../memory.md), phạm vi ở [tài liệu ôn](../../output/PHAM_VI_VA_THU_TU_ON_CSDL.md).

## Nội dung

- `manifest.json`: danh sách nguồn cố định, SHA256 PDF/cache, số trang và phiên bản bộ trích xuất. Đường dẫn `source` tính từ gốc CSDL, dùng được khi di chuyển cả thư mục.
- `T1.txt`–`T4.txt`, `E23.txt`, `E24.txt`, `E25.txt`: chữ theo trang, nhãn `[PDF PAGE N]` là trang vật lý PDF đếm từ 1.
- Các file `.json` cùng mã: danh sách `{page, text, chars}`, dễ đọc đúng trang mà không nạp cả tài liệu.
- `question_index.json`: chỉ mục 62 yêu cầu nhỏ thuộc sáu mã đề, có trang, điểm, dạng và trang lý thuyết. Không chứa đáp án hoặc kết quả học.
- `visuals/`: ảnh 12 trang đề, ảnh một số trang lý thuyết và contact sheet đã đối chiếu; giữ lại để xem khóa gạch chân, công thức, bản số, mốc T4 tr.40/41.
- `extract_sources.py`: chỉ trích đúng bảy nguồn cố định. Nếu SHA256 nguồn, phiên bản và cache còn khớp thì tái sử dụng; không đọc lại PDF.

## Cách dùng

Ưu tiên mở đúng mã/trang từ TXT/JSON, không mở tất cả cache trước mỗi lượt. Ví dụ tìm `\[PDF PAGE 22\]` trong T4 để tra ràng buộc. Khi cần kiểm cache hoặc nguồn thay đổi, chạy script từ thư mục CSDL bằng Python có `pypdf`:

```powershell
python .\tmp\study_audit\extract_sources.py --verify-only
python .\tmp\study_audit\extract_sources.py
```

Trong Codex dùng Python bundle đã được công cụ workspace dependencies cung cấp, không cài lại thư viện nếu đã có. Script mặc định tìm thư mục CSDL theo vị trí của nó; `--source-root` chỉ dùng khi chủ động làm việc trên bản sao/staging.

Không chạy lệnh trích xuất theo thói quen mỗi lượt. `--verify-only` đọc hash, không trích PDF hay ghi cache. Chỉ chạy lại khi thực sự kiểm nguồn hoặc nghi cache hỏng; nếu nguồn đổi phải xem lại phạm vi/chỉ mục, script không tự cập nhật các quyết định ôn.

## Chất lượng trích xuất

Bảy PDF đều có lớp chữ, không cần OCR để có bản đọc đầu. `pypdf` có cảnh báo về một số object offset, nhưng đã trích được đủ trang; cảnh báo không được xem là bằng chứng mọi ký hiệu đều đúng. Có thể mất khoảng trắng tiếng Việt, ký hiệu ĐSQH hoặc gạch chân khóa. Khi thông tin đó ảnh hưởng lời giải, xem ảnh/PDF gốc thay vì suy đoán.

Đã đối chiếu hình đủ 12 trang đề và các trang T1:52, T2:25, T3:37/51/56, T4:22/35/40/41. Không ghi rằng đã kiểm hình toàn bộ 284 trang lý thuyết. Cache T4 giữ cả 98 trang để tránh trích lại, nhưng phạm vi ôn chính vẫn chỉ đến trang 40.
