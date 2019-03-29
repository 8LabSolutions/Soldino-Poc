pragma solidity ^0.5.0;

contract ContractManager {
    address userLogicAddress;
    address userDataAddress;
    address citizenLogicAddress;
    address citizenDataAddress;
    address ownerAddress;

    constructor() public {
        ownerAddress = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddress, "Only the owner got permissions to change the address");
        _;
    }

    function getUserDataAddress() public view returns(address) {
        return userDataAddress;
    }

    function getUserLogicAddress() public view returns(address) {
        return userLogicAddress;
    }

    function getCitizenDataAddress() public view returns(address) {
        return citizenDataAddress;
    }

    function getCitizenLogicAddress() public view returns(address) {
        return citizenLogicAddress;
    }

    function setUserDataAddress(address _newUserDataAddress) public onlyOwner {
        userDataAddress = _newUserDataAddress;
    }

    function setUserLoginAddress(address _newUserLogicAddress) public onlyOwner {
        userLogicAddress = _newUserLogicAddress;
    }

    function setCitizenDataAddress(address _newCitizenDataAddress) public onlyOwner {
        citizenDataAddress = _newCitizenDataAddress;
    }

    function setCitizenLogicAddress(address _newCitizenLogicAddress) public onlyOwner {
        citizenLogicAddress = _newCitizenLogicAddress;
    }

}
