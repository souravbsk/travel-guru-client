/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DestinationCard from '../../DestinationCard/DestinationCard';

const Destination = () => {
    const destinations = useLoaderData();
    console.log(destinations);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-full w-10/12  mx-auto'>
            {
                destinations.map(destination => <DestinationCard key={destination.id} destination={destination}></DestinationCard> )
            }
        </div>
    );
};

export default Destination;