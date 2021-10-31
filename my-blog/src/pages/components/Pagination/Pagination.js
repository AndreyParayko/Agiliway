import React from "react";
import {
  Pagination as StrapPagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

const Pagination = ({
  paginationHandler,
  dataPerPage,
  totalDataCount,
  pageNumber,
}) => {
  const allPages = Math.ceil(totalDataCount / dataPerPage)
  const allPagesCount = [...Array(allPages).keys()];

  const handleClick = (event, pageNumberSetter) => {
    event.preventDefault();
    paginationHandler(pageNumberSetter);
  };

  return (
    <StrapPagination>
      <PaginationItem>
        <PaginationLink
          first
          onClick={(event) => {
            handleClick(event, 1);
          }}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          disabled={1 === pageNumber}
          previous
          onClick={(event) => {
            handleClick(event, pageNumber - 1);
          }}
        />
      </PaginationItem>
      {allPagesCount.map((number) => (
        <PaginationItem key={number+1} active={number+1 === pageNumber}>
          <PaginationLink
            onClick={(event) => {
              handleClick(event, number+1);
            }}
          >
            {number+1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink
          next
          disabled={allPagesCount.length === pageNumber}
          onClick={(event) => {
            handleClick(event, pageNumber + 1);
          }}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          last
          onClick={(event) => {
            handleClick(event, allPagesCount.length);
          }}
        />
      </PaginationItem>
    </StrapPagination>
  );
};

export default Pagination;
