import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

import '@nomiclabs/hardhat-ethers';
import { hexlify, keccak256, RLP } from 'ethers/lib/utils';
import * as fs from 'fs';
import { task } from 'hardhat/config';
import { LensHub__factory, } from '../typechain-types';
import { initEnv, getAddrs, waitForTx } from '../tasks/helpers/utils';


const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy('ApprovalLists', {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: ["Hello"],
    log: true,
  });

  const [governance, , user] = await initEnv(hre);
  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governance);
  const profile1Owner = await lensHub.ownerOf(1);
  console.log('profile1Owner to mint list to: ', profile1Owner);

  // mint a list for profile 1
  const ApprovalLists = await hre.ethers.getContract("ApprovalLists", deployer);
  await ApprovalLists.unsafeMint(profile1Owner);
  console.log('lists owned: ', await ApprovalLists.balanceOf(profile1Owner));
  // add an address to the list
  // 
  /*
    // Getting a previously deployed contract
    const YourContract = await ethers.getContract("YourContract", deployer);
    await YourContract.setPurpose("Hello");
    
    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */
};
export default func;
func.tags = ['ApprovalLists'];

/*
Tenderly verification
let verification = await tenderly.verify({
  name: contractName,
  address: contractAddress,
  network: targetNetwork,
});
*/
