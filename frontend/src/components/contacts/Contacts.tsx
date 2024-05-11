import React from 'react'
import "./contacts.scss"

const Contacts = () => {
    return (
        <>
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
        </>
    )
}

export default Contacts