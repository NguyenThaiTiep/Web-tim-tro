import React from "react";
import { Pagination } from "react-bootstrap";
import "./style.scss";
interface Props {
  pageActive?: number;
  lastPage?: number;
}

export const PaginationItem = (props: Props) => {
  const { pageActive, lastPage } = props;

  const changePage = (page: number) => {};
  return (
    <Pagination className={"pagination-item justify-content-center"}>
      <Pagination.Prev
        disabled={pageActive == 1}
        onClick={() => {
          changePage((pageActive as any) - 1);
        }}
      />
      {(pageActive as any) >= (lastPage as any) - 1 &&
      (pageActive as any) != 1 ? (
        <Pagination.Ellipsis />
      ) : null}
      {(pageActive as any) - 1 > 1 ? <Pagination.Ellipsis /> : null}
      {(pageActive as any) === (lastPage as any) &&
      (lastPage as any) - 2 > 0 ? (
        <Pagination.Item
          onClick={() => {
            changePage((pageActive as any) - 2);
          }}
        >
          {pageActive ? (pageActive as any) - 2 : 0}
        </Pagination.Item>
      ) : null}
      {(pageActive as any) > 1 ? (
        <Pagination.Item
          onClick={() => {
            changePage((pageActive as any) - 1);
          }}
        >
          {pageActive ? (pageActive as any) - 1 : 0}
        </Pagination.Item>
      ) : null}
      <Pagination.Item active>{pageActive}</Pagination.Item>
      {(pageActive as any) < (lastPage as any) ? (
        <Pagination.Item
          onClick={() => {
            changePage((pageActive as any) + 1);
          }}
        >
          {(pageActive as any) + 1}
        </Pagination.Item>
      ) : null}{" "}
      {(pageActive as any) == 1 &&
      (pageActive as any) + 2 <= (lastPage as any) ? (
        <Pagination.Item
          onClick={() => {
            changePage((pageActive as any) + 2);
          }}
        >
          {(pageActive as any) + 2}
        </Pagination.Item>
      ) : null}{" "}
      {(pageActive as any) + 1 < (lastPage as any) ? (
        <Pagination.Ellipsis />
      ) : null}
      {(pageActive as any) + 3 < (lastPage as any) &&
      (pageActive as any) <= 2 ? (
        <Pagination.Ellipsis />
      ) : null}
      <Pagination.Next
        disabled={pageActive == lastPage}
        onClick={() => changePage((pageActive as any) + 1)}
      />
    </Pagination>
  );
};
