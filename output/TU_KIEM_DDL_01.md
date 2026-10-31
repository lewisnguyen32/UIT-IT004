# DDL-TK1 — Tự kiểm cú pháp DDL

Bài tự soạn theo phần DDL T4 trang PDF 8–26, không phải câu nguyên văn đề thi và không dùng làm bằng chứng tần suất. Viết theo MS SQL Server. Chưa có đáp án trong tệp này.

Mỗi số là một câu. Có thể trả lời lần lượt theo nhóm 1–3, 4–6, 7–13, 14–15. Ở câu 1–3, tự đặt tên ràng buộc; từ câu 7 trở đi dùng đúng tên được yêu cầu. Giả sử dữ liệu hiện có phù hợp với các ràng buộc cần thêm.

## A. Tạo bảng — câu 1–3

Giả sử bảng `MONHOC` đã tồn tại, có khóa chính `MaMH` kiểu `char(6)`. Tạo các bảng sau theo thứ tự 1–3.

1. **Tạo LOP** có `MaLop char(6)`, `TenLop nvarchar(50)`, `SiSo int`. MaLop là khóa chính; TenLop và SiSo bắt buộc có giá trị; SiSo mặc định 0 và không âm.
2. **Tạo SINHVIEN** có `MaSV char(8)`, `HoTen nvarchar(50)`, `Email varchar(100)`, `NgaySinh date`, `MaLop char(6)`, `ConHoc bit`. MaSV là khóa chính; HoTen, Email, ConHoc bắt buộc có giá trị; Email không trùng; NgaySinh và MaLop cho phép NULL; MaLop tham chiếu LOP.MaLop; ConHoc mặc định 1.
3. **Tạo DANGKY** có `MaSV char(8)`, `MaMH char(6)`, `Diem decimal(4,2)`. Khóa chính gồm MaSV và MaMH; hai mã lần lượt tham chiếu SINHVIEN.MaSV và MONHOC.MaMH; Diem cho phép NULL, nếu có giá trị phải từ 0 đến 10.

## B. Sửa cột — câu 4–6

Giả sử SINHVIEN đã tồn tại và chưa có GhiChu. Thực hiện lần lượt:

4. Thêm cột GhiChu kiểu varchar(20), cho phép NULL.
5. Đổi GhiChu thành nvarchar(100), vẫn cho phép NULL.
6. Xóa cột GhiChu.

## C. Quản lý ràng buộc và xóa bảng — câu 7–13

**Mỗi câu là tình huống độc lập.** Các bảng/cột cần thiết đã tồn tại; ràng buộc đang yêu cầu thêm chưa tồn tại. Các tên ràng buộc trong câu là tên đã được quy định cho tình huống đó.

7. Thêm khóa chính cho SINHVIEN.MaSV, tên PK_SV.
8. Thêm ràng buộc không trùng cho SINHVIEN.Email, tên UQ_SV_Email.
9. Giả sử SINHVIEN có cột HeDaoTao kiểu varchar(10). Thêm ràng buộc CK_SV_HeDT để giá trị không-NULL của cột chỉ nhận 'ChinhQuy' hoặc 'LienThong'. Không yêu cầu cấm NULL trong câu này.
10. Thêm khóa ngoại SINHVIEN.MaLop tham chiếu LOP.MaLop, tên FK_SV_LOP.
11. Xóa ràng buộc CK_SV_HeDT khỏi SINHVIEN.
12. LOP có khóa chính tên PK_LOP; SINHVIEN đang tham chiếu khóa đó bằng FK_SV_LOP. Viết trình tự lệnh để bỏ khóa chính PK_LOP, giữ lại cả hai bảng và các cột.
13. DANGKY đang tham chiếu MONHOC bằng FK_DK_MH. Viết trình tự lệnh để xóa bảng MONHOC, giữ lại bảng DANGKY.

## D. Tìm và sửa lỗi — câu 14–15

14. Đoạn sau định tạo khóa chính ghép cho DANGKY. Hãy sửa cách khai báo khóa chính; chưa cần thêm các ràng buộc khác.

```sql
CREATE TABLE DANGKY (
    MaSV char(8) PRIMARY KEY,
    MaMH char(6) PRIMARY KEY
);
```

15. Với yêu cầu HeDaoTao chỉ nhận 'ChinhQuy' hoặc 'LienThong', điều kiện sau đúng chưa? Nếu chưa, sửa lại điều kiện.

```sql
CHECK (HeDaoTao = 'ChinhQuy' AND HeDaoTao = 'LienThong')
```
