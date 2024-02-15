const toggleMenu = () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display =
    navLinks.style.display === "flex" || navLinks.style.display === ""
      ? "none"
      : "flex";
};

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.querySelector(".nav-links").style.display = "flex";
  } else {
    document.querySelector(".nav-links").style.display = "none";
  }
});

//..........................

function showPopup(serviceId) {
  var popup = document.getElementById("servicePopup");
  var title = document.getElementById("popupTitle");
  var content = document.getElementById("popupContent");
  var image = document.getElementById("popupImage");
  

  switch (serviceId) {
    case "service1":
      title.innerText = "1-on-1 Personal Training";
      content.innerHTML = `
                <p>Our 1-on-1 personal training services are tailored to your needs, preferences, and fitness level. With individualized attention from your certified coach, you'll receive:</p>
                <ul>
                    <li>Expert guidance, motivation, and support</li>
                    <li>Customized sessions designed to help you reach your goals</li>
                    <li>Personalized workout plans</li>
                    <li>Flexibility to accommodate your schedule</li>
                </ul>
            `;
      image.src = "Images/video_consultation.jpg";
      break;
    case "service2":
      title.innerText = "Online Coaching";
      content.innerHTML = `
                <p>Our online personal training services offer flexibility and guidance tailored to your goals:</p>
                <ul>
                    <li>Personalized training programs</li>
                    <li>Accountability and motivation from a certified trainer</li>
                    <li>Fitness coaching from the comfort of your home</li>
                    <li>Support to kickstart your fitness journey or reach new heights</li>
                </ul>
            `;
      image.src = "Images/online_coaching.jpg";
      break;
    case "service3":
      title.innerText = "Group Fitness Class";
      content.innerHTML = `
                <p>Join our group fitness classes or create your own for friends and family:</p>
                <ul>
                    <li>Choose from a variety of classes such as HIIT, Boot Camp, or Tabata</li>
                    <li>Sign up for outdoor fitness classes</li>
                    <li>Workout with others and stay motivated</li>
                </ul>
            `;
      image.src = "Images/group_fitness_class.jpg";
      break;
    case "service4":
      title.innerText = "Pre-Written Training Program";
      content.innerHTML = `
                <p>Explore our selection of pre-written training programs:</p>
                <ul>
                    <li>Choose from various programs</li>
                    <li>Semi-customizable templates for flexibility</li>
                    <li>Option to fully customize your program</li>
                </ul>
            `;
      image.src = "Images/pre_written_training_program.jpg";
      break;
    case "service5":
      title.innerText = "Home Coaching";
      content.innerHTML = `
                <p>Experience personalized coaching from the comfort of your home:</p>
                <ul>
                    <li>Professional guidance and support</li>
                    <li>Customized programs tailored to your needs</li>
                    <li>Convenience and comfort as you pursue your fitness goals</li>
                </ul>
            `;
      image.src = "Images/home_coaching.jpg";
      break;
    // Add more cases for additional services as needed

    default:
      break;
  }



  popup.style.display = "flex";
}



  // Event listener for the modal overlay
  document.getElementById('servicePopup').addEventListener('click', function (event) {
    if (event.target.id === 'servicePopup') {
        closePopup();
    }
});

// Function to close the product modal
function closePopup() {
    var modal = document.getElementById("servicePopup");
    modal.style.display = "none";

    // Show overlays when closing the popup
    toggleOverlays(false);
}


// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events and trigger animations
function handleScroll() {
  const servicesSection = document.getElementById("services");

  if (isSectionOutOfView(servicesSection)) {
    servicesSection.classList.remove("show");
  } else {
    servicesSection.classList.add("show");
  }
}

// Function to check if the entire section is out of the viewport
function isSectionOutOfView(section) {
  const rect = section.getBoundingClientRect();
  return (
    rect.bottom <= 0 ||
    rect.top >= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Event listener for scroll events
document.addEventListener("scroll", handleScroll);

// Initial check on page load
document.addEventListener("DOMContentLoaded", handleScroll);





// Define a global cart object to store items and their quantities
let cart = {};

// Function to toggle the visibility of the shopping cart
function toggleCartPopup() {
    var cartPopup = document.getElementById("cartPopup");
    cartPopup.style.right = cartPopup.style.right === "0px" ? "-300px" : "0";
}

// Function to update the cart quantity display
function updateCartQuantity() {
    const cartQuantity = document.getElementById('cartQuantity');
    // Get the total quantity from the cart object
    const totalQuantity = Object.values(cart).reduce((acc, val) => acc + val, 0);
    cartQuantity.innerText = totalQuantity;
}

// Function to update the cart quantity display and cart content
function updateCart() {
    const cartQuantity = document.getElementById('cartQuantity');
    const cartPopupContent = document.getElementById('cartPopupContent');

    // Get the total quantity from the cart object
    const totalQuantity = Object.values(cart).reduce((acc, val) => acc + val, 0);

    // Update the cart quantity display
    cartQuantity.innerText = totalQuantity;

    // Update the cart content
    if (totalQuantity > 0) {
        // Cart is not empty, display items
        let cartItemsHtml = '<ul>';
        for (const [productId, quantity] of Object.entries(cart)) {
            cartItemsHtml += `<li>${productId}: ${quantity}</li>`;
        }
        cartItemsHtml += '</ul>';
        cartPopupContent.innerHTML = cartItemsHtml;
    } else {
        // Cart is empty
        cartPopupContent.innerHTML = '<p>Your Cart is Empty</p>';
    }

    // Update the local storage with the cart data
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add an item to the cart
function addToCart(productId) {
    // Check if the product is already in the cart
    if (cart[productId] !== undefined) {
        // Product is already in the cart, increment the quantity
        cart[productId]++;
    } else {
        // Product is not in the cart, add it with a quantity of 1
        cart[productId] = 1;
    }

    // Update the cart quantity display and cart content
    updateCart();
    // Log the updated cart object (for testing purposes)
    console.log('Updated Cart:', cart);
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    // Update the cart object by reducing the quantity of the specified item
    if (cart[productId]) {
        cart[productId]--;
        if (cart[productId] === 0) {
            delete cart[productId]; // Remove the item if the quantity becomes zero
        }
    }
    // Update the cart quantity display
    updateCartQuantity();
    // Log the updated cart object (for testing purposes)
    console.log('Updated Cart:', cart);
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart data from local storage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        // Update the cart quantity display and cart content
        updateCart();
    } else {
        // If no cart data is found in local storage, initialize an empty cart
        cart = {};
    }

    // Update the cart quantity on page load
    updateCartQuantity();

    // You can add more logic here based on your specific needs
});

// Function to handle the checkout process
function checkout() {
    // Check if the cart is not empty
    if (Object.keys(cart).length > 0) {
        // Assuming you want to create a WhatsApp message with the cart items
        const cartItemsString = Object.entries(cart)
            .map(([product, quantity]) => `${product}: ${quantity}`)
            .join('\n');

        // Replace this with your actual WhatsApp number
        const whatsappNumber = '+23058665430';

        // Create a WhatsApp message with the cart items
        const whatsappMessage = `Hi, I would like to purchase the following items:\n${cartItemsString}`;

        // Open WhatsApp with a pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        
        // Clear the cart after checkout
        clearCart();
    } else {
        alert('Your cart is empty. Add items to the cart before checking out.');
    }
}

function clearCart() {
    // Reset the cart object
    cart = {};
    // Update the cart quantity display and cart content
    updateCart();
}


// Update the cart display
function updateCartDisplay() {
  var cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  cartQuantityElement.innerText = cartQuantity;
}
