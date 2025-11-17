

export interface Question {
  question: string;
  options: string[];
  answer: number;
  hint: string;
}

export interface LevelQuiz {
  level: number;
  questions: Question[];
}

export const MATH_QUIZZES: LevelQuiz[] = [
  
  {
    level: 1,
    questions: [
      { question: '5 + 3 = ?', options: ['5', '8', '10', '7'], answer: 1, hint: 'Add the two numbers.' },
      { question: '10 - 6 = ?', options: ['4', '6', '3', '5'], answer: 0, hint: 'Subtract 6 from 10.' },
      { question: '2 + 7 = ?', options: ['8', '9', '10', '7'], answer: 1, hint: 'Add 2 and 7.' },
      { question: '1 + 6 = ?', options: ['6', '7', '8', '5'], answer: 1, hint: 'Add 1 and 6.' },
      { question: '3 + 4 = ?', options: ['7', '6', '8', '5'], answer: 0, hint: 'Add 3 and 4.' },
      { question: '9 - 3 = ?', options: ['6', '5', '7', '4'], answer: 0, hint: 'Subtract 3 from 9.' },
      { question: '4 + 5 = ?', options: ['9', '8', '10', '7'], answer: 0, hint: 'Add 4 and 5.' },
      { question: '8 - 2 = ?', options: ['5', '6', '7', '8'], answer: 1, hint: 'Subtract 2 from 8.' },
      { question: '6 + 1 = ?', options: ['6', '7', '8', '5'], answer: 1, hint: 'Add 6 and 1.' },
      { question: '3 + 3 = ?', options: ['5', '6', '7', '4'], answer: 1, hint: 'Add 3 and 3.' },
    ]
  },


  {
    level: 2,
    questions: [
      { question: '12 + 5 = ?', options: ['16', '17', '18', '19'], answer: 1, hint: 'Add the numbers.' },
      { question: '15 - 7 = ?', options: ['7', '8', '9', '6'], answer: 1, hint: 'Subtract 7 from 15.' },
      { question: '3 × 4 = ?', options: ['12', '11', '13', '14'], answer: 0, hint: 'Multiply 3 by 4.' },
      { question: '16 ÷ 4 = ?', options: ['3', '4', '5', '6'], answer: 1, hint: 'Divide 16 by 4.' },
      { question: '9 × 2 = ?', options: ['17', '18', '16', '19'], answer: 1, hint: 'Multiply 9 by 2.' },
      { question: '20 - 5 = ?', options: ['15', '14', '16', '13'], answer: 0, hint: 'Subtract 5 from 20.' },
      { question: '8 + 7 = ?', options: ['14', '15', '16', '13'], answer: 1, hint: 'Add 8 and 7.' },
      { question: '6 × 3 = ?', options: ['18', '17', '19', '16'], answer: 0, hint: 'Multiply 6 by 3.' },
      { question: '18 ÷ 3 = ?', options: ['6', '5', '7', '8'], answer: 0, hint: 'Divide 18 by 3.' },
      { question: '14 + 6 = ?', options: ['19', '20', '21', '22'], answer: 1, hint: 'Add the numbers.' },
    ]
  },

  // Level 3
  {
    level: 3,
    questions: [
      { question: '25 + 17 = ?', options: ['42', '41', '43', '40'], answer: 0, hint: 'Add 25 and 17.' },
      { question: '50 - 28 = ?', options: ['22', '23', '21', '24'], answer: 0, hint: 'Subtract 28 from 50.' },
      { question: '6 × 7 = ?', options: ['42', '41', '43', '40'], answer: 0, hint: 'Multiply 6 by 7.' },
      { question: '64 ÷ 8 = ?', options: ['8', '7', '9', '6'], answer: 0, hint: 'Divide 64 by 8.' },
      { question: '15 × 2 = ?', options: ['30', '28', '32', '31'], answer: 0, hint: 'Multiply 15 by 2.' },
      { question: '36 ÷ 6 = ?', options: ['5', '6', '7', '8'], answer: 1, hint: 'Divide 36 by 6.' },
      { question: '27 + 18 = ?', options: ['44', '45', '46', '43'], answer: 1, hint: 'Add the numbers.' },
      { question: '40 - 22 = ?', options: ['17', '18', '19', '20'], answer: 1, hint: 'Subtract.' },
      { question: '9 × 5 = ?', options: ['44', '45', '46', '43'], answer: 1, hint: 'Multiply.' },
      { question: '81 ÷ 9 = ?', options: ['8', '9', '10', '7'], answer: 1, hint: 'Divide.' },
    ]
  },

  // Level 4
  {
    level: 4,
    questions: [
      { question: '50 + 25 = ?', options: ['75', '70', '80', '74'], answer: 0, hint: 'Add the numbers.' },
      { question: '100 - 45 = ?', options: ['55', '54', '56', '53'], answer: 0, hint: 'Subtract 45 from 100.' },
      { question: '7 × 8 = ?', options: ['56', '55', '57', '54'], answer: 0, hint: 'Multiply.' },
      { question: '64 ÷ 8 = ?', options: ['8', '7', '9', '6'], answer: 0, hint: 'Divide.' },
      { question: '12 × 3 = ?', options: ['36', '35', '37', '34'], answer: 0, hint: 'Multiply.' },
      { question: '72 ÷ 8 = ?', options: ['8', '9', '10', '7'], answer: 1, hint: 'Divide.' },
      { question: '33 + 44 = ?', options: ['77', '76', '78', '75'], answer: 0, hint: 'Add.' },
      { question: '90 - 37 = ?', options: ['53', '52', '54', '51'], answer: 0, hint: 'Subtract.' },
      { question: '8 × 9 = ?', options: ['72', '73', '71', '74'], answer: 0, hint: 'Multiply.' },
      { question: '81 ÷ 9 = ?', options: ['9', '8', '10', '7'], answer: 0, hint: 'Divide.' },
    ]
  },

  // Level 5
  {
    level: 5,
    questions: [
      { question: '125 + 75 = ?', options: ['200', '190', '210', '205'], answer: 0, hint: 'Add numbers.' },
      { question: '150 - 65 = ?', options: ['85', '84', '86', '83'], answer: 0, hint: 'Subtract.' },
      { question: '9 × 9 = ?', options: ['81', '80', '82', '79'], answer: 0, hint: 'Multiply.' },
      { question: '144 ÷ 12 = ?', options: ['12', '11', '13', '14'], answer: 0, hint: 'Divide.' },
      { question: '15 × 7 = ?', options: ['105', '104', '106', '103'], answer: 0, hint: 'Multiply.' },
      { question: '120 ÷ 10 = ?', options: ['12', '11', '13', '14'], answer: 0, hint: 'Divide.' },
      { question: '45 + 38 = ?', options: ['83', '82', '84', '85'], answer: 0, hint: 'Add.' },
      { question: '99 - 47 = ?', options: ['52', '51', '53', '50'], answer: 0, hint: 'Subtract.' },
      { question: '11 × 5 = ?', options: ['55', '54', '56', '53'], answer: 0, hint: 'Multiply.' },
      { question: '81 ÷ 9 = ?', options: ['9', '8', '10', '7'], answer: 0, hint: 'Divide.' },
    ]
  },

  // Level 6
  {
    level: 6,
    questions: [
      { question: '200 + 150 = ?', options: ['350', '340', '360', '345'], answer: 0, hint: 'Add numbers.' },
      { question: '300 - 125 = ?', options: ['175', '176', '174', '173'], answer: 0, hint: 'Subtract.' },
      { question: '12 × 12 = ?', options: ['144', '143', '145', '142'], answer: 0, hint: 'Multiply.' },
      { question: '121 ÷ 11 = ?', options: ['11', '10', '12', '13'], answer: 0, hint: 'Divide.' },
      { question: '14 × 8 = ?', options: ['112', '111', '113', '110'], answer: 0, hint: 'Multiply.' },
      { question: '96 ÷ 12 = ?', options: ['8', '7', '9', '6'], answer: 0, hint: 'Divide.' },
      { question: '55 + 38 = ?', options: ['93', '92', '94', '95'], answer: 0, hint: 'Add.' },
      { question: '77 - 29 = ?', options: ['48', '49', '47', '46'], answer: 0, hint: 'Subtract.' },
      { question: '15 × 6 = ?', options: ['90', '89', '91', '92'], answer: 0, hint: 'Multiply.' },
      { question: '81 ÷ 9 = ?', options: ['9', '8', '10', '7'], answer: 0, hint: 'Divide.' },
    ]
  },

  // Level 7
  {
    level: 7,
    questions: [
      { question: '250 + 175 = ?', options: ['425', '430', '420', '415'], answer: 0, hint: 'Add numbers.' },
      { question: '400 - 125 = ?', options: ['275', '276', '274', '273'], answer: 0, hint: 'Subtract.' },
      { question: '13 × 12 = ?', options: ['156', '157', '155', '154'], answer: 0, hint: 'Multiply.' },
      { question: '144 ÷ 12 = ?', options: ['12', '11', '13', '14'], answer: 0, hint: 'Divide.' },
      { question: '18 × 7 = ?', options: ['126', '125', '127', '124'], answer: 0, hint: 'Multiply.' },
      { question: '108 ÷ 12 = ?', options: ['9', '8', '10', '7'], answer: 0, hint: 'Divide.' },
      { question: '66 + 37 = ?', options: ['103', '102', '104', '101'], answer: 0, hint: 'Add.' },
      { question: '88 - 29 = ?', options: ['59', '60', '58', '57'], answer: 0, hint: 'Subtract.' },
      { question: '15 × 9 = ?', options: ['135', '134', '136', '133'], answer: 0, hint: 'Multiply.' },
      { question: '81 ÷ 9 = ?', options: ['9', '8', '10', '7'], answer: 0, hint: 'Divide.' },
    ]
  }
];
