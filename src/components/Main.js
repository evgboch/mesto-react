import React from "react";
import { api } from "../utils/Api";
import avatar from "../images/default-user.png";

function Main(props) {
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
        setUserName("User");
        setUserDescription("Info");
        setUserAvatar(avatar);
      });
  });

  return(
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}/>
            <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__text-container">
            <div className="profile__title-container">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
      </section>
      <section className="photo-cards" aria-label="Фотокарточки">
        <ul className="photo-cards__grid">
        </ul>
      </section>
    </main>
  );
}

export default Main;
