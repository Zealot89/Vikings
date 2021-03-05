import React from "react";
import Image1 from "../../images/The Storm.png";
import Image2 from "../../images/Is Coming....png";

function Slogan({}) {
  return (
    <section className="slogan">
      <div className="slogan__container">
        <img className="slogan__first-image" src={Image1} alt="картинка"></img>
        <img className="slogan__second-image" src={Image2} alt="картинка"></img>
      </div>
      <div className="slogan__trailer-container">
        <button className="slogan__trailer-button"></button>
        <p className="slogan__subtitle">Посмотреть трейлер сериала</p>
      </div>
    </section>
  );
}
export default Slogan;
