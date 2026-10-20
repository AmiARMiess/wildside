const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});

document.querySelector("#booking-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const destination = document.querySelector("#destination");
  const checkIn = document.querySelector("#check-in");
  const guests = document.querySelector("#guests");
  const destinationLabel = destination.options[destination.selectedIndex].text;
  const dateLabel = checkIn.value
    ? new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(`${checkIn.value}T12:00:00`))
    : "any dates";

  document.querySelector("#booking-message").textContent =
    `Lovely choice — ${destinationLabel.toLowerCase()}, ${dateLabel}, ${guests.value} ${guests.value === "1" ? "guest" : "guests"}. Our stays are just below.`;
  document.querySelector("#stays").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email");
  const message = document.querySelector("#newsletter-message");
  if (!email.validity.valid) {
    email.reportValidity();
    return;
  }

  message.textContent = "You're on the list. Keep an eye on your inbox.";
  email.value = "";
});
