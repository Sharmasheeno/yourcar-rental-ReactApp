import React, { useState, useEffect } from 'react';
import { ALL_CARS } from '../data/mockData';
import CarCard from '../components/CarCard';

const RentCarPage = ({ setView, setSelectedCar }) => {
    const [filteredCars, setFilteredCars] = useState(ALL_CARS);
    const [filters, setFilters] = useState({
        type: 'All',
        price: '500',
        seats: 'All'
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };
    
    useEffect(() => {
        let tempCars = [...ALL_CARS];

        if (filters.type !== 'All') {
            tempCars = tempCars.filter(car => car.type === filters.type);
        }
        tempCars = tempCars.filter(car => car.price <= parseInt(filters.price));
        if (filters.seats !== 'All') {
            tempCars = tempCars.filter(car => car.seats === parseInt(filters.seats));
        }

        setFilteredCars(tempCars);
    }, [filters]);

    return (
        <div className="container">
            <div className="rent-car-page-layout">
                <aside className="filters-sidebar">
                    <div className="filter-group">
                        <h4>Car Type</h4>
                        <select name="type" value={filters.type} onChange={handleFilterChange}>
                            <option value="All">All</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                     <div className="filter-group">
                        <h4>Max Price</h4>
                        <input 
                            type="range" 
                            name="price" 
                            min="50" 
                            max="500" 
                            step="10" 
                            value={filters.price} 
                            onChange={handleFilterChange} 
                        />
                        <div className="price-display">${filters.price}</div>
                    </div>
                    <div className="filter-group">
                        <h4>Seats</h4>
                        <select name="seats" value={filters.seats} onChange={handleFilterChange}>
                            <option value="All">All</option>
                            <option value="2">2 Seats</option>
                            <option value="4">4 Seats</option>
                            <option value="5">5 Seats</option>
                            <option value="7">7 Seats</option>
                        </select>
                    </div>
                </aside>
                <main className="car-grid-main">
                   {filteredCars.length > 0 ? (
                        <div className="car-grid-container">
                            {filteredCars.map((car) => (
                                <CarCard key={car.id} car={car} setView={setView} setSelectedCar={setSelectedCar} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-cars-found">
                            <h3>No cars found</h3>
                            <p>Try adjusting your filters.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default RentCarPage;