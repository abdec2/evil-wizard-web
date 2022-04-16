import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ABI from './../abi/abi.json';

//polygon testnet address
const contractAddress = "0x728b6c5be88AC089A84685bbe26fB306e0302955";

const Mint = () => {
    const {
        account,
        blockchainData,
        network,
        web3,
        delAccount,
        addAccount,
        addNetwork,
        addBlockchain } = useContext(GlobalContext);

    const [mintCount, setMintCount] = useState(1)
    const [loading, setLoading] = useState(false)

    const increment = () => {
        if(mintCount < 10) {
            setMintCount(mintCount+1)
        }
    }

    const decrement = () => {
        if(mintCount > 1) {
            setMintCount(mintCount-1)
            console.log(blockchainData)
        }
    }
    

    return (
        <section className="minting-area " id="mint">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-7">
                        <div className="intro text-center">
                            <h3 className="mt-3 mb-0">MINT YOUR NFTs</h3>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <button className="btn ml-lg-auto btn-bordered-white" onClick={()=>decrement()}> - </button>
                            </div>
                            <div> {mintCount} </div>
                            <div>
                                <button className="btn ml-lg-auto btn-bordered-white" onClick={()=>increment()}> + </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center justify-content-center">
                            <div>
                                <button className="btn ml-lg-auto btn-bordered-white"> BUY </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mint