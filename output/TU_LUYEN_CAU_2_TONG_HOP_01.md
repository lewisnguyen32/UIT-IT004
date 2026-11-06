# TK-C2-01 — Câu 2 tự luyện tổng hợp

Soạn ngày 03/11/2026 theo yêu cầu người dùng. Đây là **câu tự soạn**, dựa trên các dạng trong đề 2025–2026 và 2024–2025 đã gửi; không phải câu hỏi nguyên văn hoặc đề thi chính thức. Bài gồm **9 ý: 3 ý SQL và 6 ý đại số quan hệ**, chưa kèm đáp án.

## Câu 2. Quản lý kiểm định sản phẩm

Cho lược đồ dưới đây. Bài tự luyện giữ cách đặt tên của lược đồ kiểm định sản phẩm trong đề 2024–2025, rút gọn một số thuộc tính và quy định rõ nghiệp vụ dùng cho bài này.

```text
PHANXUONG(MaPX, TenPX, DiaChi)
CONGNHAN(MaCN, HoTen, BacTho, MaPX)
LOAISP(MaLSP, TenLSP, TrangThai)
SANPHAM(MaSP, TenSP, NgaySX, MaLSP, MaPX, TinhTrangSP)
TIEUCHUANKD(MaTC, TenTC, MaLSP, DVDL, KQMongDoi, SaiSo)
KIEMDINHSP(MaKD, MaSP, MaCN, ThoiDiemKD, KQKiemDinh, NoiDung)
KETQUACT(MaKD, MaTC, KQThucTe, DanhGia)
```

**Khóa và nghiệp vụ của bài tự luyện:**

- Thuộc tính đầu tiên là khóa chính của mỗi quan hệ, riêng `KETQUACT` có khóa chính ghép `(MaKD, MaTC)`. Các khóa chính đã được khai báo.
- Mỗi công nhân thuộc một phân xưởng. Mỗi sản phẩm do một phân xưởng sản xuất và thuộc một loại sản phẩm. Mỗi tiêu chuẩn kiểm định thuộc một loại sản phẩm.
- Mỗi lần kiểm định gắn với một sản phẩm và một công nhân thực hiện. `KQKiemDinh = 0` nghĩa là không đạt, `KQKiemDinh = 1` nghĩa là đạt.
- Một sản phẩm chỉ được kiểm định lại khi lần trước không đạt; sau khi đạt thì không kiểm định tiếp. Các lần kiểm định của cùng một sản phẩm có `ThoiDiemKD` khác nhau.
- `KETQUACT` ghi nhận kết quả chi tiết của một lần kiểm định theo từng tiêu chuẩn. Tiêu chuẩn được kiểm định phải thuộc loại của sản phẩm đó. Trong cùng một loại sản phẩm, tên tiêu chuẩn không trùng nhau.
- `DanhGia` nhận một trong các giá trị: “Rất tốt”, “Tốt”, “Trung bình”, “Kém”. Loại sản phẩm có mã `'LSP005'` có ít nhất một tiêu chuẩn kiểm định.
- Các tham chiếu được hiểu theo nghiệp vụ: `MaPX` đến `PHANXUONG`, `MaLSP` đến `LOAISP`, `KIEMDINHSP.MaSP` đến `SANPHAM`, `KIEMDINHSP.MaCN` đến `CONGNHAN`, `KETQUACT.MaKD` đến `KIEMDINHSP`, `KETQUACT.MaTC` đến `TIEUCHUANKD`. Các ràng buộc được hỏi ở phần 1 chưa được khai báo.

Các ý độc lập, cùng xét trên dữ liệu ban đầu. Phần 1 dùng cú pháp MS SQL Server. Phần 2 chỉ viết biểu thức đại số quan hệ; có thể gán kết quả trung gian.

## 1. Viết câu lệnh SQL cho các yêu cầu sau

**a.** Tạo ràng buộc để thuộc tính `KQKiemDinh` của bảng `KIEMDINHSP` chỉ nhận hai giá trị `0` và `1`. Giả sử cột này đã được khai báo `NOT NULL`.

**b.** Tạo ràng buộc để công nhân thực hiện một lần kiểm định phải là một công nhân có trong bảng `CONGNHAN`.

**c.** Cập nhật tăng **10%** đồng thời `KQMongDoi` và `SaiSo` của các tiêu chuẩn kiểm định thuộc loại sản phẩm có mã **`'LSP005'`** và có đơn vị đo lường `DVDL` là **`'lux'`**.

## 2. Viết các biểu thức đại số quan hệ cho các yêu cầu sau

**a.** Liệt kê mã sản phẩm, tên sản phẩm và tên phân xưởng (`MaSP`, `TenSP`, `TenPX`) của các sản phẩm thuộc loại có tên **“Đèn bàn LED”**, được sản xuất **trong năm 2025**.

**b.** Liệt kê tất cả sản phẩm (`MaSP`, `TenSP`), cùng với mã kiểm định và thời điểm kiểm định (`MaKD`, `ThoiDiemKD`) do công nhân có mã **`'CN002'`** thực hiện **trong tháng 10/2025**, nếu có. Sản phẩm không có lần kiểm định thỏa điều kiện vẫn phải xuất hiện, với thông tin kiểm định là `NULL`.

**c.** Liệt kê các kiểm định (`MaKD`) thực hiện **trong năm 2025**, được đánh giá **“Tốt”** trên cả hai tiêu chuẩn có tên **“Độ sáng”** và **“Nhiệt độ hoạt động”**.

**d.** Liệt kê các sản phẩm (`MaSP`, `TenSP`) được sản xuất **trong năm 2025** và không có bất kỳ lần kiểm định **không đạt** nào **trong năm 2025**. Sản phẩm chưa có lần kiểm định nào trong năm 2025 cũng được xét trong kết quả.

**e.** Tìm các kiểm định (`MaKD`) thực hiện **trong năm 2025**, đã kiểm định **tất cả** tiêu chuẩn kiểm định của loại sản phẩm có mã **`'LSP005'`**.

**f.** Tìm các phân xưởng (`MaPX`, `TenPX`) có số sản phẩm **đã đạt kiểm định nhưng không đạt ở lần kiểm định đầu tiên** chiếm **từ 80% trở lên** trong tổng số sản phẩm **đã được kiểm định** của phân xưởng đó. Với mỗi phân xưởng thỏa điều kiện, cho biết thêm tổng số sản phẩm đã được kiểm định (`SLDaKD`), số sản phẩm đã đạt nhưng không đạt ở lần đầu (`SLDatSauLanDau`) và tỷ lệ tương ứng (`TyLe`).

Ở ý f, xét **toàn bộ lịch sử kiểm định**, không giới hạn năm; chỉ xét phân xưởng có ít nhất một sản phẩm đã được kiểm định. Mỗi sản phẩm được tính một lần trong từng nhóm, dù có nhiều lần kiểm định. `TyLe` tính theo thang 0–1.

---

Nguồn định hướng dạng câu hỏi: E25-Đề1, Câu 2, trang PDF 1–2; E24-Đề2, Câu 2, trang PDF 3–4. Các điều kiện, mã, tên và quy định bổ sung ở trên thuộc bài tự soạn TK-C2-01. Không dùng bài này làm bằng chứng tần suất ra đề.
