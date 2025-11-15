import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { getPropertiesData } from '../../../api/getPropertiesData';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProperties(await getPropertiesData());
        };

        fetchData();
    }, []);
    return (
        <div className="property-listing-container">
            <h2 id="property-list-heading">Properties</h2>
            <ul className="property-listing" aria-labelledby="property-list-heading">
                {properties.map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyListing;
