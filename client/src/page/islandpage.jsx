import Cloud from "../components/cloud"
import Islandbg from '../../assets/islandbg.png';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

export default function IslandPage() {
    const location = useLocation();
    // Access the passed data from the location state
    const data = location.state?.data;


    const islandBgStyle = {
        background: 'linear-gradient(to bottom, #b3e0ff, #ffffff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensuring the gradient covers the entire viewport height
        justifyContent: 'center',
        alignItems: 'center',
    };


    return (
        <div style={islandBgStyle} >

            <div >
                <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">Repos as Islands</h1>
                <div className="h-screen flex justify-center items-center">
                    <div className="text-center cloud-image-faster">
                        <Cloud info={data} />
                        {data && data[2] && data[2][0] ? data[2][0] : 'Default Value'}
                    </div>


                    <div className="text-center cloud-image-slower">
                        <Cloud info={data} />
                        {data && data[2] && data[2][1] ? data[2][1] : 'Default Value'}
                    </div>

                    <div className="text-center cloud-image-standard">
                        <Cloud info={data} />
                        {data && data[2] && data[2][2] ? data[2][2] : 'Default Value'}
                    </div>

                </div>

            </div>


        </div>

    )
}