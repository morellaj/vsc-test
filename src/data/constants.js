export const detailsConstants = {
  slideProperties: {
    duration: 10000,
    transitionDuration: 1000,
    arrows: false,
  },
  textList: [
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
  ],
  pictureList: [
    {
      id: 1,
      src: '../../assets/Detail1.webp',
    },
    {
      id: 2,
      src: '../../assets/Detail9.webp',
    },
    {
      id: 3,
      src: '../../assets/Detail3.webp',
    },
    {
      id: 4,
      src: '../../assets/Detail4.webp',
    },
    {
      id: 5,
      src: '../../assets/Detail7.webp',
    },
  ],
};

export const introSlideProperties = {
  duration: 5000,
  transitionDuration: 1000,
  arrows: false,
};

export const characterUnitNumbers = ['hurting-others', 'critical-thinking', 'honesty'];

export const unitActivitiesConstants = {
  iconList: {
    pretend: { text: 'Guided Pretend', singleEnd: '', multipleEnd: '' },
    short: { text: 'Short Stories', singleEnd: '', multipleEnd: '' },
    book: { text: 'Online Interactive Book', multipleEnd: 's' },
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
];

export const booksUnitList = {
  'hurting-others': 'I-1',
  'critical-thinking': 'C-1',
  honesty: 'S-1',
};
