const projectCard = document.querySelector('.projects__container');

const projectsList = [
  {
    id: 3,
    title: 'DevLink',
    subtitle: 'React, Redux, CSS, Node.js, Express, MongoDB',
    description:
      'DevLink is a full-stack social media application designed for developers to connect, share experiences, education and projects',
    img: './assets/img/DevLink-img.jpg',
    git: 'https://github.com/shira1008/DevLink',
  },

  {
    id: 4,
    title: 'Sakura Shop - In Progress',
    subtitle: 'React, HTML, CSS, Node.js, Express, MongoDB',
    description: 'A pink e-Commerce store, still in development',
    img: './assets/img/Sakura.png',
    git: 'https://github.com/shira1008/E-Commerce',
  },
  {
    id: 6,
    title: 'Movie Web',
    subtitle: 'Python - Flask, CSS, HTML, sqlalchemy, sqlite',
    description:
      'The MoviWeb App is a Flask-based, Fullstack application that allows users to track their favorite movies. ',
    img: './assets/img/MovieWebt.jpg',
    git: 'https://github.com/shira1008/MoviWeb/tree/main',
    liveSite: 'http://shirashahar.pythonanywhere.com/',
  },

  {
    id: 1,
    title: 'Portfolio',
    subtitle: 'CSS, HTML, JavaScript',
    description:
      'Portfolio for my dog while learning css grid, this is one of my frist projects',
    img: './assets/img/Screenshot_1.jpg',
    git: 'https://github.com/shira1008/grid-porfolio-project',
    liveSite: 'https://shish-profile.netlify.app/',
  },

  {
    id: 7,
    title: 'Recipe Keeper',
    subtitle: 'Python - fastapi, JavaScript, HTML, CSS',
    description:
      'The Recipe Keeper App is a web-based solution designed to simplify recipe management. The live site, showcases the frontend-only version (its look the same)',

    img: './assets/img/recipe.jpg',
    git: 'https://github.com/shira1008/Recipe-keeper-with-backend',
    liveSite: 'https://recipe-keeper-shira.netlify.app/',
  },

  {
    id: 2,
    title: 'Wikipedia Api',
    subtitle: 'JavaScript, CSS, HTML',
    description:
      'I used the wikipedia API to create a website that looks similar to wikipedia and display the searching results.',
    img: './assets/img/wikipediat_2.jpg',
    git: 'https://github.com/shira1008/Wikipedia-API',
    liveSite: 'https://wikipedia-shish.netlify.app/',
  },
  {
    id: 8,
    title: 'Landing Page - Travel',
    subtitle: 'CSS, HTML, JavaScript',
    description: 'Landing page for a travel company, responsive mobile-first',
    img: './assets/img/travel.jpg',
    git: 'https://github.com/shira1008/Travel-project',
    liveSite: 'https://shishtravelproject.netlify.app/',
  },
  {
    id: 9,
    title: 'Landing Page - VR',
    subtitle: 'CSS, HTML, Bootstrap',
    description:
      'Landing page for a VR company, using bootstrap and custom css',
    img: './assets/img/VR.jpg',
    git: 'https://github.com/shira1008/Landing-page-project',
    liveSite: 'https://shish-vrapp.netlify.app/',
  },

  // {
  //   id: 5,
  //   title: 'GitHub Api',
  //   subtitle: 'React, HTML, CSS',
  //   description:
  //     'React project, using GitHub API and display data about searched user. the user have to login.',
  //   img: './assets/img/github.jpg',
  //   git: 'https://github.com/shira1008/GitHub-api-project',
  //   liveSite: 'https://github-api-project-shira.netlify.app/',
  // },

  {
    id: 10,
    title: 'Landing Page - Dogs Food',
    subtitle: 'HTML, CSS, JavaScript',
    description: 'My first Project, Ive started to leran html and css. ',
    img: './assets/img/DogsFood.png',
    git: 'https://github.com/shira1008/Organic-Doog-Food-project',
    liveSite: 'https://shishsdogfoodproject.netlify.app/',
  },
];

projectsList.forEach((projectObject) => {
  projectCard.innerHTML += `
   <article class="projects__card">
        <div class="projects__image" key=${projectObject.id}>
      <img src=${projectObject.img} alt="${
    projectObject.title
  }" class="projects__img">
      <a href=${
        projectObject.liveSite ? projectObject.liveSite : projectObject.git
      } target="_blank" class="projects__button button">
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
  ${
    projectObject.liveSite
      ? `
  <a href="${projectObject.liveSite}" target="_blank" class="projects__link">
    <i class="ri-dribbble-line"></i>View
  </a>
`
      : ''
  }
    </div>
    </article>
    
    
    
    `;
});
