import React from "react";
import logo from "../../images/лого1.png";
function SeasonHeader({ handleRedirect, redirectToMain, seasonNum }) {
  return (
    <section className="header header__series">
      <ul className="header__seasons-nav">
        <li>
          <img
            className="seasonHeader__logo "
            src={logo}
            alt="logo"
            onClick={redirectToMain}
          ></img>
        </li>
        <li
          className="header__season-nav_element"
          id="s1"
          onClick={handleRedirect}
        >
          1 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s2"
          onClick={handleRedirect}
        >
          2 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s3"
          onClick={handleRedirect}
        >
          3 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s4"
          onClick={handleRedirect}
        >
          4 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s5"
          onClick={handleRedirect}
        >
          5 сезон
        </li>
        <li
          className="header__season-nav_element"
          id="s6"
          onClick={handleRedirect}
        >
          6 сезон
        </li>
      </ul>
      <div className="seasonHeader__descriptionContainer">
        <div className="seasonHeader__num-container">
          <p className="seasonHeader__numer">{seasonNum}</p>
          <p className="seasonHeader__season">сезон</p>
        </div>
        <div className="seasonHeader__text-container">
          <p className="seasonHeader__description">
            Сериал знакомит нас с жестоким и таинственным миром Рагнара
            Лодброка, воина-викинга и фермера, который жаждет исследовать—и
            совершать набеги-далекие берега океана. Его честолюбие ставит его в
            противоречие с местным вождем графом Харальдсоном, который
            настаивает на отправке своих рейдеров на бедный Восток, а не на
            неизведанный Запад. Когда Рагнар объединяется со своим
            другом-кораблестроителем Флоки, чтобы создать новое поколение
            бесстрашных кораблей, способных покорять бурные северные моря, сцена
            готова к конфликту.
          </p>
          <p className="seasonHeader__description">
            Но несмотря на всю свою войну и кровопролитие, викинги также
            являются историей семьи и братства, захватывая любовь и
            привязанность между Рагнаром и его женой Лагертой, свирепой
            воительницей. Это история о брате Рагнара Ролло, яростном борце,
            который кипит от ревности; о жене графа Харальдсона Зигги, послушной
            красавице, которая, возможно, не слишком верна; и о монахе
            Ательстане, чья христианская мораль противоречит языческому обществу
            викингов. Когда амбиции и инновации потрясут цивилизацию, эти
            персонажи будут подвергнуты испытанию—и их образ жизни никогда не
            будет прежним.
          </p>
        </div>
      </div>
    </section>
  );
}
export default SeasonHeader;
