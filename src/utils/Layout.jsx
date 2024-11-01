import * as web3 from '@solana/web3.js';
import * as walletAdapterReact from '@solana/wallet-adapter-react';
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';




export const Layout = ({ children }) => {

    const endopoint = web3.clusterApiUrl('devnet')

    const wallets = [
        new walletAdapterWallets.PhantomWalletAdapter(),
        new walletAdapterWallets.SolflareWalletAdapter(),
    ]



    return (
        <>
            <walletAdapterReact.ConnectionProvider endpoint={endopoint}>
                <walletAdapterReact.WalletProvider wallets={wallets}>
                    <WalletModalProvider>
                        {children}
                    </WalletModalProvider>
                </walletAdapterReact.WalletProvider>
            </walletAdapterReact.ConnectionProvider>
        </>
    )
}