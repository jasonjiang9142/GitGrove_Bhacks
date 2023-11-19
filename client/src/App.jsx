import React from 'react';

import Cloud from './components/cloud';
import MyForm from './components/form';
import Tree from './components/tree';
import IslandPage from './page/islandpage';
import TreePage from './page/treepage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MyForm />} />
        <Route path="/island" element={<IslandPage />} />
        <Route path="/tree" element={<TreePage />} />
      </Routes>
    </Router>



  );
}


{/*     <div className="flex justify-center items-center h-screen bg-red-300">
      <div className='bg-blue-300 p-6 rounded-md shadow-md text-center rounded-xl'>
        <h1 className="text-3xl font-bold mb-4">Submit Your GitHub Page</h1>
        <MyForm />
      </div>
    </div>*/ }
