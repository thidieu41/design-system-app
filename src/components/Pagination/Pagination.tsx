import React, { useState } from "react";
import { usePagination } from "./usePagination";
import { PaginationItem } from "./PaginationItem";
import { PaginationProps } from "./Pagination.types";
import styled from "@emotion/styled";
import { useSxStyles } from "../../utils/useSxStyles";

const PaginationRoot = styled("div")<PaginationProps>(({ sx }) => {
  const sxStyle = useSxStyles();
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...sxStyle,
  };
});

export default function Pagination(props: PaginationProps) {
  const { renderItem, ...restProps } = props;
  const [page, setPage] = useState(1);
  const { items, onChange } = usePagination({
    ...props,
  });

  const handleChangePage = (e: any, pageValue: number) => {
    if (pageValue === page) return;
    setPage(pageValue);
    onChange(e, pageValue);
  };

  return (
    <PaginationRoot>
      {items.map((item, index) => {
        const itemProps = {
          key: index,
          typeProps: item.typeProps,
          page: item.page,
          disabled: item.disabled,
          selected: page === item.page && item.typeProps === "page",
          onClick: handleChangePage,
          ...restProps,
        };

        if (renderItem) {
          return renderItem(itemProps);
        }

        return <PaginationItem {...itemProps} />;
      })}
    </PaginationRoot>
  );
}
