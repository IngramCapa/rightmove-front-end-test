import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { getPropertiesData } from '../../../api/getPropertiesData';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getPropertiesData()
            .then((data) => setProperties(data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <ul className="PropertyListing">
            {properties.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
