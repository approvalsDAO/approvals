import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';


import '@nomiclabs/hardhat-ethers';
import { hexlify, keccak256, RLP } from 'ethers/lib/utils';
import * as fs from 'fs';
import { task } from 'hardhat/config';
import {
  LensHub__factory,
  ApprovalFollowModule__factory,
  CollectNFT__factory,
  Currency__factory,
  FreeCollectModule__factory,
  FeeCollectModule__factory,
  FeeFollowModule__factory,
  FollowerOnlyReferenceModule__factory,
  FollowNFT__factory,
  InteractionLogic__factory,
  LimitedFeeCollectModule__factory,
  LimitedTimedFeeCollectModule__factory,
  ModuleGlobals__factory,
  PublishingLogic__factory,
  RevertCollectModule__factory,
  TimedFeeCollectModule__factory,
  TransparentUpgradeableProxy__factory,
  ProfileTokenURILogic__factory,
  LensPeriphery__factory,
  UIDataProvider__factory,
  ProfileFollowModule__factory,
} from '../typechain-types';
import { initEnv, getAddrs, deployContract, waitForTx } from '../tasks/helpers/utils';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const [governance, , user] = await initEnv(hre);
  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governance);
  const profile1FollowNFT = await lensHub.getFollowNFT(1);
  //const profile1FollowNFT = "0x7046717d32AfcA450DC5D6e75724D4282DFAd16E";
  await deploy('ApprovalsGov', {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: ["Hello"],
    args: [profile1FollowNFT],
    log: true,
  });

  const ApprovalsGov = await hre.ethers.getContract("ApprovalsGov", deployer);
  const ApprovalLists = await hre.ethers.getContract("ApprovalLists", deployer);
  const tokenAddress = ApprovalLists.address;
  const listTokenId = 0;
  const testAddr = '0x71B33F134342043d7C10C7871c31d9451EB45a4E';
  const listAddCalldata = ApprovalLists.interface.encodeFunctionData('listAdd', [listTokenId, testAddr]);
  console.log('proposing: ', listAddCalldata);
  const txResp = await ApprovalsGov.propose(
    [tokenAddress],
    [0],
    [listAddCalldata],
    'Proposal #3: Approve (0) ' + testAddr,
  );
  const txRcpt = await txResp.wait();
  console.log('proposal ID from event log: ', txRcpt.events[0].args);

  // This will create a new proposal, with a proposal id that is obtained by hashing together the proposal data, and which will also be found in an event in the logs of the transaction.
  /*
    // Getting a previously deployed contract
    const YourContract = await ethers.getContract("YourContract", deployer);
    await YourContract.setPurpose("Hello");
    
    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */
};
export default func;
func.tags = ['ApprovalsGov'];

/*
Tenderly verification
let verification = await tenderly.verify({
  name: contractName,
  address: contractAddress,
  network: targetNetwork,
});
*/
