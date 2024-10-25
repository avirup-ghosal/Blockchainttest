const hre=require('hardhat')
async function main(){
    const Coal=await hre.ethers.getContractFactory("CoalVerifier");
    const coal=await Coal.deploy();


    console.log("Deployed contract address",`${await coal.getAddress()}`)
}
main().catch((error)=>{console.log(error)})