import avatar from "./images/default-user.png";
// import './App.css';

function App() {
  return (
    <div className="page__container">
      <header className="header page__header">
        <div className="header__logo"></div>
      </header>

      <main className="content">
        <section className="profile content__profile">
          <div className="profile__info">
            <div className="profile__avatar-container">
              <img className="profile__avatar" src={avatar} alt="Образец аватара"/>
              <div className="profile__avatar-overlay"></div>
            </div>
            <div className="profile__text-container">
              <div className="profile__title-container">
                <h1 className="profile__title">User</h1>
                <button className="profile__edit-button" type="button"></button>
              </div>
              <p className="profile__subtitle">Info</p>
            </div>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="photo-cards" aria-label="Фотокарточки">
          <ul className="photo-cards__grid">
          </ul>
        </section>
      </main>

      <footer className="footer page__footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_profile">
        <form noValidate className="popup__container popup__container_profile" name="popupProfileForm">
          <h2 className="popup__title popup__title_profile">Редактировать профиль</h2>
          <label className="popup__field">
            <input id="name" className="popup__input popup__input_place_top" type="text" name="nameField" placeholder="Жак-Ив Кусто" required minLength="2" maxLength="40"/>
            <span id="name-error" className="popup__error"></span>
          </label>
          <label className="popup__field">
            <input id="description" className="popup__input popup__input_place_bottom" type="text" name="descriptionField" placeholder="Исследователь океана" required minLength="2" maxLength="400"/>
            <span id="description-error" className="popup__error"></span>
          </label>
          <button className="popup__submit-button popup__submit-button_profile" type="submit">Сохранить</button>
          <button className="popup__close-button popup__close-button_profile" type="button"></button>
        </form>
      </div>
      <div className="popup popup_card">
        <form noValidate className="popup__container popup__container_card" name="popupCardForm">
          <h2 className="popup__title popup__title_card">Новое место</h2>
          <label className="popup__field">
            <input id="place" className="popup__input popup__input_place_top" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30"/>
            <span id="place-error" className="popup__error"></span>
          </label>
          <label className="popup__field">
            <input id="link" className="popup__input popup__input_place_bottom" type="url" name="link" placeholder="Ссылка на картинку" required/>
            <span id="link-error" className="popup__error"></span>
          </label>
          <button className="popup__submit-button popup__submit-button_card" type="submit">Создать</button>
          <button className="popup__close-button popup__close-button_card" type="button"></button>
        </form>
      </div>
      <div className="popup popup_avatar">
        <form noValidate className="popup__container popup__container_avatar" name="popupAvatarForm">
          <h2 className="popup__title popup__title_avatar">Обновить аватар</h2>
          <label className="popup__field">
            <input id="avatar-link" className="popup__input popup__input_place_bottom" type="url" name="avatar-link" placeholder="Ссылка на картинку" required/>
            <span id="avatar-link-error" className="popup__error"></span>
          </label>
          <button className="popup__submit-button popup__submit-button_avatar" type="submit">Сохранить</button>
          <button className="popup__close-button popup__close-button_avatar" type="button"></button>
        </form>
      </div>
      <div className="popup popup_confirmation">
        <div className="popup__container popup__container_confirmation">
          <h2 className="popup__title popup__title_confirmation">Вы уверены?</h2>
          <button className="popup__submit-button popup__submit-button_confirmation" type="submit">Да</button>
          <button className="popup__close-button popup__close-button_confirmation" type="button"></button>
        </div>
      </div>
      <div className="popup popup_photo">
        <div className="popup__photo-container">
          <img src="#" alt="#" className="popup__image"/>
          <h3 className="popup__image-caption"></h3>
          <button className="popup__close-button popup__close-button_photo" type="button"></button>
        </div>
      </div>

      <template className="photo-cards-template">
        <li className="photo-cards__element">
          <img className="photo-cards__picture" src="#" alt="#"/>
          <div className="photo-cards__title-container">
            <h2 className="photo-cards__title"></h2>
            <div className="photo-cards__like-container">
              <button className="photo-cards__like-button" type="button"></button>
              <p className="photo-cards__like-counter">5</p>
            </div>
          </div>
          <button className="photo-cards__delete-button"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
