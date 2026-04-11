export interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  popular: boolean;
  stock: number;
}

export interface ElementCataleg {
  id: string;
  titol: string;       // Mapejat de 'nom'
  descripcio: string;
  categoria: string;
  preu: number;
  imatgeUrl: string;   // Mapejat de 'imatge'
  esPopular: boolean;  // Mapejat de 'popular'
  unitats: number;     // Mapejat de 'stock'
}