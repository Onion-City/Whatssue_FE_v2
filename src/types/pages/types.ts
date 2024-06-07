// 클럽 조회 페이지
export interface PageProps {
    page: number;
    size: number;
    sort?: [string];
  }
  
  //
  export interface PageAble {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: false;
      sorted: true;
      unsorted: false;
    };
    offset: number;
    unpaged: false;
    paged: true;
  }