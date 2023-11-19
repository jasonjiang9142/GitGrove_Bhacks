import React from 'react';
import Tree from '../components/Tree';
import { useLocation } from 'react-router-dom';

export default function TreePage({ size = 30 }) {
    const location = useLocation();
    const passedData = location.state?.data;
    console.log(passedData.info)
    console.log(passedData.info[1][0])
    console.log(passedData.info[3][0])

    const islandBgStyle = {
        background: 'linear-gradient(to bottom, #b3e0ff, #ffffff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column', // Align items in a column
        justifyContent: 'center',
        alignItems: 'center',
    };

    const repositories = [
        { repoName: passedData.info[2][0], description: passedData.info[1][0], link: passedData.info[3][0] },
        { repoName: passedData.info[2][0], description: passedData.info[1][1], link: passedData.info[3][1] },
        { repoName: passedData.info[2][0], description: passedData.info[1][2], link: passedData.info[3][2] },
        { repoName: passedData.info[2][1], description: passedData.info[1][3], link: passedData.info[3][3] },
        { repoName: passedData.info[2][1], description: passedData.info[1][4], link: passedData.info[3][4] },
        { repoName: passedData.info[2][1], description: passedData.info[1][5], link: passedData.info[3][5] },
        { repoName: passedData.info[2][2], description: passedData.info[1][6], link: passedData.info[3][6] },
        { repoName: passedData.info[2][2], description: passedData.info[1][7], link: passedData.info[3][7] },
        { repoName: passedData.info[2][2], description: passedData.info[1][8], link: passedData.info[3][8] },
    ];

    // Generating an array of trees based on the given size
    const trees = repositories.slice(0, size).map((repo, index) => (
        <Tree key={index} repoName={repo.repoName} description={repo.description} link={repo.link} />
    ));

    // Determine the number of trees per row (adjust this number as needed)
    const treesPerRow = 4; // For example, showing 5 trees per row

    // Chunk the trees into rows
    const treeRows = [];
    for (let i = 0; i < trees.length; i += treesPerRow) {
        treeRows.push(trees.slice(i, i + treesPerRow));
    }

    return (
        <div style={islandBgStyle}>
            {treeRows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((tree, treeIndex) => (
                        <div key={treeIndex} style={{ margin: '5px' }}>
                            {tree}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
