# Ôn đại số quan hệ: hội, giao, trừ, chia

Nguồn kiến thức chính: [T3 — Chương 3](<../Lý thuyết/DPL_Chuong 3 - Dai so Quan he.pdf>), trang PDF 45–54. Toàn bộ dữ liệu và các câu hỏi dưới đây là **ví dụ tự soạn có lời giải**, không phải câu nguyên văn đề thi và không dùng làm bằng chứng tần suất.

## Dữ liệu dùng chung

Quan hệ PHANCONG(MaNV, MaDA, ThoiGian):

| MaNV | MaDA | ThoiGian |
|---|---|---:|
| NV01 | DA01 | 10 |
| NV01 | DA02 | 20 |
| NV01 | DA03 | 15 |
| NV01 | DA04 | 5 |
| NV02 | DA01 | 12 |
| NV03 | DA02 | 18 |
| NV04 | DA01 | 7 |
| NV04 | DA02 | 9 |

Để xét nhân viên tham gia DA01 và DA02, chuẩn bị hai tập mã:

\[
A\leftarrow\pi_{MaNV}(\sigma_{MaDA='DA01'}(PHANCONG))
\]

\[
B\leftarrow\pi_{MaNV}(\sigma_{MaDA='DA02'}(PHANCONG))
\]

Do đó A = {NV01, NV02, NV04}; B = {NV01, NV03, NV04}.

Hội/giao/trừ yêu cầu **tương thích khả hợp**: cùng số thuộc tính, miền giá trị của các thuộc tính theo từng vị trí tương thích. T3 tr.45 không bắt các tên cột ban đầu phải giống nhau; có thể đổi tên để trình bày thống nhất. Ở đây cả hai tập đều có một cột MaNV, nên áp dụng được và đúng đơn vị đối tượng cần xét.

## 1. Phép hội (hợp tập) ∪

Lấy bộ thuộc A hoặc B, kể cả thuộc cả hai. Bộ trùng chỉ xuất hiện một lần.

**Câu ví dụ:** Tìm mã nhân viên tham gia đề án DA01 hoặc DA02.

**Giải:**

\[
KQ\leftarrow A\cup B
=\{NV01,NV02,NV03,NV04\}
\]

NV01 và NV04 tham gia cả hai nhưng vẫn được lấy, mỗi mã chỉ xuất hiện một lần. “Hoặc” ở đây không loại những người thuộc cả hai tập.

Cách viết tương đương:

\[
\pi_{MaNV}
\left(\sigma_{MaDA='DA01'\lor MaDA='DA02'}(PHANCONG)\right)
\]

## 2. Phép giao ∩

Lấy bộ đồng thời thuộc cả A và B.

**Câu ví dụ:** Tìm mã nhân viên tham gia cả hai đề án DA01 và DA02.

**Giải:**

\[
KQ\leftarrow A\cap B=\{NV01,NV04\}
\]

NV01 và NV04 xuất hiện trong cả hai tập. NV02 thiếu DA02; NV03 thiếu DA01.

Phải chiếu về MaNV trước khi giao: bộ (NV01,DA01) khác bộ (NV01,DA02), nên giữ thêm MaDA rồi giao hai nhóm phân công sẽ không tìm được người chung. Giữ thêm ThoiGian cũng có thể làm mất kết quả cần tìm.

Điều kiện MaDA='DA01' ∧ MaDA='DA02' trên cùng một bộ không diễn đạt “một người có hai bộ phân công khác nhau”. T3 tr.50 cố ý đánh dấu X đỏ cách AND sai này.

## 3. Phép trừ −

A − B lấy bộ thuộc A nhưng không thuộc B. Thứ tự hai tập có ý nghĩa.

**Câu ví dụ:** Tìm mã nhân viên tham gia DA01 nhưng không tham gia DA02.

**Giải:**

\[
KQ\leftarrow A-B=\{NV02\}
\]

Nếu đổi yêu cầu thành tham gia DA02 nhưng không tham gia DA01:

\[
B-A=\{NV03\}
\]

Không dùng điều kiện MaDA≠'DA02' để kết luận một nhân viên không tham gia DA02: NV01 vẫn có bộ DA01 thỏa điều kiện ấy, dù người này cũng có bộ DA02.

## 4. Phép chia ÷

Với R(X,Y) và S(Y), kết quả R ÷ S có các thuộc tính X. Một giá trị X được giữ khi có cặp với **mọi** bộ Y của S.

S là tập yêu cầu bắt buộc; R là các cặp đối tượng–yêu cầu thực sự có. Đối tượng có thể liên quan thêm phần tử ngoài S, vẫn đạt nếu phủ đủ S.

Cho thêm quan hệ rút gọn DEAN(MaDA, Phong), trong đó Phong là mã phòng chủ trì:

| MaDA | Phong |
|---|---|
| DA01 | PB01 |
| DA02 | PB01 |
| DA03 | PB01 |
| DA04 | PB02 |

**Câu ví dụ:** Tìm mã nhân viên tham gia tất cả đề án do phòng PB01 chủ trì.

**Bước 1 — Tập bắt buộc:**

\[
S\leftarrow\pi_{MaDA}(\sigma_{Phong='PB01'}(DEAN))
=\{DA01,DA02,DA03\}
\]

Phải lấy S từ DEAN sau khi lọc đúng điều kiện, không lấy chỉ các đề án đã xuất hiện trong PHANCONG; nếu một đề án bắt buộc chưa có ai tham gia thì vẫn phải được tính trong S.

**Bước 2 — Tập cặp thực tế:**

\[
R\leftarrow\pi_{MaNV,MaDA}(PHANCONG)
\]

R có đúng hai thuộc tính MaNV, MaDA; bỏ ThoiGian vì yêu cầu đang xét việc tham gia, không yêu cầu cùng số giờ.

**Bước 3 — Chia:**

\[
KQ\leftarrow R\div S=\{NV01\}
\]

| Nhân viên | Các đề án đã tham gia | Còn thiếu trong S | Đạt? |
|---|---|---|---|
| NV01 | DA01, DA02, DA03, DA04 | Không thiếu | Có |
| NV02 | DA01 | DA02, DA03 | Không |
| NV03 | DA02 | DA01, DA03 | Không |
| NV04 | DA01, DA02 | DA03 | Không |

NV04 đạt yêu cầu “cả DA01 và DA02” ở phép giao, nhưng không đạt “tất cả đề án của PB01” vì thiếu DA03. NV01 có thêm DA04 vẫn đạt; phép chia không đòi chỉ tham gia đúng các đề án trong S.

**Biểu thức đầy đủ:**

\[
\left(\pi_{MaNV,MaDA}(PHANCONG)\right)
\div
\left(\pi_{MaDA}(\sigma_{Phong='PB01'}(DEAN))\right)
\]

Thuộc tính kết quả: {MaNV,MaDA} − {MaDA} = {MaNV}. Dấu trừ ở đây là trừ tập tên thuộc tính, không phải trừ các bộ dữ liệu.

Chia trực tiếp PHANCONG ÷ S sẽ cho lược đồ (MaNV,ThoiGian) và yêu cầu cùng một cặp mã nhân viên–số giờ có với mọi đề án của S, khác nghĩa câu hỏi. Với dữ liệu này, cách chia trực tiếp ấy không giữ được NV01 vì số giờ trên ba đề án khác nhau.

**Hiểu phép chia bằng tìm những yêu cầu còn thiếu:**

\[
C\leftarrow\pi_{MaNV}(R)
\]

\[
Thieu\leftarrow(C\times S)-R
\]

\[
KhongDat\leftarrow\pi_{MaNV}(Thieu)
\]

\[
KQ\leftarrow C-KhongDat
\]

C × S tạo các cặp mà ứng viên cần có; trừ R để tìm cặp còn thiếu; loại mọi nhân viên còn thiếu ít nhất một yêu cầu. Ở ví dụ này KhongDat = {NV02,NV03,NV04}, nên chỉ còn NV01.

## Dấu hiệu đọc yêu cầu

| Ý nghĩa | Phép thường phù hợp |
|---|---|
| Thuộc nhóm A hoặc B, kể cả cả hai | Hội ∪ |
| Thuộc cả hai nhóm A và B | Giao ∩ |
| Thuộc A nhưng không thuộc B | Trừ A − B |
| Liên quan đến mọi phần tử của một tập yêu cầu | Chia ÷ |

Đây là dấu hiệu định hướng; vẫn phải đọc đúng tập đối tượng và điều kiện của từng câu.
