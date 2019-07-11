## 要求 
    
- 新建main.js文件，编写一个函数，实现以下功能：按字母表顺序输出传入的参数字符串。

```
function alphabetSort(str){
      const sortCharactersInString = str =>
      str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
}
alphabetSort('hello'); // should return 'ehllo'
```
