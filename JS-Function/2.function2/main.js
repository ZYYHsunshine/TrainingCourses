function palindrome(message) {
    var temp = message.split("");
    var temp2 = "";
    for (var i = temp.length; i > 0; i--) {
        temp2 += temp[i - 1];
    }
    if(message == temp2){
        console.log(message + "是回文")
    }else{
        console.log(message + "不是回文")
    }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true