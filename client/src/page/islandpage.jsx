import Cloud from "../components/cloud"
import Islandbg from '../../assets/islandbg.png';

export default function IslandPage() {
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
                    <div className="text-center">
                        <Cloud></Cloud>
                        Repo Name
                    </div>


                    <div className="text-center">
                        <Cloud></Cloud>
                        Repo Name
                    </div>

                    <div className="text-center">
                        <Cloud></Cloud>
                        Repo Name
                    </div>

                </div>

                <div className="flex ">
                    <div className="text-center">
                        <Cloud></Cloud>
                        Repo Name
                    </div>


                    <div className="text-center">
                        <Cloud></Cloud>
                        Repo Name
                    </div>

                    <div className="text-center">
                        <Cloud></Cloud>
                        Repo Name
                    </div>

                </div>

            </div>
        </div>
    )
}