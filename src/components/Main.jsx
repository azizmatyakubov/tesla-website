import React from "react";
import Section from "./Section";
import data from "../data/cars.json";

const Main = () => {
  // map array and showing Section component
  return data.map((car) => (
    <Section title={car.title} bgImage={car.image} parag={car.description} />

    // "id": 0,
    // "title": "Model S",
    // "description": "Order Online for Touchless Delivery",
    // "image": "model-s.jpg",
    // "range": "390",
    // "time": "1.99",
    // "topSpeed": "200",
    // "peakPower": "1,020"
  ));
};

export default Main;
