//import {client} from '../../utils/client.js'
import {ConnectEVM} from '../../utils/EVMButton'
import { ConnectSolana } from '../../utils/SolanaPhantomButton'
import logo from '../../assets/logo.webp'

export const NavBar = () => {
    return (
        <div className="flex justify-between items-center h-24"  style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,37,65,1) 30%, rgba(70,130,180,1) 100%)",}}>
            <div className="ms-4 flex space-x-6" >
                <img src={logo} alt='logo' className='w-24 h-auto mx-auto  rounded-lg shadow-md'/>
                <h1 className="text-4xl capitalize text-yellow-500 mt-4 hover:text-white" > Luk Developer</h1>
            </div>
            <div className=" flex space-x-5">
                <h2 className='text-2xl text-gray-200 hover:text-blue-400'>Write me</h2>
                <h2 className='text-2xl text-gray-200 hover:text-blue-400'>Socials</h2>
                <h2 className='text-2xl text-gray-200 hover:text-blue-400'>Service</h2>
                <h2 className='text-2xl text-gray-200 hover:text-blue-400'>Portfolio Project</h2>


            </div>
            <div className="flex space-x-7 mr-5">
                <ConnectEVM/>
                <ConnectSolana/>
            </div>

        </div>
    )
}
