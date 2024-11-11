import React, { useState } from 'react';
import "./cars.css";
import { Link } from "react-router-dom";

export default function Cars() {
  const [cars] = useState([
    { brand: "BMW", model: "E46", year: 1998 },
    { brand: "Audi", model: "A4", year: 2018 },
    { brand: "Mercedes", model: "C-Class", year: 2010 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter(
    (car) =>
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.year.toString().includes(searchTerm)
  );

  return (
    <div>
      <div className="search">
        <input
          type="search"
          id="search"
          placeholder="Search by brand, model, or year"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="cars">
        {filteredCars.map((car, index) => (
          <li key={index}>
            <img 
              src={`imgs/${car.brand}-${car.model}-${car.year}.jpg`} 
              alt={`${car.brand} ${car.model}`} 
            />
            <h1>{`${car.brand} ${car.model}`}</h1>
            <p>{car.year}</p>
            <Link className='carsLink' to={`/cars/${car.brand}/${car.model}/${car.year}`}>Check now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
