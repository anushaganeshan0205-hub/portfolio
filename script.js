// Script for handling form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert("Thank you for your message, " + name + ". I will get back to you soon!");
    // You can replace this with an actual email submission functionality using an API or backend server
    document.getElementById('contact-form').reset();
  } else {
    alert("Please fill in all fields!");
  }
});

// Weather Dashboard Demo Functionality
const modal = document.getElementById("weather-modal");
const btn = document.getElementById("weather-demo-btn");
const span = document.getElementById("weather-close");

if (btn) {
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "block";
  });
}

if (span) {
  span.addEventListener('click', function() {
    modal.style.display = "none";
  });
}

window.addEventListener('click', function(event) {
  if (modal && event.target == modal) {
    modal.style.display = "none";
  }
});

document.getElementById('search-btn').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  const display = document.getElementById('weather-display');
  if (city) {
    display.innerHTML = `<strong>${city}</strong><br>Temp: 24°C<br>Condition: Sunny<br>Humidity: 45%`;
  } else {
    display.innerHTML = '<span style="color:red">Please enter a city name</span>';
  }
});

// Task Management Demo Functionality
const taskModal = document.getElementById("task-modal");
const taskBtn = document.getElementById("task-demo-btn");
const taskClose = document.getElementById("task-close");

if (taskBtn) {
  taskBtn.addEventListener('click', function(event) {
    event.preventDefault();
    taskModal.style.display = "block";
  });
}

if (taskClose) {
  taskClose.addEventListener('click', function() {
    taskModal.style.display = "none";
  });
}

window.addEventListener('click', function(event) {
  if (taskModal && event.target == taskModal) {
    taskModal.style.display = "none";
  }
});

document.getElementById('add-task-btn').addEventListener('click', function() {
  const input = document.getElementById('task-input');
  const list = document.getElementById('task-list');
  if (input.value) {
    const li = document.createElement('li');
    li.style.cssText = "padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;";
    li.innerHTML = `<span>${input.value}</span> <button style="color:red; border:none; background:none; cursor:pointer;">&times;</button>`;
    li.querySelector('button').addEventListener('click', function() { li.remove(); });
    list.appendChild(li);
    input.value = '';
  }
});

// E-commerce Demo Functionality
const ecommerceModal = document.getElementById("ecommerce-modal");
const ecommerceBtn = document.getElementById("ecommerce-demo-btn");
const ecommerceClose = document.getElementById("ecommerce-close");

if (ecommerceBtn) {
  ecommerceBtn.addEventListener('click', function(event) {
    event.preventDefault();
    ecommerceModal.style.display = "block";
  });
}

if (ecommerceClose) {
  ecommerceClose.addEventListener('click', function() {
    ecommerceModal.style.display = "none";
  });
}

window.addEventListener('click', function(event) {
  if (ecommerceModal && event.target == ecommerceModal) {
    ecommerceModal.style.display = "none";
  }
});

let cartCount = 0;
let cartTotal = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const price = parseInt(this.getAttribute('data-price'));
    cartCount++;
    cartTotal += price;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-total').innerText = cartTotal;
  });
});
