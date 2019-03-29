pragma solidity ^0.5.0;


/**
* Created: 2019-03-13
* Modified: 2019-03-20
* @author Mattia
* @title Business contract
* @dev This contract define the storage for the business-type user
*/
contract BusinessStorage {
    // The struct defines the characteristics of a business user
    struct Business {
        bytes32 email;
        bytes32 deliveryAddress;
        bytes32 name;
        bytes32 vatNumber;
        bool active;
        uint index;
    }

    /*
    * This array is needed in order to verify if a user is registered
    */
    address[] internal businessList;
    /*
    * The map addressToBusiness maps an addresso to a struct.
    * The key of the map is the user address (account address in Metamask)
    * The value of the map is a Business struct
    */
    mapping(address => Business) addressToBusiness;

    function getName(address _userAddress) public view returns (bytes32) {
        return addressToBusiness[_userAddress].name;
    }

    function getEmail(address _userAddress) public view returns (bytes32) {
        return addressToBusiness[_userAddress].email;
    }

    function getDeliveryAddressaddress (address _userAddress) public view returns (bytes32) {
        return addressToBusiness[_userAddress].deliveryAddress;
    }

    function getActive(address _userAddress) public view returns (bool) {
        return addressToBusiness[_userAddress].active;
    }

    //******* SETTERS ********
    function setName(address _userAddress, bytes32 _name) public {
        addressToBusiness[_userAddress].name = _name;
    }

    function setEmail(address _userAddress, bytes32 _email) public {
        addressToBusiness[_userAddress].email = _email;
    }

    function setDeliveryAddress(address _userAddress, bytes32  _devAddress) public {
        addressToBusiness[_userAddress].deliveryAddress = _devAddress;
    }

    function setVATNumber(address _userAddress, bytes32 _vatNumber) public {
        addressToBusiness[_userAddress].vatNumber = _vatNumber;
    }

    function setIndex(address _userAddress, uint _index) private {
        addressToBusiness[_userAddress].index = _index;
    }

    function setActive(address _userAddress, bool _active) public {
        addressToBusiness[_userAddress].active = _active;
    }

    function getBusinessListLength() public view returns (uint){
        return businessList.length;
    }

    function getAddressAt(address _userAddress) public view returns (address) {
        return businessList[addressToBusiness[_userAddress].index];
    }

     function pushToBusinessList(address _userAddress) public {
        setIndex(_userAddress, businessList.push(_userAddress) - 1);
    }
}
