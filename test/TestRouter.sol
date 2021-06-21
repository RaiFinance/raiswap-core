pragma solidity >=0.4.25 <0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Router.sol";
import "../contracts/Factory.sol";

contract TestMetaCoin {

  function testInitialFactory() public {
    SwapFactory factory = new SwapFactory(address(this));

    //Assert.equal(router.factory, address(this), "bad factory");
  }

  function testInitialRouter() public {
    //SwapRouter02 router = new SwapRouter02(address(this), address(this));

    //Assert.equal(router.factory, address(this), "bad factory");
  }
}
