将html模板转化为javascript模块
===

目的
---
减轻前端拼接大量HTML以及维护时候的困难程度

安装
---
先安装node，参见：https://github.com/joyent/node

在安装tpl

html模板语法
---
变量：HTML中的输出变量使用{{...}}
     语句：支持if语句，for语句，语句使用{{}}括起来
          if语法：(else if 和 else 可选)
              {{if(...)}}
                 ...
              {{else if(...)}}
                 ...
              {{else}}
                 ...
              {{endif}}
           for语法：(key和item可选，默认key值为_key，item值为_item)
              {{for data=数据list key=索引 item=元}}
                  ...
              {{endfor}}
     注释：HTML风格注释，可以支持多行
     
使用
---
先使用转化命令
tpl 模板文件 [目标文件] [ --fn name] [ --charset charset]
模板文件必须存在
目标文件如果没有输入，则在模板文件的同目录下生成同名，以tpl.js结尾的文件
--fn 指定输出为普通的function结构，把结果返回给name，不指定--fn默认将输出支持seajs的结构
--charset指定文件的编码，默认UTF-8，非UTF-8时候需要指定，防止乱码
使用模板时候
seajs方式：
var tpl = require(生成好的模板文件);
tpl.render({...}); // json数据

普通function方式：
例如使用： tpl hello.html --fn my.tpl.hello 生成模板hello.tpl.js
引入该js后可以使用：(需要事先有my.tpl这个命名空间，可以自定义)
my.tpl.hello.render({...}); // json数据
或者自己将其复制到任意的地方来使用