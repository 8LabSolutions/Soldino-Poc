pragma solidity ^0.5.0;

import "./UserStorage.sol";

/**
  * Created: 2019-03-13
  * @author Mattia
  * @title Citizen contract
  * @dev This contract define the storage for the citizen-type user
  */
  contract CitizenStorage is UserStorage {
    struct Citizen {
        bytes32 email;
        bytes32 deliveryAddress;
        bytes32 name;
        bytes32 surname;
        bool active;
        uint index;
    }

    mapping(address => Citizen) addressCitizen;

    // Overriding 
    function getName(address _userAddress) public view returns (bytes32) {
        return addressCitizen[_userAddress].name;
    }
    
    function getEmail(address _userAddress) public view returns (bytes32) {
        return addressCitizen[_userAddress].email;
    }

    function getDeliveryAddressaddress (address _userAddress) public view returns (bytes32) {
        return addressCitizen[_userAddress].deliveryAddress;
    }

    function getActive(address _userAddress) public view returns (bool) {
        return addressCitizen[_userAddress].active;
    }

    function getSurname(address _userAddress) public view returns (bytes32) {
        return addressCitizen[_userAddress].surname;
    }

  }