# JS-Ajax

## 需求

- 创建一个名为ajax的XHR对象，其示例用法如下：

```
<<<<<<< HEAD
  function myCallback(xhr){ 
    alert(xhr.responseText); 
  }
  ajax.request(“somefile.txt”,”get”,myCallback);
  ajax.request(“script.php”,”post”,myCallback,”first=John&last=Smith”);
=======
  // write your code here
    let ajax = {
        request(url, method, callbak, params) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = (function (myxhr) {
                return function() {
                    if (myxhr.readyState === 4 && myxhr.status === 200) {
                        callbak(myxhr);
                    }
                }
            })(xhr);
            xhr.open(method, url, true);
            xhr.send(params || '');
        }
    }
    function myCallback(xhr) {
        alert(xhr.responseText);
    }
    ajax.request('https://reqres.in/api/users', 'get', myCallback);
    ajax.request('https://reqres.in/api/users', 'post', myCallback, 'page=2');
>>>>>>> js
```

## 作业要求  

- fork本仓库
- 按照readme要求完成作业
- 将作业提交到github，把github地址提交回系统

