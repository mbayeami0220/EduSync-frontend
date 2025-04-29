export interface Student {
    nom: string;
    prenom: string;
    ine: string;
    formations: string;
    promo: string;
    diplome: string;
    courses: { name: string; status: string }[];
    grades: { subject: string; score: number }[];
  }
  