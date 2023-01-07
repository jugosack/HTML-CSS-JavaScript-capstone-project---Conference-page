const menu = document.querySelector('#icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header-two');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('header-style');
  navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  header.classList.remove('header-style');
  navbar.classList.remove('nav-toggle');

  /* *********Scroll Top Bottom ******** */
  if (window.scrollY > 60) {
    document.querySelector('.scroll').classList.add('active');
  } else {
    document.querySelector('.scroll').classList.remove('active');
  }
});

/* ****************************** Dynamically injected content  ******************* */
const speakers = [
  {

    presenter: 'Carl Sagan',
    title: 'Pilot with over 37years flying experience',
    description:
      'He is an experienced pilot , entrepreneur, Burning Circle airshow sponsor , flight instructor an Burning Circle Flight Academy.',
    img: 'images/desktop/speaker_01.png',
  },
  {

    presenter: 'Michio Kaku',
    title:
      'Pilot with over 37years flying experience.',
    description:
      'He is an experienced pilot , entrepreneur, Burning Circle airshow sponsor , flight instructor an Burning Circle Flight Academy. ',
    img: 'images/desktop/speaker_02.png',
  },
  {

    presenter: 'Jacob Bronowski',
    title: 'Polish-British mathematician and philosopher.',
    description:
      'He is an experienced pilot , entrepreneur, Burning Circle airshow sponsor , flight instructor an Burning Circle Flight Academy.',
    img: 'images/desktop/speaker_03.png',
  },
  {

    presenter: 'Stephen Hawking',
    title:
      'English theoretical physicist, cosmologist, and author of The Centre for Theoretical Cosmology at the University of Cambridge',
    description:
      'He is an experienced pilot , entrepreneur, Burning Circle airshow sponsor , flight instructor an Burning Circle Flight Academy.',
    img: 'images/desktop/speaker_04.png',
  },
  {

    presenter: 'Richard Dawkins',
    title: 'British evolutionary biologist and author.',
    description:
      'He is an experienced pilot , entrepreneur, Burning Circle airshow sponsor , flight instructor an Burning Circle Flight Academy.',
    img: 'images/desktop/speaker_05.png',
  },
  {

    presenter: 'Stephen Jay Gould',
    title:
      'American paleontologist, evolutionary biologist, and historian of science.',
    description:
      'He is an experienced pilot , entrepreneur, Burning Circle airshow sponsor , flight instructor an Burning Circle Flight Academy.',
    img: 'images/desktop/speaker_06.png',
  },
];

const rowContainer = document.querySelector('.speakers .row');

window.addEventListener('DOMContentLoaded', () => {
  let speaker = speakers.map((item) => `
    <div class="card">
    <div class="image">
    <img src=${item.img} alt=${item.presenter} />
    </div>
    <div class="content">
    <h1>${item.presenter}</h1>
    <h2>${item.title}</h2>
    <p>
    ${item.description}
    </p>
    </div>
    </div>
    `);
  speaker = speaker.join('');
  rowContainer.innerHTML = speaker;
});
