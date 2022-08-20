import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });

    inputRef.current.value = "";
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__field">
        <input ref={inputRef} id="avatar-link" className="popup__input popup__input_place_bottom" type="url" name="avatar-link" placeholder="Ссылка на картинку" required/>
        <span id="avatar-link-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
