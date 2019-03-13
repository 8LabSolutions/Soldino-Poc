    pragma solidity ^0.5.0;

    import "./UserStorage.sol";

    /**
    * Created: 2019-03-13
    * @author Mattia
    * @title Business contract
    * @dev This contract define the storage for the business-type user
    */
    contract BusinessStorage is UserStorage {
        struct Business {
            bytes32 email;
            bytes32 deliveryAddress;
            bytes32 name;
            bytes32 vatNumber;
            bool active;
            uint index;
        }

        mapping(address => Business) addressBusiness;

        function getName(address _userAddress) public view returns (bytes32) {
            return addressBusiness[_userAddress].name;
        }
        
        function getEmail(address _userAddress) public view returns (bytes32) {
            return addressBusiness[_userAddress].email;
        }

        function getDeliveryAddressaddress (address _userAddress) public view returns (bytes32) {
            return addressBusiness[_userAddress].deliveryAddress;
        }

        function getActive(address _userAddress) public view returns (bool) {
            return addressBusiness[_userAddress].active;
        }

        //******* SETTERS ********
        function setName(address _userAddress, bytes32 _name) public {
            addressBusiness[_userAddress].name = _name;
        }

        function setEmail(address _userAddress, bytes32 _email) public {
            addressBusiness[_userAddress].email = _email;
        }

        function setDeliveryAddress(address _userAddress, bytes32    _devAddress) public {
            addressBusiness[_userAddress].deliveryAddress = _devAddress;
        }

        function setActive(address _userAddress, bool _active) public {
            addressBusiness[_userAddress].active = _active;
        }

        function setVATNumber(address _userAddress, bytes32 _vatNumber) public {
            addressBusiness[_userAddress].vatNumber = _vatNumber;
        }

        function setIndex(address _userAddress, uint _index) public {
            addressBusiness[_userAddress].index = _index;
        }

    }