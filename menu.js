// ================= MENU DATA =================
const menuItems = [
  // ===== BREAKFAST =====
  {
    name: "Masala Dosa",
    desc: "Crispy dosa with spiced potato filling",
    price: 180,
    category: "Breakfast",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa.jpg"
  },
  {
    name: "Idli Sambhar",
    desc: "Steamed rice cakes with lentil soup",
    price: 150,
    category: "Breakfast",
    image: "https://t3.ftcdn.net/jpg/01/61/13/66/360_F_161136674_NgVFcPtWfwLPY03NpJUrSiH9oDvma9Rn.jpg"
  },

  // ===== CHICKEN DISHES =====
  {
    name: "Butter Chicken",
    desc: "Rich & creamy tomato gravy",
    price: 250,
    category: "Chicken Dishes",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?cs=srgb&dl=pexels-saveurssecretes-7625056.jpg&fm=jpg"
  },
  {
    name: "Chicken Tikka",
    desc: "Grilled chicken with spices",
    price: 260,
    category: "Chicken Dishes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_OxvwX_viJ5Yz-bo0KQWUOLHr0_DwofVnA&s"
  },

  // ===== BIRYANI =====
  {
    name: "Chicken Biryani",
    desc: "Fragrant basmati rice & spices",
    price: 260,
    category: "Biryani",
    image: "https://img.freepik.com/premium-photo/plate-food-with-noodles-meat-vegetables_1197144-525.jpg"
  },
  {
    name: "Veg Biryani",
    desc: "Mixed vegetable dum biryani",
    price: 220,
    category: "Biryani",
    image: "https://www.shutterstock.com/image-photo/veg-biryani-tempting-600nw-2583130989.jpg"
  },

  // ===== DESSERTS =====
  {
    name: "Gulab Jamun",
    desc: "Soft milk balls in sugar syrup",
    price: 120,
    category: "Desserts",
    image: "https://t4.ftcdn.net/jpg/10/17/65/75/360_F_1017657553_BFjfgC9jaR5KFxJKfQZxVySUnYZ211bR.jpg"
  },
  {
    name: "Ice Cream Sundae",
    desc: "Vanilla ice cream with toppings",
    price: 140,
    category: "Desserts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjuILyACqbB7eHeR-F3LvlgQOAvJOoeYy9A&s"
  },

  // ===== DRINKS =====
  {
    name: "Cold Coffee",
    desc: "Chilled coffee with cream",
    price: 110,
    category: "Drinks",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPC4muqQkwyoI0I1LxSGM9k7l2-VZv9Xe3Q&s"
  },
  {
    name: "Fresh Lime Soda",
    desc: "Refreshing lime & soda",
    price: 90,
    category: "Drinks",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20251023/pngtree-fresh-mint-mojito-splash-with-lime-soda-bubbles-and-ice-cubes-image_19965166.webp"
  }
];
const menuGrid = document.getElementById("menuGrid");
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");

let activeCategory = "All Dishes";
function renderMenu(items) {
  menuGrid.innerHTML = "";

  if (items.length === 0) {
    menuGrid.innerHTML = "<p>No dishes found.</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="content">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <span class="price">₹${item.price}</span>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

function getCategories() {
  const categories = ["All Dishes"];
  menuItems.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  return categories;
}

function renderCategories() {
  const categories = getCategories();
  categoryList.innerHTML = "";

  categories.forEach(cat => {
    const count =
      cat === "All Dishes"
        ? menuItems.length
        : menuItems.filter(i => i.category === cat).length;

    const div = document.createElement("div");
    div.className = `category ${cat === activeCategory ? "active" : ""}`;
    div.innerHTML = `${cat} <span class="badge">${count}</span>`;

    div.onclick = () => {
      activeCategory = cat;
      filterMenu();
      renderCategories();
    };

    categoryList.appendChild(div);
  });
}

function filterMenu() {
  let filtered = [...menuItems];

  if (activeCategory !== "All Dishes") {
    filtered = filtered.filter(item => item.category === activeCategory);
  }

  const search = searchInput.value.toLowerCase();
  if (search) {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(search)
    );
  }

  renderMenu(filtered);
}

searchInput.addEventListener("input", filterMenu);

renderCategories();
renderMenu(menuItems);
