// بيانات الموقع الحقيقية
const WHATSAPP_NUMBER = "201102093531";
const DELIVERY_FEE = 0; // بدون رسوم توصيل

// المنيو الكامل والمنظم بالعربي بالكامل
const menuData = [
    // --- برجر اللحم ---
    { 
        id: 1, 
        name: "ذا انجينير (لحم) 🥩", 
        category: "beef", 
        icon: "fa-burger", 
        desc: "قطعة لحمة 200 جرام، خس، طماطم، بصل، شيدر، تيكساس، كاتشب، باربيكيو",
        prices: { single: 115, double: 160 }
    },
    { 
        id: 2, 
        name: "فاير انجينير (لحم) 🔥", 
        category: "beef", 
        icon: "fa-fire", 
        desc: "قطعة لحمة 200 جرام، حلقات بصل مقلية، خس، طماطم، بصل، شيدر، تيكساس، كاتشب، باربيكيو",
        prices: { single: 130, double: 175 }
    },
    { 
        id: 3, 
        name: "تشيز فورميلا (لحم) 🧀", 
        category: "beef", 
        icon: "fa-cheese", 
        desc: "قطعة لحمة 200 جرام، قطعة جبنة مقلية + بيكون، خس، طماطم، بصل، شيدر، تيكساس، كاتشب، باربيكيو",
        prices: { single: 145, double: 190 }
    },
    { 
        id: 4, 
        name: "ريد زون (لحم) 🚨", 
        category: "beef", 
        icon: "fa-pepper-hot", 
        desc: "قطعة لحمة 200 جرام، صوابع موتزاريلا ستيكس + بيكون، خس، طماطم، بصل، رانش، تيكساس، كاتشب، باربيكيو، هوت صوص",
        prices: { single: 135, double: 180 }
    },
    { 
        id: 5, 
        name: "ذا ماستر (لحم) 👑", 
        category: "beef", 
        icon: "fa-crown", 
        desc: "قطعة لحمة 200 جرام، قطعة جبنة مقلية + حلقات بصل مقلية مع البيكون + صوص the master، خس، طماطم، بصل، تيكساس، كاتشب، باربيكيو",
        prices: { single: 170, double: 215 }
    },

    // --- برجر الدجاج ---
    { 
        id: 6, 
        name: "ذا انجينير (فراخ) 🍗", 
        category: "chicken", 
        icon: "fa-drumstick-bite", 
        desc: "قطعة فراخ كرسبي، خس، طماطم، بصل، شيدر، تيكساس، كاتشب، باربيكيو",
        prices: { single: 115, double: 160 }
    },
    { 
        id: 7, 
        name: "فاير انجينير (فراخ) 🔥", 
        category: "chicken", 
        icon: "fa-fire-flame-curved", 
        desc: "قطع فراخ كرسبي، حلقات بصل مقلية، خس، طماطم، بصل، شيدر، تيكساس، كاتشب، باربيكيو",
        prices: { single: 130, double: 175 }
    },
    { 
        id: 8, 
        name: "تشيز فورميلا (فراخ) 🧀", 
        category: "chicken", 
        icon: "fa-cheese", 
        desc: "قطع فراخ كرسبي، قطعة جبنة مقلية + بيكون، خس، طماطم، بصل، شيدر، تيكساس، كاتشب، باربيكيو",
        prices: { single: 145, double: 190 }
    },
    { 
        id: 9, 
        name: "فاير سيركت (فراخ) ⚡", 
        category: "chicken", 
        icon: "fa-bolt", 
        desc: "قطع فراخ كرسبي، صوابع موتزاريلا ستيك + بيكون، خس، طماطم، بصل، رانش، تيكساس، كاتشب، باربيكيو، هوت صوص",
        prices: { single: 135, double: 180 }
    },
    { 
        id: 10, 
        name: "رانش ماستر (فراخ) 🥣", 
        category: "chicken", 
        icon: "fa-bowl-food", 
        desc: "قطع فراخ كرسبي، مشروم، خس، طماطم، بصل، رانش، تيكساس، كاتشب، باربيكيو",
        prices: { single: 135, double: 180 }
    },
    { 
        id: 11, 
        name: "ذا ماستر (فراخ) 👑", 
        category: "chicken", 
        icon: "fa-crown", 
        desc: "قطع فراخ كرسبي، قطعة جبنة مقلية + حلقات بصل مقلية + بيكون مع صوص the master، شيدر، طماطم، بصل، تيكساس، كاتشب، باربيكيو",
        prices: { single: 170, double: 215 }
    },

    // --- البطاطس ---
    { id: 12, name: "باكيت بطاطس مقرمشة 🍟", category: "sides", icon: "fa-box", desc: "باكيت بطاطس فارم فرتس مقرمشة", price: 45 },
    { id: 13, name: "بطاطس تشيزي ميزي 🧀", category: "sides", icon: "fa-cheese", desc: "باكيت بطاطس غرقانة بصوص الجبنة الشيدر", price: 60 },
    { id: 14, name: "بطاطس بومب فرايز 💣", category: "sides", icon: "fa-bomb", desc: "باكيت بطاطس بيكون مع باربيكيو وتيكساس صوص", price: 70 },
    { id: 15, name: "بطاطس تشيكي ميكي 🍗", category: "sides", icon: "fa-drumstick-bite", desc: "باكيت بطاطس قطع فراخ كرسبي مع شيدر وتيكساس صوص", price: 100 },
    { id: 16, name: "بطاطس بيفي ويفي 🥩", category: "sides", icon: "fa-bacon", desc: "باكيت بطاطس قطع لحمة مع شيدر وتيكساس صوص", price: 100 },

    // --- الإضافات والصوصات ---
    { id: 17, name: "صوص مستر", category: "addons", icon: "fa-jar", price: 20 },
    { id: 18, name: "صوص شيدر", category: "addons", icon: "fa-cheese", price: 20 },
    { id: 19, name: "صوص تيكساس", category: "addons", icon: "fa-flask", price: 20 },
    { id: 20, name: "صوص رانش", category: "addons", icon: "fa-whiskey-glass", price: 20 },
    { id: 21, name: "صوص باربيكيو", category: "addons", icon: "fa-fire", price: 15 },
    { id: 22, name: "هوت صوص", category: "addons", icon: "fa-pepper-hot", price: 15 },
    { id: 23, name: "صوص كاتشب", category: "addons", icon: "fa-bottle-droplet", price: 15 },
    { id: 24, name: "حلقات بصل", category: "addons", icon: "fa-circle-dot", price: 20 },
    { id: 25, name: "موتزاريلا ستيك", category: "addons", icon: "fa-cubes", price: 20 },
    { id: 26, name: "قطعة بيكون", category: "addons", icon: "fa-bacon", price: 15 },
    { id: 27, name: "لقمة عيش", category: "addons", icon: "fa-bread-slice", price: 10 },

    // --- المشروبات ---
    { id: 28, name: "مياه معدنية 💧", category: "drinks", icon: "fa-bottle-water", price: 15 },
    { id: 29, name: "مشروب غازي 🥤", category: "drinks", icon: "fa-wine-bottle", price: 20 }
];

let cart = [];
let selectedSizes = {};

// عرض المنيو
function renderMenu(items) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = items.map(item => {
        const isBurger = item.prices !== undefined;
        const currentSize = selectedSizes[item.id] || 'single';
        const currentPrice = isBurger ? item.prices[currentSize] : item.price;

        return `
            <div class="menu-card">
                <div>
                    <i class="fa-solid ${item.icon} card-icon"></i>
                    <div class="card-title">${item.name}</div>
                    <div class="card-desc">${item.desc || ''}</div>
                </div>
                
                <div class="card-actions">
                    ${isBurger ? `
                        <div class="size-selector">
                            <button class="size-btn ${currentSize === 'single' ? 'active' : ''}" onclick="selectSize(${item.id}, 'single')">سنجل</button>
                            <button class="size-btn ${currentSize === 'double' ? 'active' : ''}" onclick="selectSize(${item.id}, 'double')">دبل</button>
                        </div>
                    ` : ''}
                    
                    <div class="card-footer">
                        <span class="price">${currentPrice} <small style="font-size:0.75rem">ج.م</small></span>
                        <button class="add-btn" onclick="addToCart(${item.id})">
                            <i class="fa-solid fa-plus"></i> أضف للسلة
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// اختيار الحجم (سنجل / دبل)
function selectSize(itemId, size) {
    selectedSizes[itemId] = size;
    renderMenu(getCurrentFilteredMenu());
}

let currentCategory = 'all';
function filterMenu(category) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(event) event.target.classList.add('active');
    renderMenu(getCurrentFilteredMenu());
}

function getCurrentFilteredMenu() {
    if (currentCategory === 'all') return menuData;
    return menuData.filter(i => i.category === currentCategory);
}

// عمليات السلة
function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    const isBurger = item.prices !== undefined;
    
    const size = isBurger ? (selectedSizes[id] || 'single') : null;
    const price = isBurger ? item.prices[size] : item.price;
    const sizeLabel = size === 'single' ? ' (سنجل)' : size === 'double' ? ' (دبل)' : '';
    
    const cartItemId = isBurger ? `${id}-${size}` : `product-${id}`;
    const cartItemName = item.name + sizeLabel;

    const exist = cart.find(i => i.cartItemId === cartItemId);
    
    if (exist) {
        exist.qty += 1;
    } else {
        cart.push({ 
            cartItemId, 
            id: item.id, 
            name: cartItemName, 
            price: price, 
            qty: 1 
        });
    }
    updateCart();
}

function changeQty(cartItemId, delta) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.cartItemId !== cartItemId);
        }
    }
    updateCart();
}

function updateCart() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const cartTotal = document.getElementById('cartTotal');

    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    let finalTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartBadge.innerText = totalCount;
    cartTotal.innerText = finalTotal + " ج.م";

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<p style="text-align:center; color: var(--text-muted); margin-top:40px;">السلة فارغة حالياً 🛒</p>`;
        cartTotal.innerText = "0 ج.م";
        return;
    }

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <div style="font-weight:600; font-size:0.9rem;">${item.name}</div>
                <div style="color:var(--text-muted); font-size:0.85rem;">${item.price} × ${item.qty} ج.م</div>
            </div>
            <div class="item-controls">
                <button class="qty-btn" onclick="changeQty('${item.cartItemId}', -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty('${item.cartItemId}', 1)">+</button>
            </div>
        </div>
    `).join('');
}

// إرسال الطلب عبر الواتساب
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("⚠️ رجاءً أضف بعض المنتجات للسلة أولاً!");
        return;
    }

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();

    if (!name || !phone || !address) {
        alert("⚠️ يرجى ملء كافة بيانات التوصيل (الاسم، رقم الموبايل، والعنوان) قبل إتمام الطلب!");
        return;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
        alert("⚠️ رقم الموبايل يجب أن يحتوي على أرقام فقط!");
        return;
    }

    if (phone.length < 11) {
        alert(`⚠️ رقم الموبايل ناقص! كتبت ${phone.length} أرقام والمفروض يكون 11 رقم على الأقل.`);
        return;
    }

    let text = "🛠️ *طلب جديد - Engineering Burgers* 🛠️\n\n";
    text += `👤 *الاسم:* ${name}\n`;
    text += `📱 *رقم الموبايل:* ${phone}\n`;
    text += `📍 *العنوان:* ${address}\n\n`;
    text += `🛒 *تفاصيل الطلب:*\n`;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        text += `• ${item.name} | العدد: ${item.qty} | السعر: ${itemTotal} ج.م\n`;
    });
    
    let finalTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    text += `\n💰 *الإجمالي الكلي:* ${finalTotal} ج.م\n\n`;
    text += `🍔 *Engineering Burgers*`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

// التحكّم في دراور السلة
const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');

document.getElementById('openCart').addEventListener('click', () => {
    cartDrawer.classList.add('open');
    overlay.classList.add('active');
});

document.getElementById('closeCart').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

function closeCart() {
    cartDrawer.classList.remove('open');
    overlay.classList.remove('active');
}

// تشغيل المنيو عند البدء
renderMenu(menuData);