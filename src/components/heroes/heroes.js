import React from "react";
import image from "../../images/Rectangle 16.jpg";
import image1 from "../../images/vikings-vikingi-katheryn-5219.jpg";
import image2 from "../../images/Bjorn_Vikings.jpg";

function Heroes({}) {
  const [slides, setSlides] = React.useState([]);

  function objEnjoy() {
    setSlides(document.querySelectorAll(".heroes__slide-container"));
  }
  React.useEffect(() => {
    objEnjoy();
  }, []);
  console.log(slides);
  let slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides() {
    showSlides(slideIndex += 1);
  }
  function minusSlides() {
    showSlides(slideIndex -= 1);
  }

  function showSlides(x) {
    let i;
    //  // const slides = document.querySelector(".heroes__slide-container");
    //
    if (x > slides.length) {
      slideIndex = 1;
    }
    if (x < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add  ("heroes__slide-container_disabled");
    }
    console.log(slides[slideIndex - 1]);
    if (slides[slideIndex - 1] !== undefined)
    //slides[slideIndex - 1].classList.add ("heroes__slide-container_active");
    slides[slideIndex - 1].classList.remove ("heroes__slide-container_disabled");
}

  return (
    <section className="heroes">
      <h2 className="heroes__title">Главные герои</h2>
      <div className="heroes__slide-container">
        <img className="heroes__image" src={image} alt=""></img>
        <div className="heroes__text-container">
          <h3 className="heroes__subtitle">Рагнар</h3>
          <p className="heroes__text">
            Рагна́р Лодбро́к (др.-сканд. Ragnarr Loðbrók) - полулегендарный
            скандинавский конунг из рода Инглингов, ключевой персонаж сериала.
          </p>{" "}
          <p className="heroes__text">
            Умелый воин и амбициозный вождь, Рагнар на протяжении почти всей
            своей жизни следует пути викинга. Рассекая море в поисках боевой
            славы и наживы, он стремится обрести новые знания, открыть
            неизвестные земли и изменить нелегкую судьбу своего народа, живущего
            в суровых условиях Скандинавского полуострова
          </p>
        </div>
      </div>
      <div className="heroes__slide-container">
        <img className="heroes__image" src={image1} alt=""></img>
        <div className="heroes__text-container">
          <h3 className="heroes__subtitle">Лагерта</h3>
          <p className="heroes__text">
            Рагна́р Лодбро́к (др.-сканд. Ragnarr Loðbrók) - полулегендарный
            скандинавский конунг из рода Инглингов, ключевой персонаж сериала.
          </p>{" "}
          <p className="heroes__text">
            Умелый воин и амбициозный вождь, Рагнар на протяжении почти всей
            своей жизни следует пути викинга. Рассекая море в поисках боевой
            славы и наживы, он стремится обрести новые знания, открыть
            неизвестные земли и изменить нелегкую судьбу своего народа, живущего
            в суровых условиях Скандинавского полуострова
          </p>
        </div>
      </div>
      <div className="heroes__slide-container">
        <img className="heroes__image" src={image2} alt=""></img>
        <div className="heroes__text-container">
          <h3 className="heroes__subtitle">Бьорн</h3>
          <p className="heroes__text">
            Рагна́р Лодбро́к (др.-сканд. Ragnarr Loðbrók) - полулегендарный
            скандинавский конунг из рода Инглингов, ключевой персонаж сериала.
          </p>{" "}
          <p className="heroes__text">
            Умелый воин и амбициозный вождь, Рагнар на протяжении почти всей
            своей жизни следует пути викинга. Рассекая море в поисках боевой
            славы и наживы, он стремится обрести новые знания, открыть
            неизвестные земли и изменить нелегкую судьбу своего народа, живущего
            в суровых условиях Скандинавского полуострова
          </p>
        </div>
      </div>
      <button className="heroes__prev" onClick={minusSlides}></button>
      <button className="heroes__next" onClick={plusSlides}></button>
    </section>
  );
}
export default Heroes;
