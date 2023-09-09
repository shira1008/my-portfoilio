const projectCard = document.querySelector(".projects__container");

const projectsList = [
  {
    id: 1,
    title: "Portfolio",
    subtitle: "Website",
    description: "Portfolio to my dog while learning css",
    img: "./assets/img/Screenshot_1.jpg",
    git: "https://github.com/shira1008/grid-porfolio-project",
    liveSite: "https://shish-profile.netlify.app/",
  },

  {
    id: 2,
    title: "Wikipedia Api",
    subtitle: "Website",
    description: "Made Wikipedia",
    img: "./assets/img/wikipediat_2.jpg",
    git: "https://github.com/shira1008/Wikipedia-API",
    liveSite: "https://wikipedia-shish.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    subtitle: "Website",
    description: "Portfolio to my dog while learning css",
    img: "./assets/img/Screenshot_1.jpg",
    git: "https://github.com/shira1008/grid-porfolio-project",
    liveSite: "https://shish-profile.netlify.app/",
  },
  {
    id: 4,
    title: "Portfolio",
    subtitle: "Website",
    description: "Portfolio to my dog while learning css",
    img: "./assets/img/Screenshot_1.jpg",
    git: "https://github.com/shira1008/grid-porfolio-project",
    liveSite: "https://shish-profile.netlify.app/",
  },

  {
    id: 5,
    title: "Wikipedia Api",
    subtitle: "Website",
    description: "Made Wikipedia",
    img: "./assets/img/wikipediat_2.jpg",
    git: "https://github.com/shira1008/Wikipedia-API",
    liveSite: "https://wikipedia-shish.netlify.app/",
  },
  {
    id: 6,
    title: "Portfolio",
    subtitle: "Website",
    description: "Portfolio to my dog while learning css",
    img: "./assets/img/Screenshot_1.jpg",
    git: "https://github.com/shira1008/grid-porfolio-project",
    liveSite: "https://shish-profile.netlify.app/",
  },
];

projectsList.forEach((projectObject) => {
  projectCard.innerHTML += `
   <article class="projects__card">
        <div class="projects__image" key=${projectObject.id}>
      <img src=${projectObject.img} alt="${projectObject.title}" class="projects__img">
      <a href=${projectObject.liveSite} target="_blank" class="projects__button button">
        <i class="ri-arrow-right-up-line"></i>
      </a>
    </div>
    <div class="projects__content">
      <h3 class="projects__subtitle">${projectObject.subtitle}</h3>
      <h2 class="projects__title">${projectObject.title}</h2>
      <p class="projects__description">${projectObject.description}</p>
    </div>
    <div class="projects__buttons">
      <a href=${projectObject.git} target="_blank" class="projects__link">
        <i class="ri-github-line"></i> Source Code
      </a>
      <a href=${projectObject.liveSite} target="_blank" class="projects__link">
        <i class="ri-dribbble-line"></i>View
      </a>
    </div>
    </article>
    
    
    
    `;
});
