import React from 'react'

const Modal = () => {
    return (
        <div className="modal-container modal-container-close">
            <div className="modal">
                <button className="modal-close-button" type="button">
                    <span className="visually-hidden">Закрыть модальное окно</span>
                </button>
                <h3 className="modal-title">Мы обязательно ответим вам!</h3>
                <form className="modal-form" action="https://echo.htmlacademy.ru" method="post">
                    <input type="text" name="name" placeholder="Имя и Фамилия" />
                    <input type="email" name="email" placeholder="email@example.com" />
                    <textarea name="textarea" placeholder="В свободной форме"></textarea>
                    <button className="additional-button modal-button" type="submit" >Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Modal