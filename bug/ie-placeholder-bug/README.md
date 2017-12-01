## IE下`textarea`的`placeholder`的值会直接变成输入框的内容的奇怪`bug`

> 该`bug`已经反馈给IE团队了，具体见：[[IE10-11] A textarea's placeholder text becomes it's actual value when using innerText, innerHTML or outerHTML](https://connect.microsoft.com/IE/feedback/details/811408/ie10-11-a-textareas-placeholder-text-becomes-its-actual-value-when-using-innertext-innerhtml-or-outerhtml)

**问题场景**：[IE10-11]    

**问题复现**：将一个容器里的`innerHTML`直接取出来（里面包含了一个设置有`placeholder`的`textarea`元素），然后同样通过`innerHTML`设置到另外一个容器里，该`placeholder`的值将变成输入框的内容；   

**问题原因**：见上面链接  

**解决方案**：避免使用`innerHTML`，使用Node；

