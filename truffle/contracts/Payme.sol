pragma solidity ^0.4.22;

contract Payme {
    mapping (address => int) public balances;

    function deposit(int amount) public {
        balances[msg.sender] = balances[msg.sender] + amount;
    }

    function withdraw(int amount) public {
        if (amount <= balances[msg.sender])
            balances[msg.sender] = balances[msg.sender] - amount;
    }

    function getBalance() public view returns (int) {
        return balances[msg.sender];
    }
}