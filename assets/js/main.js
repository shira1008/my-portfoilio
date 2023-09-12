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
const section = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-sun-line" : "ri-moon-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-sun-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

// Initialize ScrollReveal

const sr = ScrollReveal();

// Configure the global settings for all sections
sr.reveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

// sr.reveal(".home__description", {
//   duration: 2000,
//   origin: "top",
//   distance: "20px",
//   delay: 400,
//   // reset: true,
// });

sr.reveal(".about__line", {
  duration: 2000,
  origin: "top",
  distance: "20px",
  delay: 400,
  // reset: true,
});

sr.reveal(".projects__description", {
  duration: 2000,
  origin: "top",
  distance: "20px",
  delay: 400,
  // reset: true,
});

// Configure the elements you want to reveal
// sr.reveal(".home__perfil", {
//   duration: 2000,
//   origin: "left",
//   distance: "20px",
//   delay: 400,
//   // reset: true,
// });

// sr.reveal(".home__scroll-anim", {
//   duration: 2000,
//   origin: "left",
//   delay: 400,
//   // reset: true,
// });

sr.reveal(" .about__item", {
  duration: 2600,
  origin: "left",
  distance: "60px",
  delay: 200,
});

sr.reveal(".contact__mail", {
  origin: "right",
  distance: "60px",
  duration: 1000,
  delay: 600,
});

sr.reveal(".contact__data", {
  origin: "left",
  distance: "60px",
  duration: 2000,
  delay: 600,
});

sr.reveal(".contact__social", {
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 600,
});

ScrollReveal().sync();
