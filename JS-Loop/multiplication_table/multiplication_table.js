var flag = 9;
for(var i=1;i<=flag;i++){
  var temp1 = "";
  for(var j=1;j<=i;j++){
    var temp =(j + "*" + i + "=" + j*i);
    temp1 += temp + " ";
  }
  console.log(temp1)
}