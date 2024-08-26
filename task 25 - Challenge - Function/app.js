// 1
function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}

// 4
let order1 = calculateTotal(50, 5);
let order2 = calculateTotal(30, 3);
let order3 = calculateTotal(20, 2);

// 6.
console.log("Order 1 Total: " + order1);
console.log("Order 2 Total: " + order2);
console.log("Order 3 Total: " + order3);