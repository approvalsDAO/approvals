// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.10;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockNft is ERC721("MockNft", "mNFT") {
  function mint(address to, uint256 amount) external {
    _mint(to, amount);
  }
}
