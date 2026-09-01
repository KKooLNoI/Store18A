const U = (id, w = 400, h = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`

/* สินค้าของชำ */
export const STORE_PRODUCTS = [
  { emoji:'🍚', img: U('1686820740687-426a7b9b2043'), name:'ข้าวสารหอมมะลิ',  unit:'ถุง 5 กก.',       price:'฿145', cat:'staple',    tag:'bestseller', color:'#dcfce7,#bbf7d0' },
  { emoji:'🥚', img: U('1570802685082-2224bd954723'), name:'ไข่ไก่สดเบอร์ 2',  unit:'แผง 30 ฟอง',    price:'฿105', cat:'staple',    tag:'bestseller', color:'#fef9c3,#fef08a' },
  { emoji:'🍜', img: U('1766871138762-51db92945bbc'), name:'มาม่า ต้มยำกุ้ง',   unit:'แพ็ก 10 ซอง',   price:'฿55',  cat:'instant',   tag:'sale10',     color:'#fee2e2,#fecaca' },
  { emoji:'🍝', img: U('1766871138762-51db92945bbc'), name:'มาม่า หมูสับ',      unit:'แพ็ก 10 ซอง',   price:'฿55',  cat:'instant',   tag:null,         color:'#ffedd5,#fed7aa' },
  { emoji:'🧃', img: null,                             name:'น้ำส้ม UHT',        unit:'กล่อง 200 ml.',  price:'฿12',  cat:'drink',     tag:null,         color:'#fef3c7,#fde68a' },
  { emoji:'🥛', img: U('1563636619-e9143da7973b'),    name:'นมสด',              unit:'กล่อง 250 ml.',  price:'฿15',  cat:'drink',     tag:null,         color:'#f0f9ff,#bae6fd' },
  { emoji:'🧂', img: null,                             name:'น้ำปลาทิพรส',       unit:'ขวด 700 ml.',    price:'฿38',  cat:'seasoning', tag:null,         color:'#ede9fe,#ddd6fe' },
  { emoji:'🫙', img: null,                             name:'ซีอิ๊วขาว',         unit:'ขวด 700 ml.',    price:'฿32',  cat:'seasoning', tag:null,         color:'#fce7f3,#fbcfe8' },
  { emoji:'🧴', img: null,                             name:'น้ำยาล้างจาน',      unit:'ขวด 500 ml.',    price:'฿29',  cat:'household', tag:'bestseller', color:'#ecfccb,#d9f99d' },
  { emoji:'🪥', img: U('1701992678972-d5a053ad0fb0'), name:'แชมพูซันซิล',       unit:'ขวด 200 ml.',    price:'฿89',  cat:'household', tag:null,         color:'#e0f2fe,#bae6fd' },
  { emoji:'🍭', img: U('1652992694361-78668d358453'), name:'ลูกอมฮอลล์',        unit:'ถุง 100 เม็ด',   price:'฿35',  cat:'snack',     tag:null,         color:'#fdf4ff,#f5d0fe' },
  { emoji:'🥫', img: null,                             name:'ปลากระป๋อง',        unit:'กระป๋อง 185g',   price:'฿22',  cat:'instant',   tag:null,         color:'#f0fdfa,#99f6e4' },
  { emoji:'🌾', img: U('1686820740687-426a7b9b2043'), name:'ข้าวสารขาว',         unit:'ถุง 5 กก.',       price:'฿110', cat:'staple',    tag:null,         color:'#f0fdf4,#bbf7d0' },
  { emoji:'🧊', img: U('1566985415436-002cccb73558'), name:'น้ำดื่มสะอาด',      unit:'แพ็ก 12 ขวด',   price:'฿45',  cat:'drink',     tag:null,         color:'#e0f2fe,#7dd3fc' },
  { emoji:'🫧', img: null,                             name:'น้ำยาซักผ้า',        unit:'ถุง 3 กก.',       price:'฿120', cat:'household', tag:null,         color:'#eff6ff,#bfdbfe' },
  { emoji:'🍪', img: null,                             name:'ขนมปังกรอบ',         unit:'แพ็ก 12 ชิ้น',  price:'฿25',  cat:'snack',     tag:null,         color:'#fffbeb,#fde68a' },
]

/* ผักสดจากสวน */
export const VEGGIE_LIST = [
  { emoji:'🥬', img: null,                             name:'ผักบุ้ง',     desc:'เด็ดสดทุกเช้า นุ่มกรอบ ต้มผัดทุกเมนู',      price:'฿10/กำ',   tag:'ปลูกเอง', from:'#dcfce7', to:'#bbf7d0', inStock:true },
  { emoji:'🌿', img: U('1776257217010-1c2e92207f2a'), name:'กะเพรา',     desc:'ใบสด กลิ่นหอม ผัดกะเพราอร่อยทุกครั้ง',       price:'฿10/กำ',   tag:'ปลูกเอง', from:'#d1fae5', to:'#a7f3d0', inStock:true },
  { emoji:'🌱', img: U('1776257217010-1c2e92207f2a'), name:'โหระพา',     desc:'สมุนไพรไทยแท้ ปลูกเอง ไม่ผ่านสาร',           price:'฿10/กำ',   tag:'ปลูกเอง', from:'#dcfce7', to:'#bbf7d0', inStock:true },
  { emoji:'🥦', img: null,                             name:'คะน้า',      desc:'อินทรีย์ 100% ใบกรอบ หวานธรรมชาติ',          price:'฿15/กำ',   tag:'ปลูกเอง', from:'#d1fae5', to:'#6ee7b7', inStock:true },
  { emoji:'🌶️', img: U('1489841060824-0f3119e26686'), name:'พริกขี้หนู',  desc:'เผ็ดจัด สีสวย เก็บสดทุกวัน',               price:'฿5/กำ',    tag:'ปลูกเอง', from:'#fee2e2', to:'#fca5a5', inStock:true },
  { emoji:'🍅', img: U('1591771999855-b21c9b0081d2'), name:'มะเขือเทศ', desc:'สีแดงสด รสหวานอมเปรี้ยว คัดเกรด A',          price:'฿20/กก.',  tag:'คัดเกรด', from:'#fef2f2', to:'#fecaca', inStock:true },
  { emoji:'🌿', img: U('1776257217010-1c2e92207f2a'), name:'ตะไคร้',     desc:'กลิ่นหอม ต้มยำ แกงเผ็ด ทุกเมนู',            price:'฿5/3ต้น',  tag:'ปลูกเอง', from:'#ecfccb', to:'#d9f99d', inStock:true },
  { emoji:'🌽', img: U('1598178986971-68fc5210483f'), name:'ข้าวโพดหวาน', desc:'หวาน กรอบ ต้มทานหรือย่างไฟ',               price:'฿15/ฝัก',  tag:'คัดเกรด', from:'#fef9c3', to:'#fef08a', inStock:true },
]

/* รูปสวน */
export const GARDEN_PHOTOS = [
  { img:'/picture/IMG_7533.JPG', label:'ผักบุ้งสด เก็บเช้าวันนี้' },
  { img:'/picture/IMG_7534.JPG', label:'กะเพราหอม' },
  { img:'/picture/IMG_7535.JPG', label:'ต้นกล้างอกใหม่' },
  { img:'/picture/IMG_7536.JPG', label:'พริกสีสวย' },
  { img:'/picture/IMG_7537.JPG', label:'ดอกแคขาว' },
  { img:'/picture/IMG_7538.JPG', label:'สวนหลังบ้าน' },
]

export const TESTIMONIALS = [
  { name:'คุณนิด',    role:'ลูกบ้านในหมู่บ้าน', emoji:'👩', stars:5, color:'#bbf7d0', textColor:'#166534',
    text:'ซื้อผักที่นี่ทุกวัน สดมาก ไม่มียาฆ่าแมลง ลูกกินได้สบายใจ ราคาก็ถูกกว่าตลาดอีก' },
  { name:'คุณสมชาย', role:'ลูกบ้านในหมู่บ้าน', emoji:'👨', stars:5, color:'#fde68a', textColor:'#92400e',
    text:'ร้านค้าซอย 18A ใกล้บ้าน สินค้าครบ ราคาถูก ส่งถึงบ้านด้วย สะดวกมาก ไม่ต้องขับรถออกไปไกล' },
  { name:'คุณปุ้ย',   role:'ลูกบ้านในหมู่บ้าน', emoji:'👩', stars:5, color:'#bae6fd', textColor:'#075985',
    text:'ชอบที่มีสอนวิธีปลูกผักด้วย ลองปลูกตามแล้วได้ผลดีมาก ขอบคุณมากเลยค่ะ' },
]

export const GROW_STEPS = [
  { icon:'🪴', step:'01', title:'เตรียมดิน',      text:'ผสมดินร่วนกับปุ๋ยหมักอัตรา 1:1 ใส่ในกระถางหรือแปลงปลูก' },
  { icon:'🌱', step:'02', title:'หว่านเมล็ด',     text:'โรยเมล็ดห่างกัน 5–10 ซม. กลบดินบาง ๆ อย่าให้หนาเกิน' },
  { icon:'💧', step:'03', title:'รดน้ำสม่ำเสมอ',  text:'รดเช้า-เย็น ให้ชุ่มพอดี อย่าให้น้ำขังบริเวณราก' },
  { icon:'☀️', step:'04', title:'แสงแดดเพียงพอ',  text:'ต้องการแสงอย่างน้อย 4–6 ชั่วโมงต่อวัน วางหน้าต่างหรือกลางแจ้ง' },
  { icon:'🌿', step:'05', title:'เก็บเกี่ยว',      text:'ผักบุ้ง 14 วัน · คะน้า 30 วัน · กะเพรา 45 วัน หลังงอก' },
]

export const FEATURES = [
  { icon:'🚚', title:'ส่งถึงบ้านฟรี',   desc:'ในหมู่บ้าน ไม่มีขั้นต่ำ',  color:'#dcfce7' },
  { icon:'🌿', title:'ผักปลอดสาร',       desc:'ปลูกเองที่บ้าน 100%',       color:'#d1fae5' },
  { icon:'💳', title:'ชำระสะดวก',        desc:'พร้อมเพย์ / QR / เงินสด',   color:'#fef9c3' },
  { icon:'📱', title:'สั่งทางไลน์',      desc:'ตอบไวทุกวันไม่มีวันหยุด',   color:'#ede9fe' },
]

/* วันในสัปดาห์ — index ตรงกับ Date.getDay() (0=อา…6=ส) */
export const WEEK_DAYS = [
  { d:0, short:'อา', full:'อาทิตย์' },
  { d:1, short:'จ',  full:'จันทร์' },
  { d:2, short:'อ',  full:'อังคาร' },
  { d:3, short:'พ',  full:'พุธ' },
  { d:4, short:'พฤ', full:'พฤหัสบดี' },
  { d:5, short:'ศ',  full:'ศุกร์' },
  { d:6, short:'ส',  full:'เสาร์' },
]

/* วันที่เปิดขายเมนูอาหาร: อังคาร(2) และ พฤหัสบดี(4) */
export const MENU_DAYS = [2, 4]

/* เมนูอาหารพิเศษ ขายเฉพาะวันอังคาร-พฤหัสบดี (ตัวอย่าง — แก้ไขเป็นเมนูจริงได้ภายหลัง) */
export const MENU_ITEMS = [
  { emoji:'🍛', img: U('1628294895950-9805252327bc'), name:'ข้าวกะเพราหมูสับไข่ดาว', desc:'ผัดกะเพราใบสดจากสวน เผ็ดแซ่บถึงใจ', price:'฿45', spicy:2, tag:'ขายดี' },
  { emoji:'🍲', img: U('1569718212165-3a8278d5f624'), name:'ต้มยำกุ้งน้ำข้น',        desc:'กุ้งสดตัวโต น้ำซุปเข้มข้น เปรี้ยวเผ็ดกำลังดี', price:'฿60', spicy:2, tag:'แนะนำ' },
  { emoji:'🍗', img: U('1604908176997-125f25cc6f3d'), name:'แกงเขียวหวานไก่',        desc:'แกงกะทิสูตรบ้าน ใส่มะเขือพวงและใบโหระพาสวน', price:'฿50', spicy:1, tag:null },
  { emoji:'🍜', img: U('1637806930600-37fa8892069d'), name:'ผัดไทยกุ้งสด',           desc:'เส้นจันท์เหนียวนุ่ม รสชาติกลมกล่อมสูตรดั้งเดิม', price:'฿45', spicy:0, tag:null },
  { emoji:'🥗', img: U('1512621776951-a57141f2eefd'), name:'ส้มตำไทยรสแซ่บ',        desc:'ตำสดใหม่ทุกจาน ปรุงตามสั่งเผ็ดได้ตามใจ',        price:'฿40', spicy:3, tag:'เผ็ดจัด' },
  { emoji:'🍢', img: U('1625398407796-82650a8c135f'), name:'ข้าวเหนียวหมูปิ้ง',       desc:'หมูปิ้งหมักสูตรเด็ด ย่างสดใหม่ทุกไม้',           price:'฿35', spicy:0, tag:null },
]
