function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="photo-cards__element">
      <div className="photo-cards__picture" style={{backgroundImage: `url(${props.card.link})`}} onMouseDown={handleClick}></div>
      <div className="photo-cards__title-container">
        <h2 className="photo-cards__title">{props.card.name}</h2>
        <div className="photo-cards__like-container">
          <button className="photo-cards__like-button" type="button"></button>
          <p className="photo-cards__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="photo-cards__delete-button"></button>
    </li>
  );
}

export default Card;
