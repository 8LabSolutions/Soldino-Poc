pragma solidity ^0.5.0;

import "./ContractManager.sol";
import "./CitizenStorage.sol";
import "./UserStorage.sol";

contract CitizenLogic {
    ContractManager contractManager;
    CitizenStorage citizenStorage;
    UserStorage userStorage;

    constructor (address _contractManagerAddress) public {
        contractManager = ContractManager(_contractManagerAddress);
        citizenStorage = CitizenStorage(contractManager.getCitizenStorageAddress());
        userStorage = UserStorage(contractManager.getUserStorageAddress());
    }

    function registerCitizen(
            string memory _email,
            string memory _name,
            string memory _surname,
            string memory _devAddress
        ) public {

        citizenStorage.pushToCitizenList(msg.sender);
        citizenStorage.setEmail(msg.sender, _email);
        citizenStorage.setName(msg.sender, _name);
        citizenStorage.setSurname(msg.sender, _surname);
        citizenStorage.setDeliveryAddress(msg.sender, _devAddress);
        citizenStorage.setActive(msg.sender, true);

    }

    function getCitizenData(address _citizenAddress) public view returns(
        string memory, string memory, string memory, string memory){
        require(userStorage.getUserType(_citizenAddress) == 1, "The user is not a Citizen");
        return getCitizenData(_citizenAddress);
    }

}
