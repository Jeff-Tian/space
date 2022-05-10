import React from 'react';
import {Link} from "gatsby";
import {rhythm} from "../utils/typography";

export const Pagination = ({limit, skip, totalPages, currentPage}) => {
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

export default Pagination;