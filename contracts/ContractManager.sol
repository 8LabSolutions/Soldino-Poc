pragma solidity ^0.5.0;

contract ContractManager {

    address ownerAddress;
    address citizenLogicAddress;
    address citizenStorageAddress;
    address businessLogicAddress;
    address businessStorageAddress;
    address userStorageAddress;
    address governmentAddress;

    constructor () public {
        ownerAddress = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddress, "Only the owner got permissions to change the address");
        _;
    }

    function getUserStorageAddress() public view returns(address) {
        return userStorageAddress;
    }

    function setUserStorageAddress(address _userStorageAddress) public onlyOwner {
        userStorageAddress = _userStorageAddress;
    }

    function getGovernmentAddress() public view returns(address) {
        return governmentAddress;
    }

    function setGovernmentAddress(address _governmentAddress) public onlyOwner {
        governmentAddress = _governmentAddress;
    }

    function getCitizenLogicAddress() public view returns(address) {
        return citizenLogicAddress;
    }

    function setCitizenLogicAddress(address _newCitizenLogicAddress) public onlyOwner {
        citizenLogicAddress = _newCitizenLogicAddress;
    }

    function getCitizenStorageAddress() public view returns(address) {
        return citizenStorageAddress;
    }

    function setCitizenStorageAddress(address _newCitizenStorageAddress) public onlyOwner {
        citizenStorageAddress = _newCitizenStorageAddress;
    }

    function getBusinessLogicAddress() public view returns(address) {
        return businessLogicAddress;
    }

    function setBusinessLogicAddress(address _newBusinessLogicAddress) public onlyOwner {
        businessLogicAddress = _newBusinessLogicAddress;
    }

    function getBusinessStorageAddress() public view returns(address) {
        return businessStorageAddress;
    }

    function setBusinessStorageAddress(address _newBusinessStorageAddress) public onlyOwner {
        businessStorageAddress = _newBusinessStorageAddress;
    }
}
