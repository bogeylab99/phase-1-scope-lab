var customerName = 'bob';
console.log(customerName);

function upperCaseCustomerName(){
    return customerName.toUpperCase();
}
upperCaseCustomerName();

function setBestCustomer(){
     bestCustomer = 'not bob';
}
setBestCustomer();

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
overwriteBestCustomer();

const leastFavoriteCustomer = 'john'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not john';
}
changeLeastFavoriteCustomer();