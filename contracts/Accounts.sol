pragma solidity ^0.5.0;
// uguale ad Accounts, ma con nomi differenti

contract Accounts {
    enum UserType {Cit, Bus}
    
    // Struct to store the email and userType of user
    struct User {
        bytes32 email;
        bytes32 VATNumber;
        bytes32 sede;
        bytes32 name;
        UserType typeUs;
        bool active;
        uint index;
    }

    // Array of addresses, in it is going to be saved the address of a user
    // the same address is used to access the map addressToUser, that contains User structs
    address[] private addresses;

    mapping(address => User) private addressToUser;

    // Function to check if a given address is mapped to an account
    function isRegistered(address _address) public view returns (bool) {
        return(addresses[addressToUser[_address].index] == _address);
    }

    function register(address _address, bytes32 _mail, 
        bytes32 _vat, bytes32 _sede, bytes32 _name) public returns (bool) {
        require(isRegistered(_address) == false, "User already registered");
        addressToUser[_address].VATNumber = _vat;
        addressToUser[_address].sede = _sede;
        addressToUser[_address].name = _name;
        addressToUser[_address].email = _mail;
        addressToUser[_address].typeUs = UserType.Bus;
        addressToUser[_address].active = true;
        addressToUser[_address].index = addresses.push(_address) - 1;
        return true;
    }
    
    function getUser(address _address) public view returns (bytes32, bool) {
        require(this.isRegistered(_address) == true, "User not found");
        return (addressToUser[_address].email, addressToUser[_address].active);
    }
}
