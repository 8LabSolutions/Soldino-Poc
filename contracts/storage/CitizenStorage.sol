pragma solidity ^0.5.0;


/**
  * Created: 2019-03-13
  * Modified: 2019-03-20
  * @author Mattia
  * @title Citizen contract
  * @dev This contract define the storage for the citizen-type user
  */
contract CitizenStorage {
    // The struct defines the characteristics of a citizen user
    struct Citizen {
        bytes32 email;
        bytes32 deliveryAddress;
        bytes32 name;
        bytes32 surname;
        bool active;
        uint index;
    }

    /*
    * This array is needed in order to verify if a user is registered
    */
    address[] internal citizenList;

    /*
    * The map addressToCitizen maps an addresso to a struct.
    * The key of the map is the user address (account address in Metamask)
    * The value of the map is a Citizen struct
    */
    mapping(address => Citizen) addressToCitizen;

    function getName(address _userAddress) public view returns (bytes32) {
        return addressToCitizen[_userAddress].name;
    }

    function getEmail(address _userAddress) public view returns (bytes32) {
        return addressToCitizen[_userAddress].email;
    }

    function getDeliveryAddressaddress (address _userAddress) public view returns (bytes32) {
        return addressToCitizen[_userAddress].deliveryAddress;
    }

    function getActive(address _userAddress) public view returns (bool) {
        return addressToCitizen[_userAddress].active;
    }

    function getSurname(address _userAddress) public view returns (bytes32) {
        return addressToCitizen[_userAddress].surname;
    }

    function setName(address _userAddress, bytes32 _name) public {
        addressToCitizen[_userAddress].name = _name;
    }

    function setEmail(address _userAddress, bytes32 _email) public {
        addressToCitizen[_userAddress].email = _email;
    }

    function setSurname(address _userAddress, bytes32 _surname) public {
        addressToCitizen[_userAddress].surname = _surname;
    }

    function setDeliveryAddress(address _userAddress, bytes32 _devAddress) public {
        addressToCitizen[_userAddress].deliveryAddress = _devAddress;
    }

    function setIndex(address _userAddress, uint _index) public {
        addressToCitizen[_userAddress].index = _index;
    }

    function setActive(address _userAddress, bool _active) public {
        addressToCitizen[_userAddress].active = _active;
    }

    function getCitizenListLength() public view returns (uint){
        return citizenList.length;
    }

    function getAddressAt(address _userAddress) public view returns (address) {
        return citizenList[addressToCitizen[_userAddress].index];
    }

    function pushToCitizenList(address _userAddress) public returns (uint){
        return citizenList.push(_userAddress) - 1 ;
    }
}
