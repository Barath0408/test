

function addTwoNumber(a, b) {

  var c = a + b;
  return c;
}
var result = addTwoNumber(10, 125);
console.log(result);

function applyDiscount(discount) {
  var cartamount = 1000;
  cartamount -= discount;
  console.log(cartamount);
}

applyDiscount(500);

(function (a, b) {
  console.log("this is iife", a + b)
  
})(10, 30); 
//(function anonymous)(arguments);
  
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function(array) {
    for (var i = 0; i < array.lenghth; i++){
    
        if (array[i] % 1= 0) {
            console.log(array[i]);
        }
}   
}
(array);