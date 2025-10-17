import React, { useState } from "react";
import { usePagination } from "./usePagination";
import { PaginationItem } from "./PaginationItem";
import { PaginationProps } from "./Pagination.types";

export default function Pagination(props: PaginationProps) {
  console.log(props);
  const [page, setPage] = useState(1);
  const { items, onChange } = usePagination({
   ...props
  });

  const handleChangePage = (e: any, pageValue: number) => {
    if (pageValue === page) return;
    setPage(pageValue);
    onChange(e, pageValue);
  };

  return (
    <div>
      {items.map((item, index) => (
        <PaginationItem
          key={index}
          type={item.type}
          page={item.page}
          disabled={item.disabled}
          selected={page === item.page && item.type === "page"}
          onClick={handleChangePage}
          {...props}
        />
      ))}
    </div>
  );
}
