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
    "I'm a computer science graduate of Western Michigan University. My interests include software engineering, web development, and automation. Also, I'm pretty good at playing the piano!",
  paragraphTwo:
    "Currently I'm searching for Java software development positions that I can excel in. I have experience building applications with Java, JavaScript, and Android—currently, I'm building an application with Spring technologies.",
  paragraphThree:
    "If you'd like to get in contact, feel free to email me (info in resume)! Listed below are my resume and certificates.",
  resume: 'About component pulling file', // if no resume, the button will not show up
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
    img: 'dashboard.PNG',
    title: 'Monthly Expenses Tracker',
    info: '🍃🅰️ Built with Spring and AngularJS',
    info2:
      'Work-in-progress full stack web application using a MySQL database, Spring (Boot, Web, Data) on the backend and AngularJS on the frontend.',
    url: 'https://github.com/c94/expensetracker',
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
