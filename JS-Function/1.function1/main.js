function reverseString(message){
  var temp = message.split("");
  var temp2 = "";
  for(var i=temp.length;i>0;i--){
    temp2 += temp[i-1];
  }
  console.log(temp2);
}
reverseString('hello'); // should return 'olleh'