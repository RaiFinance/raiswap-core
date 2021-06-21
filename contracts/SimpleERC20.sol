// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleERC20 is ERC20 {
    constructor(string memory name, string memory symbol, uint8 decimals, uint256 initialSupply) public 
    ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
        _setupDecimals(decimals);
    }
}