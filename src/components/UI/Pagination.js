import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = (props) => {

    const pagesCount = Math.ceil(props.itemsCount / props.itemsPerPage);
    const isCurrentPageFirst = props.currentPage === 1;
    const isCurrentPageLast = props.currentPage === pagesCount;

    const changePage = number => {
        if (props.currentPage === number) return;
        props.setCurrentPage(number);
    };

    const onPageNumberClick = pageNumber => {
        changePage(pageNumber);
    };

    const onPreviousPageClick = () => {
        changePage(currentPage => currentPage - 1);
    };

    const onNextPageClick = () => {
        changePage(currentPage => currentPage + 1);
    };

    const setLastPageAsCurrent = () => {
        if (props.currentPage > pagesCount) {
            props.setCurrentPage(pagesCount);
        }
    };

    let isPageNumberOutOfRange;

    for (let i = 0; i < pagesCount; i++) {

    }

    const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
        const pageNumber = index + 1;
        const isPageNumberFirst = pageNumber === 1;
        const isPageNumberLast = pageNumber === pagesCount;
        const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - props.currentPage) <= 2;

        if (
            isPageNumberFirst ||
            isPageNumberLast ||
            isCurrentPageWithinTwoPageNumbers
        ) {
            isPageNumberOutOfRange = false;
            return (
                <Pagination.Item
                    key={pageNumber}
                    onClick={() => onPageNumberClick(pageNumber)}
                    active={pageNumber === props.currentPage}
                >
                    {pageNumber}
                </Pagination.Item>
            );
        }

        if (!isPageNumberOutOfRange) {
            isPageNumberOutOfRange = true;
            return <Pagination.Ellipsis key={pageNumber} className="muted" />;
        }

        return null;
    });

    useEffect(setLastPageAsCurrent, [pagesCount]);

    return (
        <>
            <Pagination>
                <Pagination.Prev
                    onClick={onPreviousPageClick}
                    disabled={isCurrentPageFirst}
                />
                {pageNumbers}
                <Pagination.Next
                    onClick={onNextPageClick}
                    disabled={isCurrentPageLast}
                />
            </Pagination>
        </>
    );
};

export default PaginationComponent;