import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

// import avatar from "../images/default-user.png";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input id="name" className="popup__input popup__input_place_top" type="text" name="nameField" placeholder="Жак-Ив Кусто" required minLength="2" maxLength="40"/>
          <span id="name-error" className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input id="description" className="popup__input popup__input_place_bottom" type="text" name="descriptionField" placeholder="Исследователь океана" required minLength="2" maxLength="400"/>
          <span id="description-error" className="popup__error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input id="place" className="popup__input popup__input_place_top" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30"/>
          <span id="place-error" className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input id="link" className="popup__input popup__input_place_bottom" type="url" name="link" placeholder="Ссылка на картинку" required/>
          <span id="link-error" className="popup__error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input id="avatar-link" className="popup__input popup__input_place_bottom" type="url" name="avatar-link" placeholder="Ссылка на картинку" required/>
          <span id="avatar-link-error" className="popup__error"></span>
        </label>
      </PopupWithForm>

      <div className="popup popup_confirmation">
        <div className="popup__container popup__container_confirmation">
          <h2 className="popup__title popup__title_confirmation">Вы уверены?</h2>
          <button className="popup__submit-button popup__submit-button_confirmation" type="submit">Да</button>
          <button className="popup__close-button popup__close-button_confirmation" type="button"></button>
        </div>
      </div>

      {/* <div className="popup popup_photo">
        <div className="popup__photo-container">
          <img src="#" alt="#" className="popup__image"/>
          <h3 className="popup__image-caption"></h3>
          <button className="popup__close-button popup__close-button_photo" type="button"></button>
        </div>
      </div> */}
      <ImagePopup />
    </div>
  );
}

export default App;
