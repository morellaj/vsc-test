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
    icon: 'reader',
    link: '/update-sign-up',
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
