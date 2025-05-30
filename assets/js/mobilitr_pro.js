const projectCardMob = document.querySelector('.projects__container_mob');

const projectsListMob = [
  {
    id: 1,
    title: 'Raid Shadow Legends',
    subtitle: 'HTML, CSS, JavaScript, Photoshop',
    description:
      'A mini-game with a 3D map where the user must defeat all enemies. I helped shape the user flow and UI structure, contributed visual adjustments in Photoshop, and developed the experience with HTML, CSS, and JS. (Note: Some functionality like promo codes won’t work on this site due to backend dependencies.)',

    img: './assets/img/raid3.png',
    liveSite:
      'https://daily-winners.com/plrm/rsl/desk/ww/3D/12gl3/raid_us_d_01.html',
  },
  {
    id: 2,
    title: 'Merge Gardens',
    subtitle: 'HTML, CSS, JavaScript, Photoshop',
    description:
      'A mini-game where the user merges all the plants to unlock a reward screen. I supported layout setup and implemented interactions, while adjusting visual elements where needed. (Note: Promo-related functionality is disabled on this site due to backend dependencies.)',

    img: './assets/img/merge.png',
    liveSite: 'https://daily-winners.com/plrm/mg/game/09/mg_d_us_a_02.html',
  },
  {
    id: 3,
    title: 'Raid Shadow Legends – Spinner',
    subtitle: 'HTML, CSS, JavaScript, Photoshop',
    description:
      'An interactive spinner game that reveals a promo code and download link. I built the UI logic and assisted with styling and visual tweaks. (Note: The promo system won’t function from this site due to backend logic not being included.)',

    img: './assets/img/raidSpinner.png',
    liveSite:
      'https://daily-winners.com/plrm/rsl/desk/us/spin/17/raid_d_us_01.html',
  },
  {
    id: 4,
    title: 'Raid Shadow Legends – Champion Picker',
    subtitle: 'HTML, CSS, JavaScript',
    description:
      'Users pick a champion and receive a custom reward. I developed the page and worked on layout and selection logic. (Note: Backend-driven features like promos are not active on this hosted version.)',

    img: './assets/img/raid2.png',
    liveSite:
      'https://daily-winners.com/plrm/rsl/desk/ww/pg/03c/raid_us_d_01.html',
  },

  {
    id: 5,
    title: 'Mech Arena',
    subtitle: 'HTML, CSS, JavaScript, Leonardo AI',
    description:
      'Developed a promotional landing page with visuals created using Leonardo AI. I structured the layout, integrated assets, and handled styling and interactions.',
    img: './assets/img/mech.png',
    liveSite:
      'https://daily-winners.com/plrm/mech/desk/jp/09/mech_d_jp_s_04.html',
  },

  {
    id: 6,
    title: 'Mobilitr Home Page',
    subtitle: 'HTML, CSS, JavaScript',
    description:
      'Built a custom home page for Mobilitr, focusing on layout, responsiveness, and clean implementation. This version is a development sample and not the live production site.',

    img: './assets/img/mobilitr.png',
    liveSite: 'https://daily-winners.com/mobilitr/07e/mob_01.html',
  },

  {
    id: 7,
    title: 'Match Masters',
    subtitle: 'HTML, CSS, JavaScript, photoshop',
    description:
      'Developed a quiz-style question page for the Match Masters campaign, implementing the structure and aligning the visual design with campaign assets.',
    img: './assets/img/match.png',
    liveSite: 'https://daily-winners.com/cnv/qus/1224/mm_d_us_02.html',
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
