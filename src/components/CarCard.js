import React from 'react';
import { DoorIcon, PetrolIcon, SeatIcon, SpeedIcon } from '../icons/Icons';

const CarCard = ({ car, setView, setSelectedCar }) => {
  const handleViewDetails = () => {
    setSelectedCar(car);
    setView('carDetails');
  };

  return (
    <div className="car-card">
        <img src={car.image} alt={car.name} />
        <div className="car-card-content">
            <h3 onClick={handleViewDetails}>{car.name}</h3>
            <div className="car-details">
            <span><SeatIcon /> {car.seats} Seat</span>
            <span><PetrolIcon /> {car.fuel}</span>
            <span><DoorIcon /> {car.doors} Door</span>
            <span><SpeedIcon /> {car.mileage}km</span>
            </div>
            <div className="car-price-rent">
            <div className="price">${car.price}<span>/Day</span></div>
            <button className="btn btn-secondary" onClick={handleViewDetails}>Rent Car</button>
            </div>
        </div>
    </div>
  );
};

export default CarCard;