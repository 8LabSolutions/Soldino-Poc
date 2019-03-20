pragma solidity ^0.5.0;

contract ProductStorage {
    //valid tells if the product is indeed an existing product
    // in this way the array is unncessary
    struct ProductInfo {
        address seller;
        bytes32 name;
        uint256 netSellPrice;
        uint8 VAT;
        string description;
        bool available;
        bool valid;
    }

    mapping(address => ProductInfo) addressToProduct;

    function getSeller(address _sellerAddress) public view returns (address){
        return addressToProduct[_sellerAddress].seller;
    }

    function getName(address _sellerAddress) public view returns (bytes32){
        return addressToProduct[_sellerAddress].name;
    }

    function getNetSellPrice(address _sellerAddress) public view returns (uint256){
        return addressToProduct[_sellerAddress].netSellPrice;
    }

    function getVAT(address _sellerAddress) public view returns (uint8){
        return addressToProduct[_sellerAddress].VAT;
    }

    function getDescription(address _sellerAddress) public view returns (string memory){
        return addressToProduct[_sellerAddress].description;
    }

    function getAvailable(address _sellerAddress) public view returns (bool){
        return addressToProduct[_sellerAddress].available;
    }

    function getValidProduct(address _sellerAddress) public view returns (bool){
        return addressToProduct[_sellerAddress].valid;
    }

}
