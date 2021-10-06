interface Mountain{
    name: string;
    height: number;
}

let mountains:Mountain[] = [
{name: 'Kilimanjaro', height: 19341},
{name: 'Everest', height: 29029},
{name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(mountain:Mountain[]):string{
let biggestmountain: number = 0;
let currentname: string = '';

for(let i=0; i<mountain.length; i++){
    if(mountain[i].height > biggestmountain){
biggestmountain = mountain[i].height;
currentname = mountain[i].name;
    }
}

return currentname;
}

let tallestmountain: string = findNameOfTallestMountain(mountains);
console.log(tallestmountain);

interface Product {
    name: string;
    price: number;
}

let products:Product[] = [
{name: 'Coffee', price:8},
{name: 'Sugar', price: 4},
{name: 'Candy', price: 5}
];

function calcAverageProductPrice(productarray: Product[]):number{
    let sum = 0;
    for(let i=0; i<productarray.length; i++){
        sum += productarray[i].price;
    }
    let average = sum / productarray.length;
return average;
}

let averageprice: number = calcAverageProductPrice(products);
console.log(averageprice);

interface Inventory{
    product: Product,
    quantity: number
};

let inventory: Inventory[] = [

{
    product:{
        name: 'motor',
        price: 10.00
    },
    quantity: 10
},
{
    product:{
        name: 'sensor',
        price: 12.50
    },
    quantity: 4
},{
    product:{
        name: 'LED',
        price: 1.00
    },
    quantity: 20
}

]


function calcuInventoryValue(invArray: Inventory[]):number{
    let totalValue: number = 0;
    invArray.forEach((x: Inventory) => totalValue += x.product.price * x.quantity);
    return totalValue;
    
}

console.log(calcuInventoryValue(inventory));





