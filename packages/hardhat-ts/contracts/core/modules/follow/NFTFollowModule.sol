pragma solidity 0.8.10;

import { IFollowModule } from "../../../interfaces/IFollowModule.sol";
import { ModuleBase } from "../ModuleBase.sol";
import { FollowValidatorFollowModuleBase } from "./FollowValidatorFollowModuleBase.sol";
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract NFTFollowModule is IFollowModule, FollowValidatorFollowModuleBase {
  error ZeroBalance();

  mapping(uint256 => address) internal _nftAddressByProfile;

  constructor(address hub) ModuleBase(hub) {}

  function initializeFollowModule(uint256 profileId, bytes calldata data) external override onlyHub returns (bytes memory) {
    address addrs = abi.decode(data, (address));
    _nftAddressByProfile[profileId] = addrs;
    return data;
  }

  function setAddressNft(uint256 profileId, bytes calldata data) external returns (bytes memory) {
    address addrs = abi.decode(data, (address));
    _nftAddressByProfile[profileId] = addrs;
    return data;
  }

  function processFollow(
    address follower,
    uint256 profileId,
    bytes calldata data
  ) external view override {
    address nftaddrs = _nftAddressByProfile[profileId];
    if (IERC721(nftaddrs).balanceOf(follower) == 0) revert ZeroBalance();
  }

  function followModuleTransferHook(
    uint256 profileId,
    address from,
    address to,
    uint256 followNFTTokenId
  ) external override {}
}
