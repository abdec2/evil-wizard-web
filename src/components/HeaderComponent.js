import { ethers } from "ethers";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Web3Modal from 'web3modal';
import ABI from './../abi/abi.json';

const contractAddress = "0x728b6c5be88AC089A84685bbe26fB306e0302955";

const HeaderComponent = ({ error, errorMsg, setError , setErrorMsg}) => {
    const {
        account,
        blockchainData,
        network,
        web3,
        delAccount,
        addAccount,
        addNetwork,
        addBlockchain, 
        addWeb3 } = useContext(GlobalContext);

        const loadBlockChain = async () => {
            if (web3 && account) {
                try {
                    const contract = new ethers.Contract(contractAddress, ABI, web3);
                    addBlockchain({
                        'contract': contract,
                    })
                    console.log('contract', contract)
                } catch (e) {
                    setError(true)
                    setErrorMsg('Contract not deployed to current network, please change network in MetaMask')
                }
            }
        }

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert('Please install MetaMask');
            return
        }
        const web3modal = new Web3Modal();
        const instance = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        addAccount({ id: address });
        const networkId = await provider.getNetwork();
        console.log(networkId)
        addNetwork(networkId)
        addWeb3(provider)
        if(networkId.chainId == 80001 || networkId.chainId == 137) {
            setError(false)
                    setErrorMsg('')
        } else {
            setError(true)
            setErrorMsg('Contract not deployed to current network, please change network in MetaMask')
        }
        
    }

    const disconnectWallet = () => {
        delAccount();
    }

    useEffect(() => {
        loadBlockChain();
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', accounts => {
                addAccount({ id: accounts[0] })
            })
            window.ethereum.on('chainChanged', chainId => {
                window.location.reload();
            })
        }
        console.log(error)
        console.log(web3)
        console.log(blockchainData)
    }, [account, web3]);


    return (
        <header id="header">
            {error ? (
                <div className="alert alert-danger error" role="alert">
                    {errorMsg}
                </div>
            ) : ''}
            {/* <!-- Navbar --> */}
            <nav data-aos="zoom-out" data-aos-delay="800" className="navbar navbar-expand">
                <div className="container header">
                    {/* <!-- Navbar Brand--> */}
                    <a className="navbar-brand" href="#home">
                        <img className="navbar-brand-sticky" src="assets/img/logo/logo.png" alt="sticky brand-logo" />
                    </a>
                    <div className="ml-auto"></div>
                    {/* <!-- Navbar --> */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#about">About</a>
                        </li>

                        <li className="nav-item">
                            <a href="#team" className="nav-link">Team</a>
                        </li>

                        <li className="nav-item">
                            <a href="#roadmap" className="nav-link">Roadmap</a>
                        </li>

                        <li className="nav-item">
                            <a href="#mint" className="nav-link">Mint</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0"></i>
                            </a>
                        </li>
                    </ul>

                    {/* <!-- Navbar Action Button --> */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            {account ? (
                                <button className="btn ml-lg-auto btn-bordered-white" onClick={() => disconnectWallet()}><i className="icon-wallet mr-md-2"></i>disconnect</button>
                            ) : (
                                <button className="btn ml-lg-auto btn-bordered-white" onClick={()=> connectWallet()}><i className="icon-wallet mr-md-2"></i>Wallet Connect</button>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent