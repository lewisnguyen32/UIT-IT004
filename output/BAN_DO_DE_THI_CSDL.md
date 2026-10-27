# Bản đồ đề giữa kỳ Cơ sở dữ liệu

Đối chiếu ngày 27/10/2026, chỉ dựa trên ba PDF E23/E24/E25 trong [danh sách nguồn](PHAM_VI_VA_THU_TU_ON_CSDL.md). Không có lời giải hoặc đáp án làm sẵn ở đây.

## 1. Sáu mã đề trong ba PDF

Mỗi mã đề gồm 2 trang, thời gian 75 phút, tổng 10 điểm. Mỗi file chứa Đề1 ở trang PDF 1–2 và Đề2 ở trang PDF 3–4. Sáu mã có cấu trúc chung: ER 1,5 điểm; chuyển quan hệ 1 điểm; SQL 1,5 điểm; sáu bài ĐSQH mỗi bài 1 điểm.

| Mã dùng khi luyện | Trang PDF | Ngữ cảnh C1 | Lược đồ C2 |
|---|---:|---|---|
| E23-Đề1 | 1–2 | Bố trí dụng cụ chữa cháy theo tầng | Bán hoa, đơn hàng, giao hàng |
| E23-Đề2 | 3–4 | Kiểm tra thiết bị báo cháy theo đợt | Bán hoa, đơn hàng, giao hàng |
| E24-Đề1 | 1–2 | Cơn bão, dự báo đường đi và khu vực ảnh hưởng | Kiểm định sản phẩm |
| E24-Đề2 | 3–4 | Phong trào quyên góp và người ủng hộ | Kiểm định sản phẩm |
| E25-Đề1 | 1–2 | Vụ việc, người tố giác, nạn nhân, điều tra viên | Hợp đồng và yêu cầu bảo hiểm |
| E25-Đề2 | 3–4 | Sản phẩm nghi hàng giả, mẫu và đơn vị kiểm định | Hợp đồng và yêu cầu bảo hiểm |

Các đề trong một năm chia sẻ lược đồ C2 và nhiều dạng; không coi các câu là quan sát độc lập để dự báo đề sắp thi. Chỉ mục máy đọc ở `../tmp/study_audit/question_index.json` ghi đủ 62 yêu cầu nhỏ, tổng 60 điểm của sáu mã; đây không phải 62 câu độc lập.

## 2. Phần SQL C2.1

| Mã đề | Yêu cầu đúng theo đề | Trang |
|---|---|---:|
| E23-Đề1 | a: miền DAGIAO; b: giảm tổng tiền 2% theo ngày bán | 2 |
| E23-Đề2 | a: miền THELOAI; b: tăng phí ship 5% theo ngày giao | 4 |
| E24-Đề1 | a: miền BacTho; b: cập nhật TinhTrangSP theo phân xưởng/ngày sản xuất | 2 |
| E24-Đề2 | a: miền TrangThai của loại SP; b: tăng KQMongDoi 15% theo loại SP/đơn vị đo | 4 |
| E25-Đề1 | a: miền TrangThai yêu cầu; b: khách hàng đại diện hợp đồng là một khách hàng; c: giảm hai cột tiền 10% theo tên bảo hiểm | 2 |
| E25-Đề2 | a: thứ tự ngày ký/hiệu lực/hết hạn; b: khách hàng thụ hưởng là một khách hàng; c: tăng hai cột tiền 15% theo tên bảo hiểm | 4 |

E23/E24 chia 0,75 điểm cho mỗi yêu cầu SQL; E25 chia 0,5 điểm cho mỗi yêu cầu. Không có bài SELECT SQL độc lập trong sáu mã này. Nguồn ôn trực tiếp là T4 tr.12–13, 22–24, 35–37; DDL/DML còn lại đến tr.40 để ôn dự phòng.

## 3. Phần đại số quan hệ C2.2a–f

| Mã đề | a | b | c | d | e | f |
|---|---|---|---|---|---|---|
| E23-Đề1 | Chọn/chiếu SP, điều kiện giá | Nối đơn/giao, ngày và trạng thái | SP và nhà vườn nếu có | Cùng mua hai SP | Đếm đơn đã giao theo ngày | Người giao đủ tất cả SP trong tập giá |
| E23-Đề2 | Chọn/chiếu SP, điều kiện giá | Nối đơn/giao, ngày và trạng thái | Đơn và giao hàng nếu có | Mua SP này nhưng không mua SP kia | Tổng lượng theo SP | Người giao đủ tất cả SP trong thể loại |
| E24-Đề1 | Lọc tiêu chuẩn | Kết SP/loại/phân xưởng | Công nhân và SP nếu có | Không có chi tiết kiểm định dưới ngưỡng | Đạt “Tốt” trên tất cả tiêu chuẩn yêu cầu | Đếm SP đạt sau lần kiểm định đầu theo loại |
| E24-Đề2 | Lọc kiểm định | Kết SP/kiểm định/công nhân | SP và tiêu chuẩn nếu có | “Tốt” trên cả hai tiêu chuẩn | Kiểm định tất cả tiêu chuẩn yêu cầu trong năm | Đếm SP đạt sau lần kiểm định đầu theo phân xưởng |
| E25-Đề1 | Lọc lịch sử đóng tiền theo năm/phương thức | Kết hợp đồng/chi tiết/khách đại diện | Khách thụ hưởng và yêu cầu nếu có | Không có yêu cầu bị hủy trong năm | Bao phủ mọi loại bảo hiểm thuộc kỳ yêu cầu | Tỷ lệ yêu cầu đã chi trả ít nhất 80% |
| E25-Đề2 | Lọc yêu cầu theo năm/trạng thái | Kết hợp đồng/chi tiết/khách thụ hưởng | Khách thụ hưởng và giao dịch nếu có | Mua cả hai loại bảo hiểm | Bao phủ mọi loại bảo hiểm thuộc kỳ yêu cầu | Tỷ lệ lần chuyển khoản ít nhất 80% |

Đây là nhận diện dạng để chọn bài, không thay thế nguyên văn câu hỏi. Khi giao/chấm phải đọc đúng E23/E24/E25 và giữ đủ mốc thời gian, tên thuộc tính, tập cần phủ và dữ kiện lược đồ.

## 4. Thứ tự luyện từng dạng

Ưu tiên đề mới nhất: chọn câu cùng dạng theo E25 (2025–2026) → E24 → E23. Dùng E25-Đề1 để luyện trước và giữ E25-Đề2 cho lượt tổng hợp nếu chưa làm trước đó; đề cũ bổ sung dạng và chỗ cần củng cố. Theo thông tin người dùng cung cấp ngày 27/10/2026, thầy cho biết khả năng rất lớn đề sắp thi vẫn giữ format các năm trước.

| Dạng | Câu để bắt đầu | Bước ôn cần có |
|---|---|---|
| Đọc lược đồ, chọn/chiếu | E25-Đề1 C2.2a; E24/E23 C2.2a để bổ sung | R1, R4 |
| Kết và lọc nhiều quan hệ | E25-Đề1 C2.2b, rồi E24/E23 C2.2b khi cần | R1, R4 |
| “Nếu có”, kết ngoài | E25-Đề1 C2.2c, rồi E24/E23 C2.2c khi cần | R5 |
| “Cả hai”, “không có” | E25-Đề1 C2.2d (“không có”); E24-Đề2 C2.2d (“cả hai”); E23 để bổ sung | R5 |
| “Tất cả”, phép chia | E25-Đề1 C2.2e; E24 C2.2e và E23 C2.2f để bổ sung | R6 |
| Gom nhóm, đếm/tổng | E24 C2.2f (đếm SP); E23 C2.2e (đếm đơn/tổng lượng); tỷ lệ theo E25 ở dòng dưới | R7 |
| Tỷ lệ và kiểm soát đơn vị đếm | E25-Đề1 C2.2f; giữ Đề2 cho lượt tổng hợp | R7 |
| SQL ràng buộc và UPDATE | E25-Đề1 C2.1, rồi E24/E23 C2.1 khi cần | R8 |
| ER và chuyển quan hệ | E25-Đề1 C1, rồi E24/E23 C1 khi cần | R2–R3 |

Luyện theo dạng sau lượt ôn tổng quát. Giữ E25-Đề2 để làm 75 phút ở cuối nếu người dùng chưa chọn làm trước. Chưa có mã nào được đánh dấu đã làm.
