import React from 'react';

import treecap_1 from '../../assets/treecap_1.png';
import treecap_2 from '../../assets/treecap_2.png';
import treecap_3 from '../../assets/treecap_3.png';
import './Tree.css';


export default function Tree({ int = 20 }) {

    const tree = [treecap_1, treecap_2, treecap_3]

    const shuffleArray = (array) => {
        const shuffled = array.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 3); // Selecting 3 random elements
    };

    const selectedTree = tree[Math.floor(Math.random() * tree.length)];


    return (
        <div>
            <div className="w-1/6">
                {/* Apply animation on hover */}
                <a href="/tree" className="tree-image">
                    <img src={selectedTree} alt="Selected Island" />
                </a>
            </div>
        </div>
    )
}