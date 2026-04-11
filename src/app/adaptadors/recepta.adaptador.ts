import { Recepta, ReceptaApiResponse } from '../models/recepta.model';

export const adaptarReceptaApi = (api: ReceptaApiResponse): Recepta => {
  return {
    id: api.id,
    nom: api.nom,
    descripcio: api.descripcio,
    valoracio: api.valoracio,
    categoria: api.categoria
  };
};

export const adaptarReceptesApi = (receptes: ReceptaApiResponse[]): Recepta[] => {
  return receptes.map(r => adaptarReceptaApi(r));
};