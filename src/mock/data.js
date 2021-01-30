import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Charles Crane | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, i'm ",
  name: 'Charles.',
  subtitle: 'A Web Developer based in London.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.jpg',
  paragraphOne: `
    I'm a Full stack developer based in London. I have experience with Ruby and Ruby on Rails as well as JS, git & GitHub.
  `,
  paragraphTwo: `
  I am currently delving into the Javascript ecosystem learning more about ReactJS and NodeJS.
  I am eager to carry on learning more about Full stack development with Javascript as well as improving my Ruby on Rails skills.
  `,
  paragraphThree: `
    I love food.
    I love coffee.
    I love to travel.
    And of course I love all things techy.
  `,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'piatto.png',
    title: 'Piatto',
    info: 'A social foodie network / dish discovery platform built with Ruby on Rails as a final project for Le Wagon coding bootcamp in London December 2020',
    info2: '',
    url: 'https://piat.to',
    repo: 'https://github.com/liamjxn/piatto', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mybrary.png',
    title: 'MyBrary',
    info: 'An online repository for your personal book collection, currently working on incorporating social functionalities to enable a sort of virtual book club.',
    info2: '',
    url: 'https://agile-beach-05490.herokuapp.com/',
    repo: 'https://github.com/charc46/mybrary', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact me if theres anything you want to know!',
  email: 'charlie.crane46@gmail.com',
  btn: '',
  email: 'charlie.crane46@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/charc46/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/charc46',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
