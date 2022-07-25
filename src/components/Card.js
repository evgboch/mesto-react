function Card({card}) {
  return (
    <li className="photo-cards__element">
      <div className="photo-cards__picture" style={{backgroundImage: `url(${card.link})`}}></div>
      <div className="photo-cards__title-container">
        <h2 className="photo-cards__title">{card.name}</h2>
        <div className="photo-cards__like-container">
          <button className="photo-cards__like-button" type="button"></button>
          <p className="photo-cards__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button className="photo-cards__delete-button"></button>
    </li>
  );
}

export default Card;
