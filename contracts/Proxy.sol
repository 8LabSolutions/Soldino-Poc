pragma solidity ^0.5.0;


import "./BusinessStorage.sol";
import "./CitizenStorage.sol";


contract Proxy is BusinessStorage, CitizenStorage {
    address public _implementation;
    event Upgraded(address indexed implementation);

    function implementation() public view returns (address) {
        return _implementation;
    }

    function upgradeTo(address impl) public returns(bool) {
        require(_implementation != impl, "Already upgraded");
        _implementation = impl;
        emit Upgraded(impl);
        return true;
    }

    function test() external pure returns(bool) {
        return true;
    }

    function () external payable {
        address _impl = implementation();
        require(_impl != address(0), "Invalid address");
        bytes memory data = msg.data;

        assembly {
            let result := delegatecall(gas, _impl, add(data, 0x20), mload(data), 0, 0)
            let size := returndatasize
            let ptr := mload(0x40)
            returndatacopy(ptr, 0, size)
            switch result
            case 0 { revert(ptr, size) }
            default { return(ptr, size) }
        }
    }

}
