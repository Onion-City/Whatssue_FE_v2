export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

// 페이지네이션 response
export interface CommonPage<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface CommonRes<T> {
  data: CommonPage<T>
}

export interface CommonNoPageRes<T> {
  data: T;
}