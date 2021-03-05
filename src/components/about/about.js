import React from "react";
function About({}) {
  return (
    <section className="about">
      <h1 className="about__title">О сериале</h1>
      <div className="about__wrapper">
        <div className="about__list-container">
          <h2 className="about__subtitle">Жанр</h2>
          <p className="about__text">Историческая драма</p>
          <h2 className="about__subtitle">Сезонов</h2>
          <p className="about__text">6</p>
          <h2 className="about__subtitle">Длительность серии</h2>
          <p className="about__text">45 минут</p>
          <h2 className="about__subtitle">На экране</h2>
          <p className="about__text"> С 3 марта 2013 по сей день</p>
        </div>
        <div className="about__text-container">
          <p className="about__text">
            Викинги – шикарный исторический сериал, один из лучших в своем
            жанре, шоу может похвастаться огромной фан-базой, а также тем, что
            пробудил интерес к истории и возродил моду на викингов.
          </p>
          <p className="about__text">
            «Викинги» созданы по заказу американского канала History, однако
            работали над ним канадцы и ирландцы. Сериал поражает масштабными
            сценами сражений, добротным и глубоким сценарием, а также
            максимальным вниманием к исторической эпохе. Авторы сериала
            потратили кучу времени и денег (бюджет первого сезона - $40 млн,
            дальше суммы возросли) на то, чтобы викинги и их современники
            выглядели в шоу так, какими они был в свое время – VIII – IX веках
            нашей эры. С другой стороны – отсутствие точных исторических фактов
            и (полу)легендарность многих событий позволили авторам сериала
            вольную трактовку многих событий.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
