import Cloud from "../components/cloud"
import Islandbg from '../../assets/islandbg.png';
import { useLocation } from 'react-router-dom';

export default function IslandPage() {
    const location = useLocation();
    // Access the passed data from the location state
    const data = location.state?.data;

    const islandBgStyle = {
        background: 'linear-gradient(to bottom, #b3e0ff, #ffffff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensuring the gradient covers the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={islandBgStyle}>

            <div className="h-screen flex justify-center items-center">
                <div className="flex ">
                    <div className="text-center cloud-image-faster">
                        <Cloud/>
                        {data && data[2] && data[2][0] ? data[2][0] : 'Default Value'}
                    </div>


                    <div className="text-center cloud-image-slower">
                        <Cloud/>
                        {data && data[2] && data[2][1] ? data[2][1] : 'Default Value'}
                    </div>

                    <div className="text-center cloud-image-standard">
                        <Cloud/>
                        {data && data[2] && data[2][2] ? data[2][2] : 'Default Value'}
                    </div>

                </div>

            </div>
        </div>
    )
}