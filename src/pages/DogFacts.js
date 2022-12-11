import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DogFacts = () => {

    const [factsArray, setFactsArray] = useState(['Your facts are loading...']);

    // useEffect runs once when a component is mounted if the dependency array is empty
    useEffect(()=>{
        axios.get('https://dog-api.kinduff.com/api/facts?number=5')
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            setFactsArray(axiosResponse.data.facts)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div>
         <ul className='list'>
            {factsArray.map(singleFact => {
                return (
                    <li>{singleFact}</li>
                )
            })}
        </ul>
        </div>
    );
}

export default DogFacts;
