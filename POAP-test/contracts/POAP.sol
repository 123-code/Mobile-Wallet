pragma solidity ^ 0.8.9;

import "openzeppelin-eth/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-eth/contracts/token/ERC721/ERC721Enumerable.sol";
import "openzeppelin-eth/contracts/token/ERC721/IERC721Metadata.sol";


contract POAP is ERC721 ERC721Enumerable {
    string private name;
    string private symbol
    string private _baseuri;
    string private _symbol;

function settokenname(string memory _name)public{
    name = _name;
}

function gettokenname()public view returns(string memory){
    return name;
}

function setbaseuri(string memory baseuri) public{
    _baseuri = baseuri;
}





}

