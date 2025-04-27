export interface StudentGrades {
  id: number;
  username: string;
  section: string;
  grades: {
    term: string;
    week1: number;
    week2: number;
    week3: number;
    week4: number;
    week5: number;
    exam: number;
  }[];
}
