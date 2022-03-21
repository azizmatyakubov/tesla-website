import React from "react";
import Section from "./Section";
import data from "../data/cars.json";

const Main = () => {
  return data.map((car) => (
    <Section title={car.title} bgImage={car.image} parag={car.description} />
  ));
};

export default Main;
