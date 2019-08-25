let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
let summary = bestCharge(inputs);
console.log(summary);

function loadPromotions() {
  return [{
    type: '满30减6元'
  }, {
    type: '指定菜品半价',
    items: ['ITEM0001', 'ITEM0022']
  }];
}

function loadAllItems() {
  return [{
    id: 'ITEM0001',
    name: '黄焖鸡',
    price: 18.00
  }, {
    id: 'ITEM0013',
    name: '肉夹馍',
    price: 6.00
  }, {
    id: 'ITEM0022',
    name: '凉皮',
    price: 8.00
  }, {
    id: 'ITEM0030',
    name: '冰锋',
    price: 2.00
  }];
}

function bestCharge(selectedItems) {
  var sumPrice = 0;
  var AllItems = loadAllItems();
  var Promotions = loadPromotions();
  for(let i=0;i<selectedItems.length;i++){
    selectedItems[i] = selectedItems[i].trim();
    let itemid = selectedItems[i].slice(0,7); 
    let num = selectedItems[i][9];
    for(let j=0;j<AllItems.length;j++){
      if(itemid == AllItems[j][itemid]){
        if(itemid in Promotions[1].items){
          sumPrice = sumPrice + AllItems[j].price/2;
        }else if(sumPrice>30){
          sumPrice = sumPrice - 6;
        }else{
          sumPrice = AllItems[j].price * num;
        }
      }
    }
  }
  return sumPrice;
}



