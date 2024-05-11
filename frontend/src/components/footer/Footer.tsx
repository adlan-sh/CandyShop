import React from 'react'

const Footer = () => {
    return (
        <footer className="main-footer">
            <ul className="bestesller-container-contacts">
                <li className="contacts-item">
                    <a className="contacts-link" href="https://vk.com/htmlacademy">
                        <svg className="contacts-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Zm-11.4 3h-.7s-1.6 0-3-1.2C7.4 12.4 6 9.6 6 9.6v-.2l.4-.1h2l.1.2.7 1.2c.7 1 1 1.3 1.3 1.2.3-.2.2-1.5.2-1.5s0-.5-.2-.7c-.1-.2-.4-.3-.5-.3 0 0 0-.2.3-.3l1.5-.1h.8c.5.2.5.5.4 1.1V11c0 .4 0 .8.2 1 .2 0 .5 0 1.3-1.3l.7-1.2.1-.2h2.1l.6.1c0 .3-.2.8-1 1.6-.7.9-1 1.2-1 1.4 0 .2.3.4.7.7l1.2 1.2c.4.6-.4.7-.4.7h-1.7l-.7-.2a4 4 0 0 1-.7-.6c-.4-.4-.7-.7-1-.6-.4.1-.4 1-.4 1v.2l-.4.2Z"
                            fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Вконтакте</span>
                    </a>
                </li>
                <li className="contacts-item">
                    <a className="contacts-link" href="https://www.facebook.com/htmlacademy">
                        <svg className="contacts-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Zm-9.6.9H13V18h-2.3v-5.1H9v-2.4h1.7V8.8C10.7 7 11.8 6 13.4 6H15v2.1h-.9c-1.1 0-1.1.6-1.1 1.2v1.2h2l-.6 2.4Z"
                            fill="currentColor" /></svg>
                        <span className="visually-hidden">Фейсбук</span>
                    </a>
                </li>
                <li className="contacts-item">
                    <a className="contacts-link" href="https://instagram.com/htmlacademy/">
                        <svg className="contacts-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Zm-9.53-5.96C13.83 6 13.63 6 12 6c-1.63 0-1.83 0-2.47.04-.64.03-1.08.13-1.46.28-.4.15-.76.38-1.06.69-.3.3-.54.66-.7 1.06-.14.38-.24.82-.27 1.46C6 10.17 6 10.37 6 12c0 1.63 0 1.83.04 2.47.03.64.13 1.08.28 1.46.15.4.38.76.69 1.06.3.3.66.54 1.06.7.38.14.82.24 1.46.27.64.03.84.04 2.47.04 1.63 0 1.83 0 2.47-.04a4.43 4.43 0 0 0 1.46-.28c.4-.15.76-.38 1.06-.69.3-.3.54-.66.7-1.06.14-.38.24-.82.27-1.46.03-.64.04-.84.04-2.47 0-1.63 0-1.83-.04-2.47a4.43 4.43 0 0 0-.28-1.46c-.15-.4-.38-.76-.69-1.06a2.93 2.93 0 0 0-1.06-.7 4.42 4.42 0 0 0-1.46-.27Zm-4.6 3.84a3 3 0 1 1 4.25 4.24 3 3 0 0 1-4.24-4.24Zm5.81-1.56a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06Zm-2.4 2.4a1.8 1.8 0 1 0-2.55 2.55 1.8 1.8 0 0 0 2.54-2.54Z"
                            fill="currentColor" /></svg>
                        <span className="visually-hidden">Инстаграм</span>
                    </a>
                </li>
            </ul>
            <ul className="footer-data-list">
                <li className="footer-data-item footer-data-item-heart">Для поставщиков</li>
                <li className="footer-data-item">Наши документы</li>
                <li className="footer-data-item">О производстве</li>
                <li className="footer-data-item">Экологические стандарты</li>
            </ul>
            <div>
                <a href="https://htmlacademy.ru">
                    <svg className="footer-logo" width="93" height="27" viewBox="0 0 93 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#2D3440"><path d="M0 10.4v2.1h2v-2H0ZM9.4 3.7c-1.2 0-2.3.5-2.9 1.4V0H4.7v12.5h1.6V8.2c0-1.7 1.1-3 2.7-3 1.5 0 2.3 1.2 2.3 2.7v4.6h1.7v-5c0-2.3-1.5-3.8-3.7-3.8ZM21.5 4h-3.9V.8H16v3h-1.6v1.6H16v4.8c0 1.4.8 2.2 2.2 2.2h3.3v-1.6h-3c-.6 0-.9-.3-.9-.9V5.5h4V3.9ZM33.3 3.7c-1.4 0-2.4.6-3 1.6a3 3 0 0 0-2.7-1.6c-1.1 0-2 .6-2.5 1.4V4h-1.6v8.6H25V8.1c0-1.6.8-2.8 2.1-2.8 1.2 0 2 .8 2 2.1v5.1h1.6V8c0-2 1.1-2.7 2.1-2.7 1.2 0 2 .8 2 2.1v5.1h1.6V7.2c0-2-1.2-3.5-3.2-3.5ZM38.7 10.3c0 1.4.8 2.2 2.2 2.2h1.7v-1.6h-1.4c-.6 0-.9-.3-.9-.8V0h-1.6v10.3ZM23.4 16a3.7 3.7 0 0 0-3.2-1.5c-2.5 0-4.3 1.8-4.3 4.5 0 2.6 1.8 4.5 4.3 4.5 1.4 0 2.5-.7 3.1-1.6v1.3H25v-8.5h-1.6v1.2Zm-3 5.9c-1.7 0-2.9-1.3-2.9-3 0-1.6 1.2-2.9 3-2.9 1.7 0 2.9 1.3 2.9 3 0 1.6-1.2 2.9-3 2.9ZM35.8 17.8c-.4-2-2.2-3.3-4.4-3.3-2.7 0-4.5 2-4.5 4.5s1.8 4.5 4.5 4.5c2.2 0 4-1.5 4.4-3.4H34c-.3 1-1.3 1.8-2.6 1.8-1.8 0-2.9-1.3-2.9-3 0-1.6 1.1-2.9 3-2.9 1.2 0 2.2.8 2.5 1.8h1.8ZM44.5 16a3.7 3.7 0 0 0-3-1.5c-2.6 0-4.5 1.8-4.5 4.5 0 2.6 1.9 4.5 4.4 4.5 1.4 0 2.4-.7 3-1.6h.1v1.3h1.7v-8.5h-1.7v1.2Zm-2.9 5.9c-1.8 0-3-1.3-3-3 0-1.6 1.2-2.9 3-2.9s3 1.3 3 3c0 1.6-1.2 2.9-3 2.9ZM55.5 16c-.7-.9-1.8-1.5-3.1-1.5-2.5 0-4.4 1.8-4.4 4.5 0 2.6 1.8 4.5 4.4 4.5 1.3 0 2.4-.6 3-1.5h.1v1.2h1.6V10.8h-1.6V16Zm-2.9 6c-1.8 0-3-1.4-3-3s1.2-3 3-3 2.9 1.4 2.9 3-1.1 3-2.9 3ZM63.3 14.5c-2.6 0-4.4 2-4.4 4.5 0 2.4 1.7 4.5 4.5 4.5 2 0 3.6-1.1 4.2-3h-1.7c-.4.9-1.3 1.4-2.5 1.4-1.5 0-2.6-1-2.7-2.4h7c.3-2.8-1.5-5-4.4-5Zm0 1.5c1.4 0 2.4.9 2.7 2h-5.3c.2-1.1 1.3-2 2.6-2ZM79.4 14.5c-1.3 0-2.3.6-2.9 1.6a3 3 0 0 0-2.7-1.6 3 3 0 0 0-2.6 1.4v-1.2h-1.6v8.5h1.6V19c0-1.7.9-2.8 2.2-2.9 1.2 0 1.9.9 1.9 2.2v5h1.6v-4.5c0-1.9 1.2-2.7 2.2-2.7 1.2 0 1.9.9 1.9 2.2v5h1.6V18c0-2-1.2-3.5-3.2-3.5ZM88.5 21.9l-3-7.2h-1.8l4 9.3c-.3.8-.6 1-1.4 1h-2v1.7h2c1.5 0 2.3-.7 2.8-2.1l3.8-10h-1.7L88.5 22Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h93v26.7H0z" /></clipPath></defs>
                    </svg>
                </a>
                <p className="created-by">Сделано в <a className="htmlacademy-href" href="https://htmlacademy.ru">.html academy</a> © 2021</p>
            </div>
        </footer>
    )
}

export default Footer