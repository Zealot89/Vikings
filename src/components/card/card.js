import React from "react";
import image from "../../images/Rectangle 9.png";

function Card() {
  return (
    <li className="card">
      <h2 className="card__title">02</h2>
      <div className="card__overlay">
        <img className="card__image" src={image} alt="картинка"></img>
        <p className="card__text">Смотреть</p>
      </div>
    </li>
  );
}

export default Card;
