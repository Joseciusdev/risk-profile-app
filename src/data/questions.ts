import { Question } from '../types';

const questions: Question[] = [
  {
    id: 1,
    question: 'How would you describe your investment knowledge?',
    options: [
      { id: 'a', text: 'Novice', score: 1 },
      { id: 'b', text: 'Intermediate', score: 2 },
      { id: 'c', text: 'Advanced', score: 3 },
    ],
  },
  {
    id: 2,
    question: 'Investment Duration',
    options: [
      { id: 'a', text: 'Short-term (less than 1 year)', score: 1 },
      { id: 'b', text: 'Medium-term (1-5 years)', score: 2 },
      { id: 'c', text: 'Long-term (more than 5 years)', score: 3 },
    ],
  },
  {
    id: 3,
    question: 'How comfortable are you with taking risks?',
    options: [
      { id: 'a', text: 'Very risk-averse', score: 1 },
      { id: 'b', text: 'Somewhat risk-averse', score: 2 },
      { id: 'c', text: 'Neutral', score: 3 },
      { id: 'd', text: 'Somewhat risk-tolerant', score: 4 },
      { id: 'e', text: 'Very risk-tolerant', score: 5 },
    ],
  },
];

export default questions;
