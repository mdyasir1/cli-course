/*
Create a object to deposit money {accountnumber, balance}
@Parameter = number
@Parameter = initialbalance
@Return = accountnumber: number, balance: initialbalance
*/
function CreatingAccount(number, initialbalance){
   var account ={
       accountnumber: number,
       balance: initialbalance
  }
  return account
  
}
var abc = CreatingAccount(12345, 122)
console.log(abc)

/*
To withdraw ammount from existing amount. 
ONLY if the withdrawable amount is less than existing balance else `Insufficient balance`.

@Parameter : account object {accountnumber, balance}
@Parameter : withdrawn 
@Return : account.balance = account.balance - withdrawn
*/
function Withdrawing(account, withdrawn) {
   if (account.balance > withdrawn) {
       account.balance = account.balance - withdrawn;
       console.log(`${withdrawn} is debited from your account. New balance is ${account.balance}.`);
   } else {
       console.log("Insufficient balance.");
   }
}

Withdrawing(abc, 22);