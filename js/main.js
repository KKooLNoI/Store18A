/* ══════════════════════════════════════════
   ร้าน 18A — Main JavaScript
══════════════════════════════════════════ */

/* ══════════════════════════════════════════
   📦 ข้อมูลสินค้าของชำ — แก้ตรงนี้เพื่อเพิ่ม/ลบสินค้า
   cat: 'staple' | 'instant' | 'drink' | 'seasoning' | 'household' | 'snack'
   tag: 'bestseller' | 'sale10' | null
   img: URL รูปภาพ หรือ path เช่น 'images/rice.jpg'
        ถ้าใส่ emoji แทนได้เช่นกัน เช่น '🌾'
══════════════════════════════════════════ */
const STORE_PRODUCTS = [
  { img: 'https://images.mango-prod.siammakro.cloud/product-images/6974763237571-7db1108e-9f48-4428-b8b5-4de23699ad9b.jpeg?eo-img.resize=w%2F1080&eo-img.format=webp', name: 'ข้าวสารหอมมะลิ',   unit: 'ถุง 5 กิโลกรัม', cat: 'staple',    tag: 'bestseller' },
  { img: '🌾', name: 'ข้าวสารขาวธรรมดา', unit: 'ถุง 5 กิโลกรัม', cat: 'staple',    tag: null },
  { img: 'https://media.allonline.7eleven.co.th/pdmain/125459-01-instand-noodles-mama-v2.jpg', name: 'มาม่า ต้มยำกุ้ง',  unit: 'แพ็ก 10 ซอง',    cat: 'instant',   tag: 'sale10' },
  { img: 'https://images.mango-prod.siammakro.cloud/product-images/7552057737411-b29829f8-fb55-4d27-8c44-5781fe062375.jpeg', name: 'ไข่ไก่สด',          unit: 'แผง 30 ฟอง',     cat: 'staple',    tag: null },
  { img: '🧃', name: 'น้ำส้ม UHT',        unit: 'กล่อง 200 ml.',  cat: 'drink',     tag: null },
  { img: '🥛', name: 'นมสด โฮโมจีไนส์',  unit: 'กล่อง 250 ml.',  cat: 'drink',     tag: null },
  { img: '🧂', name: 'น้ำปลาทิพรส',       unit: 'ขวด 700 ml.',    cat: 'seasoning', tag: null },
  { img: 'https://officework.co.th/upload/product/1041-0002-01.JPG', name: 'น้ำยาล้างจาน',      unit: 'ขวด 500 ml.',    cat: 'household', tag: 'bestseller' },
  { img: 'https://cdn.imweb.me/thumbnail/20230421/659850ffd7947.jpg', name: 'ลูกอมฮอลล์',        unit: 'ถุง 100 เม็ด',   cat: 'snack',     tag: null },
  { img: '🥫', name: 'ปลากระป๋อง',        unit: 'กระป๋อง 185 กรัม', cat: 'instant', tag: null },
  { img: '🪥', name: 'แชมพูซันซิล',       unit: 'ขวด 200 ml.',    cat: 'household', tag: null },
  { img: '🫙', name: 'ซีอิ๊วขาวมังกร',    unit: 'ขวด 700 ml.',    cat: 'seasoning', tag: null },
];

/* ══════════════════════════════════════════
   📸 รูปภาพจากสวน — แก้ตรงนี้เพื่อเพิ่ม/ลบรูป
   img: URL หรือ path เช่น 'images/garden1.jpg'
   label: คำบรรยายใต้รูป (แสดงเมื่อ hover)
   รูปแรกจะใหญ่กว่าเพื่อน (hero cell)
══════════════════════════════════════════ */
const GARDEN_PHOTOS = [
  { img: 'picture/IMG_7533.JPG', label: 'ผักบุ้งสด เก็บเช้าวันนี้' },
  { img: 'picture/IMG_7534.JPG', label: 'กะเพราหอม' },
  { img: 'picture/IMG_7535.JPG', label: 'ต้นกล้างอกใหม่' },
  { img: 'picture/IMG_7536.JPG', label: 'พริกสีสวย' },
  { img: 'picture/IMG_7537.JPG', label: 'ดอกแคขาว' },
];

/* ══════════════════════════════════════════
   🎥 วิดีโอสอนปลูกผัก — แก้ตรงนี้เพื่อเพิ่ม/ลบวิดีโอ
   youtubeId: ID ของวิดีโอ YouTube เช่น 'dQw4w9WgXcQ'
              (ส่วนท้ายของ URL: youtube.com/watch?v=dQw4w9WgXcQ)
══════════════════════════════════════════ */
const VEGGIE_VIDEOS = [
  {
    title: 'วิธีปลูกผักบุ้งในกระถาง',
    youtubeId: '',
    desc: 'ปลูกง่าย ดูแลสะดวก เหมาะกับมือใหม่'
  },
  {
    title: 'ปลูกกะเพรา โหระพา ในบ้าน',
    youtubeId: '',
    desc: 'สมุนไพรไทย กลิ่นหอม ใช้ทำอาหารได้ทุกวัน'
  },
  {
    title: 'ทำปุ๋ยหมักจากเศษผัก',
    youtubeId: '',
    desc: 'ลดต้นทุน ดูแลสิ่งแวดล้อม ผักโตไว'
  },
];

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Active nav link highlight on scroll ── */
const sections = document.querySelectorAll('section[id], .hero[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) cur = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

/* ── Scroll reveal animation ── */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

renderProducts();
renderVeggieVideos();
renderGardenMosaic();

/* ── Render store products from STORE_PRODUCTS array ── */
function renderProducts() {
  const grid = document.getElementById('prodGrid');
  if (!grid) return;

  const tagLabel = { bestseller: 'ขายดี', sale10: 'ลด 10%' };

  grid.innerHTML = STORE_PRODUCTS.map((p, i) => {
    const delay = ['', ' reveal-d1', ' reveal-d2', ' reveal-d3'][i % 4];
    const tagHtml = p.tag
      ? `<span class="prod-tag">${tagLabel[p.tag] || ''}</span>`
      : '';
    const isUrl = p.img && (p.img.startsWith('http') || p.img.startsWith('/') || p.img.includes('.'));
    const thumbHtml = isUrl
      ? `<img src="${p.img}" alt="${p.name}" class="prod-img">`
      : p.img;
    return `
      <div class="product-card reveal${delay}" data-cat="${p.cat}">
        <div class="prod-thumb">${thumbHtml}${tagHtml}</div>
        <div class="prod-body">
          <div class="prod-name">${p.name}</div>
          <div class="prod-unit">${p.unit}</div>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Render veggie videos ── */
function renderVeggieVideos() {
  const container = document.getElementById('veggieVideos');
  if (!container) return;

  const filled = VEGGIE_VIDEOS.filter(v => v.youtubeId.trim() !== '');
  if (filled.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.innerHTML = `
    <h3 class="video-section-title reveal" style="font-family:'Prompt',sans-serif;font-weight:700;font-size:1.15rem;color:var(--text-dark);margin-bottom:1rem;">
      🎥 วิดีโอแนะนำการปลูกผัก
    </h3>
    <div class="video-grid">
      ${filled.map((v, i) => {
        const delay = ['', ' reveal-d1', ' reveal-d2'][i % 3];
        return `
          <div class="video-card reveal${delay}">
            <div class="video-embed-wrap">
              <iframe
                src="https://www.youtube.com/embed/${v.youtubeId}"
                title="${v.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
            <div class="video-card-body">
              <div class="video-card-title">${v.title}</div>
              <div class="video-card-desc">${v.desc}</div>
            </div>
          </div>`;
      }).join('')}
    </div>`;

  container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Render garden photo mosaic ── */
function renderGardenMosaic() {
  const wrap = document.getElementById('gardenMosaic');
  if (!wrap) return;

  const placeholders = ['🥬','🌿','🌱','🌶️','🌸'];

  wrap.innerHTML = `
    <h3 class="reveal" style="font-family:'Prompt',sans-serif;font-weight:700;font-size:1.1rem;color:var(--text-dark);margin-bottom:1rem;">
      📸 ภาพจากสวนของเราจริง ๆ
    </h3>
    <div class="photo-mosaic">
      ${GARDEN_PHOTOS.map((p, i) => {
        const isUrl = p.img && (p.img.startsWith('http') || p.img.startsWith('/') || p.img.includes('.'));
        const inner = isUrl
          ? `<img src="${p.img}" alt="${p.label}" class="mosaic-img">`
          : `<span class="mosaic-placeholder">${placeholders[i] || '📷'}</span>`;
        return `
          <div class="mosaic-cell mc${i + 1}">
            ${inner}
            <span class="c-label">${p.label}</span>
          </div>`;
      }).join('')}
    </div>`;

  wrap.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Category filter for store section ── */
function filterCat(btn, cat) {
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(c => {
    c.style.display = (cat === 'all' || c.dataset.cat === cat) ? '' : 'none';
  });
}
