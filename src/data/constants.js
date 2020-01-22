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
    text: ' Guided by feedback and request from our users',
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

export const booksUnitList = {
  'hurting-others': 'I-1',
  'critical-thinking': 'C-1',
  honesty: 'S-1',
};

export const introPicCount = 5;

export const TeamData = [
  {
    name: 'Alex',
    responsibility: 'ENGINEERING',
    description: 'Alex ',
  },
];
