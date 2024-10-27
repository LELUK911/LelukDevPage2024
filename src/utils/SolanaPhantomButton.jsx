import {useState} from 'react'



export function ConnectSolana() {
    const [walletAddress,setWalletAddress] = useState(null)

    const connectWallet = async ()=>{
        if(window.solana && window.solana.isPhantom){
            try {
                const response = await window.solana.connect()
                setWalletAddress(response.publicKey.toString())
            } catch (error) {
                alert("Problem with solana connection ->".error)
                console.error("Error with connection Solana wallet ->",error)
            }
        }else{
            alert("Phantom wallet not install")
        }
    }

    return (
        <button className= "bg-slate-200 rounded-xl  hover:bg-yellow-400  p-3" onClick={connectWallet}>
            {walletAddress ? `Connected` : "Solana EVM"}   
        </button>
    );
}
