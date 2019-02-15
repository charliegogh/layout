1. text-shadow 属性值
text-shadow:10px 10px 1px red ;
				添加位置 x轴 y轴 阴影值 颜色  
				    
2. text-algin属性值
left	把文本排列到左边。默认值：由浏览器决定。  
right	把文本排列到右边。  
center	把文本排列到中间。  
justify	实现两端对齐文本效果。  
inherit	规定应该从父元素继承 text-align 属性的值。  
  
3. word-break属性 
- 使用前提：如果单纯的去敲英文不带空格，或者数字，会出现脱离文档情况
- 语法
word-break: normal|break-all|keep-all; 默认换行规则|允许在单词内换行|只能在半角空格或连字符处换行。  
word-break:break-all和word-wrap:break-word的区别  
[title](http://www.zhangxinxu.com/wordpress/2015/11/diff-word-break-break-all-word-wrap-break-word/ "区别")  
word-break:break-word与word-wrap：break-word效果一样  
- 常用，添加这两个属性最好。
  /*仅拆分的是一个单词*/
  overflow-wrap: break-word;
	/*当前都没有空位，拆分所有的单词，规定自动换行的处理方法*/
	word-break: break-all;

