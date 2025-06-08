import React from 'react';

const CarDetailsPage = ({ car, setView }) => {
    if (!car) {
        return (
             <div className="page-container">
                <div className="section-header">
                    <h2>Car Not Found</h2>
                    <p>Please go back and select a car.</p>
                    <button className="btn btn-primary" onClick={() => setView('rent')}>Back to Listings</button>
                </div>
            </div>
        );
    }
    return (
        <div className="container car-details-page">
            <div className="car-details-layout">
                <div className="car-details-images">
                    <img src={car.image} alt={car.name} />
                </div>
                <div className="car-details-info">
                    <h1>{car.name}</h1>
                    <div className="details-price">${car.price} <span>/ Day</span></div>
                    <div className="details-specs">
                        <div className="spec-item"><strong>Type:</strong> {car.type}</div>
                        <div className="spec-item"><strong>Seats:</strong> {car.seats}</div>
                        <div className="spec-item"><strong>Doors:</strong> {car.doors}</div>
                        <div className="spec-item"><strong>Fuel:</strong> {car.fuel}</div>
                        <div className="spec-item"><strong>Mileage:</strong> {car.mileage}km</div>
                    </div>
                    <button className="btn btn-primary" style={{width: '100%', marginBottom: '10px'}}>Rent Now</button>
                    <button className="btn btn-secondary" style={{width: '100%'}} onClick={() => setView('rent')}>Back to Listings</button>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;