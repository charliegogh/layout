属性值
display : flex//声明该父元素为弹性布局
flex-direction : row | row-reverse | column | column-reverse//控制子元素排列方向：从左到右（默认），从右到左，从上到下，从下到上
flex-wrap : nowrap | wrap | wrap-reverse//控制子元素换行情况：不换行（默认），换行（下一行在下方），换行（下一行在上方）
flex-flow : flex-direction||flex-wrap//direction和wrap的简写属性
justify-content : flex-start | flex-end | center | space-between | space-around//控制子元素的对齐方式（以从左到右为例）：左对齐（默认），右对齐，居中，两端对齐，项目间间隔相等
align-items : flex-start | flex-end | center | baseline | stretch//控制交叉方向上（水平->垂直）的对齐方式，其中stretch为默认值，子元素将占满交叉方向的全部高度/宽度
align-content : flex-start | flex-end | center | space-between | space-around | stretch//当出现换行的时候，这个属性控制多行之间的对齐方式（与justify-content相似）


order : number//控制排位顺序，数字越小越靠前（可以是负数）
flex-grow : number//控制放大比例
flex-shrink : number//控制缩小比例，与shrink类似
flex-basis : length|auto//控制元素弹性处理前的原大小，可设置为CSS的length属性，默认为auto
flex : flex-grow || flex-shrink || flex-basis//简写属性，默认为0 1 auto
align-self : auto | flex-start | flex-end | center | baseline | stretch//这个属性可以使当前子元素脱离父元素的对齐规则，单独设定自己的对齐规则








1、当前分辨率过大，盒子显示不过来，设置区域铺满整个屏幕，对当前模块进行拉伸，
flex-grow设置比例进行拉伸，确定每一份拉伸的具体值。
1500  1200 多出300像素
每个模块分配比例通过flex-grow分配
1+2+3+4+5 15 
多余像素分成15份，每一份增加20乘以比例



子元素小于父元素需要拉伸，要在大分辨率上需要拉伸
	


收缩  flex-shrink 
计算关于收缩的公式：
	超出部分：所有子元素的宽度和-父元素的宽度
	
收缩比例*本身宽度/各个元素收缩比*元素宽度和、


本身收缩比例  占整个子元素的比例  *超出部分
1*300/(1*300+2*300+3*300+4*300+5*300)
1/15*(1500-1200)= 20 


flex-basis：跟width一样效果，但是优先使用的是它。
需求：如果不在1200px显示，换成手机端显示，进行收缩的话，需要最后一个元素会出现换行此时用到flex-flow，但是效果不完善，
用收缩


需要改变顺序：wrap-reverse
