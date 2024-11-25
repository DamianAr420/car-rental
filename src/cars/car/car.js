import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./car.css";

export default function Car() {
  const { brand, model, year } = useParams();

  return (
    <div className="car-details">
      <img 
        src={`imgs/${brand}-${model}-${year}.jpg`}  
        alt={`${brand} ${model}`} 
      />
      <div className='technicalData'>
        <h1>Technical data</h1>
        <div className='data'>
            <h2>Data</h2>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
        </div>
      </div>
      <Link className='rent' to={`/cars/${brand}/${model}/${year}/rent`}>Rent Now</Link>
    </div>
  );
}
