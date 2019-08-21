let productId = ['0001', '0003', '0005', '0003'];
let commodityHouse = [
  { "id": "0001", "name": "Coca Cola", "price": 3 },
  { "id": "0002", "name": "Diet Coke", "price": 4 },
  { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
  { "id": "0004", "name": "Mountain Dew", "price": 6 },
  { "id": "0005", "name": "Dr Pepper", "price": 7 },
  { "id": "0006", "name": "Sprite", "price": 8 },
  { "id": "0007", "name": "Diet Pepsi", "price": 9 },
  { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
  { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
  { "id": "0010", "name": "Fanta", "price": 12 }
]

function isValid(productId) {
  for (let j = 0; j < productId.length; j++) {
    for (let i = 0; i < commodityHouse.length; i++) {
      if (commodityHouse[i].id === productId[j]) {
        continue;
      }
      else {
        return false;
      }
    }
    return true;
  }
}


function getInfo(productId){
 let commodityInfoCollection = [];
 let barcodeMap = new Map();
//  commodityName = commodityHouse[i].name
//  commodityPrice = commodityHouse[i].price
  for(let i=0; i<productId.length; i++){
    if(barcodeMap.get(productId[i])==null){
        barcodeMap.set(productId[i],1);
    }else {
        barcodeMap.set(productId[i],barcodeMap.get(productId[i])+1);
    }
  }
  barcodeMap.forEach(function (value,key) {
    commodityInfoCollection.push({id:key,count:value})
  });
  return commodityInfoCollection; 
}



function sumPrice(commodityInfoCollection){
  let totalmoney = 0;
  for(let i=0;i<commodityInfoCollection.length;i++){
    for(let j=0;j<commodityHouse.length;j++){
      if(commodityInfoCollection[i].id === commodityHouse[j].id){
        totalmoney = totalmoney + commodityHouse[j].price*commodityInfoCollection[i].count;
      }
    }
  }
  return totalmoney;
}

