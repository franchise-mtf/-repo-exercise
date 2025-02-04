// Script.js

// Initialize Google Maps
function initMap() {
  const location = { lat: 48.8566, lng: 2.3522 }; // Coordinates for Paris (example)
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust offset for sticky header
      behavior: "smooth",
    });
  });
});

// Contact Form Validation
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Example submission handling (replace with real logic)
    alert(
      "Merci pour votre message, " + name + "! Nous vous répondrons bientôt."
    );
    this.reset();
  });
