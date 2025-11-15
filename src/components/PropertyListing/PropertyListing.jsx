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
