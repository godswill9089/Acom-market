import { ethers } from "ethers";
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;

    if (ethereum) {
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            address,
            CustomTokenABI.abi,
            signer
        );

        return contractReader;
    }
};

export const Contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;

    if (ethereum){
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            "YOUR_PRIVATE_KEY",
            CustomDexABI.abi,
            signer
        );

        return contractReader;
    }
};