function goToHomePage() {
    // Replace this URL with the actual URL of your home page
    window.location.href = "../index.html#products";
}

function goToFieldSportTemplate() {
    // Replace this URL with the actual URL of your Field Sport Template
    window.location.href = "../Field-Sport/field_sport_template.html";
}

function goToHypertrophy() {
    // Replace this URL with the actual URL of your home page
    window.location.href = "../Hypertrophy/hypertrophy_template.html";
}




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


function openModal(productName) {
    var modal = document.getElementById("productModal");
    var modalContent = document.getElementById("modalContent");
    var modalImage = document.getElementById("modalImage");

    var overlays = document.querySelectorAll('.product-overlay');
    overlays.forEach(function (overlay) {
        overlay.classList.add('overlay-hide');
    });

    // Hide overlays when opening the popup
    toggleOverlays(true);
  
    switch (productName) {
      case "product 1":
        modalContent.innerHTML = `
                  <h2>FULL-BODY Hypertrophy Training Template</h2>
                  <p>The Full-Body (3-Days per Week) Hypertrophy Training Template is a semi-customizable Google Sheet document which allows you to easily create your own hypertrophy mesocycle. This template can be adjusted and re-used to create an infinite number of mesocycles over time.</p>
          <p>The program follows a full-body split with the following muscle groups being trained on each day:</p>
          <ul>
              <li>Chest / Shoulders</li>
              <li>Back</li>
              <li>Quadriceps</li>
              <li>Hamstrings / Glutes</li>
              <li>Triceps</li>
              <li>Biceps</li>
              <li>Calves</li>
          </ul>
          <p>With this template, you can customize the following variables to suit your individual needs:</p>
          <ul>
              <li>Customizable volume for each muscle group</li>
              <li>Customizable exercise selection for each session & ability to add your own exercises</li>
              <li>Prescribe & record reps and load to track performance over time</li>
              <li>Customizable number of weeks (2-10 weeks)</li>
          </ul>
          <p>Price: ₨1200</p>
          <button class="addToCart" onclick="addToCart('product 1')">Add to Cart</button>
      `;
        modalImage.src = "/Images/full_body.jpg"; 
        break;
  
        case "product 2":
        modalContent.innerHTML = `
                  <h2>UPPER-LOWER (4-DAYS PER WEEK) HYPERTROPHY TRAINING TEMPLATE</h2>
                  <p>The Upper-Lower (4-Days per Week) Hypertrophy Training Template is a semi-customizable Google Sheet document which allows you to easily create your own hypertrophy mesocycle. This template can be adjusted and re-used to create an infinite number of mesocycles over time.</p>
          <p>The program follows an upper-lower split with the following muscle groups being trained on each day:</p>
          <ul>
              <li>Days 1 & 3:
                  <ul>
                      <li>Chest</li>
                      <li>Back</li>
                      <li>Triceps</li>
                      <li>Biceps</li>
                  </ul>
              </li>
              <li>Days 2 & 4:
                  <ul>
                      <li>Quadriceps</li>
                      <li>Hamstrings/Glutes</li>
                      <li>Calves</li>
                  </ul>
              </li>
          </ul>
          <p>With this template, you can customize the following variables to suit your individual needs:</p>
          <ul>
              <li>Customizable volume for each muscle group</li>
              <li>Customizable exercise selection for each session & ability to add your own exercises</li>
              <li>Prescribe & record reps and load to track performance over time</li>
              <li>Customizable number of weeks (2-10 weeks)</li>
          </ul>
          <p>Price: ₨1200</p>
          <button class="addToCart" onclick="addToCart('product 2')">Add to Cart</button>
      `;
        modalImage.src = "/Images/upper-lower-hyper.jpg"; 
        break;
  
        case "product 3":
        modalContent.innerHTML = `
                  <h2>UPPER-LOWER-SHOULDERS & ARMS (5-DAYS PER WEEK) HYPERTROPHY TRAINING TEMPLATE</h2>
                  <p>The Upper-Lower-Shoulders & Arms (5-Days per Week) Hypertrophy Training Template is a semi-customizable Google Sheet document which allows you to easily create your own hypertrophy mesocycle. This template can be adjusted and re-used to create an infinite number of mesocycles over time.</p>
          <p>The program follows an upper-lower-shoulders & arms split with the following muscle groups being trained on each day:</p>
          <ul>
              <li>Days 1 & 3:
                  <ul>
                      <li>Chest</li>
                      <li>Back</li>
                      <li>Triceps</li>
                      <li>Biceps</li>
                  </ul>
              </li>
              <li>Days 2 & 4:
                  <ul>
                      <li>Quadriceps</li>
                      <li>Hamstrings / Glutes</li>
                      <li>Calves</li>
                  </ul>
              </li>
              <li>Day 5:
                  <ul>
                      <li>Front / Middle Delts</li>
                      <li>Rear Delts. / Traps</li>
                      <li>Biceps</li>
                      <li>Triceps</li>
                  </ul>
              </li>
          </ul>
          <p>With this template, you can customize the following variables to suit your individual needs:</p>
          <ul>
              <li>Customizable volume for each muscle group</li>
              <li>Customizable exercise selection for each session & ability to add your own exercises</li>
              <li>Prescribe & record reps and load to track performance over time</li>
              <li>Customizable number of weeks (2-10 weeks)</li>
          </ul>
          <p>Price: ₨1200</p>
          <button class="addToCart" onclick="addToCart('product 3')">Add to Cart</button>
      `;
        modalImage.src = "/Images/upper-lower-shoulder.jpg"; 
        break;
  
        case "product 4":
        modalContent.innerHTML = `
                  <h2>PUSH-PULL-LEGS (6-DAYS PER WEEK) HYPERTROPHY TRAINING TEMPLATE</h2>
                  <p>Best Seller</p>
          <p>The Push-Pull-Legs (6-Days per Week) Hypertrophy Training Template is a semi-customizable Google Sheet document which allows you to easily create your own hypertrophy mesocycle. This template can be adjusted and re-used to create an infinite number of mesocycles over time.</p>
          <p>The program follows a push-pull-legs split with the following muscle groups being trained on each day:</p>
          <ul>
              <li>Days 1 & 4:
                  <ul>
                      <li>Chest</li>
                      <li>Front / Middle Delts</li>
                      <li>Triceps</li>
                  </ul>
              </li>
              <li>Days 2 & 5:
                  <ul>
                      <li>Back</li>
                      <li>Rear Delts. / Traps</li>
                      <li>Biceps</li>
                  </ul>
              </li>
              <li>Days 3 & 6:
                  <ul>
                      <li>Quadriceps</li>
                      <li>Hamstrings / Glutes</li>
                      <li>Calves</li>
                  </ul>
              </li>
          </ul>
          <p>With this template, you can customize the following variables to suit your individual needs:</p>
          <ul>
              <li>Customizable volume for each muscle group</li>
              <li>Customizable exercise selection for each session & ability to add your own exercises</li>
              <li>Customizable proximity to failure using either RPE or RIR</li>
              <li>Prescribe & record reps and load to track performance over time</li>
              <li>Customizable number of weeks (2-10 weeks)</li>
          </ul>
          <p>Price: ₨1200</p>
          <button class="addToCart" onclick="addToCart('product 4')">Add to Cart</button>
      `;
        modalImage.src = "/Images/push-pull-legs.jpg"; 
        break;
  
        case "product 5":
        modalContent.innerHTML = `
                  <h2>UPPER-UPPER-LOWER (6-DAYS PER WEEK) HYPERTROPHY TRAINING TEMPLATE</h2>
                  <p>Best Seller</p>
                  <p>The Upper-Upper-Lower (6-Days per Week) Hypertrophy Training Template is a semi-customizable Google Sheet document which allows you to easily create your own hypertrophy mesocycle. This template can be adjusted and re-used to create an infinite number of mesocycles over time.</p>
                  <p>The program follows an upper-upper-lower split with the following muscle groups being trained on each day:</p>
                  <ul>
                      <li>Days 1 & 4:
                          <ul>
                              <li>Chest</li>
                              <li>Back</li>
                              <li>Front / Middle Delts</li>
                              <li>Triceps</li>
                              <li>Biceps</li>
                          </ul>
                      </li>
                      <li>Days 2 & 5:
                          <ul>
                              <li>Chest</li>
                              <li>Back</li>
                              <li>Rear Delts. / Traps</li>
                              <li>Triceps</li>
                              <li>Biceps</li>
                          </ul>
                      </li>
                      <li>Days 3 & 6:
                          <ul>
                              <li>Quadriceps</li>
                              <li>Hamstrings / Glutes</li>
                              <li>Calves</li>
                          </ul>
                      </li>
                  </ul>
                  <p>With this template, you can customize the following variables to suit your individual needs:</p>
                  <ul>
                      <li>Customizable volume for each muscle group</li>
                      <li>Customizable exercise selection for each session & ability to add your own exercises</li>
                      <li>Customizable proximity to failure using either RPE or RIR</li>
                      <li>Prescribe & record reps and load to track performance over time</li>
                      <li>Customizable number of weeks (2-10 weeks)</li>
                  </ul>
                  <p>Price: ₨1200</p>
                  <button class="addToCart" onclick="addToCart('product 5')">Add to Cart</button>
              `;
        modalImage.src = "/Images/upper-upper-lower.jpg"; 
        break;
  
        case "product 6":
        modalContent.innerHTML = `
                  <h2>HYPERTROPHY PROGRAM CREATOR (FULLY CUSTOMISABLE)</h2>
                  <p>The Hypertrophy Program Creator is a fully customisable Excel file that allows you to create unlimited training programs to suit your individual needs. With endless ways to customise this template, this may be the last training program you will ever need.</p>
          <p>The template allows you to fully customise the following variables:</p>
          <ul>
              <li>Number of weeks (1-10 weeks)</li>
              <li>Number of days (1-7 days)</li>
              <li>Number of exercises per session (1-20 exercises)</li>
              <li>Volume prescription for each muscle group (number of sets)</li>
              <li>Exercise selection for each training session (including the ability to add your own exercises)</li>
              <li>Load & repetitions to track performance over time</li>
              <li>Proximity to failure (using either RIR or RPE)</li>
          </ul>
          <p>Price: ₨2500</p>
          <button class="addToCart" onclick="addToCart('product 6')">Add to Cart</button>
      `;
      
        modalImage.src = "/Images/hypertrophy-program-creator.jpg"; 
        break;

        case "product 7":
        modalContent.innerHTML = `
        <h2>ANNUAL PLAN TEMPLATE FOR FIELD-SPORTS</h2>
        <p>The Annual Plan Template for Field-Sports is a blank annual plan Excel document which can be fully customized as you desire.</p>
        <p>It includes the following features:</p>
        <ul>
            <li>Testing schedule</li>
            <li>Competition schedule</li>
            <li>Training qualities</li>
            <li>Peaking index</li>
            <li>Customizable graph for volume and intensity</li>
        </ul>
        <p>Price: ₨500</p>
        <button class="addToCart" onclick="addToCart('product 7')">Add to Cart</button>
    `;
        modalImage.src = "/Images/annual plan template.jpg"; 
        break;
  
        case "product 8":
        modalContent.innerHTML = `
        <h2>SOCCER SPEED, POWER & STRENGTH TRAINING TEMPLATE (12 WEEKS, 2-DAYS PER WEEK)</h2>
        <p>The Soccer Speed, Power & Strength Training Template is a 12-week program to help you become faster, more powerful, and stronger on the soccer field. The program requires the athlete to perform two sessions per week. One of these is to be conducted on a field or open area, while the other session is performed in the gym.</p>
        <p>The following resources are required to complete the program:</p>
        <ul>
            <li>Access to a large (40m+) field or open area</li>
            <li>Access to a gym</li>
            <li>A running sled with a harness and weights for resisted sprints</li>
            <li>Cones</li>
            <li>A partner for the field training day</li>
        </ul>
        <p>The program includes the following features:</p>
        <ul>
            <li>Periodized 12-week program</li>
            <li>Emphasis on speed, power, and strength development</li>
            <li>Customizable exercise selection</li>
            <li>Video links to all exercises</li>
        </ul>
        <p>Price: ₨900</p>
        <button class="addToCart" onclick="addToCart('product 8')">Add to Cart</button>
    `;
        modalImage.src = "/Images/soccer speed power & strengths.jpg"; 
        break;
  
        case "product 9":
        modalContent.innerHTML = `
        <h2>SPEED, POWER & STRENGTH FOR FIELD-SPORTS TEMPLATE (12-WEEKS, 4 DAYS PER WEEK)</h2>
        <p>The Speed, Power & Strength for Field-Sports Training Template is a 12-week program to help you become faster, more powerful, and stronger on the sports field. This program is designed for athletes involved in any field sport such as soccer, American football, Australian football, rugby, hockey or any other sport with similar physical demands. The program requires the athlete to perform four sessions per week. Two of these are to be conducted on a field or open area, while the other two sessions are performed in the gym.</p>
        <p>The following resources are required to complete the program:</p>
        <ul>
            <li>Access to a large (40m+) field or open area</li>
            <li>Access to a gym</li>
            <li>A running sled with a harness and weights for resisted sprints</li>
            <li>Cones or Hurdles</li>
        </ul>
        <p>The program includes the following features:</p>
        <ul>
            <li>Periodized 12-week program</li>
            <li>Emphasis on speed, power, and strength development</li>
            <li>Customizable exercise selection</li>
            <li>Video links to all exercises</li>
        </ul>
        <p>Price: ₨1100</p>
        <button class="addToCart" onclick="addToCart('product 9')">Add to Cart</button>
    `;
        modalImage.src = "/Images/speed, power & strength.png"; 
        break;
  
       
  
  
        
      // Add more cases for other products as needed
      default:
        break;
  
  
    }
  
    modal.style.display = "flex";
  }
  
  // Event listener for the modal overlay
document.getElementById('productModal').addEventListener('click', function (event) {
    if (event.target.id === 'productModal') {
        closeModal();
    }
});

// Function to close the product modal
function closeModal() {
    var modal = document.getElementById("productModal");
    modal.style.display = "none";

    // Show overlays when closing the popup
    toggleOverlays(false);
}




function toggleOverlays(hide) {
    var overlays = document.querySelectorAll('.product-overlay');
    overlays.forEach(function (overlay) {
        if (hide) {
            overlay.classList.add('overlay-hide');
        } else {
            overlay.classList.remove('overlay-hide');
        }
    });
}
  


// ... (existing code)

// ... (existing code)

// ... (existing code)


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





