function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  const produk = getQueryParameter('produk');
  
  const products = {
    "kemeja-formal-cowok": {
      image: "baju-cowok1.jpg",
      title: "Kemeja Formal Cowok",
      description: "Kemeja formal yang cocok untuk acara formal dan semi-formal. Terbuat dari bahan berkualitas, nyaman digunakan sepanjang hari.",
      price: "Rp 250.000",
    },
    "kaos-santai-cowok": {
      image: "baju-cowok2.jpg",
      title: "Kaos Santai Cowok",
      description: "Kaos santai yang nyaman untuk digunakan sehari-hari. Tersedia dalam berbagai ukuran.",
      price: "Rp 100.000",
    },
    "jaket-kulit-cowok": {
      image: "baju-cowok3.jpg",
      title: "Jaket Kulit Cowok",
      description: "Jaket kulit berkualitas tinggi yang memberikan gaya dan kehangatan.",
      price: "Rp 400.000",
    },
    "dress-kasual-cewek": {
      image: "baju-cewek1.jpg",
      title: "Dress Kasual Cewek",
      description: "Dress kasual yang cocok untuk berbagai acara santai.",
      price: "Rp 300.000",
    },
    "blouse-cewek": {
      image: "baju-cewek2.jpg",
      title: "Blouse Cewek",
      description: "Blouse elegan yang cocok untuk tampilan sehari-hari.",
      price: "Rp 200.000",
    },
    "cardigan-cewek": {
      image: "baju-cewek3.jpg",
      title: "Cardigan Cewek",
      description: "Cardigan yang nyaman untuk digunakan di berbagai suasana.",
      price: "Rp 250.000",
    },
    "sepatu-sneakers-cowok": {
      image: "sepatu-cowok1.jpg",
      title: "Sepatu Sneakers Cowok",
      description: "Sepatu sneakers yang stylish dan nyaman untuk kegiatan sehari-hari.",
      price: "Rp 500.000",
    },
    "sepatu-formal-cowok": {
      image: "sepatu-cowok2.jpg",
      title: "Sepatu Formal Cowok",
      description: "Sepatu formal yang cocok untuk acara resmi dan pernikahan.",
      price: "Rp 600.000",
    },
    "sepatu-olahraga-cowok": {
      image: "sepatu-cowok3.jpg",
      title: "Sepatu Olahraga Cowok",
      description: "Sepatu yang dirancang khusus untuk aktivitas olahraga dan kebugaran.",
      price: "Rp 700.000",
    },
    "sepatu-heels-cewek": {
      image: "sepatu-cewek1.jpg",
      title: "Sepatu Heels Cewek",
      description: "Sepatu heels yang elegan untuk acara formal dan pesta.",
      price: "Rp 450.000",
    },
    "sepatu-casual-cewek": {
      image: "sepatu-cewek2.jpg",
      title: "Sepatu Casual Cewek",
      description: "Sepatu casual yang nyaman dan trendy untuk penggunaan sehari-hari.",
      price: "Rp 350.000",
    },
    "sepatu-sneakers-cewek": {
      image: "sepatu-cewek3.jpg",
      title: "Sepatu Sneakers Cewek",
      description: "Sepatu sneakers modis yang cocok untuk gaya santai.",
      price: "Rp 550.000",
    },
    "tas-ransel-cowok": {
      image: "tas-cowok1.jpg",
      title: "Tas Ransel Cowok",
      description: "Tas ransel yang stylish dan cocok untuk aktivitas sehari-hari.",
      price: "Rp 350.000",
    },
    "tas-selempang-cowok": {
      image: "tas-cowok2.jpg",
      title: "Tas Selempang Cowok",
      description: "Tas selempang yang praktis dan nyaman untuk dibawa kemana saja.",
      price: "Rp 250.000",
    },
    "tas-gym-cowok": {
      image: "tas-cowok3.jpg",
      title: "Tas Gym Cowok",
      description: "Tas gym yang dirancang untuk menyimpan perlengkapan olahraga.",
      price: "Rp 450.000",
    },
    "tas-tote-cewek": {
      image: "tas-cewek1.jpg",
      title: "Tas Tote Cewek",
      description: "Tas tote yang elegan dan cocok untuk berbagai acara.",
      price: "Rp 300.000",
    },
    "tas-punggung-cewek": {
      image: "tas-cewek2.jpg",
      title: "Tas Punggung Cewek",
      description: "Tas punggung yang stylish dan nyaman untuk penggunaan sehari-hari.",
      price: "Rp 400.000",
    },
    "tas-clutch-cewek": {
      image: "tas-cewek3.jpg",
      title: "Tas Clutch Cewek",
      description: "Tas clutch yang sempurna untuk acara malam dan pesta.",
      price: "Rp 250.000",
    },
  };
  
  const productDetailDiv = document.getElementById('productDetail');
  
  if (produk && products[produk]) {
    const product = products[produk];
    productDetailDiv.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
  
      <div class="product-info">
        <h2>${product.title}</h2>
        <p class="description">${product.description}</p>
        <p class="price">${product.price}</p>
        
        <div class="product-options">
          <div class="size">
            <label for="size">Ukuran:</label>
            <select id="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
  
          <div class="color">
            <label for="color">Warna:</label>
            <select id="color">
              <option value="Putih">Putih</option>
              <option value="Hitam">Hitam</option>
              <option value="Abu-abu">Abu-abu</option>
            </select>
          </div>
  
          <div class="quantity">
            <label for="quantity">Jumlah:</label>
            <input type="number" id="quantity" min="1" value="1">
          </div>
  
          <div class="stock">
            <p>Ketersediaan: <span class="available">Tersedia</span></p>
          </div>
        </div>
  
        <div class="product-actions">
          <button class="cart-btn" onclick="addToCart('${produk}')">Tambahkan ke Keranjang</button>
          <button class="wishlist-btn" onclick="addToWishlist('${produk}')">Tambahkan ke Wishlist</button>
        </div>
      </div>
    `;
  } else {
    productDetailDiv.innerHTML = `<p>Produk tidak ditemukan.</p>`;
  }
  
  function addToCart(productId) {
    const product = products[productId];
    const quantity = document.getElementById('quantity').value;
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingProductIndex = cart.findIndex(item => item.title === product.title);
  
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += parseInt(quantity);
    } else {
      cart.push({
        title: product.title,
        price: product.price,
        quantity: parseInt(quantity),
        size: document.getElementById('size').value,
        color: document.getElementById('color').value,
      });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert(`${product.title} telah ditambahkan ke keranjang!`);
    window.location.href = "shopping-cart.html";
  }
  
  function addToWishlist(productId) {
    const product = products[productId];
  
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    const existingProduct = wishlist.find(item => item.title === product.title);
  
    if (!existingProduct) {
      wishlist.push({
        title: product.title,
        price: product.price,
        image: product.image,
      });
  
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert(`${product.title} telah ditambahkan ke wishlist!`);
    } else {
      alert(`${product.title} sudah ada di wishlist.`);
    }
  }

  const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");

// Event listener untuk form komentar
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const commentText = commentInput.value;

  // Menambahkan komentar baru
  const newComment = document.createElement("div");
  newComment.classList.add("comment");
  newComment.textContent = commentText;

  commentsList.appendChild(newComment);

  // Mengosongkan input setelah mengirim komentar
  commentInput.value = '';
});

  