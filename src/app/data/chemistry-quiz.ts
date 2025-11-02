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

export const CHEMISTRY_QUIZZES: LevelQuiz[] = [
  // Level 1
  {
    level: 1,
    questions: [
      { question: 'H2O is the chemical formula of?', options: ['Hydrogen Peroxide', 'Water', 'Oxygen', 'Hydrogen'], answer: 1, hint: 'It is essential for life.' },
      { question: 'Atomic number of Hydrogen?', options: ['1', '2', '0', '8'], answer: 0, hint: 'It is the first element.' },
      { question: 'NaCl is commonly known as?', options: ['Baking Soda', 'Salt', 'Sugar', 'Vinegar'], answer: 1, hint: 'It is used in food.' },
      { question: 'Chemical symbol for Gold?', options: ['Au', 'Ag', 'Gd', 'Go'], answer: 0, hint: 'It is used in jewelry.' },
      { question: 'Oxygen gas formula?', options: ['O2', 'O3', 'O', 'H2O'], answer: 0, hint: 'It is essential for breathing.' },
      { question: 'pH of neutral water?', options: ['7', '0', '14', '1'], answer: 0, hint: 'It is neutral.' },
      { question: 'CO2 is?', options: ['Carbon Monoxide', 'Carbon Dioxide', 'Oxygen', 'Methane'], answer: 1, hint: 'Plants use it for photosynthesis.' },
      { question: 'Acidic substance has pH?', options: ['<7', '>7', '=7', 'None'], answer: 0, hint: 'Less than neutral.' },
      { question: 'HCl is?', options: ['Hydrochloric Acid', 'Hydrogen Chloride', 'Water', 'Salt'], answer: 0, hint: 'Found in stomach.' },
      { question: 'Chemical symbol of Sodium?', options: ['Na', 'S', 'So', 'N'], answer: 0, hint: 'Used in table salt.' },
    ]
  },

  // Level 2
  {
    level: 2,
    questions: [
      { question: 'Atomic number of Carbon?', options: ['6', '12', '8', '14'], answer: 0, hint: 'It forms the basis of organic life.' },
      { question: 'NaOH is a?', options: ['Acid', 'Base', 'Salt', 'Sugar'], answer: 1, hint: 'It is a strong base.' },
      { question: 'Chemical symbol of Iron?', options: ['Ir', 'Fe', 'I', 'In'], answer: 1, hint: 'Used in construction and tools.' },
      { question: 'H2SO4 is?', options: ['Sulfuric Acid', 'Sulfur Oxide', 'Hydrogen Sulfide', 'Sodium Sulfate'], answer: 0, hint: 'Used in batteries.' },
      { question: 'NaHCO3 is?', options: ['Baking Powder', 'Baking Soda', 'Lye', 'Vinegar'], answer: 1, hint: 'Used in baking and cleaning.' },
      { question: 'Atomic mass of Oxygen?', options: ['16', '8', '32', '14'], answer: 0, hint: 'Number of protons + neutrons.' },
      { question: 'NH3 is?', options: ['Ammonia', 'Ammonium', 'Nitric Acid', 'Nitrogen'], answer: 0, hint: 'It has a pungent smell.' },
      { question: 'Chemical formula of Methane?', options: ['CH4', 'C2H6', 'C3H8', 'CO2'], answer: 0, hint: 'Simplest hydrocarbon.' },
      { question: 'Strong acid among these?', options: ['HCl', 'CH3COOH', 'H2CO3', 'H2O'], answer: 0, hint: 'Commonly used in lab.' },
      { question: 'Common name of CaCO3?', options: ['Lime', 'Chalk', 'Gypsum', 'Salt'], answer: 1, hint: 'Used in blackboards.' },
    ]
  },

  // Level 3
  {
    level: 3,
    questions: [
      { question: 'Electrolysis of water produces?', options: ['H2 & O2', 'CO2 & O2', 'H2 & CO2', 'H2O2'], answer: 0, hint: 'Gas evolution occurs at electrodes.' },
      { question: 'Atomic number of Nitrogen?', options: ['7', '14', '8', '6'], answer: 0, hint: 'Found in proteins.' },
      { question: 'Which gas is released when acids react with metals?', options: ['Hydrogen', 'Oxygen', 'Nitrogen', 'Carbon dioxide'], answer: 0, hint: 'It is flammable.' },
      { question: 'Chemical formula of Sulfuric Acid?', options: ['H2SO4', 'H2SO3', 'H2S', 'HSO4'], answer: 0, hint: 'Strong mineral acid.' },
      { question: 'Atomic symbol of Potassium?', options: ['K', 'P', 'Po', 'Pt'], answer: 0, hint: 'Found in fertilizers.' },
      { question: 'pH of strong base?', options: ['>7', '<7', '7', '0'], answer: 0, hint: 'More than neutral.' },
      { question: 'Chemical formula of Glucose?', options: ['C6H12O6', 'C12H22O11', 'CH4', 'CO2'], answer: 0, hint: 'Sugar molecule.' },
      { question: 'Which is noble gas?', options: ['Ne', 'N2', 'O2', 'H2'], answer: 0, hint: 'Inert and colorless.' },
      { question: 'Which element is halogen?', options: ['Cl', 'Na', 'K', 'Mg'], answer: 0, hint: 'Found in table salt.' },
      { question: 'Formula of common salt?', options: ['NaCl', 'KCl', 'Na2SO4', 'CaCl2'], answer: 0, hint: 'Used in food.' },
    ]
  }
];
