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

## 28/10/2026 — Chuyển thẳng Chương 2, áp dụng E25-Đề1 C1

- Người dùng yêu cầu “bỏ qua chương 1 đi. Học chương 2 để làm câu 1 đề thi luôn”. R1-TK1 dừng chờ theo lựa chọn này; chưa trả lời, không đánh giá đúng/sai hay xem là đã thành thạo.
- Đối chiếu T2 tr.41–54, xem hình gốc tr.49–50; dùng trọng tâm tr.46–52 để nhắc thực thể → quan hệ, chuyển 1–n/n–n, PK/FK và khóa phân biệt từng lần liên kết. Đây là phần được nhắc lại, chưa phải kết quả làm bài.
- T2 tr.49: câu chữ về chiều khóa ngoại dễ nhầm với cách đọc 1–n thông thường; ví dụ trên trang đặt `MaPhong` trong `NHANVIEN`. Dạy theo ý nghĩa một phòng có nhiều nhân viên, mỗi nhân viên thuộc một phòng. T2 tr.50 gạch dưới cả `MaNV, MaDA, ThoiGian`; không tự khẳng định khóa bảng liên kết luôn chỉ gồm hai mã.
- Chọn **E25-Đề1 C1**, tr.PDF 1: C1.1 vẽ ER (1,5 điểm), C1.2 chuyển mô hình quan hệ (1 điểm). Giữ nguyên câu hỏi, chưa đưa lời giải.
- **Đang chờ phần đầu C1.2:** giao nguyên văn hai gạch đầu dòng về người tố giác và vụ việc; yêu cầu người học viết các quan hệ đủ thuộc tính, chỉ rõ PK/FK. Đây là chia nhỏ yêu cầu C1.2 để luyện, không phải một câu nguyên bản riêng.
- Chưa có bài làm, chưa chấm hoặc chữa. Tiếp theo chữa phần đầu rồi làm tiếp nạn nhân, điều tra viên/lượt xử lý; kiểm tra giả thiết về khả năng lặp lượt trước khi chọn khóa và ghép lại ER cho C1.1.

### C1.2 — Đã trả lời phần người tố giác–vụ việc

- Bài người dùng: `NGTOGIAC(MaSo, HoTen, SoDienThoai, Email)`, PK `MaSo`; `VUVIEC(MaSo, TomTat, ThoiGianPhatHien, NenTangLienQuan, TinhTrang, NgToGiac)`, PK ghi `Maso`, FK `NgToGiac → NGTOGIAC.MaSo`.
- Nhận xét: đúng và đủ thuộc tính trong đoạn đã giao; chọn PK phù hợp dữ kiện mã duy nhất, đặt FK đúng ở VUVIEC cho liên kết một người tố giác–nhiều vụ việc. `NgToGiac` là tên cột FK hợp lệ dù khác tên cột đích. Chỉ cần viết thống nhất `MaSo` ở phần chỉ PK; không coi khác chữ hoa/thường là sai mô hình.
- Chưa kết luận thành thạo cả Ch2 hoặc chấm điểm toàn C1.2. Không cần thêm lượt tự kiểm cùng dạng 1–n.
- Giao tiếp ba gạch đầu dòng còn lại của E25-Đề1 C1 (nạn nhân; điều tra viên; tham gia xử lý và thuộc tính từng lượt), yêu cầu bổ sung vào mô hình, ghi PK/FK và giả thiết khi đề chưa đủ rõ. Phần này chưa có câu trả lời, chưa đưa lời giải.

### C1.2 — Đã trả lời đầy đủ; yêu cầu vẽ ER/ERD

- Người dùng bổ sung `NanNhan` vào VUVIEC, FK `NanNhan → NANNHAN.MaDD`; `NANNHAN(MaDD, HoTen, Tuoi, NoiCT, TTHT)`, PK `MaDD`; `DIEUTRAVIEN(MaSo, HoTen, DVCT, CM, TTPC)`, PK `MaSo`.
- Bảng liên kết người dùng viết: `THAMGIAXULY(MaSoVV, MaSoDTV, NgayPhanCong, NgayXuLy, VaiTro, KQSB)`; PK `(MaSoVV, MaSoDTV)`; FK `MaSoVV → VUVIEC.MaSo`, `MaSoDTV → DIEUTRAVIEN.MaSo`.
- Nhận xét: đủ thuộc tính và các FK đúng; chuyển được 1–n và tách bảng cho n–n, đặt thuộc tính xử lý đúng nơi. PK của THAMGIAXULY hợp lệ **nếu mỗi cặp vụ việc–điều tra viên chỉ có một lượt**. Đề chưa quy định khả năng lặp; không khẳng định khóa sai, cũng không tự coi ngày phân công/xử lý luôn duy nhất.
- Trước khi phản hồi hoàn chỉnh, người dùng hỏi “xong câu 1 chưa? nếu rồi hãy vẽ bảng ERD”, rồi yêu cầu “ghi rõ (1,n) (1,1) luôn nhé”. Theo yêu cầu, trợ lý cung cấp cả ERD bảng và ER chữ nhật–thoi–elip; chưa có bài tự vẽ ER của người dùng, không chấm điểm toàn C1 hoặc kết luận thành thạo toàn Ch2.
- Hình dùng giả thiết rõ ràng: tối đa một lượt cho mỗi cặp vụ việc–điều tra viên để giữ PK người dùng; các phía chỉ nêu “có thể” tạm min = 0. ER theo quy ước bản số T1 tr.52: NGTOGIAC(0,n)–Tố giác–VUVIEC(1,1); NANNHAN(0,n)–Liên quan (nạn nhân chính)–VUVIEC(1,1); VUVIEC(0,n)–THAMGIAXULY–DIEUTRAVIEN(0,n). Bốn thuộc tính lượt gắn vào mối kết hợp; FK chỉ xuất hiện trong bản bảng.
- Đã render và xem kiểm tra hai PNG: [ERD bảng](../output/so-do/E25-De1-C1-ERD-bang.png), [ER thực thể–mối kết hợp](../output/so-do/E25-De1-C1-ER-thuc-the.png); có SVG tương ứng trong cùng thư mục. Bộ dựng: `tmp/study_audit/draw_e25_c1.cjs`. Nguồn chính E25 tr.1; ký hiệu ER/bản số theo T1 tr.49–52.

### C1-TK1 — Tự kiểm trước khi chuyển Câu 2

- Sau câu hỏi “ERD và RDM là gì? cái nào là cái nào”, đã giải thích: trong cách trình bày môn này C1.1 là ERD thực thể–mối kết hợp; C1.2 là RDM bảng/PK/FK. Nhãn cũ “ERD dạng bảng” của hình trước dễ gây lẫn; làm rõ hình đó biểu diễn RDM. Đây là nội dung đã nhắc, chưa phải câu người dùng tự trả lời.
- Người dùng yêu cầu một lượt câu hỏi ôn C1 rồi chuyển câu khác. Giao **C1-TK1, năm ý tự soạn**, không phải câu nguyên văn đề, không tính làm bằng chứng tần suất: (1) sản phẩm cần nộp của C1.1/C1.2 và ERD/RDM; (2) nơi đặt `NgToGiac`, đích FK và lý do; (3) `VaiTro`, `KQSB` thuộc DIEUTRAVIEN hay THAMGIAXULY và vì sao; (4) ghi bản số NGTOGIAC–VUVIEC với giả thiết rõ một người có thể chưa tố giác vụ nào, có thể tố giác nhiều vụ, mỗi vụ đúng một người; (5) điều kiện PK `(MaSoVV, MaSoDTV)` hợp lệ và thông tin phân biệt nếu cho lặp nhiều lượt.
- Chưa có câu trả lời, chưa chấm hoặc chữa C1-TK1. Sau khi chữa, chuyển E25-Đề1 C2.1a về CHECK; đã đọc đúng đề tr.2 để chuẩn bị bước tiếp, chưa giao câu hoặc đưa lời giải SQL.

### C1-TK1 — Đã trả lời, chữa rồi chuyển C2.1a

- Ý 1: người dùng phân biệt ERD là sơ đồ, RDM là ghi các quan hệ để có thể tạo SQL. Đúng hướng; bổ sung khác biệt là nội dung mô hình (thực thể/mối kết hợp/bản số so với quan hệ/PK/FK), không chỉ hình so với chữ.
- Ý 2: người dùng tiếp tục chọn đúng VUVIEC là nơi đặt FK, nhưng gọi đó là “bên 1” từ cách nhìn `(n,1)`. Đã làm rõ cách gọi 1–n thông thường: một người tố giác–nhiều vụ việc nên NGTOGIAC là phía 1, VUVIEC là phía n. Bản số min–max cạnh một thực thể nói số lần một cá thể đó tham gia, không dùng vị trí con số n để đặt tên phía.
- Ý 3: người dùng nói KQSB thuộc riêng THAMGIAXULY. Đúng vị trí, chưa giải thích VaiTro/lý do; đã nhắc cả hai mô tả từng lượt tham gia xử lý, có thể khác giữa các vụ/lượt của cùng điều tra viên.
- Ý 4: trả lời NGTOGIAC(0,n)–Tố giác–VUVIEC(1,1), đúng theo giả thiết câu tự kiểm.
- Ý 5: người dùng giải thích liên kết n–n và đề xuất thêm SoLan, PK `(MaSoVV, MaSoDTV, SoLan)`. Phương án hợp lý nếu SoLan là số thứ tự lượt duy nhất trong cùng cặp, không phải tổng số lượt. Đã bổ sung điều kiện cho PK cặp ban đầu: mỗi cặp vụ việc–điều tra viên có tối đa một lượt/bản ghi; n–n tự nó chưa bảo đảm điều này.
- Không chấm điểm đề hoặc đánh dấu thành thạo toàn Ch2. Theo yêu cầu đã có, chuyển câu thay vì yêu cầu tự kiểm C1 lại.
- **Giao E25-Đề1 C2.1a**, đề tr.PDF 2, 0,5 điểm. Cung cấp đúng lược đồ `YEUCAUBAOHIEM(MaYC, MaCTHD, STYeuCau, STDuyetChi, NgYeuCau, TrangThai)` và nguyên yêu cầu TrangThai chỉ nhận ‘Đang xét duyệt’, ‘Đã chi trả’, ‘Đã từ chối’, ‘Đã hủy’. Yêu cầu viết SQL theo MS SQL Server; chưa đưa lời giải, chưa có bài làm. T4 tr.12–13,22–24 đã được tra để chuẩn bị chữa.

### SQL — Người dùng yêu cầu học trước khi làm đề

- Sau khi được giao C2.1a, người dùng nói “Học trước đã nhé”. Điều chỉnh nhịp: học/nhắc lý thuyết và cú pháp liên quan bằng ví dụ khác trước khi luyện câu mới. Đây là lựa chọn cách học, không phải bằng chứng người dùng làm sai hoặc chưa biết SQL.
- Tạm để C2.1a sau phần học; chưa có câu trả lời và không chấm. Đọc đúng phần DDL/kiểu dữ liệu/ràng buộc liên quan trong T4 tr.8–13,20–24.
- Lượt học này giới thiệu CHECK: kiểm tra điều kiện; khung ALTER TABLE ADD CONSTRAINT CHECK; ví dụ gốc T4 tr.24 `SANPHAM.Gia >= 500`; ví dụ tự soạn giới hạn `NHANVIEN.Loai` trong `VanPhong`/`SanXuat` để giải thích IN và nháy đơn. Không giải sẵn câu TrangThai trong đề E25.
- Nội dung vừa giảng chưa phải kết quả đã tự làm/đã thành thạo. Tiếp theo ôn FOREIGN KEY, UPDATE theo nhu cầu và quay lại C2.1 sau khi học.

### DDL — Ôn tổng quát trước khi làm đề

- Người dùng tiếp tục yêu cầu “được rồi. Ôn tập cho tôi ngôn ngữ định nghĩa dữ liệu trước khi làm đề”. Mở rộng lượt ôn từ riêng CHECK sang đủ phần DDL T4 tr.8–26; không chuyển sang truy vấn SQL hay giao đáp án C2.1.
- Đã tra đúng cache tr.8–26; đối chiếu hình gốc tr.16–17 qua tác vụ kiểm tra độc lập. Tr.16 cố ý minh họa sai khi khai báo hai PRIMARY KEY riêng; tr.17 sửa thành một PK ghép `(SOHD, MASP)`. Không hiểu nhầm ví dụ sai là cú pháp cần học.
- Nội dung giảng: vai trò CREATE/ALTER/DROP, kiểu dữ liệu thường dùng trong SQL Server, CREATE TABLE với các ràng buộc, PK ghép, FK/CHECK/DEFAULT, thêm–sửa–xóa cột, thêm–xóa ràng buộc và DROP TABLE; phân biệt sửa cấu trúc với sửa giá trị dữ liệu.
- Dùng ví dụ tự soạn LOP/SINHVIEN để nối với kiến thức quan hệ đã học, không phải câu đề gốc hoặc bằng chứng tần suất. Nhắc FK không-NULL phải tham chiếu giá trị hợp lệ; CHECK không thay NOT NULL; DEFAULT không giới hạn các giá trị khác.
- Đây là nội dung được ôn/giảng, chưa có bài tự làm hoặc kết quả kiểm tra DDL; chưa chấm mức nắm SQL. E25-Đề1 C2.1a vẫn để sau phần học, chưa giải sẵn.

### DDL-TK1 — Giao tự kiểm toàn phần cú pháp

- Người dùng yêu cầu “hỏi tôi tất cả những gì liên quan để kiểm tra xem tôi có nhớ syntax không”. Giao [DDL-TK1, 15 câu tự soạn](../output/TU_KIEM_DDL_01.md), không phải đề gốc và không kèm đáp án.
- Phạm vi: 1–3 tạo LOP/SINHVIEN/DANGKY với kiểu dữ liệu, NULL/NOT NULL, PK đơn/ghép, UNIQUE, DEFAULT, CHECK và FK; 4–6 thêm/sửa/xóa cột; 7–13 thêm PK/UNIQUE/CHECK/FK, bỏ ràng buộc, xử lý FK trước khi bỏ PK hoặc bảng đích; 14–15 sửa lỗi hai PK riêng và điều kiện AND cho hai giá trị loại trừ.
- Câu 1–3 được tự đặt tên ràng buộc; câu 7–13 dùng đúng tên trong đề và là các tình huống độc lập để tránh va chạm trạng thái bảng. Câu 9 chỉ kiểm miền giá trị không-NULL, không tự thêm yêu cầu NOT NULL. DEFAULT được kiểm trong CREATE, chưa kiểm cú pháp ALTER thêm DEFAULT chưa giảng.
- Có thể làm từng nhóm để chữa ngay. Chưa có câu trả lời, chưa chấm điểm hoặc đánh giá mức nắm DDL. Đề E25 C2.1 tiếp tục để sau phần học/tự kiểm.

### E25-Đề1 C2.1b — Hỏi đáp án FOREIGN KEY

- Người dùng hỏi “đáp án câu 1.b đề 25 là gì”; theo mốc đang học SQL của E25-Đề1, hiểu là C2.1b tr.PDF 2: “Khách hàng đại diện ký hợp đồng cũng là một khách hàng”. Phản hồi nêu rõ mã đề và nội dung để xác định câu.
- Cung cấp lời giải theo yêu cầu: thêm FOREIGN KEY `HOPDONG.MaKHDaiDien → KHACHHANG.MaKH` bằng `ALTER TABLE ... ADD CONSTRAINT ... FOREIGN KEY ... REFERENCES ...`; đối chiếu T4 tr.13,22–23.
- Đây là câu đã xem lời giải, chưa phải bài người dùng tự làm; không chấm điểm hay đánh dấu thành thạo. C2.1a vẫn chưa có bài làm; nhịp ôn DDL giữ theo yêu cầu trước đó.

### DDL-TK1 — Đã trả lời câu 4–15

- Câu 4–5: đúng khung ADD/ALTER COLUMN và kiểu dữ liệu; chưa ghi NULL tường minh. Không chấm là sai cú pháp. Đã hướng dẫn viết rõ NULL theo yêu cầu câu hỏi; ADD khi bỏ nullability có thể phụ thuộc cấu hình, còn ALTER COLUMN bỏ nullability sẽ cho phép NULL theo tài liệu SQL Server.
- Câu 6–9: đúng DROP COLUMN, ADD PRIMARY KEY, ADD UNIQUE và CHECK với IN; giữ đúng tên PK_SV, UQ_SV_Email, CK_SV_HeDT.
- Câu 10: đúng cú pháp FOREIGN KEY và đúng `SINHVIEN.MaLop → LOP.MaLop`, nhưng dùng tên `FK_SINHVIEN_LOP` thay vì tên yêu cầu `FK_SV_LOP`. Đây là lệch tên theo đề, không phải sai chiều/cú pháp tham chiếu.
- Câu 11: viết `DROP CONSTRAINT FK_SINHVIEN_LOP`; cú pháp bỏ ràng buộc đúng nhưng sai đối tượng. Câu yêu cầu bỏ CHECK `CK_SV_HeDT`; đã sửa thành `ALTER TABLE SINHVIEN DROP CONSTRAINT CK_SV_HeDT;`.
- Câu 12–13: đúng. Bỏ FK_SV_LOP trước PK_LOP; bỏ FK_DK_MH trước DROP TABLE MONHOC. Chấm theo tình huống độc lập, không kéo khác biệt tên ở câu 10 vào hai câu này.
- Câu 14: hiểu đúng dùng một PK ghép `(MaSV, MaMH)`, nhưng gõ `PRIMAMRY` thay vì `PRIMARY`. Đã sửa dòng khai báo; khi sửa cả CREATE TABLE phải bỏ hai PRIMARY KEY riêng khỏi hai dòng cột.
- Câu 15: sửa OR/IN đúng. Nhận định “luôn sai/không thể thêm” cần giới hạn ở giá trị không-NULL: với NULL, điều kiện là UNKNOWN và CHECK vẫn cho qua nếu cột cho NULL. Đây là bổ sung chính xác hành vi SQL Server, không đổi phạm vi luyện.
- Đối chiếu bổ sung chính thống cho hai điểm NULL: Microsoft Learn `https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-table-transact-sql?view=sql-server-ver17`, `https://learn.microsoft.com/en-us/sql/t-sql/statements/set-ansi-null-dflt-on-transact-sql?view=sql-server-ver17` và `https://learn.microsoft.com/en-us/sql/relational-databases/tables/unique-constraints-and-check-constraints?view=sql-server-ver17`. Nguồn kiến thức chính vẫn T4, không dùng nguồn ngoài làm đề/đáp án gốc.
- Câu 1–3 chưa trả lời, chưa đánh giá CREATE TABLE/DEFAULT/khai báo nhiều ràng buộc trong cùng bảng. Không gán điểm hay tỷ lệ thành thạo; tiếp tục ba câu này hoặc theo hướng người dùng chọn.

### Chuyển ưu tiên sang đại số quan hệ từ nền tảng

- Trong lúc đang chuẩn bị phản hồi đủ DDL-TK1 câu 4–15, người dùng hỏi “giờ qua phần UPDATE hả?”, sau đó chỉ rõ “bỏ tạm update qua đại số quan hệ đi, quan trọng hơn. Cho tôi học từ đầu trước”. Theo yêu cầu mới, dừng hướng ôn UPDATE, để lại DDL-TK1 câu 1–3; không bắt hoàn thành trước khi đổi phần.
- Các nhận xét DDL ở mục trước là kết quả đã đối chiếu/lưu. Đã nhắc qua bình luận rằng câu 12–13 đúng, câu 11 bỏ nhầm FK thay vì CK_SV_HeDT, câu 14 gõ nhầm PRIMARY. Chưa gửi một phản hồi chấm đầy đủ trước khi người dùng đổi hướng; phần NULL đã tra để bổ sung khi cần, chưa xem là người dùng đã nắm.
- T4 tr.35–37 đã được đọc để chuẩn bị UPDATE, nhưng chưa giảng lượt UPDATE cho người dùng; không ghi thành nội dung đã học.
- Bắt đầu **R4/Ch3 từ nền tảng theo yêu cầu trực tiếp**, dù ban đầu người dùng có kiến thức sơ bộ. Đọc đúng T3 tr.4–22 để xác định bài đầu; đối chiếu hình gốc tr.13,17,19 qua tác vụ kiểm tra độc lập. Bài đầu chỉ dùng khái niệm tr.4–6 và chọn/chiếu/kết hợp tr.13–19.
- Nội dung giảng: quan hệ đầu vào và đầu ra; bộ/thuộc tính; σ lọc dòng và giữ cột; π giữ cột và gộp các bộ giống nhau trên toàn danh sách giữ lại; đọc π(σ(R)) từ trong ra ngoài, giữ đủ thuộc tính dùng cho điều kiện.
- Ví dụ tự soạn dùng NHANVIEN rút gọn `(MaNV, HoTen, Phong, Luong)`, không phải câu nguyên văn đề. Minh họa tương tác chọn, chiếu, kết hợp ở `C:/Users/phuoc/.codex/visualizations/2026/10/27/01a17e03-336d-76f3-b1b4-2dca35779499/dai-so-quan-he-chon-chieu.html`. Đã kiểm tra 3 chế độ, loại trùng Phong, giữ nguyên bảng đầu vào và bố cục ở 736/320px; đây là kiểm tra minh họa, không phải kết quả học của người dùng.
- Chưa giao bài ĐSQH hoặc đánh giá mức nắm; tiếp theo gán/đổi tên, tích/kết, rồi đủ kết ngoài, giao/trừ, chia và gom nhóm/đếm/tỷ lệ theo T3. SQL SELECT vẫn ngoài lộ trình chính.

### R4 — Tiếp tục phép gán và đổi tên

- Người dùng nói “tiếp tục” sau bài chọn/chiếu; tiếp phần lý thuyết, không gán là đã tự làm hoặc thành thạo hai phép trước.
- Đọc đúng T3 tr.20–26 để xác định bước nối tiếp; đối chiếu ảnh gốc tr.21–22 cho ký hiệu rho. Lượt giảng hiện tại chỉ dùng gán và đổi tên tr.20–22.
- Nhắc gán kết quả vào tên trung gian bằng ← để chia biểu thức; đổi tên quan hệ bằng ρ và đổi tên cột theo đúng thứ tự, đủ số thuộc tính đầu vào. Ví dụ tự soạn tiếp NHANVIEN rút gọn `(MaNV, HoTen, Phong, Luong)`; đổi sang NV và tên cột HoTenNV để minh họa.
- Nội dung đã nhắc: gán/đổi tên không sửa dữ liệu bảng nguồn; ρ giữ các bộ và số cột, khác π lấy bớt cột. Chưa giao bài tự kiểm và chưa có câu trả lời ĐSQH.
- Bài tiếp: tích Descartes T3 tr.23–25 rồi phép kết tr.26–35; tiếp đủ các dạng Ch3 theo lộ trình, UPDATE vẫn tạm để sau.

### R4 — Phép kết và kết hợp chọn–chiếu

- Người dùng yêu cầu “tiếp tục phần quan trọng nhất, kết hợp”; hiểu là phép kết JOIN và nêu rõ cách hiểu trước khi giảng. Tiếp lý thuyết theo yêu cầu học trước, chưa giao câu đề.
- Đọc đúng T3 tr.23–35; đối chiếu hình gốc tr.27,33–35 qua tác vụ kiểm tra độc lập. Nội dung giảng: ý nghĩa tích Descartes, công thức kết θ bằng chọn trên tích, kết bằng theo điều kiện phù hợp và biểu thức chọn/chiếu sau kết.
- Dùng dữ liệu tự soạn và hai lược đồ rút gọn `NHANVIEN(MaNV, HoTen, Phong)` và `PHONGBAN(MaPH, TenPH)`; nối `Phong=MaPH` để lấy tên phòng nhân viên làm việc. Bảng kết giữ cả hai cột nối trong kết bằng.
- Nhắc chọn đường nối theo ngữ nghĩa: ở lược đồ đầy đủ T3tr33, `Phong=MaPH` khác `MaNV=TruongPhong`. Dòng không có đối tác phù hợp mất trong phép kết đang học; một dòng có thể có nhiều đối tác, không tự suy số dòng kết quả bằng bảng trái.
- Giới thiệu kết tự nhiên: so sánh tất cả thuộc tính chung tên và giữ mỗi cột chung một lần; hai cột Phong/MaPH khác tên cần đổi tên phù hợp hoặc dùng kết có điều kiện. Minh họa rho trên quan hệ rút gọn, không tự suy khóa từ hình thiếu gạch dưới.
- Đây là nội dung đã giảng, chưa phải câu trả lời/khả năng tự lập biểu thức của người dùng. Tiếp tục củng cố đường nối/nhiều bảng rồi kết ngoài; vẫn giữ đủ các dạng Ch3 trong lộ trình.

### R4 — Nối nhiều bảng và tự kết

- Người dùng nói “tiếp” sau phần kết; tiếp bài lý thuyết về nối nhiều bảng và cùng một bảng trong hai vai trò.
- Tra đúng T3 tr.8–9 về ngữ nghĩa lược đồ, tr.21 và27,31–34 về đổi tên/kết. Ví dụ giảng tự soạn, không phải câu đề gốc.
- Nối ba quan hệ rút gọn: `NHANVIEN(MaNV, HoTen, MaNQL)`, `PHANCONG(MaNV, MaDA, ThoiGian)`, `DEAN(MaDA, TenDA, DdiemDA)`. Đường nối qua MaNV rồi MaDA; dùng kết tự nhiên được vì trên các lược đồ rút gọn chỉ có đúng các cột chung này. Nhắc không bê nguyên natural join sang lược đồ đầy đủ vì Phong của nhân viên và Phong chủ trì đề án khác ý nghĩa.
- Tự kết dùng rho tạo hai tên NV, QL cùng quan hệ nguồn; điều kiện `NV.MaNQL = QL.MaNV`, MaNQL là quản lý trực tiếp chứ không mặc định trưởng phòng. Chiếu ngay trên biểu thức kết và đặt tên kết quả theo vị trí `KQ(MaNV, HoTenNV, HoTenQL)` để tránh trùng tên hai cột HoTen.
- Ví dụ có nhân viên không có quản lý để thấy inner self-join không tự giữ mọi nhân viên; kết ngoài sẽ được học tiếp.
- Đây là nội dung được giảng, không phải kết quả tự làm hoặc kiểm tra của người dùng. Tiếp R5 kết ngoài T3 tr.36–44, rồi đủ giao/trừ, chia, gom nhóm/đếm/tỷ lệ.

### Hội, giao, trừ và chia — Giải kỹ bằng ví dụ đã làm mẫu

- Người dùng yêu cầu “qua thẳng phép hội, phép chia đi”, bổ sung “giải thích kỹ, đưa ra câu ví dụ rồi giải” và “hội giao trừ luôn nhé”. Chuyển sang đủ bốn phép; kết ngoài tạm để lại, không đánh dấu đã học hoặc loại khỏi phạm vi.
- Tra đúng T3 tr.45–54; đối chiếu ảnh gốc ký hiệu/ý nghĩa qua tác vụ kiểm tra độc lập. Tr.50 là ví dụ cố ý đánh dấu sai điều kiện AND trên cùng cột MaDA, không phải công thức cần học.
- Giảng theo [bản ví dụ tự soạn có lời giải](../output/ON_DSQH_HOI_GIAO_TRU_CHIA.md): dùng PHANCONG và DEAN rút gọn để so sánh hội “hoặc bao hàm”, giao “cả hai”, trừ có thứ tự, chia “phủ đủ mọi phần tử của tập bắt buộc”.
- Các điểm được nhắc: khả hợp theo số cột/miền giá trị tương ứng; chiếu đúng tập mã trước giao/trừ; không nhầm MaDA khác DA02 trên một bộ với nhân viên không có bất kỳ bộ DA02; chọn đúng tập chia từ DEAN, bỏ ThoiGian khỏi quan hệ bị chia khi yêu cầu chỉ hỏi tham gia.
- Ví dụ chia có S={DA01,DA02,DA03}, kết quả NV01; NV04 có DA01/DA02 nhưng thiếu DA03; NV01 tham gia thêm DA04 vẫn đạt. Trình bày thêm cách hiểu bằng tìm cặp còn thiếu rồi trừ ứng viên không đạt.
- Tất cả là ví dụ tự soạn đã được trợ lý giải theo yêu cầu, không phải đề gốc hoặc câu người dùng tự trả lời; chưa đánh giá thành thạo bốn phép. Tiếp củng cố theo yêu cầu, gom nhóm/đếm/tỷ lệ và quay lại kết ngoài để đủ các dạng Ch3.

### E25-Đề1 C2.2a–f — Bắt đầu luyện sáu câu ĐSQH có hướng dẫn

- Người dùng yêu cầu “Chuyển qua làm đề. 6 câu đại số quan hệ trước. Liệt kê các từ khoá để biết mình nên xài đại số quan hệ nào và hướng dẫn giải.” Chọn E25-Đề1 theo ưu tiên đề mới; giữ E25-Đề2 cho lượt tổng hợp.
- Đọc đúng E25 tr.PDF 1–2 và xem lại hai ảnh gốc để xác nhận tên, ngày, chuỗi điều kiện và gạch chân khóa. Cung cấp nguyên văn sáu câu kèm bảng từ khóa và hướng phân tích, chưa đưa sáu biểu thức đáp án hoàn chỉnh trước bài làm.
- Lưu [hướng dẫn a–f](../output/E25_DE1_DSQH_TU_KHOA_VA_HUONG_DAN.md), gồm lược đồ, các đường tham chiếu, yêu cầu gốc và các bước dựng biểu thức. Nhấn mạnh vai trò KH đại diện qua HOPDONG và KH thụ hưởng qua CHITIETHD; b dùng NgHieuLuc > 01/01/2025, không tự cắt trong năm.
- Bổ sung tối thiểu lý thuyết kết ngoài giữ bên trái/NULL cho c và gom nhóm theo SoHD/COUNT(MaYC) cho f; tra T3 tr.36–39,55–61 và xem hình tr.37,56. Chưa xem là đã học/kiểm tra đầy đủ R5 hoặc R7.
- Câu c có điểm mơ hồ về đơn vị bảo toàn: hướng buổi ôn chọn khách thực sự thụ hưởng trong CHITIETHD; các yêu cầu được lọc tháng11/2025 và Đã chi trả trước khi kết ngoài. Nếu bảo toàn theo từng CTHD, có thể thêm dòng NULL khi khách có nhiều chi tiết; không gọi hai cách là tương đương.
- Câu d dùng toàn bộ HOPDONG làm ứng viên, trừ tập SoHD có ít nhất một YC đồng thời năm2025 và Đã hủy. Câu e chia cặp SoHD/MaLBH từ giao dịch đã lọc cho tập loại Hàng năm từ toàn LOAIBAOHIEM. Câu f đếm MaYC trên cùng tập năm, tỷ lệ ≥80%, mẫu dương; tránh nối LSDONGTIEN làm nhân bản yêu cầu.
- **Đang chờ bài làm a–f, bắt đầu a.** Chưa có câu người dùng tự viết hoặc đánh giá kết quả/điểm của sáu câu.

## 31/10/2026

### ĐSQH — Soạn bảng từ khóa và cách làm tổng quát

- Người dùng yêu cầu tài liệu tổng quát: từ khóa ứng với phép toán, hướng xử lý từng dạng và quy trình làm một câu. Lưu [bảng tra và khuôn phân tích](../output/DSQH_BANG_TU_KHOA_VA_CACH_LAM_TONG_QUAT.md).
- Đối chiếu cache đúng các phần T3 về chọn/chiếu, gán/đổi tên/kết, kết ngoài, hội/giao/trừ/chia và gom nhóm; xem lại ảnh đã cache T3 tr.PDF 56 để viết ký hiệu gom nhóm theo bố cục slide. Dùng bản đồ sáu mã đề để giữ đủ dạng; không thêm đề ngoài hoặc mở phạm vi truy vấn SQL.
- Tài liệu dùng khuôn trừu tượng tự soạn, phân biệt với đáp án đề gốc; nhấn mạnh cùng bộ/nhiều bộ, ứng viên trừ vi phạm, đơn vị bảo toàn khi kết ngoài, tập bắt buộc của phép chia, đơn vị đếm và phạm vi tử/mẫu. Không cung cấp sáu biểu thức đáp án E25 đang chờ.
- Đây là hướng dẫn đã cung cấp, chưa có bài tự làm hoặc đánh giá kết quả mới. Vẫn chờ E25-Đề1 C2.2a–f, bắt đầu a, khi người dùng chọn tiếp luyện.
