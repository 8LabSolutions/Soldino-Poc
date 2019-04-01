pragma solidity ^0.5.0;

import "../storage/ProductStorage.sol";
import "../ContractManager.sol";
import "../storage/UserStorage.sol";


contract ProductLogic {
    ProductStorage productStorage;
    ContractManager contractManager;
    UserStorage userStorage;

    event ProductInserted(bytes32 indexed _keyHash, address indexed _seller);

    event ProductModified(
        bytes32 indexed _keyHash,
        address indexed _seller,
        bytes32 indexed _newHashIPFS
    );

    event ProductDeleted(bytes32 indexed _keyHash, address indexed _seller);

    //TODO
    modifier onlyBusiness {
        require(userStorage.getUserType(msg.sender) == 7, "You're not a business");
        _;
    }

    //TODO
    modifier onlyProductOwner (bytes32 _keyHash){
        require(productStorage.getSeller(_keyHash) == msg.sender, "The product is not yours");
        _;
    }

    modifier onlyValidKeyHash (bytes32 _keyHash) {
        // check if the given hash key is null
        require(_keyHash[0] != 0, "The given hash key is null");
        _;
    }

    constructor(address _contractManager, address _productStorage) public {
        contractManager = ContractManager(_contractManager);
        productStorage = ProductStorage(_productStorage);
        userStorage = UserStorage(contractManager.getContractAddress("UserStorage"));
    }

    function addProduct(
        bytes32 _hashIPFS,
        uint8 _hashSize,
        uint8 _hashFunction,
        uint8 _vatPercentage,
        uint256 _netPrice
    )
        public
        onlyBusiness
    {
        productStorage.addProduct(
            _hashIPFS,
            _hashSize,
            _hashFunction,
            _vatPercentage,
            _netPrice,
            msg.sender
        );

        emit ProductInserted(_hashIPFS, msg.sender);
    }

    function modifyProduct(
        bytes32 _keyHash,
        bytes32 _hashIPFS,
        uint8 _hashSize,
        uint8 _hashFunction,
        uint8 _vatPercentage,
        uint256 _netPrice
    )
        public
        onlyValidKeyHash(_keyHash)
        onlyProductOwner(_keyHash)
    {
        require(_hashIPFS[0] != 0, "The modified product's hash given is null");
        require(_hashIPFS != _keyHash, "The modified product's hash cannot be the same as the key-hash");

        bool modified = false;

        if (_netPrice != 0) {
            productStorage.setNetPrice(_keyHash, _netPrice);
            modified = true;
        }

        if (_vatPercentage != 0) {
            productStorage.setVatPercentage(_keyHash, _vatPercentage);
            modified = true;
        }

        if (modified == true) {
            productStorage.updateHash(_keyHash, _hashIPFS, _hashFunction, _hashSize);
            emit ProductModified(_keyHash, msg.sender, _hashIPFS);
        }

    }

    function deleteProduct(bytes32 _keyHash) 
        public 
        onlyValidKeyHash(_keyHash) 
        onlyProductOwner(_keyHash) 
    {
        productStorage.deleteProduct(_keyHash);
        emit ProductDeleted(_keyHash, msg.sender);
    }
}
