import React from "react";
import Card from "../card/card";
function Seasons({ header }) {
  return (
    <section className="seasons">
      <h2 className="seasons__title">{header}</h2>
      <ul className="seasons__card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  );
}
export default Seasons;
