export interface Courrier {
    id: number;
    type: string;
    objet: string;
    date: string;
    expediteur: string;
    destinataire: string;
    nomFichier?: string;
  }
  