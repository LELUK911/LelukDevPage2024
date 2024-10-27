import { Cards } from "../cards/cards";
import { Skils } from "../skils/Skils";

export default function Body() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 p-8 bg-blue-50'>
            <div className="bg-blue-900 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-8 mb-10">
                <h1 className="text-center font-bold text-4xl mb-4">About Me</h1>
                <p className="text-center text-xl font-semibold text-gray-200 mb-4">
                    Passionate Blockchain Developer specializing in DeFi and smart contract development.
                </p>
                <p className="text-lg leading-relaxed text-center text-gray-100">
                    With expertise in Solidity, Rust, and platforms like Ethereum and Solana, I focus on building secure and innovative solutions for decentralized finance. Experienced with projects such as Uniswap and Chainlink, my goal is to make blockchain technology an accessible, transformative tool for the future.
                </p>
            </div>
            <div>
                <Cards />
            </div>
            <Skils />
        </div>
    )
}
