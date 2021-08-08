---
icon: info
footer: 当一阵风吹来 风筝飞上天空
tag: css
---
# SCSS常用语法
### 变量
#### 变量有作用域区间
+ `$width`这个变量定义在了`nav`的`{ }`规则块内，所以它只能在`nav`规则块内使用

```scss
// 编译前
$nav-color: #F90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}
//编译后
nav {
  width: 100px;
  color: #F90;
}
```
### 嵌套
```scss
#content {
  article {
    h1 { color: #333 };
    p { margin-bottom: 1.4em };
  }
  aside { background-color: #EEE };
}
 /* 编译后 */
#content article h1 { color: #333 };
#content article p { margin-bottom: 1.4em };
#content aside { background-color: #EEE };
```
### 嵌套属性 简写
```scss
nav {
  border: 1px solid #ccc {
  left: 0px;
  right: 0px;
  }
}
/* 编译后 */
nav {
  border: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
}
```
### 父类选择器 `&`
```scss
article a {
  color: blue;
  &:hover { color: red };
}
 /* 编译后 */
article a { color: blue };
article a:hover { color: red };
```
### 默认变量值

```scss
$link-color: blue;
$link-color: red;
a {
    color: $link-color;
}
```
+ 一般情况下，反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值 `color` 为red

```scss
$fancybox-width: 400px !default;
.fancybox {
    width: $fancybox-width;
}
```
+ 使用sass的!default标签可以设置默认变量。含义是：如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。如果在导入你的sass局部文件之前声明了一个`$fancybox-width`变量，那么你的局部文件中对`$fancybox-width`赋值400px的操作就无效。如果没有做这样的声明，则`$fancybox-width`将默认为400px
  
### 混合器mixin
```scss
@mixin rounded-corners {
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  border-radius: 5px;
}

//引用

notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

//编译生成

.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

//混合器传参

@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}

//编译

a {
  @include link-colors(blue, red, green);
}

//Sass最终生成的是：

a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }

//指定key-value
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}
// 默认参数
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```
### 选择器继承
```scss
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}

//编译后

.error, .seriousError {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  border-width: 3px;
}
```

