import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            avatar: "https://placehold.co/80x80/FFC300/FFFFFF?text=A",
            name: "Alex Morgan",
            title: "CEO at Company",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, sapien vel tristique luctus, elit turpis aliquam mi."
        },
        {
            avatar: "https://placehold.co/80x80/3D9970/FFFFFF?text=R",
            name: "Riana Johnson",
            title: "Marketing Head",
            text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis."
        },
    ];
    return (
        <section className="section testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>What Our Customers Have To Say</h2>
                </div>
                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-avatar">
                                <img src={review.avatar} alt={review.name} />
                            </div>
                            <h4>{review.name}</h4>
                            <span>{review.title}</span>
                            <p>"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;