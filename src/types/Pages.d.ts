export interface MetaDataPage {
  total: number; //24
  perPage: number; //10
  currentPage: number; //1
  lastPage: number; //3
  firstPage: number; //1
  hasNextPage: boolean; //true
  hasPreviousPage: boolean; //false
}

export interface Page<Data> {
  meta: MetaDataPge;
  data: Data[];
}
