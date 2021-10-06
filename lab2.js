var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(mountain) {
    var biggestmountain = 0;
    var currentname = '';
    for (var i = 0; i < mountain.length; i++) {
        if (mountain[i].height > biggestmountain) {
            biggestmountain = mountain[i].height;
            currentname = mountain[i].name;
        }
    }
    return currentname;
}
var tallestmountain = findNameOfTallestMountain(mountains);
console.log(tallestmountain);
var products = [
    { name: 'Coffee', price: 8 },
    { name: 'Sugar', price: 4 },
    { name: 'Candy', price: 5 }
];
function calcAverageProductPrice(productarray) {
    var sum = 0;
    for (var i = 0; i < productarray.length; i++) {
        sum += productarray[i].price;
    }
    var average = sum / productarray.length;
    return average;
}
var averageprice = calcAverageProductPrice(products);
console.log(averageprice);
;
var inventory = [
    {
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    }, {
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
];
function calcuInventoryValue(invArray) {
    var totalValue = 0;
    invArray.forEach(function (x) { return totalValue += x.product.price * x.quantity; });
    return totalValue;
}
console.log(calcuInventoryValue(inventory));
