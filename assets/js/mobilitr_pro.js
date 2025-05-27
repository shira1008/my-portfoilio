const projectCardMob = document.querySelector('.projects__container_mob');

const projectsListMob = [
  {
    id: 1,
    title: 'Raid Shadow Legends',
    subtitle: 'HTML, CSS, JavaScript, Photoshop',
    description:
      'A mini-game with a 3D map where the user must defeat all enemies. Once completed, a reward screen appears with a promo code and a download link based on the chosen champion. (Note: Some functionality like promo codes won’t work on this site due to backend dependencies.)',
    img: './assets/img/raid3.png',
    liveSite:
      'https://daily-winners.com/plrm/rsl/desk/ww/3D/12gl3/raid_us_d_01.html',
  },
  {
    id: 2,
    title: 'Merge Gardens',
    subtitle: 'HTML, CSS, JavaScript, Photoshop',
    description:
      'A mini-game where the user merges all the plants to unlock a reward screen with a promo code and download button. (Note: Promo-related functionality is disabled on this site due to backend dependencies.)',
    img: './assets/img/merge.png',
    liveSite: 'https://daily-winners.com/plrm/mg/game/09/mg_d_us_a_02.html',
  },
  {
    id: 3,
    title: 'Raid Shadow Legends – Spinner',
    subtitle: 'HTML, CSS, JavaScript, Photoshop',
    description:
      'An interactive spinner game that reveals a promo code and download link after spinning. (Note: The promo system won’t function from this site due to backend logic not being included.)',
    img: './assets/img/raidSpinner.png',
    liveSite:
      'https://daily-winners.com/plrm/rsl/desk/us/spin/17/raid_d_us_01.html',
  },
  {
    id: 4,
    title: 'Raid Shadow Legends – Champion Picker',
    subtitle: 'HTML, CSS, JavaScript',
    description:
      'Users pick a champion and receive a custom reward and download link based on their choice. (Note: Backend-driven features like promos are not active on this hosted version.)',
    img: './assets/img/raid2.png',
    liveSite:
      'https://daily-winners.com/plrm/rsl/desk/ww/pg/03c/raid_us_d_01.html',
  },
];

projectsListMob.forEach((projectObject) => {
  projectCardMob.innerHTML += `
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

    </article>
    
    
    
    `;
});
