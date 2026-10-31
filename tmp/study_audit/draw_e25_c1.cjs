const fs = require('node:fs');
const path = require('node:path');
const sharp = require('C:/Users/phuoc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');

const root = path.resolve(__dirname, '../..');
const out = path.join(root, 'output', 'so-do');
fs.mkdirSync(out, { recursive: true });
const esc = s => String(s).replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const palette = { ink:'#162d49', muted:'#54677f', line:'#59738d', blue:'#174b78', pale:'#eaf2fb', green:'#e0f2eb', teal:'#17624e', border:'#9cb3c9' };
let parts;
function start(w,h,title,sub) {
  parts = [`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}">`,
    `<style>text{font-family:'Segoe UI',Arial,sans-serif;fill:${palette.ink}} .muted{fill:${palette.muted}} .card{fill:#fff;stroke:${palette.border};stroke-width:1.5} .link{fill:none;stroke:${palette.line};stroke-width:2.5;stroke-linejoin:round} .pk{text-decoration:underline} </style>`,
    `<rect width="100%" height="100%" fill="#f5f8fc"/>`];
  text(52,48,title,28,'start','font-weight="700"');
  text(52,80,sub,16,'start','class="muted"');
}
function text(x,y,s,size=18,anchor='middle',extra='') {
  parts.push(`<text x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}" ${extra}>${esc(s)}</text>`);
}
function line(d) {parts.push(`<path d="${d}" class="link"/>`);}
function rounded(x,y,w,h,fill='#fff',stroke=palette.border,r=12) {parts.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`);}
function card(x,y,s) {rounded(x-32,y-20,64,29,'#f5f8fc','#f5f8fc',6);text(x,y,s,19,'middle','font-weight="700"');}
function note(y,width,lines) {
  rounded(52,y,width,lines.length*29+24,'#edf3fa','#d5e1ee',10);
  lines.forEach((s,i)=>text(70,y+30+i*29,s,16,'start'));
}
function table(x,y,w,name,rows) {
  const header=48, row=36, h=header+rows.length*row;
  rounded(x,y,w,h);
  parts.push(`<path d="M${x+12},${y}H${x+w-12}Q${x+w},${y} ${x+w},${y+12}V${y+header}H${x}V${y+12}Q${x},${y} ${x+12},${y}" fill="${palette.blue}"/>`);
  text(x+18,y+31,name,21,'start','style="fill:#fff;font-weight:700"');
  rows.forEach(([name,key],i)=>{
    const ry=y+header+i*row;
    if(i%2===0) parts.push(`<rect x="${x+1}" y="${ry}" width="${w-2}" height="${row}" fill="#f4f7fb"/>`);
    text(x+17,ry+24,name,18,'start',key.includes('PK')?'font-weight="600"':'');
    if(key)text(x+w-15,ry+24,key,13,'end',`style="fill:${key.includes('PK')?'#905a0e':palette.teal};font-weight:700"`);
  });
  return {x,y,w,h};
}
function entity(x,y,w,name) {rounded(x,y,w,64,palette.pale,palette.blue,3);text(x+w/2,y+40,name,21,'middle','font-weight="700"');}
function attr(x,y,rx,name,key=false) {
  parts.push(`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="26" fill="#fff" stroke="${palette.border}" stroke-width="1.7"/>`);
  text(x,y+6,name,17,'middle',key?'class="pk" font-weight="600"':'');
}
function diamond(x,y,rx,ry,labels) {
  parts.push(`<path d="M${x},${y-ry}L${x+rx},${y}L${x},${y+ry}L${x-rx},${y}Z" fill="${palette.green}" stroke="${palette.teal}" stroke-width="2"/>`);
  labels.forEach((s,i)=>text(x,y+(i-(labels.length-1)/2)*24+6,s,17,'middle','font-weight="600"'));
}
async function save(name) {
  const data=parts.join('\n')+'\n</svg>\n';
  const svg=path.join(out,name+'.svg'), png=path.join(out,name+'.png');
  fs.writeFileSync(svg,data,'utf8');
  await sharp(Buffer.from(data)).png().toFile(png);
  console.log(svg); console.log(png);
}

async function main() {
  start(1480,1090,'E25 – Đề 1 · Câu 1 | ERD dạng bảng','Giữ tên bảng và thuộc tính của bài làm · Không gán thêm kiểu dữ liệu');
  line('M390,260H560');
  line('M920,260H1090');
  line('M740,420V650');
  line('M920,778H1090');
  table(60,140,330,'NGTOGIAC',[
    ['MaSo','PK'],['HoTen',''],['SoDienThoai',''],['Email','']
  ]);
  table(560,120,360,'VUVIEC',[
    ['MaSo','PK'],['TomTat',''],['ThoiGianPhatHien',''],['NenTangLienQuan',''],['TinhTrang',''],['NgToGiac','FK'],['NanNhan','FK']
  ]);
  table(1090,140,330,'NANNHAN',[
    ['MaDD','PK'],['HoTen',''],['Tuoi',''],['NoiCT',''],['TTHT','']
  ]);
  table(560,650,360,'THAMGIAXULY',[
    ['MaSoVV','PK, FK'],['MaSoDTV','PK, FK'],['NgayPhanCong',''],['NgayXuLy',''],['VaiTro',''],['KQSB','']
  ]);
  table(1090,650,330,'DIEUTRAVIEN',[
    ['MaSo','PK'],['HoTen',''],['DVCT',''],['CM',''],['TTPC','']
  ]);
  card(432,245,'(0,n)');card(520,245,'(1,1)');
  text(475,286,'Tố giác',14);
  card(960,245,'(1,1)');card(1048,245,'(0,n)');
  text(1005,286,'Nạn nhân chính',14);
  card(788,458,'(0,n)');card(788,630,'(1,1)');
  text(760,535,'Có lượt xử lý',16,'start');
  card(960,763,'(1,1)');card(1048,763,'(0,n)');
  text(1005,804,'Tham gia',14);
  text(740,944,'PK ghép: (MaSoVV, MaSoDTV)',17,'middle','font-weight="600"');
  note(970,1376,[
    'Cặp (min,max) cạnh bảng X: một dòng X tham gia ít nhất min, nhiều nhất max lần vào liên kết đó.',
    'Giả thiết: các phía “có thể” lấy min = 0; mỗi cặp vụ việc–điều tra viên chỉ có tối đa một lượt xử lý.',
    'Mỗi vụ việc có đúng một người tố giác và một nạn nhân chính. PK: khóa chính · FK: khóa ngoại.'
  ]);
  await save('E25-De1-C1-ERD-bang');

  start(1560,1260,'E25 – Đề 1 · Câu 1.1 | Mô hình thực thể – mối kết hợp','Hình chữ nhật: thực thể · Hình thoi: mối kết hợp · Elip: thuộc tính · Gạch dưới: khóa');
  // Liên kết giữa thực thể và mối kết hợp.
  line('M300,312H365');line('M535,312H620');
  line('M850,312H920');line('M1090,312H1160');
  line('M735,344V565');line('M735,695V880');
  // Thuộc tính NGTOGIAC.
  line('M90,151L155,280');line('M280,151L220,280');
  line('M145,344L100,424');line('M240,344L290,424');
  // Thuộc tính VUVIEC.
  line('M535,146L675,280');line('M735,146V280');line('M950,146L795,280');
  line('M675,344L530,434');line('M795,344L930,434');
  // Thuộc tính NANNHAN.
  line('M1160,151L1220,280');line('M1350,151L1320,280');
  line('M1205,344L1120,444');line('M1275,344L1280,444');line('M1345,344L1450,444');
  // Thuộc tính của mối kết hợp xử lý.
  line('M600,630L530,570');line('M600,630L520,690');
  line('M870,630L990,570');line('M870,630L1000,690');
  // Thuộc tính DIEUTRAVIEN.
  line('M620,900L450,846');line('M620,925L450,934');
  line('M850,895L955,810');line('M850,912L1010,920');line('M850,930L950,1030');
  entity(70,280,230,'NGTOGIAC');entity(620,280,230,'VUVIEC');
  entity(1160,280,230,'NANNHAN');entity(620,880,230,'DIEUTRAVIEN');
  diamond(450,312,85,48,['Tố giác']);
  diamond(1005,312,85,48,['Liên quan']);
  text(1005,381,'Nạn nhân chính',15,'middle','class="muted"');
  diamond(735,630,135,65,['THAMGIA','XULY']);
  card(330,293,'(0,n)');card(580,293,'(1,1)');
  card(885,293,'(1,1)');card(1125,293,'(0,n)');
  card(782,384,'(0,n)');card(782,852,'(0,n)');
  attr(90,125,70,'MaSo',true);attr(280,125,80,'HoTen');
  attr(100,450,95,'SoDienThoai');attr(290,450,75,'Email');
  attr(535,120,70,'MaSo',true);attr(735,120,80,'TomTat');attr(950,120,115,'ThoiGianPhatHien');
  attr(530,460,120,'NenTangLienQuan');attr(930,460,90,'TinhTrang');
  attr(1160,125,70,'MaDD',true);attr(1350,125,80,'HoTen');
  attr(1120,470,65,'Tuoi');attr(1280,470,75,'NoiCT');attr(1450,470,65,'TTHT');
  attr(420,570,110,'NgayPhanCong');attr(420,690,100,'NgayXuLy');
  attr(1070,570,80,'VaiTro');attr(1070,690,70,'KQSB');
  attr(450,820,75,'MaSo',true);attr(450,960,85,'HoTen');
  attr(1030,810,75,'DVCT');attr(1070,920,60,'CM');attr(1030,1030,80,'TTPC');
  note(1100,1456,[
    'Cặp cạnh thực thể X là số lần một cá thể X tham gia mối kết hợp, theo cách đọc (min,max) trong slide.',
    'Giả thiết về min: các phía chỉ nêu “có thể” được lấy là (0,n); mỗi vụ việc có đúng một người tố giác và một nạn nhân chính.',
    'Giả thiết về lượt: mỗi cặp vụ việc–điều tra viên có tối đa một lượt; nếu cho lặp, mô hình và khóa cần phân biệt từng lượt.',
    'Ở hình ER, NgToGiac và NanNhan được thể hiện bằng mối kết hợp; không lặp lại chúng như các thuộc tính khóa ngoại.'
  ]);
  await save('E25-De1-C1-ER-thuc-the');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
