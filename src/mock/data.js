import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chandler Klein | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'The personal portfolio site for Chandler Klein.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '👋 Hi, my name is',
  name: 'Chandler.',
  subtitle: 'Nice to meet you!',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'WMU-Fall20-Chandler-Klein.JPG',
  paragraphOne:
    "I'm a senior computer science student at Western Michigan University graduating in December. My interests include software engineering, web development, and automation. ",
  paragraphTwo: 'I have technical experience in Java, JavaScript, and Andorid development.',
  paragraphThree: 'If you have any questions feel free to email me!',
  resume:
    'https://firebasestorage.googleapis.com/v0/b/chandlerklein.appspot.com/o/chandler_klein_resume_redacted.pdf?alt=media&token=5f6ebd87-9cd2-4121-a3c5-7aef5066dfbc', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'MedForms',
    info: '🔒 Currently private for security reasons',
    info2:
      'MedForms is a HIPAA–compliant Android application for usage on a tablet that implements handwriting recognition and dynamically generates/exports consultation forms.',
    url: 'https://github.com/c94/medforms',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'phonebook.png',
    title: 'React Phonebook',
    info:
      'A MERN stack (MongoDB, Express, React, Node.js) site hosted on Heroku that demonstrates REST API requests.',
    info2: '',
    url: 'https://github.com/C94/ReactPhonebook',
    // repo is actually the 'See Live' now
    repo: 'https://hidden-coast-29500.herokuapp.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dijkstra.jpg',
    title: 'Highways Shortest Path',
    info: '☕ Java',
    info2:
      "An implementation of Dijkstra's algorithm that finds the shortest path between over 90,000 locations across the U.S. using data from the National Highway Planning Network.",
    url: 'https://github.com/C94/Dijkstra',
    // repo is actually the 'See Live' now
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quadsolver.png',
    title: 'QuadSolveR',
    info:
      'A quadratic equation solver written in the R programming language that demonstrates unit testing.',
    info2: '',
    url: 'https://github.com/C94/QuadSolveR',
    // repo is actually the 'See Live' now
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ck@chandlerklein.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/chandlerklein',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/c94',
    },
    {
      id: nanoid(),
      name: 'soundcloud',
      url: 'https://soundcloud.com/seeke',
    },
  ],
};
