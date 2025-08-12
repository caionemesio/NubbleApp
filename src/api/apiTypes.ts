export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @description Interface que define o formato de uma página de dados retornada pela API.
 * @template T - O tipo dos dados contidos na página.
 */
export interface PageAPI<T> {
  meta: MetaDataPageAPI;
  data: T[];
}

export interface PageParams {
  page?: number;
  per_page?: number;
}
