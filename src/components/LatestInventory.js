import React from 'react';
import { ALL_CARS } from '../data/mockData';
import CarCard from './CarCard';

const LatestInventory = ({ setView, setSelectedCar }) => {
    const cars = ALL_CARS.slice(0, 6);
    return (
        <section className="section latest-inventory">
            <div className="container">
                <div className="section-header">
                    <h2>Latest Inventory</h2>
                    <p>Experience the thrill of our automotive innovation with our latest car models.</p>
                </div>
                <div className="inventory-grid">
                    {cars.map((car) => (
                        <CarCard key={car.id} car={car} setView={setView} setSelectedCar={setSelectedCar} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestInventory;