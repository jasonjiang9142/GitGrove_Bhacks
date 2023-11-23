import React from 'react';

import './cloud.css';

import l_island from '../../assets/l_island.png';
import m_island from '../../assets/m_island.png';
import s_island from '../../assets/s_island.png';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Cloud(info) {
    console.log(info)
    console.log(info.info)

    const island = [l_island, m_island, s_island]
    const navigate = useNavigate();
    const handleClick = () => {


        navigate('/tree', { state: { data: info } });
    };

    const cloudSize = () => {
        if (description < 400) {
            return trees[0]
        } else if (description < 2000) {
            return trees[1]
        } else {
            return trees[2]
        }
    }

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
                <div className="cloud-image" onClick={handleClick}>
                    <img src={selectedIsland} alt="Selected Island" />
                </div>



            </div>


        </div>


    );
}