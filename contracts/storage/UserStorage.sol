pragma solidity ^0.5.0;

/**
  * Created: 2019-03-13
  * @author Mattia
  * @title Abstract storage contract
  * @dev This base contract is used to set the fundamentals functions
  * and state variables used in the user's hierarchy. It's immutable
  */
contract UserStorage {
    /* 
     * Store all users'addresses. Is internal because it cannot be accessed from 
     * outside the contract or derivate contracts.
     */
    address[] internal addresses;

    /*
     * All functions below define the fundamental behaviour of derivate contracts
     */
    function getName(address _userAddress) public view returns (bytes32);
    
    function getEmail(address _userAddress) public view returns (bytes32);

    function getDeliveryAddress(address _userAddress) public view returns (bytes32);

    function getActive(address _userAddress) public view returns (bool);
}