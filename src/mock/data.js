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
    info: '🤖☕ Built with Android Studio and Java',
    info2:
      'MedForms is a HIPAA–compliant Android application for usage on a tablet that implements handwriting recognition and dynamically generates/exports consultation forms.',
    url: 'https://github.com/c94/medforms',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spring_security.png',
    title: 'Spring Security Demo',
    info: '🍃🐘 Built with Spring and PostgreSQL',
    info2:
      'A web application hosted on an AWS EC2 instance that makes use of user authentication and authorization.',
    url: 'http://3.140.13.117/',
    repo: 'http://3.140.13.117/',
  },
  {
    id: nanoid(),
    img: 'phonebook.png',
    title: 'React Phonebook',
    info: '⚛️ Built with the MERN stack',
    info2: 'A site hosted on Heroku that demonstrates REST API requests.',
    url: 'https://github.com/C94/ReactPhonebook',
    // repo is actually the 'See Live' now
    repo: 'https://hidden-coast-29500.herokuapp.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dijkstra.jpg',
    title: 'Highways Shortest Path',
    info: '☕ Built with Java',
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
    info: '📊 Built with R',
    info2: 'A quadratic equation solver that demonstrates effective unit testing.',
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
