// 1. PRICING TOGGLE
const priceToggle = document.getElementById("priceToggle");

priceToggle.addEventListener("change", function () {
  document.querySelectorAll(".price").forEach(function (price) {
    price.textContent = this.checked
      ? price.dataset.year
      : price.dataset.month;
  }, this);
});


// 2. FAQ ACCORDION
const questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    const current = question.parentElement;
    current.classList.toggle("active");

    const symbol = question.querySelector("span");
    symbol.textContent = current.classList.contains("active")
      ? "−"
      : "+";
  });
});


// 3. TESTIMONIAL SLIDER
const testimonials = [
  {
    quote: "LaunchPadly helped me organize my business idea and understand my next steps.",
    person: "— Startup Learner"
  },
  {
    quote: "The planning section made my project goals easier to understand.",
    person: "— Student Entrepreneur"
  },
  {
    quote: "A simple and creative platform for exploring new business ideas.",
    person: "— Young Innovator"
  }
];

let currentIndex = 0;

function showTestimonial() {
  document.getElementById("quote").textContent =
    '"' + testimonials[currentIndex].quote + '"';

  document.getElementById("person").textContent =
    testimonials[currentIndex].person;
}

document.getElementById("nextBtn").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial();
});

document.getElementById("prevBtn").addEventListener("click", function () {
  currentIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial();
});


// 4. WAITLIST FORM
const joinForm = document.getElementById("joinForm");

joinForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    document.getElementById("formMessage").textContent =
      "Please fill in all fields.";
    return;
  }

  document.getElementById("formMessage").textContent =
    "Thank you, " + name + "! Your demo registration is complete.";

  joinForm.reset();
});