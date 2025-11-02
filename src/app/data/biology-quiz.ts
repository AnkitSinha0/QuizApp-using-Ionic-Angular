// src/app/data/biology-quiz.ts

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

export const BIOLOGY_QUIZZES: LevelQuiz[] = [
  {
    level: 1,
    questions: [
      { question: 'What is the basic unit of life?', options: ['Cell', 'Atom', 'Molecule', 'Tissue'], answer: 0, hint: 'It’s microscopic and fundamental.' },
      { question: 'Which organelle is known as the powerhouse?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'], answer: 1, hint: 'It produces energy.' },
      { question: 'DNA stands for?', options: ['Deoxyribonucleic Acid', 'Ribonucleic Acid', 'Deoxy Acid', 'None'], answer: 0, hint: 'Contains genetic instructions.' },
    ]
  },
  {
    level: 2,
    questions: [
      { question: 'Plants make food through?', options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'], answer: 1, hint: 'Requires sunlight.' },
      { question: 'Which blood cells fight infection?', options: ['Red', 'White', 'Platelets', 'Plasma'], answer: 1, hint: 'They are part of immune system.' },
      { question: 'Which vitamin is produced in skin?', options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], answer: 3, hint: 'Activated by sunlight.' },
    ]
  },
  {
    level: 3,
    questions: [
      { question: 'What carries oxygen in blood?', options: ['Hemoglobin', 'Insulin', 'Chlorophyll', 'ATP'], answer: 0, hint: 'It is a protein.' },
      { question: 'Which process produces gametes?', options: ['Mitosis', 'Meiosis', 'Binary fission', 'Budding'], answer: 1, hint: 'Reduces chromosome number.' },
      { question: 'Human genome is made up of?', options: ['20,000 genes', '46 chromosomes', 'DNA molecules', 'All of the above'], answer: 3, hint: 'Genetic material in humans.' },
    ]
  }
];
