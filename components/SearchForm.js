import { useState } from 'react';

const SearchForm = () => {
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const searchData = {
            location,
            type,
            priceRange: { min: minPrice, max: maxPrice },
            dates: { start: startDate, end: endDate },
            capacity
        };
        console.log(searchData);
        // Appel API pour rechercher les parkings
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <div className="form-group">
                <label htmlFor="location">Localisation</label>
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Entrez une adresse ou un événement" />
            </div>

            <div className="form-group">
                <label htmlFor="type">Type de place</label>
                <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Tous</option>
                    <option value="garage">Garage</option>
                    <option value="box">Box</option>
                    <option value="outdoor">Place extérieure</option>
                </select>
            </div>

            <div className="form-group">
                <label>Plage de prix (€)</label>
                <div className="price-range">
                    <input type="number" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min" />
                    <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max" />
                </div>
            </div>

            <div className="form-group">
                <label>Disponibilité</label>
                <div className="dates-range">
                    <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="capacity">Capacité</label>
                <input type="number" id="capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Capacité" />
            </div>

            <button type="submit" className="submit-btn">Rechercher</button>
        </form>
    );
};

export default SearchForm;
