// src/app/data/physics-quiz.ts

export interface Question {
  question: string;
  options: string[];
  answer: number; // index of correct option
  hint: string;
}

export interface LevelQuiz {
  level: number;
  questions: Question[];
}

export const PHYSICS_QUIZZES: LevelQuiz[] = [
  
  {
    level: 1,
    questions: [
      { question: 'What is the SI unit of force?', options: ['Newton', 'Joule', 'Watt', 'Pascal'], answer: 0, hint: 'Force = mass × acceleration.' },
      { question: 'Acceleration due to gravity on Earth?', options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '9 m/s²'], answer: 0, hint: 'Standard gravity value.' },
      { question: 'Unit of mass?', options: ['kg', 'm', 's', 'N'], answer: 0, hint: 'Mass is measured in kilograms.' },
      { question: 'Velocity is measured in?', options: ['m/s', 'm²', 'm/s²', 'N'], answer: 0, hint: 'Distance over time.' },
      { question: 'The symbol of force?', options: ['F', 'M', 'A', 'V'], answer: 0, hint: 'Newton’s second law.' },
    ]
  },


  {
    level: 2,
    questions: [
      { question: 'What is the formula for work?', options: ['W = F × d', 'W = m × a', 'W = P × V', 'W = m × g'], answer: 0, hint: 'Work = Force × Distance.' },
      { question: 'Unit of energy?', options: ['Joule', 'Newton', 'Watt', 'Pascal'], answer: 0, hint: 'Energy unit is Joule.' },
      { question: 'Speed of light in vacuum?', options: ['3 × 10^8 m/s', '3 × 10^6 m/s', '3 × 10^5 m/s', '3 × 10^7 m/s'], answer: 0, hint: 'Famous constant c.' },
      { question: 'Which is a vector quantity?', options: ['Velocity', 'Speed', 'Distance', 'Time'], answer: 0, hint: 'Has magnitude and direction.' },
      { question: 'Newton’s third law?', options: ['Action = Reaction', 'Force = mass × acceleration', 'Energy is conserved', 'Work = Force × Distance'], answer: 0, hint: 'For every action…' },
    ]
  },


  {
    level: 3,
    questions: [
      { question: 'Pressure is measured in?', options: ['Pascal', 'Newton', 'Joule', 'Watt'], answer: 0, hint: 'Force per unit area.' },
      { question: 'The acceleration of free fall is?', options: ['9.8 m/s²', '10 m/s²', '9 m/s²', '8.9 m/s²'], answer: 0, hint: 'Earth gravity.' },
      { question: 'Formula for kinetic energy?', options: ['KE = 1/2 mv²', 'KE = mgh', 'KE = F × d', 'KE = mv'], answer: 0, hint: 'Depends on mass and velocity.' },
      { question: 'Unit of electric current?', options: ['Ampere', 'Volt', 'Ohm', 'Watt'], answer: 0, hint: 'Symbol is A.' },
      { question: 'Power formula?', options: ['P = W/t', 'P = F × d', 'P = m × a', 'P = V/I'], answer: 0, hint: 'Work done per unit time.' },
    ]
  }
];
