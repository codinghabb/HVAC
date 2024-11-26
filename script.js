// Function to hide loader once the page content is loaded
function hideLoader() {
    document.getElementById('loader').classList.add('hidden');
  }
  function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the product already exists in the cart
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
      existingItem.quantity += 1;  // Increase the quantity if it exists
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert(productName + " has been added to your cart!");
    updateCartTotal();  // Update the cart total in the navbar or anywhere else
  }
  