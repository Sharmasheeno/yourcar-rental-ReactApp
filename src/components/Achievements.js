import React from 'react';

const Achievements = () => {
    const stats = [
        { number: "4000+", label: "Active Member" },
        { number: "3000+", label: "Car Model" },
        { number: "6K", label: "Positive Rating" },
    ];

    return (
        <section className="section achievements">
            <div className="container">
                 <div className="section-header">
                    <h2>Our Achievement</h2>
                </div>
                <div className="achievements-container">
                    {stats.map((stat, index) => (
                        <div className="achievement-item" key={index}>
                            <h3>{stat.number}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;