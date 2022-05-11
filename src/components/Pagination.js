import React from 'react';
import {Link} from "gatsby";
import {rhythm} from "../utils/typography";
import {UniheartPagination} from "@uniheart/experience.ui.uniheart-pagination/uniheart-pagination";

const RawPagination = ({limit, skip, totalPages, currentPage}) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    return <ul
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
        }}
    >
        {!isFirst && (
            <Link to={prevPage} rel="prev">
                ← Previous Page
            </Link>
        )}
        {Array.from({length: totalPages}, (_, i) => (
            <li
                key={`pagination-number${i + 1}`}
                style={{
                    margin: 0,
                }}
            >
                <Link
                    to={`/${i === 0 ? '' : i + 1}`}
                    style={{
                        padding: rhythm(1 / 4),
                        textDecoration: 'none',
                        color: i + 1 === currentPage ? '#ffffff' : '',
                        background: i + 1 === currentPage ? '#007acc' : '',
                    }}
                >
                    {i + 1}
                </Link>
            </li>
        ))}
        {!isLast && (
            <Link to={nextPage} rel="next">
                Next Page →
            </Link>
        )}
    </ul>;
};

const UniHeartPagination = ({skip, limit, currentPage, totalItems, totalPages}) => {
    return <UniheartPagination limit={limit}
                               currentPage={currentPage}
                               skip={skip}
                               showTotal={(t) => `共${t}篇`} total={totalItems}
                               itemRender={(toPage, itemType, originalElement) => {
                                   if (itemType === 'page') {
                                       return <Link
                                           to={`/${toPage > 1 ? toPage : ''}`}
                                       >
                                           {toPage}
                                       </Link>
                                   }

                                   if (itemType === 'prev' && toPage > 0) {
                                       return <Link to={`/${toPage > 1 ? toPage : ''}`} rel="prev">
                                           ←
                                       </Link>
                                   }

                                   if (itemType === 'next' && currentPage < totalPages) {
                                       return <Link to={`/${toPage}`} rel="next">→</Link>
                                   }

                                   return originalElement;
                               }}
                               onChange={(page) => {
                                   console.log('page = ', page, window)
                                   window.location.pathname = `/${page > 1 ? page : ''}`;
                               }}
    />
}

const Pagination = UniHeartPagination;
export default Pagination;