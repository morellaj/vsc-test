export const detailsText = [
  {
    id: 1,
    label: 'Engaging',
    text: ' Characters and stories that kids love',
    icon: 'child',
  },
  {
    id: 2,
    label: 'Easy',
    text: ' Simple to access and no prep required',
    icon: 'smile',
  },
  {
    id: 3,
    label: 'Free',
    text: 'All current content will remain openly available',
    icon: 'money',
  },
  {
    id: 4,
    label: 'Research-Based',
    text: ' Based on literature from child development experts',
    icon: 'smart',
  },
  {
    id: 5,
    label: 'Community-Driven',
    text: ' Guided by feedback and requests from our users',
    icon: 'shake',
  },
];

export const topicList = [
  {
    id: 1,
    text: 'Hurting Others',
    done: true,
    imgStyle: {},
  },
  {
    id: 2,
    text: 'Critical Thinking',
    done: true,
    imgStyle: {},
  },
  {
    id: 3,
    text: 'Honesty',
    done: true,
    imgStyle: { bottom: '0' },
  },
  {
    id: 4,
    text: 'Thinking for Yourself',
    done: false,
    imgStyle: { top: '0' },
  },
  {
    id: 5,
    text: 'Anger',
    done: false,
    imgStyle: { top: '20px' },
  },
  {
    id: 6,
    text: 'Sharing',
    done: false,
    imgStyle: {},
  },
  {
    id: 7,
    text: 'Gratitude',
    done: false,
    imgStyle: { top: '0' },
  },
  {
    id: 8,
    text: 'Caring',
    done: false,
    imgStyle: {},
  },
  {
    id: 9,
    text: 'Making the World Better',
    done: false,
    imgStyle: {},
  },
  {
    id: 10,
    text: 'Diversity',
    done: false,
    imgStyle: {},
  },
];

export const characterUnitNumbers = ['hurting-others', 'critical-thinking', 'honesty'];

export const unitActivitiesConstants = {
  iconList: {
    pretend: { text: 'Guided Pretend', singleEnd: '', multipleEnd: '' },
    short: { text: 'Short Stories', singleEnd: '', multipleEnd: '' },
    book: { text: 'Interactive Book', multipleEnd: 's' },
    interactive: { text: 'Interactive Activit', singleEnd: 'y', multipleEnd: 'ies' },
    quiz: { text: 'Interactive Quiz', singleEnd: '', multipleEnd: 'zes' },
    parent: { text: 'parent', singleEnd: '', multipleEnd: '' },
  },
  descriptionCutoff: 250,
};

export const parentInformationList = [
  {
    id: 1,
    link: 'book?parents-',
    icon: 'text',
    text: 'Parent Informational',
  },
  {
    id: 2,
    link: 'book-recommendations?',
    icon: 'reader',
    text: 'Book Recommendations',
  },
  {
    id: 3,
    tag: 'learning-goals',
    icon: 'smart',
    text: 'Learning Goals',
  },
  {
    id: 4,
    tag: 'references',
    icon: 'list',
    text: 'References',
  },
];

export const defaultCutoff = 60;

export const navbarList = [
  {
    title: 'Online Books',
    icon: 'reader',
    link: '/units',
  },
  {
    title: 'About',
    icon: 'info',
    link: '/about',
  },
  {
    title: 'Give Feedback',
    icon: 'comment',
    link: '/feedback',
  },
];

export const footerList = [
  {
    title: 'Online Books',
    link: '/units',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Give Feedback',
    link: '/feedback',
  },
  {
    title: 'Email Sign-Up',
    link: '/update-sign-up',
  },
  {
    title: 'Contact Us',
    link: '/contact',
  },
];

export const booksUnitList = {
  'hurting-others': 'I-1',
  'critical-thinking': 'C-1',
  honesty: 'S-1',
};

export const introPicCount = 5;

export const teamData = [
  {
    name: 'Alex',
    responsibilities: [
      'Engineering',
      'Content',
    ],
    description: 'Alex led an award-winning semiconductor engineering team at Texas Instruments.  He loves coding and developing products that help kids learn.  Alex enjoys playing games with his kids and wearing pajamas all day.',
  },
  {
    name: 'Emily',
    responsibilities: [
      'Content',
      'Quality',
    ],
    description: 'Emily studied Chemical Engineering at Rose-Hulman Institute of Technology,  and now devotes her time to helping our testing team learn and grow.  She loves music, Disney, spending time with family, and eating cookies.',
  },
  {
    name: 'Macie',
    responsibilities: [
      'Quality',
      'Testing',
    ],
    description: "Macie makes sure that everything we make is kid-approved.  If it isn't fun, it isn't allowed!  Oh, and typos are completely unnacceptable.  Macie enjoys doing crafts, playing Zelda, and going on adventures in the woods.",
  },
  {
    name: 'Claire',
    responsibilities: [
      'Testing',
    ],
    description: "Claire is our junior tester.  She ensures that our books are funny and have words that are appropriate for early readers.  Claire also monitors for anyone that might be working too hard - we can't have that!  She loves doing crafts, wearing animal costumes, and listening to music from Frozen 2.",
  },
];
