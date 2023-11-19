import Cloud from "../components/cloud"
import Islandbg from '../../assets/islandbg.png';
import "./islandpage.css"
import { useState } from "react"


export default function IslandPage() {
    const [isHovered, setIsHovered] = useState(false)

    const islandBgStyle = {
        background: 'linear-gradient(to bottom, #b3e0ff, #ffffff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensuring the gradient covers the entire viewport height
        justifyContent: 'center',
        alignItems: 'center',
    };


    return (
        <div style={islandBgStyle}>

            <div className="h-screen flex justify-center items-center">
                <div className="flex ">

                    <div className="text-center island-image">
                        <Cloud></Cloud>
                        <span className="text-xl font-bold">Repo Name</span>
                    </div>
                </div>


                <div className="text-center island-image">
                    <Cloud></Cloud>
                    <span className="text-xl font-bold">Repo Name</span>
                </div>

                <div className="text-center island-image">
                    <Cloud></Cloud>
                    <span className="text-xl font-bold">Repo Name</span>
                </div>

            </div>


        </div>

    )
}