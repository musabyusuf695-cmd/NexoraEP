// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
// DARK MODE

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
      themeBtn.innerHTML = "☀️";
    } else {
      themeBtn.innerHTML = "🌙";
    }
  });
}
// IMAGE SLIDER

const sliderImages = [
  "images/slider1.jpg",
  "images/slider2.jpg",
  "images/slider3.jpg",
  "images/slider4.jpg",
  "images/slider5.jpg",
  "images/slider6.jpg",
  "images/slider7.jpg",
  "images/slider8.jpg",
  "images/slider9.jpg",
  "images/slider10.jpg",
  "images/slider11.jpg",
  "images/slider12.jpg",
  "images/slider13.jpg",
  "images/slider14.jpg",
  "images/slider7.jpg",
  "images/slider8.jpg"
];

const sliderImage = document.getElementById("slider-image");

let currentSlide = 0;

setInterval(() => {
  currentSlide++;
  
  if (currentSlide >= sliderImages.length) {
    currentSlide = 0;
  }
  
  sliderImage.src = sliderImages[currentSlide];
}, 3000);
// SEARCH DATA

const items = [
  
  { keywords: ["sofa", "cushion"], page: "sofa.html" },
  
  { keywords: ["wardrobe"], page: "wardrobe.html" },
  
  { keywords: ["bed"], page: "bed.html" },
  
  { keywords: ["kitchen", "cabinet"], page: "kitchen-cabinet.html" },
  
  { keywords: ["door"], page: "door.html" },
  
  { keywords: ["cornice", "cornice board"], page: "cornice-board.html" },
  
  { keywords: ["kid", "kids", "children"], page: "kid-room.html" },
  
  { keywords: ["shoe", "bag", "shoe rack"], page: "shoe-rack.html" },
  
  { keywords: ["tv", "tv stand"], page: "tv-stand.html" },
  
  { keywords: ["office", "desk"], page: "office-furniture.html" },
  
  { keywords: ["repair", "wood repair"], page: "wood-repair.html" },
  
  { keywords: ["solar"], page: "solar.html" },
  
  { keywords: ["electric", "electrical"], page: "electrical.html" }
  ]
const suggestions = [
  "Sofa",
  "Wardrobe",
  "Bed",
  "Kitchen Cabinet",
  "Door",
  "Cornice Board",
  "Kids Room Furniture",
  "Shoe Rack",
  "TV Stand",
  "Office Furniture",
  "Wood Repair",
  "Solar Installation",
  "Electrical Installation"
];
// SEARCH FUNCTION

function searchItems() {
  
  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();
  
  for (const item of items) {
    
    for (const keyword of item.keywords) {
      
      if (input.includes(keyword)) {
        window.location.href = item.page;
        return;
      }
      
    }
    
  }
  
  alert("Item not found.");
  
}
// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll(
  ".card, .action-card, .why-card, .review-card, .contact-card, .product-card, .service-card"
);

const observer = new IntersectionObserver((entries) => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
    
  });
  
});

hiddenElements.forEach((el) => observer.observe(el));
// ACTIVE NAVIGATION

const currentPage =
  window.location.pathname.split("/")
  .pop();

const navItems =
  document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
  
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
  
});
const imageInput = document.getElementById("projectImage");
const previewImage = document.getElementById("previewImage");

imageInput.addEventListener("change", function() {
  
  const file = this.files[0];
  
  if (file) {
    previewImage.src = URL.createObjectURL(file);
    previewImage.style.display = "block";
  }
  
});
const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", function() {
  
  const value = this.value.toLowerCase().trim();
  
  suggestionsBox.innerHTML = "";
  
  if (value === "") {
    suggestionsBox.style.display = "none";
    return;
  }
searchInput.addEventListener("keypress", function(e) {
  
  if (e.key === "Enter") {
    e.preventDefault();
    searchItems();
  }
  
});
  const matches = suggestions.filter(item =>
    item.toLowerCase().includes(value)
  );
  
  matches.forEach(item => {
    
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerText = item;
    
    div.onclick = function() {
  
  searchInput.value = item;
  suggestionsBox.style.display = "none";
  
  searchItems();
  
};
    suggestionsBox.appendChild(div);
    
  });
  
  suggestionsBox.style.display =
    matches.length ? "block" : "none";
  
});
// SEND REQUEST TO WHATSAPP

const requestForm = document.getElementById("requestForm");

if (requestForm) {
  
  requestForm.addEventListener("submit", function(e) {
    
    e.preventDefault();
    
const name = document.getElementById("fullName").value;
const location = document.getElementById("location").value;
    const design =
    document.getElementById("designNumber").value;
    const category = document.querySelector("select").value;
    const description = document.querySelector("textarea").value;
let message = "";
if (currentLanguage === "ha") {
  
  message =
    `Sannu Nexora,

👤 Suna: ${name}
🔢 Lambar Zane: ${design}
📍 Wuri: ${location}
🛠️ Bukata: ${category}

📝 Bayani:
${description}`;
  
} else {
  
  message =
    `Hello Nexora,

👤 Name: ${name}
🔢 Design Number: ${design}
📍 Location: ${location}
🛠️ Service: ${category}

📝 Description:
${description}`;
  
}
    const whatsappUrl =
      `https://wa.me/2347075525894?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
  });
  
}
const enBtn = document.getElementById("enBtn");
const haBtn = document.getElementById("haBtn");
let currentLanguage = "en";
haBtn.onclick = function() {
currentLanguage = "ha";
  // Search
  document.getElementById("searchTitle").innerText =
    "Me kake nema yau?";
  document.getElementById("searchInput").placeholder =
    "Nemi kaya ko sabis...";
  document.getElementById("searchBtn").innerText =
    "Bincika";
document.getElementById("navHome").innerText = "Gida";
document.getElementById("navProducts").innerText = "Kayayyaki";
document.getElementById("navServices").innerText = "Ayyuka";
document.getElementById("navRequest").innerText = "Bukata";
document.getElementById("navAbout").innerText = "Game da Mu";
document.getElementById("navContact").innerText = "Tuntuɓe Mu";
document.getElementById("fullName").placeholder = "Cikakken Suna";

document.getElementById("designNumber").placeholder =
  "Lambar Zane (misali SF-001)";

document.getElementById("location").placeholder =
  "Wurin da kake";

document.getElementById("uploadLabel").innerHTML =
  '<span class="upload-icon">📷</span> Saka Hoto';

document.getElementById("description").placeholder =
  "Misali: Ina son kujera mai zama 6 mai launin toka.";

document.getElementById("sendBtn").innerText =
  "Tura ta WhatsApp";
document.getElementById("smallText").innerText =
  "✅ Farashi kyauta • Amsa cikin sauri • Babu tilas";
  
  // Hero
  document.getElementById("welcomeText").innerText =
    "BARKA DA ZUWA NEXORA";
  
  document.getElementById("heroTitle").innerText =
    "Kayan Daki na Musamman, Gyaran Itace, Aikin Lantarki da Solar";
  
  document.getElementById("heroDesc").innerText =
    "Muna ƙera kayan daki na zamani, muna gyaran kayan itace, muna aikin lantarki da kuma girka tsarin hasken rana.";
  
  document.getElementById("productsBtn").innerText =
    "Duba Kayayyaki";
  
  document.getElementById("requestBtn").innerText =
    "Tura Bukatarka";
};

enBtn.onclick = function() {
currentLanguage = "en";
  // Search
  document.getElementById("searchTitle").innerText =
    "What are you looking for today?";
  document.getElementById("searchInput").placeholder =
    "Search products or services...";
  document.getElementById("searchBtn").innerText =
    "Search";
    
// Navigation
document.getElementById("navHome").innerText = "Home";
document.getElementById("navProducts").innerText = "Products";
document.getElementById("navServices").innerText = "Services";
document.getElementById("navRequest").innerText = "Request";
document.getElementById("navAbout").innerText = "About";
document.getElementById("navContact").innerText = "Contact";
document.getElementById("fullName").placeholder =
  "Full Name";

document.getElementById("designNumber").placeholder =
  "Design Number (e.g. SF-001 or WD-015)";

document.getElementById("location").placeholder =
  "Location";

document.getElementById("uploadLabel").innerHTML =
  '<span class="upload-icon">📷</span> Upload an Image';

document.getElementById("description").placeholder =
  "Example: I need a 6-seater sofa in grey fabric for my living room.";

document.getElementById("sendBtn").innerText =
  "Send on WhatsApp";
document.getElementById("smallText").innerText =
  "✅ Free quotation • Fast response • No obligation";
  // Hero
  document.getElementById("welcomeText").innerText =
    "WELCOME TO NEXORA";
  
  document.getElementById("heroTitle").innerText =
    "Custom Furniture, Wood Repair, Electrical & Solar Solutions";
  
  document.getElementById("heroDesc").innerText =
    "We build modern furniture, repair wood products and provide professional electrical and solar installation services.";
  
  document.getElementById("productsBtn").innerText =
    "Browse Products";
  
  document.getElementById("requestBtn").innerText =
    "Send Request";
};
