function ImagePopup(props) {
  return(
    <div className={props.card ? "popup popup_photo popup_opened" : "popup popup_photo"}>
      <div className="popup__photo-container">
        <img src={props.card ? props.card.link : "#"} alt={props.card ? props.card.name : "#"} className="popup__image"/>
        <h3 className="popup__image-caption">{props.card ? props.card.name : "#"}</h3>
        <button className="popup__close-button popup__close-button_photo" type="button" onMouseDown={props.onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
