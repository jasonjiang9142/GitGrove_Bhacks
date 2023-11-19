import React from 'react';
import Tree from '../components/Tree'; // Update the path to your Tree component if needed

export default function TreePage({ size = 30 }) {
    const islandBgStyle = {
        background: 'linear-gradient(to bottom, #b3e0ff, #ffffff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
    };

    // Generating an array of trees based on the given size
    const trees = Array.from({ length: size }, (_, index) => (
        <Tree key={index} />
    ));

    // Determine the number of trees per row (adjust this number as needed)
    const treesPerRow = 5; // For example, showing 5 trees per row

    // Split the trees array into chunks for each row
    const treeRows = [];
    for (let i = 0; i < trees.length; i += treesPerRow) {
        treeRows.push(trees.slice(i, i + treesPerRow));
    }

    return (
        <div style={islandBgStyle}>
            {treeRows.map((row, rowIndex) => (
                <div key={rowIndex} className="block">
                    {row}
                </div>
            ))}
        </div>
    );
}
