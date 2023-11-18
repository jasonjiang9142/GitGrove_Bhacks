import React from 'react';
import { Button } from 'antd';
import MyForm from './components/form';

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-red-300">
      <div className='bg-blue-300 p-6 rounded-md shadow-md text-center rounded-xl'>
        <h1 className="text-3xl font-bold mb-4">Submit Your GitHub Page</h1>
        <MyForm />
      </div>
    </div>
  );
}
