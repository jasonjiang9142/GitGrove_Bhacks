import React from 'react';

import './cloud.css';

import l_island from '../../assets/l_island.png';
import m_island from '../../assets/m_island.png';
import s_island from '../../assets/s_island.png';

import cloud1 from '../../assets/cloud1.png';
import cloud2 from '../../assets/cloud2.png';
import cloud3 from '../../assets/cloud3.png';
import cloud4 from '../../assets/cloud4.png';
import cloud5 from '../../assets/cloud5.png';
import cloud6 from '../../assets/cloud6.png';
import cloud7 from '../../assets/cloud7.png';
import cloud8 from '../../assets/cloud8.png';
import cloud9 from '../../assets/cloud9.png';
import cloud10 from '../../assets/cloud10.png';
import cloud11 from '../../assets/cloud11.png';
import cloud12 from '../../assets/cloud12.png';
import cloud13 from '../../assets/cloud13.png';
import cloud14 from '../../assets/cloud14.png';
import cloud15 from '../../assets/cloud15.png';
import cloud17 from '../../assets/cloud17.png';


export default function Cloud() {

    const island = [l_island, m_island, s_island]
    //const mycloud = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9, cloud10, cloud11, cloud12, cloud13, cloud14, cloud15, cloud17]

    const shuffleArray = (array) => {
        const shuffled = array.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 3); // Selecting 3 random elements
    };

    //const selectedClouds = shuffleArray(mycloud); // Selecting 3 random clouds

    // Selecting a random island
    const selectedIsland = island[Math.floor(Math.random() * island.length)];


    return (
        <div>

            <div className="max-w-xs">
                <a href="/tree" className="cloud-image">
                    <img src={selectedIsland} alt="Selected Island" />
                </a>

                {/* {selectedClouds.map((cloud, index) => (
                    <img key={index} src={cloud} alt={`Cloud ${index}`} className="w-1/4" />
                ))} */}
            </div>


        </div>


    );
}