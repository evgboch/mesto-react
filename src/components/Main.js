import React from "react";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";
import avatar from "../images/default-user.png";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  // const [userDescription, setUserDescription] = React.useState("");
  // const [userAvatar, setUserAvatar] = React.useState("");
  // const [userName, setUserName] = React.useState("");
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    // api.getUserInfo()
    //   .then((data) => {
    //     setUserName(data.name);
    //     setUserDescription(data.about);
    //     setUserAvatar(data.avatar);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setUserName("User");
    //     setUserDescription("Info");
    //     setUserAvatar(avatar);
    //   });

    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return(
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <div className="profile__avatar" style={currentUser ? {backgroundImage: `url(${currentUser.avatar})`} : {backgroundImage: `url(${avatar})`}}/>
            <div className="profile__avatar-overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__text-container">
            <div className="profile__title-container">
              <h1 className="profile__title">{currentUser ? currentUser.name : "User"}</h1>
              <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
            </div>
            <p className="profile__subtitle">{currentUser ? currentUser.about : "Info"}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
      </section>

      <section className="photo-cards" aria-label="Фотокарточки">
        <ul className="photo-cards__grid">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
