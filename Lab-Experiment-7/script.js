// LAB EXPERIMENT 7: Form Validation and Card Gallery Navigation

// EXERCISE 1: Form validation
const signupForm = document.getElementById("signupForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

// This regular expression checks for a basic name@example.com email format.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password must be at least 5 characters and include #, $ or %.
const passwordPattern = /^(?=.*[#$%]).{5,}$/;

// Set an error message and update the input's visual state.
function showFieldResult(input, errorElement, message) {
  errorElement.textContent = message;

  if (message !== "") {
    input.classList.add("invalid");
    input.classList.remove("valid");
    input.setAttribute("aria-invalid", "true");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
    input.setAttribute("aria-invalid", "false");
  }
}

signupForm.addEventListener("submit", function (event) {
  // AI assistance: I used an AI assistant to understand that preventDefault()
  // stops the browser's normal form submission so JavaScript can validate first.
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  let isFormValid = true;

  // Validate the full name.
  if (fullName === "") {
    showFieldResult(fullNameInput, nameError, "Full name is required.");
    isFormValid = false;
  } else {
    showFieldResult(fullNameInput, nameError, "");
  }

  // Validate the email address using a regular expression.
  if (email === "") {
    showFieldResult(emailInput, emailError, "Email address is required.");
    isFormValid = false;
  } else if (!emailPattern.test(email)) {
    showFieldResult(emailInput, emailError, "Enter a valid email, such as name@example.com.");
    isFormValid = false;
  } else {
    showFieldResult(emailInput, emailError, "");
  }

  // Validate password length and required special character.
  if (password === "") {
    showFieldResult(passwordInput, passwordError, "Password is required.");
    isFormValid = false;
  } else if (!passwordPattern.test(password)) {
    showFieldResult(passwordInput, passwordError, "Use at least 5 characters and include #, $ or %.");
    isFormValid = false;
  } else {
    showFieldResult(passwordInput, passwordError, "");
  }

  // Show a success or failure message in the page without reloading it.
  if (isFormValid) {
    formMessage.textContent = "Success! All fields are valid.";
    formMessage.className = "form-message success";
  } else {
    formMessage.textContent = "Please correct the errors above and try again.";
    formMessage.className = "form-message failure";
  }
});

// Clear stale field feedback as the user edits the form.
fullNameInput.addEventListener("input", function () {
  showFieldResult(fullNameInput, nameError, "");
  formMessage.textContent = "";
  formMessage.className = "form-message";
});

emailInput.addEventListener("input", function () {
  showFieldResult(emailInput, emailError, "");
  formMessage.textContent = "";
  formMessage.className = "form-message";
});

passwordInput.addEventListener("input", function () {
  showFieldResult(passwordInput, passwordError, "");
  formMessage.textContent = "";
  formMessage.className = "form-message";
});


// EXERCISE 2: Card gallery navigation
const galleryViewport = document.getElementById("galleryViewport");
const cardTrack = document.getElementById("cardTrack");
const galleryCards = document.querySelectorAll(".gallery-card");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const galleryStatus = document.getElementById("galleryStatus");

let currentPage = 0;

// There are 6 cards and 3 visible on desktop, so there are 2 pages.
// On smaller screens, calculate the number of visible cards from card width.
function getCardsPerPage() {
  if (window.innerWidth <= 520) {
    return 1;
  } else if (window.innerWidth <= 760) {
    return 2;
  }
  return 3;
}

function updateGallery() {
  const cardsPerPage = getCardsPerPage();
  const totalPages = Math.ceil(galleryCards.length / cardsPerPage);

  // Wrap around when moving beyond the first or last page.
  currentPage = (currentPage + totalPages) % totalPages;

  const cardStyle = window.getComputedStyle(galleryCards[0]);
  const cardWidth = galleryCards[0].getBoundingClientRect().width;
  const gap = parseFloat(window.getComputedStyle(cardTrack).gap) || 0;
  const distance = currentPage * cardsPerPage * (cardWidth + gap);

  cardTrack.style.transform = "translateX(-" + distance + "px)";

  const firstCard = currentPage * cardsPerPage + 1;
  const lastCard = Math.min(firstCard + cardsPerPage - 1, galleryCards.length);
  galleryStatus.textContent = "Showing cards " + firstCard + "–" + lastCard + " of " + galleryCards.length;
}

nextButton.addEventListener("click", function () {
  currentPage += 1;
  updateGallery();
});

prevButton.addEventListener("click", function () {
  currentPage -= 1;
  updateGallery();
});

// Recalculate card positions when the screen size changes.
window.addEventListener("resize", updateGallery);

// AI assistance reflection: AI helped me plan the gallery's page-based navigation,
// understand addEventListener() and CSS transform, and check the wrap-around logic.
// I reviewed and adapted the code to meet the lab requirements.

updateGallery();
