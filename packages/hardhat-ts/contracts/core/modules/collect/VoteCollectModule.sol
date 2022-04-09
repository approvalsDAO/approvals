// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.10;

import { ICollectModule } from "../../../interfaces/ICollectModule.sol";
import { ModuleBase } from "../ModuleBase.sol";
import { FollowValidationModuleBase } from "../FollowValidationModuleBase.sol";

struct ProfilePublicationData {
  uint256 voteThreshold;
  uint256 voteFor;
  uint256 voteAgainst;
  bool verdict;
}

contract VoteCollectModule is FollowValidationModuleBase, ICollectModule {
  mapping(uint256 => mapping(uint256 => ProfilePublicationData)) internal _dataMap;

  constructor(address hub) ModuleBase(hub) {}

  /**
   * @dev There is nothing needed at initialization.
   */
  function initializePublicationCollectModule(
    uint256 profileId,
    uint256 pubId,
    bytes calldata data
  ) external override onlyHub returns (bytes memory) {
    uint256 voteThreshold = abi.decode(data, (uint256));
    _dataMap[profileId][pubId].voteThreshold = voteThreshold;
    _dataMap[profileId][pubId].voteFor = 0;
    _dataMap[profileId][pubId].voteAgainst = 0;
    return data;
  }

  /**
   * @dev Processes a collect by:
   *  1. Ensuring the collector is a follower, if needed
   */
  function processCollect(
    uint256 referrerProfileId,
    address collector,
    uint256 profileId,
    uint256 pubId,
    bytes calldata data
  ) external virtual override onlyHub {
    _checkFollowValidity(profileId, collector);
    bool vote = abi.decode(data, (bool));
    if (vote) {
      _dataMap[profileId][pubId].voteFor = _dataMap[profileId][pubId].voteFor + 1;
      if (_dataMap[profileId][pubId].voteFor > _dataMap[profileId][pubId].voteThreshold) _dataMap[profileId][pubId].verdict = true;
    } else {
      _dataMap[profileId][pubId].voteAgainst = _dataMap[profileId][pubId].voteAgainst + 1;
      if (_dataMap[profileId][pubId].voteAgainst > _dataMap[profileId][pubId].voteThreshold) _dataMap[profileId][pubId].verdict = false;
    }
  }
}
