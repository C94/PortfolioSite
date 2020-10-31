import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chandler | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Chandler.',
  subtitle: 'Nice to meet you!',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a senior computer science student at Western Michigan University (graduating in December). My interests include software engineering, web development, and automation. ",
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
    info:
      'MedForms is a HIPAA–compliant Android application for usage on a tablet that uses handwriting recognition and dynamically generates/exports consultation forms.',
    info2: '',
    url: 'https://github.com/c94/medforms',
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
      name: 'twitter',
      url: 'https://twitter.com/chandlerjklein',
    },
    {
      id: nanoid(),
      name: 'soundcloud',
      url: 'https://soundcloud.com/seeke',
    },
  ],
};
