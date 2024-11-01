import { useEffect, useState } from 'react';
import { ConnectEVM } from '../../utils/EVMButton'
import { ConnectSolana } from '../../utils/SolanaPhantomButton'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    const renderOnDesktop = () => {
        return (
            <>
                <div className=" flex space-x-5">
                    <h2 className="text-2xl text-white hover:text-yellow-400">
                        <Link to="/WriteMeSection">
                            Write me
                        </Link>
                    </h2>
                    <h2 className="text-2xl text-white hover:text-yellow-400">
                        <Link to="/ProjectSection">
                            Portfolio Project
                        </Link>
                    </h2>
                </div>
                <div className="flex space-x-7 mr-5">
                    <ConnectEVM />
                    <ConnectSolana />
                </div>
            </>
        )
    }
    const renderOnMobile = () => {
        return (
            <>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl text-yellow-500">
                    &#9776; {/* Icona hamburger */}
                </button>

                {/* Menu di Navigazione Mobile in una Colonna */}
                <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center bg-blue-900 bg-opacity-90 p-4 absolute top-24 left-0 w-full space-y-4 md:space-y-0 z-10`}>
                    <h2 className="text-2xl text-white hover:text-yellow-400">
                        <Link to="/WriteMeSection">
                            Write me
                        </Link>
                    </h2>
                    <h2 className="text-2xl text-white hover:text-yellow-400">
                        <Link to="/ProjectSection">
                            Portfolio Project
                        </Link>
                    </h2>
                </div>

                {/* Pulsanti di Connessione in una Colonna su Mobile */}
                <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center bg-blue-900 bg-opacity-90 p-4 absolute top-52 left-0 w-full space-y-4 md:space-y-0 z-10`}>
                    <ConnectEVM />
                    <ConnectSolana />
                </div>
            </>
        )
    }






    return (
        <div className="flex justify-between items-center h-24" style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,37,65,1) 30%, rgba(70,130,180,1) 100%)", }}>
            <div className="ms-4 flex space-x-6" >
                <img src={logo} alt='logo' className='w-24 h-auto mx-auto  rounded-lg shadow-md' />
                <h1 className="text-4xl capitalize text-yellow-500 mt-4 hover:text-white" > 
                    <Link to='/'>
                        Luk Developer
                    </Link>
                </h1>
            </div>
            {isMobile ? renderOnMobile() : renderOnDesktop()}


        </div>
    )
}
