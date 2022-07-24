function PopupWithForm(props) {
  return(
    <div className={props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}>
      <form noValidate className={`popup__container popup__container_${props.name}`} name="popupProfileForm">
        <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
        {props.children}
        <button className={`popup__submit-button popup__submit-button_${props.name}`} type="submit">{props.buttonText}</button>
        <button className={`popup__close-button popup__close-button_${props.name}`} type="button" onMouseDown={props.onClose}></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
