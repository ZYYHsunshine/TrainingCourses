'use strict';

function collectSameElements(collectionA, objectB) {

  var c = new Array();
  var collectionB=objectB.value;
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionB.length ; j++)
    {
      if (collectionA[i].key == collectionB[j]) //取得对象数组中对象的key值
      {
        c.push(collectionB[j]);
        break;
      }
    }
  }
  return c;

}
