function ImagePopup() {
  return(
    <div className="popup popup_photo">
      <div className="popup__photo-container">
        <img src="#" alt="#" className="popup__image"/>
        <h3 className="popup__image-caption"></h3>
        <button className="popup__close-button popup__close-button_photo" type="button"></button>
      </div>
    </div>
  );
}
