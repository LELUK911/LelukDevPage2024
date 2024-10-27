
import { useConnect } from "thirdweb/react";
import { createWallet, } from "thirdweb/wallets";
import {client} from './client'



export function ConnectEVM() {
    const { connect} = useConnect();
    return (
        <button className= "bg-slate-200 rounded-xl  hover:bg-yellow-400  p-3"
            onClick={() =>
                connect(async () => {
                    // create a wallet instance
                    const metamask = createWallet("io.metamask"); // autocomplete the wallet id
                    // trigger the connection
                    await metamask.connect({ client });
                    // return the wallet
                    return metamask;
                })
            }
        >
            Wallet EVM
        </button>
    );
}
