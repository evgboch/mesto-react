import avatar from "../images/default-user.png";

function Main() {
  function handleEditAvatarClick() {
    document.querySelector(".popup_avatar").classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_profile").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup_card").classList.add("popup_opened");
  }

  return(
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={avatar} alt="Образец аватара"/>
            <div className="profile__avatar-overlay" onClick={handleEditAvatarClick}></div>
          </div>
          <div className="profile__text-container">
            <div className="profile__title-container">
              <h1 className="profile__title">User</h1>
              <button className="profile__edit-button" onClick={handleEditProfileClick} type="button"></button>
            </div>
            <p className="profile__subtitle">Info</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={handleAddPlaceClick} type="button"></button>
      </section>
      <section className="photo-cards" aria-label="Фотокарточки">
        <ul className="photo-cards__grid">
        </ul>
      </section>
    </main>
  );
}

export default Main;