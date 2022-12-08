import React from 'react';
import { useParams } from 'react-router-dom';

const AboutPage = () => {

    let { myParam } = useParams()
    console.log(myParam)

    return (
        <div>
            <h1>About page</h1>
        </div>
    );
}

export default AboutPage;
