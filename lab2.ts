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

