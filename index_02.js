// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
function judge(x){
	if(Object.prototype.toString.call(x) == "[object Array]"){
		console.log(x + 'is Array');
	}
}
console.log(judge(a))
console.log(judge(b))
//TODO


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
let b = [];
for(var i in a){
	var temp = a[i] * 2;
	b.push(temp);
}
console.log(b)
// TODO should output [2,4,6,8,10]


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
var temp = "";
for(var i in colors){
	temp += colors[i] + ' ';
}
console.log(temp)

var colors = ["Red", "Green", "White", "Black"];
var temp = "";
for(var i in colors){
	temp += colors[i] + '+';
}
console.log(temp)

var colors = ["Red", "Green", "White", "Black"];
var temp = "";
for(var i in colors){
	temp += colors[i] + ',';
}
console.log(temp)
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
var max;
//遍历数组，默认arr中的某一个元素为最大值，进行逐一比较
for(var i=0; i<a.length; i++){
//外层循环一次，a[i] 和 a.legend次的 a[j] 做对比
	for(var j=i; j<a.length; j++){
		if(a[i]<a[j]){
			//如果arr[j]大就把此时的值赋值给最大值变量max
　　　　　　　　　　　　　　 max=a[j];
			a[j]=a[i];
			a[i]=max;
		}
	}
}
console.log(a)
//TODO should output: [10,8,5,4,1]


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function f(arr){
  var temp=[];//对象数组
  var i;
  temp[0]={value:arr[0],index:1};//保存数组元素出现的次数和值
  arr.sort();
  for(i=1;i<arr.length;i++){
    if(arr[i]==arr[i-1]){
      temp[temp.length-1].index++;
    }else{//不相同则新增一个对象元素
      temp.push({index:1,value:arr[i]});
    }
  }
  temp.sort(function(a,b){//按照出现次数从大到小排列
    return a.index<b.index;
  })
  var max=temp[0].value;
  return {max};
}
var max = f(a);
console.log(max);
//TODO should output: 'a'
