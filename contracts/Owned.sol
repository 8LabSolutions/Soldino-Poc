pragma solidity ^0.5.0;


contract Owned {
    address public owner;

    constructor() public{
        owner = msg.sender;
    }

    // i modificatori modificano la sintassi delle funzioni in cui sono inseriti
    // posso accettare parametri
    // se il require risulta true allora "_;" indica di proseguire con la funzione,
    //cioè esegue la funzione
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    //nella firma della funzione viene usato il modifier
    function transferOwnership(address newOwner) onlyOwner public {
        owner = newOwner;
    }
}