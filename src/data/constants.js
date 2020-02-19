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

export const defaultCutoff = 60;

export const footerList = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Give Feedback',
    link: '/feedback',
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

export const introPicCount = 4;

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
    description: "Macie makes sure that everything we make is kid-approved.  If it isn't fun, it isn't allowed!  Oh, and typos are completely unacceptable.  Macie enjoys doing crafts, playing Zelda, and going on adventures in the woods.",
  },
  {
    name: 'Claire',
    responsibilities: [
      'Testing',
    ],
    description: "Claire is our junior tester.  She ensures that our books are funny and have words that are appropriate for early readers.  Claire also monitors for anyone that might be working too hard - we can't have that!  She loves wearing animal costumes, listening to music from Frozen 2, and getting back scratches.",
  },
];

export const baseUrl = "https://learningisthesolution.com";
