# Đại số quan hệ — Bảng từ khóa và cách làm tổng quát

Soạn ngày 31/10/2026 theo yêu cầu ôn thi. Kiến thức chính: [T3 — Chương 3, Đại số quan hệ](<../Lý thuyết/DPL_Chuong 3 - Dai so Quan he.pdf>), trang PDF 13–61. Các dạng ôn đối chiếu từ sáu mã đề trong E25 → E24 → E23, xem [bản đồ đề](BAN_DO_DE_THI_CSDL.md). Không dùng nguồn đề ngoài.

Các công thức với R, E, U, X, Y bên dưới là **khuôn tự soạn để phân tích**, không phải đáp án các câu đang chờ làm. Hướng dẫn riêng E25-Đề1 vẫn ở [tệp a–f](E25_DE1_DSQH_TU_KHOA_VA_HUONG_DAN.md).

## 1. Đọc ý nghĩa trước, dùng từ khóa để định hướng

Một câu thường cần nhiều phép toán. Chẳng hạn: “liệt kê mã, tên của đối tượng có ...” có thể cần kết để gom thông tin, chọn để lọc, rồi chiếu để xuất kết quả.

Đọc câu hỏi thành các phần:

> **Tìm ai/cái gì? → Xuất cột nào? → Điều kiện gì? → Đối tượng phải có một, cả hai, không có hay tất cả? → Có phải đếm/tính không?**

Không suy phép toán chỉ từ một từ. “Tất cả khách hàng” có thể chỉ yêu cầu liệt kê khách; “khách tham gia tất cả chương trình thuộc tập S” mới là yêu cầu phủ mọi phần tử của S.

## 2. Bảng từ khóa → phép toán → hướng làm

| Từ/cụm từ trong đề | Phép toán thường dùng | Hướng dựng biểu thức |
|---|---|---|
| “Liệt kê mã, tên…”, “cho biết các thông tin…” | Chiếu π | Ghi danh sách cột đầu ra; chiếu sau khi đã xử lý điều kiện. |
| “Có trạng thái…”, “thuộc loại…”, “giá lớn hơn…”, “trong năm/tháng…”, “sau ngày…” | Chọn σ | Tìm đúng thuộc tính chứa điều kiện; ghép các điều kiện trên cùng bộ bằng ∧, ∨, ¬. |
| Thông tin đầu ra/điều kiện nằm ở nhiều bảng | Kết ⋈ | Tìm đường nối đúng vai trò trong tân từ; thêm bảng trung gian nếu cần. |
| “Có tham gia”, “đã mua”, “có ít nhất một…” | Chọn/kết rồi chiếu mã | Tìm các bộ chứng minh việc có tồn tại; chiếu về mã đối tượng. Chưa cần COUNT nếu chỉ hỏi có hay không. |
| “Nếu có”, “kể cả chưa có…”, “vẫn liệt kê…” | Kết ngoài, thường kết trái ⟕ | Xác định tập cần giữ ở bên trái; lọc dữ liệu liên quan bên phải trước khi kết ngoài. Giữ hai phía thì dùng kết ngoài đầy đủ. |
| “A hoặc B”, “ít nhất một trong hai nhóm” | Hội ∪ hoặc chọn với ∨ | Có thể tách hai tập mã rồi hội; nếu điều kiện nằm trên cùng quan hệ thì thường dùng ∨. “Hoặc” thông thường bao gồm đối tượng thuộc cả hai. |
| “Cả A và B”, “đồng thời tham gia hai loại…” | Giao ∩ | Lập riêng tập mã thỏa A và tập mã thỏa B, rồi giao trên mã đối tượng. |
| “Không có… nào”, “chưa từng…”, “A nhưng không B” | Trừ − | Lấy tập ứng viên trừ tập có ít nhất một trường hợp bị loại. Nếu có giới hạn thời gian thì chỉ loại trong đúng khoảng đó. |
| “Tất cả”, “mọi…”, “đủ các…” trong một quan hệ phủ tập | Chia ÷ | Lập quan hệ cặp (đối tượng, phần tử đã đáp ứng) và tập phần tử bắt buộc. |
| “Số lượng”, “bao nhiêu…” | Gom nhóm + COUNT | Xác định đang đếm đối tượng hay lượt phát sinh; mỗi nhóm đại diện cho ai/cái gì. |
| “Tổng số lượng”, “tổng tiền”, “trung bình”, “cao nhất/thấp nhất” | SUM, AVG, MAX, MIN; gom nhóm nếu cần | Chọn đúng cột để tính. Nếu hỏi mã/tên đối tượng đạt giá trị cực trị, cần lấy cực trị rồi đối chiếu lại dữ liệu để lấy các đối tượng đạt nó. |
| “Có ít nhất k”, “không quá k”, “đúng k” | Gom nhóm rồi chọn σ | Tính số lượng trước, đặt tên cột đếm, sau đó lọc ≥ k, ≤ k, = k. Với k = 1 và chỉ hỏi tồn tại, có thể dùng chọn/kết/chiếu. |
| “Chiếm từ p% trở lên”, “tỷ lệ…” | Gom nhóm đếm tử/mẫu, kết rồi chọn | Tử và mẫu phải cùng đơn vị, cùng phạm vi; mẫu > 0; so sánh tỷ lệ theo đề. |
| “Nhân viên và người quản lý”, cùng bảng trong hai vai trò | Đổi tên ρ + tự kết | Tạo hai tên quan hệ, ghi rõ điều kiện giữa hai vai trò. Không tự dùng kết tự nhiên. |

Phép gán `T ← biểu thức` dùng để chia bài thành các bước dễ kiểm tra; không cần một từ khóa đặc biệt trong đề. Tích Descartes × ghép mọi cặp, thường là thành phần của phép kết hoặc cách tìm cặp còn thiếu; không thay thế một phép kết đang cần điều kiện nối.

## 3. Các khuôn giải quan trọng

### A. Lọc và lấy thông tin

$$KQ \leftarrow \pi_{\text{các cột cần xuất}}\left(\sigma_{\text{điều kiện}}(R\bowtie_{\theta}S)\right)$$

- Một bảng đã đủ cột đầu ra và điều kiện thì không cần kết thêm bảng khác.
- Nhiều bảng: viết đường nối và điều kiện θ trước; phân biệt điều kiện nối với điều kiện lọc.
- Có thể lọc sớm trên từng bảng nếu điều kiện chỉ phụ thuộc bảng đó và không làm sai việc bảo toàn của kết ngoài.
- Chưa chiếu bỏ cột còn cần để nối, lọc, đếm hoặc chia.

### B. “Hoặc”, “cả hai”, “A nhưng không B”

Giả sử đã lập hai tập **cùng lược đồ khóa K**:

$$T_A(K)\leftarrow\text{các mã đối tượng thỏa A}$$
$$T_B(K)\leftarrow\text{các mã đối tượng thỏa B}$$

| Yêu cầu | Khuôn |
|---|---|
| A hoặc B | $T_A\cup T_B$ |
| Cả A và B | $T_A\cap T_B$ |
| A nhưng không B | $T_A-T_B$ |

K là đủ các thuộc tính định danh đối tượng, có thể là khóa ghép. Hai vế phải tương thích khả hợp: cùng số cột và miền giá trị tương ứng; nên đặt cùng tên và thứ tự cột để dễ kiểm tra.

Ví dụ tự soạn: tham gia cả DA01 và DA02 có thể được chứng minh bằng **hai dòng khác nhau**. Vì vậy tách hai tập mã nhân viên để giao. Không dùng `MaDA='DA01' ∧ MaDA='DA02'` trên một dòng.

Ngược lại, “giá > 100 và tồn kho > 0” là hai điều kiện có thể đúng trên **cùng một dòng**, dùng ∧ trong σ.

### C. “Không có ... nào”

$$U(K)\leftarrow\text{tập mã ứng viên theo đề}$$
$$B(K)\leftarrow\text{tập mã có ít nhất một trường hợp bị cấm}$$
$$Dat(K)\leftarrow U-B$$

Nếu cần tên hoặc thuộc tính khác, nối tập mã Dat về bảng thông tin sau khi trừ.

Không thay “không có trường hợp bị hủy” bằng “có trường hợp không bị hủy”. Một đối tượng có thể vừa có trường hợp bị hủy, vừa có trường hợp hợp lệ. Đồng thời, đối tượng chưa có phát sinh nào vẫn có thể đạt yêu cầu phủ định nếu thuộc tập ứng viên của đề.

### D. “Nếu có”

$$E'\leftarrow\sigma_{P}(E)$$
Khuôn tiếp theo: `KQ ← π_đầu_ra(L ⟕_θ E')`, trong đó ⟕ là kết ngoài trái với điều kiện nối θ.

- L là **đúng tập đối tượng phải được giữ**. Không mặc định L là toàn bộ bảng thực thể: đề có thể chỉ hỏi người đã có một vai trò nhất định.
- E chứa dữ liệu liên quan; P là điều kiện áp lên phần dữ liệu tùy có ấy, như ngày và trạng thái.
- Không có E' phù hợp thì đối tượng bên L vẫn xuất hiện, các cột phía E' là NULL.
- Lọc ngày/trạng thái phía phải sau kết ngoài có thể loại mất các dòng NULL cần giữ.
- Nếu qua nhiều bảng, phải xác định bảo toàn theo từng người, từng hợp đồng hay từng chi tiết. Các cách đó có thể cho số dòng khác nhau.

### E. “Tất cả” — chia

Quy ước X là mã đối tượng cần tìm; Y là mã phần tử phải đáp ứng:

$$A(X,Y)\leftarrow\text{các cặp đáp ứng điều kiện thực sự của đề}$$
$$B(Y)\leftarrow\text{tập phần tử bắt buộc theo đề}$$
$$Dat(X)\leftarrow A\div B$$

Tự hỏi: **“Mỗi X phải đáp ứng mọi Y nào?”**

- Lập B từ đúng tập chuẩn được yêu cầu, không chỉ từ những phần tử đã có phát sinh trong A.
- Trước khi chia, chỉ giữ các thuộc tính cần cho X và Y. Nếu còn ngày, số tiền, mã giao dịch..., chúng sẽ ảnh hưởng lược đồ/ý nghĩa kết quả chia.
- Một X có thêm quan hệ với Y ngoài B vẫn có thể đạt. “Tất cả B” không tự mang nghĩa “chỉ B”.
- B phải là tập bắt buộc chung cho các X đang xét. Nếu yêu cầu thay đổi theo từng X, cần phân tích lại, không áp máy móc một phép chia chung.

Ghi chú trường hợp biên: nếu B rỗng và đề cần xét toàn bộ tập ứng viên U(X), dùng cách tìm cặp còn thiếu để thể hiện rõ U:

$$Thieu(X,Y)\leftarrow(U\times B)-A$$
$$Dat(X)\leftarrow U-\pi_X(Thieu)$$

Với khuôn này, A có đúng lược đồ (X,Y), U là tập ứng viên cần xét. Khi B rỗng, mọi ứng viên trong U đạt điều kiện phủ tập. Phép chia thông thường lấy ứng viên từ $\pi_X(A)$ nên cần nêu giả thiết nếu sự khác biệt này ảnh hưởng câu hỏi.

### F. Đếm, tổng và điều kiện trên kết quả tính

T3 tr.56 đặt thuộc tính nhóm bên trái ký hiệu gom nhóm ℑ và hàm tính bên phải. Ví dụ khuôn tự soạn, R có đúng một bộ cho mỗi sự kiện MaSK của một đối tượng MaX:

$$G(MaX,SoLan)\leftarrow {}_{MaX}\mathfrak{I}_{\mathrm{COUNT}(MaSK)}(R)$$
$$Dat\leftarrow\sigma_{SoLan\ge k}(G)$$

Tên các cột của G được đặt theo vị trí kết quả: mã nhóm, rồi giá trị đếm.

Trước khi gom nhóm, ghi rõ:

1. **Nhóm theo gì?** Thường là mã đối tượng, hoặc đủ các cột của khóa nhóm; không chỉ theo tên vì có thể trùng tên.
2. **Đếm gì?** Sản phẩm, hợp đồng, yêu cầu hay từng lượt phát sinh?
3. **Mỗi đối tượng cần đếm hiện có bao nhiêu dòng?** Nếu kết làm một đối tượng xuất hiện nhiều lần, cần chiếu về (khóa nhóm, đủ khóa của đối tượng cần đếm) trước khi đếm số đối tượng phân biệt.

Phân biệt:

- COUNT: số đối tượng/số lượt theo các bộ đầu vào.
- SUM(SoLuong): cộng các giá trị số lượng. Một dòng có SoLuong = 10 vẫn là một dòng, nhưng đóng góp 10 vào tổng số lượng.
- Điều kiện như “số lượng ≥ 3” chỉ áp được **sau** khi đã tính cột số lượng.
- Nếu đề yêu cầu cả đối tượng có số lượng 0, cần bảo toàn chúng bằng kết ngoài hoặc bổ sung riêng nhóm không có phát sinh. Đếm khóa phía phát sinh không-NULL; tránh đếm dòng NULL đệm thành một lần.

### G. Tỷ lệ

1. Lập dữ liệu trong đúng phạm vi, ví dụ cùng năm và cùng đối tượng.
2. Gom nhóm tính tổng số T cho từng đối tượng.
3. Từ cùng dữ liệu đó, lọc điều kiện đạt rồi gom nhóm tính số đạt D.
4. Kết hai bảng đếm theo khóa nhóm và chọn:

$$T>0\quad\land\quad100\times D\ge p\times T$$

Với “từ 80% trở lên”, p = 80. Cách so sánh nhân chéo giúp tránh phép chia số nguyên; đây là lựa chọn cách viết, không phải phép toán ĐSQH mới.

- Tử và mẫu phải cùng đơn vị: số yêu cầu / tổng số yêu cầu, hoặc số giao dịch / tổng số giao dịch.
- Mẫu bằng 0 thì tỷ lệ chưa xác định; không tự coi là đạt.
- Nếu một nhóm không xuất hiện ở bảng tử, số đạt của nó là 0. Với ngưỡng dương như ≥ 80%, nhóm ấy không đạt; nếu đề hỏi cả tỷ lệ 0%, cần giữ nhóm và xử lý số 0 rõ ràng.

## 4. Quy trình tổng quát khi làm một câu

### Bước 1 — Chốt đối tượng và đầu ra

Viết nháp: “Tìm ___; xuất ___”. Khoanh các cột cần trả về; phân biệt “số hợp đồng” mang nghĩa mã SoHD với “số lượng hợp đồng” cần đếm.

### Bước 2 — Tách các điều kiện

Chia thành:

- Điều kiện trên từng bộ: ngày, trạng thái, giá, loại.
- Điều kiện quan hệ giữa các tập: có, cả hai, không có, tất cả.
- Điều kiện trên kết quả tính: số lượng, tổng, tỷ lệ.

Đọc lại phạm vi của từng điều kiện: “không có yêu cầu bị hủy trong năm N” khác “không có yêu cầu nào trong năm N”.

### Bước 3 — Chọn bảng và vẽ đường nối

Với mỗi cột đầu ra và cột điều kiện, xác định bảng chứa nó. Ghi các cặp thuộc tính nối theo lược đồ/tân từ đã xác nhận. Chỉ thêm bảng trung gian cần để đi đến thông tin đó.

Trong E25, vai trò đại diện và thụ hưởng có đường nối khác nhau; không ghép KHACHHANG vào bất kỳ cột mã khách nào chỉ vì cùng miền giá trị.

### Bước 4 — Chọn phép xử lý yêu cầu chính

| Ý nghĩa chính | Khung suy nghĩ |
|---|---|
| Lọc/lấy thông tin | chọn → kết nếu cần → chiếu |
| Hoặc/cả hai | hai tập mã → hội/giao |
| Không có | ứng viên − tập vi phạm |
| Nếu có | tập cần giữ ⟕ dữ liệu liên quan đã lọc |
| Tất cả | cặp (X,Y) ÷ tập Y bắt buộc |
| Đếm/tổng | dữ liệu đúng đơn vị → gom nhóm → chọn kết quả tính |
| Tỷ lệ | dữ liệu chung → hai bảng đếm → kết → chọn theo tỷ lệ |

Đây là thứ tự lập luận, không phải quy định mọi biểu thức đều phải thực thi đúng một thứ tự duy nhất. Chẳng hạn, điều kiện phụ thuộc hai bảng chỉ lọc được khi đã có đủ thuộc tính.

### Bước 5 — Viết bằng các phép gán, ghi lược đồ trung gian

Ví dụ tên bước có ý nghĩa: DuLieuLoc, TapA, TapB, TapViPham, TapBatBuoc, CapDaDat, BangDem, KQ.

Sau mỗi bước, ghi nhanh các cột còn lại. Khi làm giao/trừ/chia/gom nhóm, kiểm tra lược đồ trước khi viết phép tiếp theo. Cuối cùng, nếu cần tên hoặc thông tin mô tả thì nối lại, rồi chiếu đúng đầu ra.

### Bước 6 — Thử trường hợp làm lộ lỗi

- Một đối tượng vừa có dòng đạt vừa có dòng vi phạm: phép trừ có loại đúng không?
- Một đối tượng thuộc A và B ở hai dòng khác nhau: giao có nhận ra không?
- Một đối tượng chưa có dữ liệu liên quan: cần giữ, loại, hay chưa tính được tỷ lệ?
- Một đối tượng thiếu đúng một Y bắt buộc: phép chia có loại không?
- Một sự kiện bị lặp sau khi kết: có đang đếm thừa không?
- Hai đối tượng trùng tên: có vô tình gộp nhóm hoặc gộp kết quả không?

## 5. Những lỗi cần soát cuối bài

- **Ngày:** “trong năm 2025” có thể viết `ngày ≥ 01/01/2025 ∧ ngày < 01/01/2026`; “sau ngày 01/01/2025” là `>`, không tự thêm giới hạn cuối năm.
- **Và/hoặc:** kiểm tra yêu cầu trên cùng bộ hay trên nhiều bộ của cùng đối tượng.
- **Phủ định:** `thuộc tính ≠ giá trị` loại bộ; “đối tượng không có bộ nào mang giá trị đó” thường cần trừ tập đối tượng.
- **Kết tự nhiên:** so sánh mọi cột chung tên, không chỉ cột bạn đang nghĩ đến. Dùng kết có điều kiện khi vai trò/thuộc tính cần phân biệt.
- **Chiếu và đếm:** π loại các bộ trùng trên toàn danh sách cột giữ lại. Không chiếu mất khóa sự kiện rồi mới đếm lượt.
- **Cao nhất/thấp nhất:** MAX/MIN cho giá trị; muốn biết ai đạt giá trị ấy phải đối chiếu lại, giữ cả các trường hợp bằng nhau.
- **Chỉ/tất cả:** “chỉ A” thường cần loại trường hợp ngoài A; “đáp ứng tất cả A” vẫn có thể có thêm trường hợp ngoài A.
- **Lần đầu:** xác định lần đầu trong đúng phạm vi trước, rồi kiểm tra kết quả của lần đó. Lọc các lần đạt trước rồi lấy ngày sớm nhất sẽ thành “lần đạt đầu tiên”, có thể khác yêu cầu. Với nhiều lần cùng thời điểm, nêu giả thiết theo đề.

## 6. Trang lý thuyết để tra đúng chỗ

| Phần | Trang PDF T3 |
|---|---|
| Chọn/chiếu, phối hợp | 13–19 |
| Gán/đổi tên | 20–22 |
| Tích và kết | 23–35 |
| Kết ngoài | 36–44 |
| Hội/giao/trừ | 45–50 |
| Chia, tìm cặp còn thiếu | 51–54 |
| Hàm tính và gom nhóm | 55–61 |

Đây là tài liệu đã được cung cấp để ôn, không phải kết quả tự làm hay đánh giá thành thạo của người học.
