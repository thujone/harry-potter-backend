function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const installments = [
  {
    "number": 1,
    "title": "The Sorcerer's Stone",
    "source": "both"
  },
  {
    "number": 2,
    "title": "The Chamber of Secrets",
    "source": "both"
  },
  {
    "number": 3,
    "title": "The Prisoner of Azkaban",
    "source": "both"
  },
  {
    "number": 4,
    "title": "The Goblet of Fire",
    "source": "both"
  },
  {
    "number": 5,
    "title": "The Order of the Phoenix",
    "source": "both"
  },
  {
    "number": 6,
    "title": "The Half-Blood Prince",
    "source": "both"
  },
  {
    "number": 7,
    "title": "The Deathly Hallows (Part One)",
    "source": "movie"
  },
  {
    "number": 8,
    "title": "The Deathly Hallows (Part Two)",
    "source": "movie"
  },
  {
    "number": 9,
    "title": "The Deathly Hallows",
    "source": "book"
  },
  {
    "number": 10,
    "title": "na",
    "source": "none"
  }
]

export const questions = [
  {
    installment: 'The Chamber of Secrets',
    question: 'How many Ford Anglias were wrecked filming the Whomping Willow scene?',
    answer: '14',
    incorrect1: '16',
    incorrect2: '13',
    incorrect3: '11',
    incorrect4: '6',
    incorrect5: '20',
    difficulty: 5
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    installment: 'na',
    question: 'How many times was Harry Potter mentioned throughout the seven main books?',
    answer: '18,956',
    incorrect1: '17,354',
    incorrect2: '11,512',
    incorrect3: '5,132',
    incorrect4: '7,629',
    incorrect5: '27,680',
    difficulty: 5
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    installment: "The Sorcerer's Stone",
    question: 'What is the number on the Hogwarts Express train?',
    answer: '5972',
    incorrect1: '7529',
    incorrect2: '7952',
    incorrect3: '5729',
    incorrect4: '2597',
    incorrect5: '411',
    difficulty: 4
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  }
];
