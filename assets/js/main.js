/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE WHEN CLICK ON LINK ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((element) => element.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_krx60ds",
      "template_x4fhfb9",
      "#contact-form",
      "a-kGFP1wn3-Gl19kI"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅ ";

        //remove msg after 5 sec
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //clear fields:
        contactForm.reset();
      },
      () => {
        //error
        contactMessage.textContent = "There was an error ❌ ";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const showScrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", showScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
