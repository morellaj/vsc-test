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
];

export const defaultCutoff = 60;

export const activityCategoryText = {
  book: [
    'Fun, interactive stories that teach important lessons',
    'Kids get to make decisions for the characters',
    'Kids consider the consequences of different choices',
    'Designed to gradually influence children towards better, more intentional behavior',
  ],
  short: [
    'Collections of short stories that teach important lessons',

  ],
  quiz: [
    'Questions about difficult situations presented as a book',
    'Kids think and answer questions about the topic',
    "Further internalizes kid's understanding",
  ],
  pretend: [
    'Fun story where kids move around and act out different parts of the story',
    'Physically acting out the right choice increases the chance that kids will make that choice in real life',
  ],
  parent: [
    'Short article to inform parents on the topic',
    'Lets parents know what behavior is typical as well as what they can do to influence their child',
    'Also recommendations for books and shows that offer additional learning',
  ],
};

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
