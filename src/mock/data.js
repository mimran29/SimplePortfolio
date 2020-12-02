import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MIBMC | DEVELOPER', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'THIS IS MOHD IMRAN SIMPLE WEBFOLIO', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'MOHD IMRAN BIN MOHD CYRINUS',
  subtitle: 'SOFTWARE DEVELOPER',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'image.png',
  paragraphOne: 'From Kota Kinabalu, Sabah currently stay in Seri Kembangan, Selangor. Graduated in University Malaysia Sarawak with Bachelor of Computer Science and Information Technology (Software Engineering) ',
  paragraphTwo: 'An Enthusiastic person in a right environment, work well with people and also under pressure. Believe in a good karma, Love to exchange opinions about stuff. Wanderlust',
  paragraphThree: 'Below is ',
  resume: 'https://drive.google.com/file/d/17VDgL_8aQex3Q8SU6podx1Iz0FjiTmO-/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.JPG',
    title: 'Counseil4U Mobile App',
    info: 'Counseling Application For UNIMAS',
    info2: 'FINAL YEAR PROJECT (FYP)',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'KAMPUNG SYSTEM',
    info: 'An offline system that help the Secretary of Kampung Siru Melayu',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
