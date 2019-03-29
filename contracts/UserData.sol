pragma solidity ^0.5.0;
import "./ContractManager.sol";

contract UserData {
    //the manager from which the contract will get the contracts addresses
    address contractManagerAddress;

    struct User {
        uint8 userType; //1: citizen, 2: business, 3: government
        bool isUser; //check if it is already registered
        bytes32 emailAddress;
        bytes32 shippingAddress;
    }
    //mapping containing all the registered users
    mapping(address => User) users;
    //setting the contractManagerAddress
    constructor (address _contractManagerAddress) public {
        contractManagerAddress = _contractManagerAddress;
    }


}
