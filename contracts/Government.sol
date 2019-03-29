pragma solidity ^0.5.0;

contract Government {
    address ownerAddress;

    constructor(address _governmentAddress) public {
        ownerAddress = _governmentAddress;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddress, "Only the government can use the Government contract");
        _;
    }

}
