export interface Option {
  id: string;
  text: string;
  score: number;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}
