pragma solidity ^0.5.0;

import "../storage/BusinessStorage.sol";
import "../storage/CitizenStorage.sol";

/**
  * Created: 2019-03-13
  * @author Mattia
  * @title User logic contract
  * @dev This contract manage the logic of the user storage
  */
contract UserLogic is BusinessStorage, CitizenStorage {

    function userIsRegistered(address _userAddress) public view returns (bool) {
        if(addresses.length == 0) { return false; }
        return (addresses[addressBusiness[_userAddress].index] == _userAddress)
        || (addresses[addressCitizen[_userAddress].index] == _userAddress);
    }

    function registerCitizen(
        address _citAddress,
        bytes32 _email,
        bytes32 _name,
        bytes32 _surname,
        bytes32 _devAddress
    ) public {
        require(userIsRegistered(_citAddress) == false, "User not registered");
        addressCitizen[_citAddress].email = _email;
        addressCitizen[_citAddress].name = _name;
        addressCitizen[_citAddress].surname = _surname;
        addressCitizen[_citAddress].deliveryAddress = _devAddress;
        addressCitizen[_citAddress].active = true;
        addressCitizen[_citAddress].index = addresses.push(_citAddress) - 1;
    }

    function registerBusiness(
        address _busAddress,
        bytes32 _email,
        bytes32 _name,
        bytes32 _vatNumber,
        bytes32 _devAddress
    ) public {
        require(userIsRegistered(_busAddress) == false, "User not registered");
        BusinessStorage.setEmail(_busAddress, _email);
        BusinessStorage.setName(_busAddress, _name);
        BusinessStorage.setVATNumber(_busAddress, _vatNumber);
        BusinessStorage.setDeliveryAddress(_busAddress, _devAddress);
        BusinessStorage.setActive(_busAddress, true);
        BusinessStorage.setIndex(_busAddress, addresses.push(_busAddress) - 1);
    }
}
