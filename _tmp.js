let sum = 0;
let F_LINKED_PRODUCTS = "Lista produktów do zamówienia";
let F_PRICE = "Cena jednostkowa brutto";
let F_AMOUNT = "Ilość";

for (i=0; i < entry().field(F_LINKED_PRODUCTS).length; i++) {
  let p = entry().field(F_LINKED_PRODUCTS)[i].field(F_PRICE);
  let a = entry().field(F_LINKED_PRODUCTS)[i].attr(F_AMOUNT);
  sum += p * a;
}
sum.toFixed(2)



if (entry().field("Rodzaj wpisu") == "Asortyment") {
  entry().field("Cena jednostkowa brutto")
} else {
  entry().field("Osiedle")[0].field("Nazwa") + " • " +
  entry().field("Status realizacji") + " • " +
  entry().field("Zamówienie na miesiąc")
}



Lista produktów



_displaySum


var res = "";

for (i=1; i<52; i++ ) {
if (entry().field( i.toString() ) == true) {
  var d = (1 + (i - 1) * 7); // 1st of January + 7 days for each week
  res = res + ", " + new Date(2022, 0, d);
}
}

res




const F_OUTPUT_TEXT = 'Lista';
const F_TOTAL = 'Wartość zamówienia';
const F_PRODUCTS = 'Asortyment';
const F_KIND = 'Rodzaj wpisu';
const F_CONTRACT = 'Osiedle';
const F_MONTH = 'Zamówienie na miesiąc';

const F_CONTRACT_CNAME = 'Nazwa potoczna';
const F_PRODUCT_NAME = 'Nazwa asortymentu';
const F_PRODUCT_VENDOR = 'Dostawca';
const F_PRODUCT_CATEGORY = 'Kategoria asortymentu';

const V_KIND_ORDER = 'Zamówienie na osiedle';
const V_KIND_PRODUCT = 'Asortyment';


Przelicz wartość zamówienia






Lista produktów



zamówienie

let a = [];
.array.forEach(element => {
  
});

let arr = ['KIEHL Dopomat forte  10L (185 zł)',
'TENZI TruckClean 10L (136,99 zł)',
'TENZI TruckClean 20L (269,99 zł)',
'TENZI TruckClean 5L (69,99 zł)'];

entryDefault().set('Asortyment', arr)


let e = entry();
let line =  e.field('Nazwa asortymentu') + ' ' + 
            e.field('Pojemność opakowania') + ' (' +
            e.field('Cena jednostkowa brutto') + ' zł)';

line.replace(/^A-Za-z0-9\sĘęĄąŻżŹźŁłŃńÓóŚśĆć+/g,'').replace('.',',')

tmpStr.replace(/[\[\]']+/g, ',').split(',').forEach(element => { if(!isNaN(parseInt(element))) absences.push(parseInt(element)) });


let amount = parseInt(entry().field(F_AMOUNT));
switch (true) {

  case (amount < 0 || amount > 0 ) :
    let arr = entry().field(F_OUTPUT_TEXT).split('\n');
    let totalSum = parseFloat(entry().field(F_TOTAL));
    let productLine = entry().field(F_PRODUCTS);
    
    let price = parseFloat(productLine.substr( productLine.lastIndexOf('(') + 1, 20).replace('zł )', ""));
    let productName = productLine.substr(0, productLine.lastIndexOf('(')-1 );
    
    arr.push (productName + ": " + entry().field(F_AMOUNT) + " szt, " + (price * amount) + "zł")
    arr.sort();
    
    entry().set(F_OUTPUT_TEXT, arr.join('\n'));
    entry().set(F_TOTAL, totalSum + (price * amount));

    break;
  default:
    message ("Wybierz produkt z listy i podaj ilość")
    break;
}





if () 




