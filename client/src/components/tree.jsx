import React from 'react';
import Islandbg from '../../assets/islandbg.png';
import treecap_1 from '../../assets/treecap_1.png';
import treecap_2 from '../../assets/treecap_2.png';
import treecap_3 from '../../assets/treecap_3.png';
import './Tree.css';
import { useLocation } from 'react-router-dom';

export default function Tree({ repoName = 'Default Name', description, link }) {
    const islandBgStyle = {
        background: 'linear-gradient(to bottom, #b3e0ff, #ffffff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensuring the gradient covers the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    // Array of tree images
    const trees = [treecap_1, treecap_2, treecap_3];


    const treeSize = () => {
        if (description < 400) {
            return trees[0]
        } else if (description < 2000) {
            return trees[1]
        } else {
            return trees[2]
        }
    }

    const randomTree = treeSize()

    return (
        <div className="trees-container" style={islandBgStyle}>
            <div className="tree-wrapper">
                <a href={link} className="tree-image text-center text-xl ">
                    <h1 className="text-sm mb-6"> **click on me ! **</h1>
                    <img src={randomTree} alt={`Random Tree`} />
                    <h1 className="font-bold mt-4">{repoName}</h1>
                    <h1 className="text-sm">File Size: {description} mb</h1>

                </a>
            </div>
        </div>
    );
}
