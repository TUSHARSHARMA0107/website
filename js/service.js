const products = [
      {
          id: 1,
          name: "Yoga Mat",
          category: "equipment",
          price: 25,
          image: "https://via.placeholder.com/200?text=Yoga+Mat"
      },
      {
          id: 2,
          name: "Protein Powder",
          category: "supplements",
          price: 50,
          image: "https://via.placeholder.com/200?text=Protein+Powder"
      },
      {
          id: 3,
          name: "Fitness T-Shirt",
          category: "apparel",
          price: 15,
          image: "https://via.placeholder.com/200?text=Fitness+T-Shirt"
      },
      {
          id: 4,
          name: "Dumbbell Set",
          category: "equipment",
          price: 100,
          image: "../images/e881812e1bdbed904cebc6b20d06cb3b.jpg"
      }
  ];
  
  function displayProducts(products) {
      productsContainer.innerHTML = "";
      products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
          `;
          productsContainer.appendChild(productCard);
      });
  }