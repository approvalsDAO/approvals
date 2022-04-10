import { defaultAbiCoder } from 'ethers/lib/utils';
import { task } from 'hardhat/config';
import {
  FollowNFT__factory,
  LensHub__factory,
  NFTFollowModule__factory,
  MockNft__factory,
} from '../typechain-types';
import { CreateProfileDataStruct } from '../typechain-types/LensHub';
import {
  deployContract,
  getAddrs,
  initEnv,
  ProtocolState,
  waitForTx,
  ZERO_ADDRESS,
} from './helpers/utils';

task('nft-follow-module', 'tests the nftFollowModule').setAction(async ({}, hre) => {
  const [governance, , user, user2] = await initEnv(hre);
  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governance);

  await waitForTx(lensHub.setState(ProtocolState.Unpaused));
  await waitForTx(lensHub.whitelistProfileCreator(user.address, true));
  await waitForTx(lensHub.whitelistProfileCreator(user2.address, true));

  const inputStruct: CreateProfileDataStruct = {
    to: user.address,
    handle: 'zer0dot',
    imageURI:
      'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
    followModule: ZERO_ADDRESS,
    followModuleInitData: [],
    followNFTURI:
      'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
  };

  const inputStructAdd: CreateProfileDataStruct = {
    to: user2.address,
    handle: 'ape',
    imageURI:
      'https://hotbabes.net',
    followModule: ZERO_ADDRESS,
    followModuleInitData: [],
    followNFTURI:
      'https://hotbabes.net',
  };

  await waitForTx(lensHub.connect(user).createProfile(inputStruct));
  await waitForTx(lensHub.connect(user2).createProfile(inputStructAdd));

  const nftFollowModule = await deployContract(
    new NFTFollowModule__factory(governance).deploy(lensHub.address)
  );
  await waitForTx(lensHub.whitelistFollowModule(nftFollowModule.address, true));

  const mockNft = await deployContract(
    new MockNft__factory(governance).deploy()
  );
  console.log("mockNFT deployed address: ", mockNft.address);
  
  const data = defaultAbiCoder.encode(['address'], [mockNft.address]);
  await waitForTx(lensHub.connect(user).setFollowModule(1, nftFollowModule.address, data));

  try {
    await waitForTx(lensHub.connect(user2).follow([1], []));
  } catch (e) {
    console.log(`Expected failure occurred! Error: ${e}`);
  };

  //give 1 nft to user2 so they have a balance > 0
  await waitForTx(mockNft.connect(user2).mint(user2.address, 1));

  await waitForTx(lensHub.connect(user2).follow([1], []));
  console.log("follow success");

  const followNFTAddr = await lensHub.getFollowNFT(1);
  const followNFT = FollowNFT__factory.connect(followNFTAddr, user);

  const totalSupply = await followNFT.totalSupply();
  const ownerOf = await followNFT.ownerOf(1);

  console.log(`Follow NFT total supply (should be 1): ${totalSupply}`);
  console.log(
    `Follow NFT owner of ID 1: ${ownerOf}, user address (should be the same): ${user2.address}`
  );
});
