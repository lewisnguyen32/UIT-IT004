# E25-Đề1 — C2.2a–f: Từ khóa và hướng dẫn phân tích

Nguồn câu hỏi: [E25 — Đề giữa kỳ 2025–2026](<../Giữa kỳ/2025_2026_HK1_DE THI GIUA KY_CSDL.pdf>), Đề 1, trang PDF 1–2; cả sáu yêu cầu C2.2 ở trang 2, mỗi yêu cầu 1 điểm. Kiến thức phép toán theo [T3](<../Lý thuyết/DPL_Chuong 3 - Dai so Quan he.pdf>). Đây là hướng dẫn phân tích trong buổi ôn, chưa phải bài người dùng tự làm.

## 1. Lược đồ

    KHACHHANG(MaKH, HoTen, NgSinh, CCCD, NgheNghiep)
    LOAIBAOHIEM(MaLBH, TenLBH, STBaoHiem, STDongDinhKy, KyThanhToan)
    HOPDONG(SoHD, MaKHDaiDien, NgKyHD, NgHieuLuc, NgHetHan, TriGia)
    CHITIETHD(MaCTHD, SoHD, MaKHThuHuong, MaLBH)
    LSDONGTIEN(MaGD, MaCTHD, NgDongTien, STDong, PhuongThuc)
    YEUCAUBAOHIEM(MaYC, MaCTHD, STYeuCau, STDuyetChi, NgYeuCau, TrangThai)

Khóa chính đã đối chiếu gạch chân trong hình gốc, theo thứ tự sáu bảng: MaKH, MaLBH, SoHD, MaCTHD, MaGD, MaYC.

Các đường tham chiếu theo tân từ:

- HOPDONG.MaKHDaiDien → KHACHHANG.MaKH: người đại diện.
- CHITIETHD.MaKHThuHuong → KHACHHANG.MaKH: người thụ hưởng.
- CHITIETHD.SoHD → HOPDONG.SoHD.
- CHITIETHD.MaLBH → LOAIBAOHIEM.MaLBH.
- LSDONGTIEN.MaCTHD → CHITIETHD.MaCTHD.
- YEUCAUBAOHIEM.MaCTHD → CHITIETHD.MaCTHD.

## 2. Từ khóa định hướng

| Dấu hiệu trong câu hỏi | Phép thường dùng | Điều cần xác định |
|---|---|---|
| Liệt kê mã, họ tên, một số thông tin | Chiếu π | Những cột đầu ra |
| Có trạng thái, trong năm/tháng, sau ngày, bằng một giá trị | Chọn σ | Cột chứa điều kiện và phạm vi ngày |
| Thông tin nằm ở nhiều bảng | Kết ⋈ | Đường nối đúng ý nghĩa/vai trò |
| Nếu có, kể cả chưa có thông tin liên quan | Kết ngoài, thường kết trái ⟕ | Đối tượng nào phải được giữ |
| Hoặc một trong hai nhóm | Hội ∪ hoặc điều kiện ∨ | Hai nhóm hay hai điều kiện trên cùng bộ |
| Cả hai nhóm | Giao ∩ | Chiếu về cùng tập mã trước khi giao |
| Không có ... nào thỏa điều kiện | Trừ − | Tập ứng viên trừ tập có ít nhất một trường hợp bị cấm |
| Tất cả, mọi phần tử của một tập | Chia ÷ | Tập bắt buộc và cặp đối tượng–yêu cầu |
| Số lượng, tổng, trung bình ... theo mỗi đối tượng | Gom nhóm + COUNT/SUM/AVG | Khóa nhóm và đơn vị cần đếm/tính |
| Chiếm từ ...% trở lên | Gom nhóm rồi chọn theo tỷ lệ | Cùng phạm vi cho tử/mẫu và mẫu dương |

Từ khóa chỉ định hướng; phải đọc đúng đối tượng và điều kiện, không thay toàn bộ việc phân tích.

Quy ước khoảng ngày để tránh mất phần thời gian:

- Năm 2025: ngày ≥ 01/01/2025 và ngày < 01/01/2026.
- Tháng 11/2025: ngày ≥ 01/11/2025 và ngày < 01/12/2025.
- “Sau ngày 01/01/2025” là điều kiện >; không tự thêm giới hạn chỉ trong năm 2025.

## 3. Sáu câu nguyên văn và gợi hướng

### E25-Đề1 C2.2a

> Liệt kê thông tin mã giao dịch, mã chi tiết hợp đồng của các lịch sử đóng tiền bảo hiểm trong năm 2025 và có phương thức đóng tiền là ‘Chuyển khoản’. (1 điểm)

- Từ khóa: “liệt kê ... mã” → chiếu; “trong năm 2025”, “phương thức ... Chuyển khoản” → chọn.
- Tất cả thông tin đã có trong LSDONGTIEN, chưa cần nối bảng khác.
- Lọc theo NgDongTien và PhuongThuc; sau đó chỉ giữ MaGD, MaCTHD.

### E25-Đề1 C2.2b

> Liệt kê thông tin số hợp đồng, mã chi tiết hợp đồng, họ tên khách hàng đại diện ký hợp đồng của các hợp đồng có hiệu lực sau ngày 01/01/2025 và đã mua loại bảo hiểm có mã là ‘LBH202’. (1 điểm)

- Từ khóa: thông tin nhiều bảng → kết; “sau ngày”, “mã ... LBH202” → chọn; danh sách đầu ra → chiếu.
- Đường nối: HOPDONG.SoHD = CHITIETHD.SoHD; HOPDONG.MaKHDaiDien = KHACHHANG.MaKH.
- Điều kiện: NgHieuLuc > 01/01/2025 và CHITIETHD.MaLBH = 'LBH202'.
- Cột kết quả: SoHD, MaCTHD, HoTen của người đại diện. Không nối người đại diện qua MaKHThuHuong; không cần LOAIBAOHIEM chỉ để kiểm tra mã đã có trong CHITIETHD.

### E25-Đề1 C2.2c

> Liệt kê mã và họ tên khách hàng thụ hưởng, cùng với các mã yêu cầu giải quyết bảo hiểm trong tháng 11/2025 và có trạng thái là ‘Đã chi trả’ của các chi tiết hợp đồng mà họ đã tham gia (nếu có). (1 điểm)

- Từ khóa quan trọng: “thụ hưởng” → CHITIETHD.MaKHThuHuong; “nếu có” → kết ngoài.
- Hướng làm của buổi ôn lấy đơn vị bảo toàn là **khách hàng thụ hưởng**: xác định những khách thực sự xuất hiện trong CHITIETHD với vai trò này.
- Lọc YEUCAUBAOHIEM theo NgYeuCau thuộc tháng 11/2025 và TrangThai = 'Đã chi trả' trước khi kết ngoài; nối qua MaCTHD để gắn yêu cầu với khách thụ hưởng.
- Đặt tập khách cần giữ ở bên trái, tập yêu cầu đã lọc ở bên phải. Kết quả giữ MaKH, HoTen, MaYC; khách không có yêu cầu phù hợp vẫn được giữ với MaYC = NULL.
- Không lọc lại điều kiện ngày/trạng thái phía yêu cầu sau kết ngoài vì sẽ làm rơi những khách cần giữ.
- **Chỗ mơ hồ của đề, tr.PDF 2 câu c:** nếu hiểu bảo toàn từng CHITIETHD thay vì từng khách, có thể có thêm dòng NULL khi một khách có nhiều chi tiết và chỉ một số chi tiết có yêu cầu phù hợp. Hai cách không luôn tương đương. Cần nêu giả thiết; hướng ở trên chọn bảo toàn theo khách, không lấy mọi KHACHHANG chưa có vai trò thụ hưởng.

### E25-Đề1 C2.2d

> Liệt kê số hợp đồng, mã và họ tên khách hàng đại diện của các hợp đồng không có yêu cầu giải quyết bảo hiểm nào trong năm 2025 có trạng thái là ‘Đã hủy’. (1 điểm)

- Từ khóa: “không có ... nào” → trừ tập.
- Tập ứng viên lấy tất cả SoHD từ HOPDONG, bao gồm hợp đồng chưa có yêu cầu.
- Tập bị loại: lọc yêu cầu theo NgYeuCau trong năm 2025 và TrangThai = 'Đã hủy', nối CHITIETHD qua MaCTHD để lấy SoHD.
- Hai vế trừ đều chỉ giữ SoHD. Sau khi trừ, nối HOPDONG và KHACHHANG theo vai trò đại diện để lấy MaKHDaiDien và HoTen.
- Không thay bằng chọn TrangThai khác 'Đã hủy': một hợp đồng có thể vừa có yêu cầu hủy vừa có yêu cầu trạng thái khác.

### E25-Đề1 C2.2e

> Tìm số hợp đồng có lịch sử đóng tiền trong năm 2025 bằng phương thức 'Chuyển khoản' cho tất cả các loại bảo hiểm có kỳ thanh toán là ‘Hàng năm’. (1 điểm)

- Từ khóa: “tất cả” → chia.
- Tập bắt buộc: MaLBH từ LOAIBAOHIEM sau khi lọc KyThanhToan = 'Hàng năm'.
- Quan hệ cặp: lọc LSDONGTIEN theo NgDongTien trong năm 2025 và PhuongThuc = 'Chuyển khoản'; nối CHITIETHD qua MaCTHD để lấy đúng cặp SoHD, MaLBH.
- Chỉ giữ cặp SoHD, MaLBH trước khi chia. Kết quả chia chỉ còn SoHD.
- Tập bắt buộc phải lấy từ LOAIBAOHIEM, không chỉ từ các loại đã có giao dịch. Nhiều lần đóng cho cùng loại không tạo thêm yêu cầu phải phủ.

### E25-Đề1 C2.2f

> Tìm số hợp đồng có số lượng yêu cầu giải quyết bảo hiểm trong năm 2025 với trạng thái ‘Đã chi trả’ chiếm từ 80% trở lên trong tổng số yêu cầu giải quyết bảo hiểm trong năm 2025 của hợp đồng đó. (1 điểm)

- Từ khóa: “số lượng”, “của hợp đồng đó” → gom nhóm theo SoHD, đếm MaYC; “từ 80% trở lên” → chọn theo tỷ lệ ≥ 0,8.
- Lấy các yêu cầu có NgYeuCau trong năm 2025, nối CHITIETHD qua MaCTHD để biết SoHD.
- Mẫu số: đếm mọi MaYC năm 2025 theo SoHD. Tử số: cùng tập năm, thêm TrangThai = 'Đã chi trả', rồi đếm theo SoHD.
- Ghép hai bảng đếm theo SoHD; giữ hợp đồng có mẫu số dương và tỷ lệ tử/mẫu ≥ 0,8; cuối cùng lấy SoHD.
- Đơn vị đếm là yêu cầu MaYC, không phải MaCTHD hay giao dịch MaGD. Không nối thêm LSDONGTIEN vì có thể nhân bản yêu cầu.
- Hợp đồng không có yêu cầu năm 2025 không có tỷ lệ xác định. Có mẫu dương nhưng tử số 0 thì không đạt; với ngưỡng dương này, kết thường hai bảng đếm không làm mất hợp đồng đủ điều kiện.

## 4. Hai phép cần bổ sung khi làm c/f

- R ⟕ S giữ tất cả các bộ R; không có đối tác S phù hợp thì các thuộc tính S nhận NULL (T3 tr.36–39).
- Gom nhóm theo SoHD tạo một nhóm cho mỗi hợp đồng; COUNT(MaYC) cho biết có bao nhiêu yêu cầu trong từng nhóm. Có thể đặt tên cột đếm rồi dùng chọn σ cho điều kiện tỷ lệ (T3 tr.55–61). Theo slide, thuộc tính nhóm ở bên trái ký hiệu gom nhóm, danh sách hàm tính ở phía còn lại.

Người học có thể viết từng bước bằng phép gán; khi chấm phải giữ đúng tên bảng, thuộc tính, thời gian và vai trò khách hàng. Tài liệu chỉ đưa hướng phân tích, không gán kết quả cho các câu chưa làm.
