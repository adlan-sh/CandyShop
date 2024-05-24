import React from 'react'
import "./pagination.scss";

const Pagination = () => {
    return (
        <section className="pagination">
            <button className="main-button pagination-button" type="button">Показать ещё</button>
            <ul className="pagination-list">
                <li className="pagination-item">
                    <a className="pagination-link pagination-arrow" href="#">
                        <svg className="pagination-icon pagination-icon-disabled" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.8 3.8a.66.66 0 1 0-.94-.94L4.2 7.53a.67.67 0 0 0 0 .94l4.67 4.67a.66.66 0 1 0 .94-.94L5.6 8l4.2-4.2Z"
                            fill="currentColor" /></svg>
                    </a>
                </li>
                <li className="pagination-item pagination-item-current">
                    <a className="pagination-link" href="#">1</a>
                </li>
                <li className="pagination-item">
                    <a className="pagination-link" href="#">2</a>
                </li>
                <li className="pagination-item">
                    <a className="pagination-link" href="#">3</a>
                </li>
                <li className="pagination-item">
                    <a className="pagination-link" href="#">4</a>
                </li>
                <li>
                    <a className="pagination-link" href="#">5</a>
                </li>
                <li className="pagination-item">
                    <a className="pagination-link pagination-arrow" href="#">
                        <svg className="pagination-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.8 3.8a.66.66 0 1 0-.94-.94L4.2 7.53a.67.67 0 0 0 0 .94l4.67 4.67a.66.66 0 1 0 .94-.94L5.6 8l4.2-4.2Z"
                            fill="currentColor" /></svg>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Pagination