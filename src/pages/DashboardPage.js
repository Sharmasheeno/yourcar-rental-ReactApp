import React from 'react';
import { RENTAL_HISTORY } from '../data/mockData';

const DashboardPage = () => {
    return (
         <div className="dashboard-content">
            <h3>Rental History</h3>
            {RENTAL_HISTORY.map((rental, index) => (
                <div key={index} className="rental-history-item">
                    <img src={rental.car.image} alt={rental.car.name} />
                    <div>
                        <strong>{rental.car.name}</strong>
                        <p>{rental.dates}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardPage;