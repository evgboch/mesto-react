function PopupWithForm(props) {
  return(
  <>
    {/* <div className="popup popup_profile">
      <form noValidate className="popup__container popup__container_profile" name="popupProfileForm">
        <h2 className="popup__title popup__title_profile">Редактировать профиль</h2>
        <label className="popup__field">
          <input id="name" className="popup__input popup__input_place_top" type="text" name="nameField" placeholder="Жак-Ив Кусто" required minLength="2" maxLength="40" />
          <span id="name-error" className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input id="description" className="popup__input popup__input_place_bottom" type="text" name="descriptionField" placeholder="Исследователь океана" required minLength="2" maxLength="400" />
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
          <input id="place" className="popup__input popup__input_place_top" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
          <span id="place-error" className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input id="link" className="popup__input popup__input_place_bottom" type="url" name="link" placeholder="Ссылка на картинку" required />
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
          <input id="avatar-link" className="popup__input popup__input_place_bottom" type="url" name="avatar-link" placeholder="Ссылка на картинку" required />
          <span id="avatar-link-error" className="popup__error"></span>
        </label>
        <button className="popup__submit-button popup__submit-button_avatar" type="submit">Сохранить</button>
        <button className="popup__close-button popup__close-button_avatar" type="button"></button>
      </form>
    </div> */}

    <div className={`popup popup_${props.name}`}>
      <form noValidate className={`popup__container popup__container_${props.name}`} name="popupProfileForm">
        <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
        {props.children}
        <button className={`popup__submit-button popup__submit-button_${props.name}`} type="submit">{props.buttonText}</button>
        <button className={`popup__close-button popup__close-button_${props.name}`} type="button"></button>
      </form>
    </div>
  </>
  );
}

export default PopupWithForm;
