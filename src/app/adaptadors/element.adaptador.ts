import { ElementApiResponse, ElementCataleg } from '../models/element.model';

export const adaptarElementApi = (api: ElementApiResponse): ElementCataleg => {
  return {
    id: api.id,
    titol: api.nom,
    descripcio: api.descripcio,
    categoria: api.categoria,
    preu: api.preu,
    imatgeUrl: api.imatge,
    esPopular: api.popular,
    unitats: api.stock
  };
};

export const adaptarElementsApi = (apiResponses: ElementApiResponse[]): ElementCataleg[] => {
  return apiResponses.map(api => adaptarElementApi(api));
};