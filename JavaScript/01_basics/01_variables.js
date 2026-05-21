const accountID = 123456789
let accountEmail = "deepak@gmail.com"
var accountPassword = "12345678"
accountCity = "Kota"
let accountState;

// accountID = 2345 // not allowed because accountID is a constant Variable


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

