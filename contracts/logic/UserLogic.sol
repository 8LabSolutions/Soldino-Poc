pragma solidity ^0.5.0;

import "../storage/BusinessStorage.sol";
import "../storage/CitizenStorage.sol";
import "../Owned.sol";

/**
  * Created: 2019-03-13
  * @author Mattia
  * @title User logic contract
  * @dev This contract manage the logic of the user storage
  */
contract UserLogic is BusinessStorage, CitizenStorage, Owned {
    bool first = true;

    modifier firstReg(address _address) {
        if(first == false) {
            require(userIsRegistered(_address) != 0, "User already registered");
        }
        else {
            first = false;
        }
        _;
    }

    function userIsRegistered(address _userAddress) public view returns (uint) {
        if(_userAddress == owner) {
            return 3;
        }
        if(businessList.length != 0) {
            if (businessList[addressToBusiness[_userAddress].index] == _userAddress) {
                return 1;
            }
            if(citizenList.length != 0) {
                if(citizenList[addressToCitizen[_userAddress].index] == _userAddress) {
                    return 2;
                }
            }
            return 0;
        }
        if(citizenList.length != 0) {
            if(citizenList[addressToCitizen[_userAddress].index] == _userAddress) {
                return 2;
            }
            if(businessList.length != 0) {
                if (businessList[addressToBusiness[_userAddress].index] == _userAddress) {
                    return 1;
                }
            }
            return 0;
        }

        return 0;
    }

    function registerCitizen(
        bytes32 _email,
        bytes32 _name,
        bytes32 _surname,
        bytes32 _devAddress
    ) public firstReg(msg.sender) {
        CitizenStorage.setEmail(msg.sender, _email);
        CitizenStorage.setName(msg.sender, _name);
        CitizenStorage.setSurname(msg.sender, _surname);
        CitizenStorage.setDeliveryAddress(msg.sender, _devAddress);
        CitizenStorage.setActive(msg.sender, true);
        CitizenStorage.setIndex(msg.sender, citizenList.push(msg.sender) - 1);
    }

    function registerBusiness(
        bytes32 _email,
        bytes32 _name,
        bytes32 _vatNumber,
        bytes32 _devAddress
    ) public firstReg(msg.sender) {
        BusinessStorage.setEmail(msg.sender, _email);
        BusinessStorage.setName(msg.sender, _name);
        BusinessStorage.setVATNumber(msg.sender, _vatNumber);
        BusinessStorage.setDeliveryAddress(msg.sender, _devAddress);
        BusinessStorage.setActive(msg.sender, true);
        BusinessStorage.setIndex(msg.sender, businessList.push(msg.sender) - 1);
    }

    function setActiveCit(address _citAdd, bool _active) public {
        CitizenStorage.setActive(_citAdd, _active);
    }

    function getActiveCit(address _citAdd) public view returns (bool) {
        return CitizenStorage.getActive(_citAdd);
    }

}
