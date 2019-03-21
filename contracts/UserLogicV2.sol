pragma solidity ^0.5.0;


import "./CitizenStorage.sol";
import "./BusinessStorage.sol";
import "./Owned.sol";

contract UserLogicV2 is Owned{
    CitizenStorage citSto;
    BusinessStorage busSto;
    bool first = true;

    constructor(address _citStoAddress, address _busStoAddress) public {
        citSto = CitizenStorage(_citStoAddress);
        busSto = BusinessStorage(_busStoAddress);
    }

    modifier firstReg(address _address) {
        if(first == false) {
            require(userIsRegistered(_address) != 0, "User already registered");
        }
        else {
            first = false;
        }
        _;
    }

    function userIsRegistered(address _userAddress) public view returns (uint) {
        if(_userAddress == owner) {
            return 3;
        }
        if(busSto.getBusinessListLength() != 0) {
            if (busSto.getAddressAt(_userAddress) == _userAddress) {
                return 1;
            }
            if(citSto.getCitizenListLength() != 0) {
                if(citSto.getAddressAt(_userAddress) == _userAddress) {
                    return 2;
                }
            }
            return 0;
        }
        if(citSto.getCitizenListLength() != 0) {
            if(citSto.getAddressAt(_userAddress) == _userAddress) {
                return 2;
            }
            if(busSto.getBusinessListLength() != 0) {
                if (busSto.getAddressAt(_userAddress) == _userAddress) {
                    return 1;
                }
            }
            return 0;
        }

        return 0;
    }

    function registerCitizen(
        bytes32 _email,
        bytes32 _name,
        bytes32 _surname,
        bytes32 _devAddress
    ) public firstReg(msg.sender) {
        citSto.setEmail(msg.sender, _email);
        citSto.setName(msg.sender, _name);
        citSto.setSurname(msg.sender, _surname);
        citSto.setDeliveryAddress(msg.sender, _devAddress);
        citSto.setActive(msg.sender, true);
        citSto.setIndex(msg.sender, citSto.pushToCitizenList(msg.sender));
    }

    function registerBusiness(
        bytes32 _email,
        bytes32 _name,
        bytes32 _vatNumber,
        bytes32 _devAddress
    ) public firstReg(msg.sender) {
        busSto.setEmail(msg.sender, _email);
        busSto.setName(msg.sender, _name);
        busSto.setVATNumber(msg.sender, _vatNumber);
        busSto.setDeliveryAddress(msg.sender, _devAddress);
        busSto.setActive(msg.sender, true);
        busSto.setIndex(msg.sender, busSto.pushToBusinessList(msg.sender));
    }

    function setActiveCit(address _citAdd, bool _active) public {
        citSto.setActive(_citAdd, _active);
    }

    function getActiveCit(address _citAdd) public view returns (bool) {
        return citSto.getActive(_citAdd);
    }

    function setNameCit(address _citAdd, bytes32 _name) public {
        citSto.setName(_citAdd, _name);
    }
}
