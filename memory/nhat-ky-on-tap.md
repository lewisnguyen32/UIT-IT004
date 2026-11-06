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

## 01/11/2026

### Phép chia — Giải mẫu E25-Đề1 C2.2e theo yêu cầu

- Người dùng yêu cầu giải thích phép chia và lấy câu 2e đề 2025–2026 làm ví dụ. Dùng Đề1 theo mốc hiện tại; đối chiếu E25 tr.PDF 1–2 và T3 tr.51–54 từ cache.
- Giải thích R(X,Y) ÷ S(Y) giữ X có đủ mọi Y trong S; dựng S(MaLBH) từ toàn LOAIBAOHIEM với KyThanhToan='Hàng năm', dựng R(SoHD,MaLBH) từ LSDONGTIEN lọc năm 2025/Chuyển khoản rồi kết CHITIETHD qua MaCTHD. Cung cấp lời giải từng bước KQ ← R ÷ S theo yêu cầu trực tiếp.
- Dữ liệu ví dụ là tự soạn để minh họa: thiếu một loại thì không đạt, có thêm loại ngoài S vẫn đạt; nhiều giao dịch cùng loại không thay việc phủ đủ loại. Nhắc lấy tập bắt buộc từ toàn LOAIBAOHIEM và chỉ chiếu cặp SoHD/MaLBH trước chia.
- Đây là bài trợ lý giải mẫu, chưa có câu trả lời của người dùng hoặc đánh giá thành thạo. Các câu khác trong E25-Đề1 C2.2a–f vẫn chưa có bài tự làm.

### Gom nhóm và tỷ lệ — Hướng dẫn E25-Đề1 C2.2f theo ảnh

- Người dùng gửi ảnh biểu thức R1–R5 và yêu cầu giải thích câu f, hướng dẫn. Ảnh chưa được xác định là bài người dùng tự làm; không ghi kết quả tự làm hoặc điểm.
- Đối chiếu câu gốc trong hướng dẫn đã kiểm nguồn và ảnh cache T3 tr.PDF 56 về ký hiệu gom nhóm. Giải thích từng bước: R1 là yêu cầu năm 2025 nối CHITIETHD; R2 gom SoHD đếm mọi MaYC; R3 lọc Đã chi trả từ R1; R4 gom SoHD đếm MaYC đã chi trả; nối R2/R4 theo SoHD và lọc SLYCDCT/SLYC ≥ 0,8.
- Nhắc tử/mẫu cùng phạm vi NgYeuCau năm 2025, đếm yêu cầu chứ không cộng tiền; giữ MaYC cho đến khi đếm, không nối LSDONGTIEN làm nhân bản. Chiếu mở rộng ở R5 dùng tính tỷ lệ; có thể lọc trực tiếp trên hai số đếm rồi chiếu SoHD. Đúng 80% vẫn đạt; hợp đồng không có yêu cầu không có tỷ lệ, không có yêu cầu đã chi trả thì không đạt nên kết thường đủ cho ngưỡng này.
- Minh họa số đếm tự soạn, không phải dữ liệu đề. Đây là nội dung đã hướng dẫn theo yêu cầu, chưa đánh giá thành thạo.

## 03/11/2026

### SQL — Cú pháp UPDATE và ngoặc ở WHERE

- Người dùng hỏi cấu trúc UPDATE đầy đủ và có thể đặt điều kiện WHERE trong ngoặc hay không. Đối chiếu T4 tr.PDF 35–37 trong cache.
- Nhắc cú pháp UPDATE tên_bảng SET cột = giá_trị, phân cách nhiều phép gán bằng dấu phẩy; WHERE lọc dòng, bỏ WHERE cập nhật mọi dòng. Sau UPDATE ghi tên bảng trực tiếp, không có từ khóa TABLE.
- Giải thích WHERE (điều_kiện) hợp lệ; ngoặc bao điều kiện, không bao cả từ khóa WHERE. Minh họa bằng VD18 của T4 tr.36, thêm ngoặc quanh điều kiện NuocSX = 'TrungQuoc'.
- Đây là hỏi đáp lý thuyết theo yêu cầu, chưa có bài tự làm hoặc đánh giá thành thạo SQL; giữ câu ĐSQH đang chờ.

### E24-Đề2 C2.2d — Hướng làm “Tốt” trên cả hai tiêu chuẩn

- Người dùng gửi ảnh câu d và nêu hướng xác định KIEMDINH(MaKD), KETQUACT(MaKD,MaTC), TIEUCHUANKD(MaTC,TenTC), lọc hai tên tiêu chuẩn thành TC1/TC2 rồi hỏi bước tiếp. Đây là phân tích ban đầu, chưa phải bài làm biểu thức hoàn chỉnh.
- Đối chiếu E24-Đề2 tr.PDF 3–4 và T3 tr.45–50. Hai tên đúng là “Mức tiêu thụ điện” và “Độ sáng”; mức DanhGia yêu cầu chính xác “Tốt”. Bảng kiểm định tên gốc KIEMDINHSP; câu này có thể lấy MaKD trực tiếp từ KETQUACT, không cần nối KIEMDINHSP.
- Xác nhận việc tách TC1/TC2 hợp lý; cần giữ thêm DanhGia trong KETQUACT để lọc trước khi chiếu. Hướng dẫn lọc chi tiết “Tốt”, nối với từng TC qua MaTC, chiếu riêng MaKD thành hai tập rồi giao. Không giao ngay hai tập MaTC hoặc đòi hai tên trên cùng một dòng.
- Chỉ hướng dẫn các bước và ý nghĩa tập hợp, chưa viết trọn bộ biểu thức đáp án thay người dùng. Ví dụ tập mã minh họa tự soạn; chưa đánh giá thành thạo. Chờ người dùng viết hai nhánh từ TC1/TC2 nếu tiếp câu này.

### E24-Đề2 C2.2e — Chữa bài làm phép chia

- Người dùng tự đề xuất A = chiếu MaKD từ kiểm định lọc năm 2024; B = chiếu MaKD,MaTC từ A kết KETQUACT theo MaKD; C = chiếu MaTC từ KETQUACT lọc MaLSP; KQ = B ÷ C.
- Đối chiếu E24 tr.PDF 3–4 và T3 tr.51–54. A/B đúng về ý tưởng và chọn phép chia đúng; chuẩn hóa tên bảng KIEMDINHSP, thuộc tính ngày ThoiDiemKD theo đề gốc.
- Lỗi C: KETQUACT không có MaLSP. Tập bắt buộc phải lấy toàn bộ MaTC trong TIEUCHUANKD với MaLSP='LSP001', không lấy riêng các tiêu chuẩn đã xuất hiện trong kết quả kiểm định vì có thể bỏ sót tiêu chuẩn chưa được kiểm định. Sau khi sửa C, KQ=B÷C đúng.
- Nhắc câu e chỉ yêu cầu đã kiểm định, sự có mặt cặp MaKD/MaTC là điều kiện cần dùng; không thêm điều kiện DanhGia của câu d. Đã chữa sau bài làm, chưa có bài sửa độc lập hoặc đánh giá thành thạo phép chia.

### E24-Đề2 C2.2f — Chữa tập sản phẩm và đếm sau kết trái

- Người dùng tự đề xuất PXSP(MaPX,TenPX,MaSP) từ SANPHAM kết PHANXUONG; DAT/KHONGDAT là tập MaSP từng có kiểm định đạt/không đạt; CON=DAT giao KHONGDAT; cuối cùng gom MaPX,TenPX đếm COUNT(*) trên PXSP kết trái CON theo MaSP.
- Đối chiếu E24 tr.PDF 4 và T3 tr.55–61. Chấp nhận DAT giao KHONGDAT theo cách hiểu tân từ đề: kiểm định lại sau lần trước không đạt; khi đã có cả không đạt và đạt thì đạt sau lần đầu. Nếu cho phép kiểm định lại cả sau khi đã đạt, cách này chưa đủ và phải kiểm tra ThoiDiemKD. Không tự thêm giả thiết về dữ liệu ngoài đề.
- DAT/KHONGDAT đã chiếu MaSP nên CON không đếm lặp một sản phẩm qua nhiều lần kiểm định. Tên thuộc tính đúng là KQKiemDinh, không phải KQKD nếu viết theo lược đồ gốc.
- Lỗi chính: PXSP kết trái CON vẫn giữ mọi sản phẩm, nên COUNT(*) đếm cả sản phẩm không thuộc CON; COUNT(PXSP.MaSP) cũng chưa sửa được lỗi. Ngoài ra PXSP xây bằng kết trong không giữ phân xưởng chưa có sản phẩm nếu yêu cầu hiện từng phân xưởng.
- Chữa phần cuối: SPDAT=chiếu MaPX,MaSP(SANPHAM kết CON theo MaSP); lấy PHANXUONG kết trái SPDAT theo MaPX, gom MaPX,TenPX và COUNT(MaSP) phía SPDAT. Mã sản phẩm bên phải không khớp là NULL nên không được đếm; phân xưởng không có sản phẩm thỏa điều kiện có số lượng 0.
- Đây là bài làm đã được chữa, chưa có bài sửa sau phản hồi hoặc đánh giá thành thạo; không tự chấm điểm.

### Ôn lý thuyết theo từng câu trong cấu trúc đề

- Người dùng yêu cầu ôn CSDL, lý thuyết trước, gắn với mỗi câu trong đề thi. Chuyển hoạt động hiện tại sang ôn lý thuyết; giữ các bài đang để lại, chưa giao đề mới.
- Đối chiếu phạm vi/bản đồ đề và các trang cache liên quan: T1 tr.37–53; T2 tr.22–32,46–52; T3 tr.13–19,25–32,36–38,45–53,55–57; T4 tr.12–13,22–24,35–37. Nhắc lý thuyết ER, chuyển quan hệ/khóa, CHECK/FOREIGN KEY/UPDATE, chọn/chiếu/kết, kết ngoài, giao/trừ, chia, gom nhóm/đếm/tỷ lệ. Dùng khuôn trừu tượng, chưa cung cấp lời giải mới cho câu đề đang để lại.
- Đây là nội dung nhắc lại theo yêu cầu, chưa có bài trả lời mới hoặc đánh giá thành thạo; chưa đánh dấu hoàn tất R1–R8.

### TK-C2-01 — Soạn Câu 2 tự luyện gồm 9 ý

- Người dùng yêu cầu từ hai đề 2025–2026 và 2024–2025 tạo một Câu 2 gồm 8–9 ý, có phần 1 và 2. Chọn 9 ý theo bố cục 3 ý SQL và 6 ý ĐSQH; không tự mở rộng sang truy vấn SQL.
- Đọc E25-Đề1 tr.PDF 1–2 và E24-Đề2 tr.PDF 3–4 từ cache đã đối chiếu; dùng riêng phần câu hỏi. Không mở hoặc cung cấp trước câu hỏi/lời giải E25-Đề2 đang để dành.
- Lưu [bài TK-C2-01](../output/TU_LUYEN_CAU_2_TONG_HOP_01.md). Bài tự soạn dùng lược đồ kiểm định sản phẩm rút gọn, khóa và nghiệp vụ được quy định rõ cho bài này; thay các mã/điều kiện có nhãn tự soạn, không gán là nguyên văn đề gốc.
- SQL gồm miền giá trị, tham chiếu công nhân và tăng phần trăm hai cột. ĐSQH gồm lọc/kết, bảo toàn sản phẩm khi không có kiểm định phù hợp, cả hai tiêu chuẩn, không có kiểm định không đạt, bao phủ toàn bộ tiêu chuẩn và đếm sản phẩm/tính tỷ lệ. Ý f kết hợp đạt sau lần đầu với tỷ lệ; phạm vi toàn bộ lịch sử, mẫu số dương, đơn vị đếm là sản phẩm được nêu trong câu hỏi.
- Chỉ cung cấp câu hỏi, không kèm đáp án hoặc hướng dẫn chọn phép toán cho từng ý. Chưa có bài làm hoặc đánh giá mới; không tính bài tự soạn vào bằng chứng tần suất của đề gốc.

### E23-Đề1 C2.2c — Chữa kết trái sản phẩm và nhà vườn

- Người dùng viết A=chọn THELOAI='Hoa nhập khẩu'(SANPHAM), B=A kết NHAVUON theo MANV, KQ=chiếu A.MASP,A.TENSP,B.MANV(A kết trái B theo MANV). Đối chiếu E23 tr.PDF 1–2; SANPHAM có MANV, NHAVUON có MANV.
- Chấp nhận biểu thức theo ngữ nghĩa tập hợp và điều kiện kết chỉ theo MANV: A ở trái giữ đủ sản phẩm, B có mã nhà vườn khớp; dù nhiều sản phẩm cùng nhà vườn tạo nhiều dòng trung gian, phép chiếu ba cột loại trùng nên kết quả đúng. B là bước dư; hướng rút gọn là chiếu A.MASP,A.TENSP,NHAVUON.MANV từ A kết trái NHAVUON theo MANV. Mã phía phải là NULL khi không khớp.
- Đã chữa bài người dùng tự đề xuất; chưa có bài sửa độc lập, chưa đánh giá thành thạo hoặc chấm điểm. Giữ các câu đang để lại.

### E23-Đề1 C2.2d — Chữa giao hai tập đơn hàng

- Người dùng đề xuất A=chọn YEAR(NgayBan)=2025 từ DONHANG kết CTHD theo MADH; B/C là chiếu MADH sau khi nối SANPHAM theo MASP và lọc TENSP='HH'/'HC'; KQ=B giao C.
- Đối chiếu câu d tại E23 tr.PDF 2: yêu cầu năm 2023 và hai tên 'Hoa Hồng', 'Hoa Cúc'. Cách nối, chiếu riêng MADH và giao hai tập đúng về cấu trúc, bảo đảm cùng một đơn có cả hai sản phẩm; sửa hằng năm và dùng nguyên tên sản phẩm khi viết bài chính thức. Nếu HH/HC chỉ là viết tắt trong trao đổi thì vẫn hiểu ý, nhưng không thay chuỗi gốc trong biểu thức nộp.
- Đã chữa sau bài làm; chưa có bài sửa độc lập hoặc đánh giá thành thạo, không chấm điểm. Các bài đang để lại vẫn giữ nguyên.

### E23-Đề1 C2.2e — Chữa gom nhóm đếm đơn theo ngày bán

- Người dùng đề xuất A lọc DONHANG theo ngày bán tháng 10/2023; B nối CTDH theo MADH và lọc MASP; C nối GIAOHANG theo MADH và lọc DAGIAO=1; gom C theo NGAYBAN, COUNT(MADH).
- Đối chiếu E23 tr.PDF 1–2: mã sản phẩm gốc là 'HOABO01'. Xác nhận chuỗi lọc/kết và thuộc tính nhóm đúng, điều kiện tháng đặt trên NGAYBAN chứ không phải NGAYGIAO; đếm đơn chứ không SUM(SOLUONG).
- Đề nghị D=chiếu NGAYBAN,MADH(C) rồi gom D để mỗi đơn chỉ được đếm một lần nếu có nhiều bản ghi giao hàng khớp; không khẳng định đề cho phép hoặc cấm nhiều bản ghi GIAOHANG trên một MADH khi chưa có ràng buộc rõ. Nếu mỗi đơn chỉ khớp một bản ghi giao hàng thì gom trực tiếp C là đúng.
- Nêu giới hạn: gom C/D chỉ có ngày có đơn thỏa điều kiện. Nếu hiểu 'mỗi ngày bán' gồm ngày không có đơn thỏa thì lấy tập NGAYBAN từ A và bảo toàn bằng kết trái với D, đếm MADH phía D. Đây là chỗ cần nêu cách hiểu phạm vi ngày, không tự thêm ngày không bán hàng.
- Đã chữa bài tự đề xuất; chưa có bài sửa độc lập hoặc đánh giá thành thạo, không chấm điểm.

### E23-Đề1 C1 — Giải mẫu ER và chuyển mô hình quan hệ

- Người dùng gửi ảnh Câu 1 về dụng cụ chữa cháy, tô vàng câu mỗi tòa nhà có nhiều tầng; sau khi được hỏi phạm vi hỗ trợ, yêu cầu giải đầy đủ cả hai ý. Đối chiếu ảnh với E23 tr.PDF 1, T1 tr.51–53 và T2 tr.49–50 từ cache.
- Xác định bốn thực thể TOANHA, TANG, LOAIDUNGCU, NHASANXUAT; giữ các thuộc tính đề yêu cầu. MaTang duy nhất giữa các tòa nên là khóa riêng của TANG, không ghép MaTN vào khóa.
- Mối kết hợp CÓ: phía TOANHA (1,n), phía TANG (1,1); CUNG CẤP: phía NHASANXUAT (0,n), phía LOAIDUNGCU (1,1); BỐ TRÍ: hai phía (0,n), có thuộc tính SoLuong. Min=0 ở các mô tả “có thể”, do không nêu bắt buộc tham gia.
- Chuyển thành năm quan hệ: TOANHA(MaTN,TenTN,SoTang), TANG(MaTang,TenTang,SoLuongCanHo,MaTN), NHASANXUAT(MaNSX,TenNSX,DiaChi), LOAIDUNGCU(MaLDC,TenLDC,MoTa,MaNSX), BOTRI(MaTang,MaLDC,SoLuong). BOTRI có khóa ghép (MaTang,MaLDC); các mã tham chiếu là khóa ngoại tương ứng.
- Đây là trợ lý giải mẫu theo yêu cầu trực tiếp, chưa có bài làm của người dùng, không chấm điểm hoặc đánh giá thành thạo; các câu đang để lại vẫn giữ nguyên.

### E23-Đề1 C2.2f — Chữa tập bắt buộc và thông tin người giao trong phép chia

- Người dùng tự viết A=(GIAOHANG kết CTDH theo MADH) kết SANPHAM theo MASP; DK=chiếu MASP từ A lọc GIABAN>=1000000; B=chiếu NGGIAO,MASP từ A lọc DAGIAO=1; C=B/DK. Đối chiếu câu gốc E23 tr.PDF 2 và ảnh người dùng.
- Xác nhận A nối đúng và dùng phép chia đúng dạng 'tất cả'. Sửa DK lấy trực tiếp từ toàn SANPHAM, không lấy từ A vì A có thể bỏ sản phẩm đắt chưa xuất hiện trong giao hàng. Đó vẫn là sản phẩm bắt buộc theo đề; nếu chưa ai giao thành công thì không ai đáp ứng đủ.
- Sửa B thành chiếu NGGIAO,DT_NGGIAO,MASP(chọn DAGIAO=1(A)), để kết quả B/DK có cả NGGIAO,DT_NGGIAO và tránh gom thành tích theo tên của nhiều người trùng tên. Không cần lọc giá trong B trước phép chia; các sản phẩm ngoài DK không ảnh hưởng yêu cầu phủ đủ DK.
- Đã cung cấp biểu thức sửa sau bài làm, chưa có bài sửa độc lập, chưa chấm điểm hoặc đánh giá thành thạo. Giữ các câu đang để lại.

### E23-Đề2 C2.2e — Chữa chiếu mất lượt bán trước SUM

- Người dùng gửi hai ảnh bài làm: Q(MASP,SL) chiếu MASP,SOLUONG sau nối DONHANG/CTDH/SANPHAM và lọc tháng 10/2023; điều kiện MANV trong Q đã gạch bỏ. R chiếu MASP từ SANPHAM lọc MANV='NV01'; S(MASP,SL) chiếu hai cột từ R kết trái Q theo MASP; cuối cùng gom MASP tính SUM(SL). Đối chiếu E23 tr.PDF 4.
- Xác nhận lọc tháng/năm trên NGAYBAN, tập R và hướng kết trái để giữ sản phẩm chưa bán, dùng SUM thay COUNT đều hợp lý. Lỗi chính theo ngữ nghĩa tập hợp: Q và S chỉ giữ MASP,SL nên hai đơn khác nhau cùng mua một sản phẩm cùng số lượng bị phép chiếu gộp lại, tổng bị thiếu. Minh họa tự soạn: hai đơn mỗi đơn mua 5 cùng sản phẩm phải cộng 10, nhưng chiếu hai cột chỉ còn một bộ (MASP,5).
- Chữa giữ MADH ở cả Q(MADH,MASP,SL) và S(MASP,MADH,SL), đến bước gom mới bỏ MADH; dùng R.MASP sau kết trái, không dùng tên SANPHAM.MASP khi toán hạng chỉ là R và Q. Có thể bỏ nối SANPHAM trong Q vì R đã lọc nhà vườn; nếu giữ nối thì không phải lỗi. Tổng toàn giá trị NULL của sản phẩm chưa bán cần đổi/quy ước thành 0 nếu hiển thị số 0.
- Đã chữa bài người dùng gửi, chưa có bài sửa độc lập hoặc đánh giá thành thạo, không chấm điểm; giữ các bài đang để lại.

### E23-Đề2 C2.2f — Bài làm phép chia đúng

- Người dùng tự viết A=chiếu NGGIAO,DT_NGGIAO,MASP(chọn DAGIAO=1(GIAOHANG kết CTDH theo MADH)); B=chiếu MASP(chọn THELOAI='Hoa nhập khẩu'(SANPHAM)); KQ=A/B. Đối chiếu E23 tr.PDF 4: yêu cầu giao thành công tất cả sản phẩm thuộc loại 'hoa nhập khẩu'.
- Xác nhận đúng về cấu trúc và ngữ nghĩa: A có các cặp người giao/sản phẩm đã giao thành công, B lấy đủ sản phẩm bắt buộc từ SANPHAM, thương trả đúng NGGIAO,DT_NGGIAO. Không cần nối SANPHAM vào A hoặc lọc thêm thể loại trong A. Nhắc đóng đủ ngoặc và ghi chuỗi thể loại đúng đề.
- Đây là bài người dùng tự làm đúng về nội dung sau các lần chữa phép chia trước đó, không chấm điểm hoặc suy ra thành thạo chung. Giữ các câu đang để lại.

### E23-Đề1 C2.1a–b — Giải mẫu SQL theo yêu cầu

- Người dùng yêu cầu giải Đề1 Câu2 phần1; theo mạch đang ôn xác định E23-Đề1. Đối chiếu E23 tr.PDF 2 và T4 tr.PDF 22–24,35–37 trong cache.
- Câu a: ALTER TABLE GIAOHANG ADD CONSTRAINT CK_GIAOHANG_DAGIAO CHECK (DAGIAO IN (0,1)); theo miền DAGIAO đã giao thành công=1, chưa giao=0.
- Câu b: UPDATE DONHANG SET TONGTIEN=TONGTIEN*0.98 WHERE NGAYBAN>='20231101'; giải thích còn 98% giá trị cũ và mốc ngày tính cả 01/11/2023, không tự giới hạn ngày cuối năm.
- Đây là trợ lý giải mẫu theo yêu cầu, chưa có bài tự làm, không chấm điểm hoặc đánh giá thành thạo SQL. Giữ các bài đang để lại.

## 04/11/2026

### E25-Đề2 C2.2a–e — Chữa loạt bài người dùng tự gửi

- Người dùng chọn Đề2 năm 2025–2026 và gửi năm bài ĐSQH a–e. Đối chiếu đúng E25 tr.PDF 3–4 từ cache đã kiểm; không đưa lời giải f chưa làm. Đây là lượt làm từng câu, không phải bài 75 phút.
- a: Chọn năm 2025, trạng thái rồi chiếu MaYC,MaCTHD đúng cấu trúc. Chuỗi 'DXL' chưa đúng nguyên văn 'Đang xét duyệt'; nếu là viết tắt khi trao đổi thì hiểu ý, bài nộp phải ghi đủ.
- b: Nối CHITIETHD với khách theo MaKHThuHuong=MaKH, lọc nghề nghiệp, nối HOPDONG theo SoHD rồi lọc NgHetHan<31/12/2025 và chiếu là đúng. Sửa cột SoCTHD thành MaCTHD; nghề nghiệp 'Giáo viên' thay 'GV' khi ghi chính thức. Dấu < đúng yêu cầu 'trước ngày'.
- c: A=CHITIETHD nối khách thụ hưởng đúng; G lọc giao dịch tiền mặt sau nối theo MaCTHD; A kết trái G theo MaKH và chiếu A.MaKH,A.HoTen,G.MaGD. Lỗi thời gian MONTH(NgDongTien)=2025 làm tập G rỗng: cần MONTH=11 và YEAR=2025. Chuỗi đúng 'Tiền mặt'. Chấp nhận hướng kết trái theo MaKH với giả thiết bảo toàn từng khách đã có vai trò thụ hưởng trong CHITIETHD; khi không có giao dịch phù hợp ở bất kỳ chi tiết nào thì MaGD NULL, khi có thì liệt kê các giao dịch. Không kết luận phải đổi thành nối theo MaCTHD vì sẽ tạo NULL riêng cho từng chi tiết và đổi ngữ nghĩa bảo toàn.
- d: A nối HOPDONG/CHITIETHD/LOAIBAOHIEM đúng; B/C lấy SoHD ký năm 2025 mua mỗi tên bảo hiểm, D=B giao C đúng 'cả hai'. E nối lại A/D rồi nối KHACHHANG theo MaKHDaiDien=MaKH, chiếu SoHD,MaKH,HoTen đúng. Chuỗi đầy đủ 'Bệnh hiểm nghèo' và 'Tử vong' thay 'BHN','TV' khi nộp; chiếu loại trùng do nhiều chi tiết không làm sai tập đầu ra.
- e: Q lấy toàn bộ MaLBH của kỳ hàng tháng từ LOAIBAOHIEM; E lọc yêu cầu năm 2025 đã chi trả sau nối CHITIETHD; R chiếu SoHD,MaLBH; R/Q đúng, không cần thêm lọc loại vào R. Sửa tên thuộc tính KyThangToan thành KyThanhToan và chuỗi 'Hằng tháng' thành 'Hàng tháng' đúng đề.
- Đã chữa theo bài tự làm, chưa có bài sửa độc lập, không gán điểm hoặc thành thạo chung; f chưa gửi. Đề2 không còn là đề hoàn toàn chưa xem để dành làm 75 phút; các bài khác vẫn để lại.

### E25-Đề2 C2.2f — Hướng dẫn tỷ lệ số lần chuyển khoản

- Người dùng hỏi cách làm f sau khi gửi bài a–e. Đối chiếu E25 tr.PDF 4: tỷ lệ số lần đóng tiền bằng 'Chuyển khoản' trong năm 2025 trên tổng số lần đóng tiền năm 2025 của từng hợp đồng, ngưỡng từ 80%.
- Hướng dẫn A=chọn YEAR(NgDongTien)=2025(LSDONGTIEN kết CHITIETHD theo MaCTHD); B(SoHD,TongLan) gom A theo SoHD đếm MaGD; C(SoHD,LanCK) gom A lọc PhuongThuc='Chuyển khoản' theo SoHD đếm MaGD; nối B,C theo SoHD, lọc LanCK>=0.8*TongLan và chiếu SoHD.
- Nhấn mạnh dùng COUNT(MaGD), không SUM(STDong); mẫu đếm mọi phương thức, tử đếm riêng chuyển khoản, cả hai cùng năm 2025. Giữ MaGD cho đến khi đếm, không chiếu mất lượt giao dịch. Đúng 80% vẫn đạt. Kết trong hai tập đếm đủ: không có chuyển khoản thì không đạt; không có giao dịch thì tỷ lệ không xác định, không đưa vào.
- Đã cung cấp hướng dẫn kèm biểu thức theo yêu cầu, chưa có bài tự làm f hoặc đánh giá thành thạo. Các câu đang để lại giữ nguyên.

### Đề1 giữa kỳ 2026–2027 — Giải đề mới và chữa C2.2f sau thi

- Người dùng gửi hai ảnh đề vừa thi, yêu cầu giải toàn bộ; đã lưu [lời giải](../output/GIAI_DE1_GK_CSDL_2026_2027.md). Đây là đề mới do người dùng cung cấp, không phải đề tự soạn; chưa cập nhật thống kê tần suất hoặc thay thế bộ E23/E24/E25.
- Sau đó người dùng thuật lại bài C2.2f: nối THIETBI–CTTHUE–SUCO, chiếu MaTB,MaSC, gom MaTB đếm MaSC và lọc SL>=2; nối lại CTTHUE, lọc YEAR(NgayNhan)=2026, chiếu MaKHNhan,MaCTT rồi gom khách đếm MaCTT, chọn SL=3 và lấy họ tên.
- Phần xác định thiết bị có ít nhất hai sự cố trong toàn lịch sử đúng. Lỗi ở đơn vị đếm cuối: MaCTT đếm chi tiết thuê, không bảo đảm ba thiết bị khác nhau vì cùng MaTB có thể xuất hiện ở nhiều hợp đồng. Sửa B thành chiếu MaKHNhan,MaTB trước khi gom và COUNT(MaTB). Giữ YEAR(NgayNhan)=2026, không lọc năm hoặc trạng thái ở tập sự cố lịch sử.
- Đã giải thích có cơ sở cho điểm thành phần ở phần làm đúng, nhưng chưa có barem nên không xác nhận tối thiểu 0,5/1 hay gán điểm thực tế. Cách đếm sau sửa là đếm thiết bị đạt điều kiện; nếu hiểu đúng ba thiết bị tổng cộng và cả ba đạt thì cần kiểm tra thêm tổng số thiết bị nhận trong năm, như ghi trong lời giải. Chưa có bài sửa độc lập, không đánh giá thành thạo.
