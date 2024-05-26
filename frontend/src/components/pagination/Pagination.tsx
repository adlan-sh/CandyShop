import React, { useState } from 'react'
import "./pagination.scss";

const getPaginationArray = (length: number) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(i);
    }
    return array;
}

type PaginationProps = {
    refetch: any, totalPages: number | undefined, currentPage: number | undefined
}

const Pagination = ({ refetch, totalPages, currentPage }: PaginationProps) => {

    return (
        <section className="pagination">
            {/* <button className="main-button pagination-button" type="button">Показать ещё</button> */}
            <ul className="pagination-list">

                <li className="pagination-item">
                    <button type='button' onClick={() => refetch(currentPage! - 1 > 0 ? currentPage! - 1 : 0)} className="pagination-link pagination-arrow">
                        <svg className="pagination-icon pagination-icon-disabled" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.8 3.8a.66.66 0 1 0-.94-.94L4.2 7.53a.67.67 0 0 0 0 .94l4.67 4.67a.66.66 0 1 0 .94-.94L5.6 8l4.2-4.2Z"
                            fill="currentColor" /></svg>
                    </button>
                </li>
                {getPaginationArray(totalPages!).map((value, i) => {
                    console.log(i, currentPage);
                    return (
                        <li className={`pagination-item "pagination-item-current"`}>
                            <button type='button' onClick={() => refetch(i)} className="pagination-link">{i + 1}</button>
                        </li>)
                })}
                <li className="pagination-item">
                    <button type='button' onClick={() => refetch(currentPage! + 1 < totalPages! ? currentPage! + 1 : totalPages! - 1)} className="pagination-link pagination-arrow">
                        <svg className="pagination-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.8 3.8a.66.66 0 1 0-.94-.94L4.2 7.53a.67.67 0 0 0 0 .94l4.67 4.67a.66.66 0 1 0 .94-.94L5.6 8l4.2-4.2Z"
                            fill="currentColor" /></svg>
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default Pagination