import React from 'react';
import Islandbg from '../../assets/islandbg.png';
import treecap_1 from '../../assets/treecap_1.png';
import treecap_2 from '../../assets/treecap_2.png';
import treecap_3 from '../../assets/treecap_3.png';
import './Tree.css';
import { useLocation } from 'react-router-dom';

export default function Tree() {
    const location = useLocation();
    const islandBgStyle = {
        background: 'linear-gradient(to bottom, #b3e0ff, #ffffff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensuring the gradient covers the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const trees = [treecap_1, treecap_2, treecap_3];

    return (
        <div className="trees-container" style={islandBgStyle}>
            {trees.map((tree, index) => (
                <div key={index} className="tree-wrapper">
                    <a href="/tree" className="tree-image">
                        <img src={tree} alt={`Tree ${index + 1}`} />
                    </a>
                </div>
            ))}
        </div>
    );
}
