# Phạm vi và thứ tự ôn Cơ sở dữ liệu

Chuẩn bị ngày 27/10/2026. Người học đã có kiến thức sơ bộ, nên ôn tổng quát để nối lại kiến thức rồi luyện đề, sửa lỗi theo dạng. Chưa ấn định số ngày hoặc quỹ giờ vì người dùng chưa cung cấp cho môn này.

## 1. Nguồn được dùng

Kiến thức lấy chính từ bốn PDF lý thuyết bên dưới; đề luyện, thống kê và xếp trọng tâm chỉ lấy từ ba PDF đề đã gửi. Chỉ dùng câu hỏi, không dùng đáp án ngoài hoặc đề online. Bản trích xuất trong `tmp/study_audit/` là bản đọc lại của chính những PDF này.

| Mã | PDF nguồn | Số trang PDF |
|---|---|---:|
| T1 | [Chương 1 — Tổng quan](<../Lý thuyết/DPL_Chuong 1 - Tong quan.pdf>) | 64 |
| T2 | [Chương 2 — Mô hình dữ liệu quan hệ](<../Lý thuyết/DPL_Chuong 2 - Mo hinh Du lieu Quan he.pdf>) | 59 |
| T3 | [Chương 3 — Đại số quan hệ](<../Lý thuyết/DPL_Chuong 3 - Dai so Quan he.pdf>) | 63 |
| T4 | [Chương 4 — SQL](<../Lý thuyết/DPL_Chuong 4 - SQL.pdf>) | 98 |
| E23 | [Đề giữa kỳ 2023–2024](<../Giữa kỳ/2023_2024_HK1_DE THI GIUA KY_CSDL.pdf>) | 4 |
| E24 | [Đề giữa kỳ 2024–2025](<../Giữa kỳ/2024_2025_HK1_DE THI GIUA KY_CSDL.pdf>) | 4 |
| E25 | [Đề giữa kỳ 2025–2026](<../Giữa kỳ/2025_2026_HK1_DE THI GIUA KY_CSDL.pdf>) | 4 |

Tổng nguồn lý thuyết: 284 trang; nguồn đề: 12 trang. Đã lưu trích xuất đủ 296 trang. Không đồng nghĩa phải học cả 284 trang lý thuyết: T4 chỉ dùng phần đã giới hạn và các phần nền đã nhớ được ôn nhanh.

Mọi số trang trong các tệp ôn là **trang vật lý PDF, đếm từ 1**. Với mỗi E23/E24/E25, Đề1 nằm ở trang 1–2, Đề2 ở trang 3–4. Khi ghi E25-Đề1 C2.2e nghĩa là phần e của yêu cầu đại số quan hệ thuộc Câu2; không phải một câu SQL.

## 2. Kết quả kiểm tra giới hạn Chương 4

| Phần trong T4 | Trang PDF | Cách dùng khi ôn |
|---|---:|---|
| Giới thiệu, phân loại SQL | 1–7 | Nhắc nhanh DDL/DML; nhận diện ngôn ngữ |
| DDL: kiểu dữ liệu, tạo/sửa/xóa bảng, ràng buộc | 8–26 | Trong phạm vi; ưu tiên CHECK, PRIMARY KEY, FOREIGN KEY, ALTER TABLE ADD CONSTRAINT ở tr.12–13 và 22–24 |
| DML: thêm dữ liệu | 27–34 | Ôn dự phòng; tr.32–33 có ví dụ INSERT…SELECT/SELECT INTO, không mở rộng sang cả chương truy vấn |
| DML: sửa dữ liệu | 35–37 | Trọng tâm: UPDATE, SET, WHERE, tăng/giảm phần trăm, cập nhật nhiều cột |
| DML: xóa dữ liệu | 38–40 | Ôn dự phòng trong cùng phần thao tác dữ liệu; lưu ý WHERE và tham chiếu |
| Ngôn ngữ truy vấn dữ liệu | 41–95 | Chưa đưa vào lộ trình chính: SELECT tổng quát, SQL JOIN, truy vấn lồng, GROUP BY/HAVING, kết ngoài SQL |
| Tổng kết và kết thúc | 96–98 | Chỉ tra phần đã giữ khi cần |

**Mốc làm việc: hết trang PDF 40/98, không cắt theo 50% số trang.** Trang 40 kết thúc DELETE; trang 41 bắt đầu phần “Ngôn ngữ truy vấn dữ liệu”. Nếu chỉ luyện trực tiếp phần SQL của sáu mã đề thì ưu tiên ràng buộc và UPDATE; INSERT/DELETE và tạo/sửa cấu trúc còn lại là phần dự phòng trong giới hạn.

Đối chiếu đủ sáu mã đề: SQL chỉ hỏi tạo ràng buộc và cập nhật. E23/E24 mỗi mã có hai yêu cầu SQL; E25 mỗi mã có CHECK, FOREIGN KEY và UPDATE. Tất cả yêu cầu truy vấn còn lại đều ghi rõ viết **biểu thức đại số quan hệ**, không phải SELECT SQL.

Đây là giới hạn ôn mặc định suy ra từ yêu cầu người dùng và ba file đề đã gửi, **chưa phải thông báo phạm vi chính thức của giảng viên cho kỳ thi tới**. Không tự mở rộng; nếu có outline/thông báo mới thì đối chiếu lại mốc.

### Đại số quan hệ không bị cắt theo Chương 4

Vẫn ôn kết ngoài (T3 tr.36–44), giao/trừ (tr.45–50), phép chia “tất cả” (tr.51–54), gom nhóm và hàm tổng hợp (tr.55–61). Các phần này thuộc Ch3 và xuất hiện trực tiếp trong đề. Chưa học SQL GROUP BY không có nghĩa bỏ gom nhóm trong đại số quan hệ.

## 3. Cấu trúc đề và trọng tâm

Cả sáu mã đề đều có thời gian 75 phút và phân bố điểm dưới đây, đã đối chiếu chữ và hình gốc:

| Khối bài | Điểm/mã đề | Tỷ trọng điểm trong các đề đã gửi | Nguồn lý thuyết |
|---|---:|---:|---|
| C1.1: vẽ ER | 1,5 | 15% | T1 tr.37–60 |
| C1.2: ER → mô hình quan hệ | 1,0 | 10% | T2 tr.41–54 và khóa tr.22–32 |
| C2.1: SQL ràng buộc/cập nhật | 1,5 | 15% | T4 tr.12–13, 22–24, 35–37 |
| C2.2a–f: sáu biểu thức ĐSQH | 6,0 | 60% | T3 tr.13–61 |

Đây là tỷ trọng điểm của sáu mã đề trong ba PDF, không phải xác suất ra đề sắp tới. Các mã đề cùng năm dùng chung lược đồ và nhiều dạng, không coi là sáu quan sát hoàn toàn độc lập.

## 4. Lượt A — Ôn tổng quát R1–R8

Thời lượng dưới đây chỉ là gợi ý linh hoạt, không phải lịch đã thống nhất. Đi theo thứ tự phụ thuộc kiến thức; phần đã làm được chỉ cần nhắc ngắn rồi sang bước tiếp.

| Bước | Nội dung và thứ tự | Trang nguồn | Mục tiêu kiểm tra ngắn | Gợi ý |
|---|---|---|---|---:|
| R1 | Nối lại nền: CSDL/DBMS; thuộc tính, bộ, quan hệ, tân từ; khóa chính/ngoại và đọc lược đồ | T1 tr.7–24, 61; T2 tr.7–15, 22–40, 56–58 | Đọc đúng một lược đồ, nhận diện vai trò khóa và đường nối; chỉ bổ sung phần quên | 15–25 phút |
| R2 | ER: thực thể, thuộc tính, khóa, mối kết hợp, thuộc tính của quan hệ, bản số min–max | T1 tr.37–53, 60; tr.54–59 để tra ER mở rộng | Từ mô tả chỉ ra thực thể, quan hệ 1–n/n–n và thuộc tính gắn đúng nơi; nêu giả thiết khi min chưa rõ | 25–35 phút |
| R3 | Chuyển ER → quan hệ, đặt khóa/khóa ngoại | T2 tr.41–54, ưu tiên 46–52 | Chuyển nhất quán ER vừa ôn; giữ thuộc tính quan hệ, nhận diện khóa ghép và quan hệ tùy chọn | 20–30 phút |
| R4 | ĐSQH nền: chọn/chiếu, gán/đổi tên, tích, kết; đường nối qua khóa | T3 tr.4–12 để đọc lược đồ; tr.13–35 để ôn phép toán | Chuyển một yêu cầu lọc và một yêu cầu nối nhiều bảng sang biểu thức; giữ thuộc tính cần dùng ở bước sau | 25–35 phút |
| R5 | ĐSQH “cả hai”, “không có”, “nếu có”: giao/trừ và kết ngoài | T3 tr.36–50 | Phân biệt bảo toàn bên trái với lọc làm mất dòng; chọn đúng tập khóa để giao/trừ | 25–35 phút |
| R6 | ĐSQH “tất cả”: phép chia và tập đối tượng bắt buộc | T3 tr.51–54 | Xác định tập ứng viên, tập cần phủ và cặp đối tượng–điều kiện; không nhầm “cả hai” với mọi phần tử | 20–30 phút |
| R7 | ĐSQH gom nhóm, đếm/tổng và tỷ lệ | T3 tr.55–61; đối chiếu C2.2f của E24/E25 | Xác định đơn vị đếm, khóa nhóm; tránh nhân bản do kết; với tỷ lệ phải cùng tập năm/điều kiện và mẫu số có nghĩa | 25–40 phút |
| R8 | SQL trong giới hạn: DDL/ràng buộc, UPDATE; nhắc INSERT/DELETE | T4 tr.8–40, ưu tiên 12–13, 22–24, 35–37 | Phân biệt CHECK với FOREIGN KEY; UPDATE đúng bảng/cột/WHERE; nhận ra thiếu WHERE và cập nhật nhiều cột | 25–35 phút |

Khối R1–R8 là ôn lại nền trước luyện đề, không phải tám chặng đã hoàn thành. Chưa gán % thành thạo hoặc buộc học đúng thời lượng.

## 5. Lượt B — Luyện theo dạng và chữa lỗi

1. Dùng E23-Đề1 để nối lại ER/chuyển quan hệ và các dạng nền; chọn từng câu phù hợp sau khi ôn tổng quát, chưa cần bấm giờ cả đề.
2. Với ĐSQH, luyện lần lượt chọn/chiếu/kết → kết ngoài → giao/trừ → chia → gom nhóm. E23-Đề2 dùng để kiểm tra biến thể cùng lược đồ, không coi việc nhớ đáp án đề1 là đã làm được đề2.
3. Dùng E24 để luyện trường hợp kiểm định nhiều lần và đếm sản phẩm; chỉ đánh giá dựa trên cách người dùng lập biểu thức thực tế.
4. Dùng E25-Đề1 để luyện ràng buộc tham chiếu, cập nhật nhiều cột, nhiều vai trò khách hàng và tỷ lệ; chưa đưa lời giải trước.
5. Sau mỗi lượt, ghi mã câu, điểm đúng/thiếu, lý do lỗi và một điểm cần củng cố trong nhật ký. Không yêu cầu làm đúng tất cả câu cơ bản mới được chuyển dạng nếu người dùng muốn tiếp.

Chi tiết vị trí câu và dạng xem [bản đồ đề](BAN_DO_DE_THI_CSDL.md).

## 6. Lượt C — Đề tổng hợp

Giữ **E25-Đề2** cho lượt tổng hợp cuối nếu chưa làm trước đó. Làm 75 phút theo thời gian trên đề, chưa mở đáp án/hướng dẫn. Có thể phân bổ khởi đầu: 3 phút đọc, 16 phút C1, 10 phút SQL, 41 phút ĐSQH và 5 phút soát lại; điều chỉnh theo điểm yếu sau lần làm thật.

Chữa theo bốn nhóm lỗi: đọc ngữ cảnh/ER, khóa và đường nối, chọn sai phép toán, cú pháp/điều kiện SQL. Dùng chính trang PDF lý thuyết tương ứng làm căn cứ. Không tự chấm điểm như đáp án chính thức khi đề thiếu giả thiết.

## 7. Chỗ cần cẩn thận khi tra nguồn

- Text trích xuất có thể ghép từ tiếng Việt, làm mất gạch chân khóa và sai ký hiệu toán. Khóa chính trong đề được gạch chân; cần dùng ảnh/PDF gốc khi giải cụ thể.
- T2 tr.25 có cụm “ít thuộc tính nhất”, nhưng điều kiện hình thức là không có tập con thực sự còn là siêu khóa. Khi nhắc lại khóa, dùng tính tối thiểu theo bao hàm, không suy ra mọi khóa phải có cùng số thuộc tính.
- Các ngữ cảnh có “mỗi lần/lượt” (quyên góp, kiểm định, xử lý) cần xem khả năng lặp và chọn khóa phù hợp; không mặc định cặp khóa thực thể luôn định danh được mọi lần.
- Với “nếu có”, phải xác định rõ đối tượng cần giữ và nơi áp điều kiện. Với “tất cả”, phải xác định đúng tập đối tượng bắt buộc theo đề. Đây là điểm cần kiểm khi làm bài, chưa phải lời giải.
- Với E24 C2.2f, đếm sản phẩm đạt sau lần đầu khác đếm số lượt kiểm định. E25 C2.2f có tỷ lệ, cần kiểm soát trùng và mẫu số. Nếu hai lần cùng thời điểm hoặc thiếu quy định, nêu giả thiết thay vì bịa thêm dữ kiện.
- T3 tr.56 dùng ký hiệu gom nhóm riêng của slide; đối chiếu ảnh trước khi khẳng định một ký hiệu trích xuất là đúng/sai. Các biểu thức tương đương về ngữ nghĩa có thể trình bày khác nhau.
