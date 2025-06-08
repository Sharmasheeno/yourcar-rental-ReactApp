import React from 'react';

const SearchForm = () => {
  return (
    <div className="container">
        <div className="search-form-container">
        <form className="search-form">
            <div className="form-group">
            <label htmlFor="pickup-location">Pick up Location</label>
            <input type="text" id="pickup-location" defaultValue="Suilath Avenu" />
            </div>
            <div className="form-group">
            <label htmlFor="return-location">Return Location</label>
            <input type="text" id="return-location" defaultValue="Gulshan Avenu" />
            </div>
            <div className="form-group">
            <label htmlFor="pickup-date">Pick up Date</label>
            <input type="date" id="pickup-date" defaultValue="2025-06-07" />
            </div>
            <div className="form-group">
            <label htmlFor="return-date">Return Date</label>
            <input type="date" id="return-date" defaultValue="2025-06-10" />
            </div>
            <button type="submit" className="btn btn-primary">Search Car</button>
        </form>
        </div>
    </div>
  );
};

export default SearchForm;