pragma solidity ^0.5.0;


import "../Authorizable.sol";

contract ProductStorage is Authorizable {
    struct ProductInfo {
        uint256 netSellPrice;
        bytes32 latestHashIPFS;
        uint8 hashSize;
        uint8 hashFunction;
        uint8 VATPercentage;
        bool available;
        address seller;
    }

    bytes32[] productsHashes;
    mapping(bytes32 => ProductInfo) hashToProduct;



    constructor(address _owner) public {

    }


}
