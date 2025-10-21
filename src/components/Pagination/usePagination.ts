import { useState } from "react";
import { PaginationList, UsePaginationProps } from "./Pagination.types";


export const usePagination = (props: UsePaginationProps) => {
  const {
    count = 0,
    page: pageProp,
    defaultPage = 1,
    onChange,
    siblingCount = 1,
    boundaryCount = 1,
    showFirstButton = true,
    showLastButton = true,
    hideNextButton = false,
    hidePrevButton = false,
  } = props;

  const [page, setPage] = useState(pageProp ?? defaultPage);
  const currentPage = pageProp ?? page;
  const itemList: PaginationList[] = [];

  const handleChange = (event: any, value: number) => {
    if (pageProp === undefined) setPage(value);
    onChange?.(event, value);
  };

  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  );

  const siblingStart = Math.max(
    Math.min(
      currentPage - siblingCount,
      count - boundaryCount - siblingCount * 2 - 1
    ),
    boundaryCount + 2
  );

  const siblingEnd = Math.min(
    Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  if (showFirstButton) {
    itemList.push({
      typeProps: "first",
      page: 1,
      disabled: currentPage === 1,
    });
  }

  if (!hideNextButton) {
    itemList.push({
      typeProps: "previous",
      page: Math.max(currentPage - 1, 1),
      disabled: currentPage === 1,
    });
  }

  itemList.push(...startPages.map((p) => ({ typeProps: "page" as const, page: p })));

  if (siblingStart > boundaryCount + 2) {
    itemList.push({
      typeProps: "start-ellipsis",
      page,
    });
  } else if (boundaryCount + 1 < count - boundaryCount) {
    itemList.push({
      typeProps: "page",
      page: boundaryCount + 1,
    });
  }

  itemList.push(
    ...range(siblingStart, siblingEnd).map((p) => ({
      typeProps: "page" as const,
      page: p,
    }))
  );

  if (siblingEnd < count - boundaryCount - 1) {
    itemList.push({
      typeProps: "end-ellipsis",
    });
  } else if (count - boundaryCount > boundaryCount) {
    itemList.push({
      typeProps: "page",
      page: count - boundaryCount,
    });
  }

  itemList.push(
    ...endPages.map((p) => ({
      typeProps: "page" as const,
      page: p,
    }))
  );

  if (!hidePrevButton) {
    itemList.push({
      typeProps: "next",
      page: Math.min(currentPage + 1, count),
      disabled: currentPage === count,
    });
  }

  if (showLastButton) {
    itemList.push({
      typeProps: "last",
      page: count,
      disabled: currentPage === count,
    });
  }

  // console.log(itemList, 'itemList')
  return {
    items: itemList,
    currentPage,
    onChange: handleChange,
  };
};
