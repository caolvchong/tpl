#将html模板转化为javascript模块

##目的
减轻前端拼接大量HTML以及维护时候的困难程度

##安装
1. 安装node，参见：https://github.com/joyent/node

2. 安装npm，参见：https://github.com/isaacs/npm

3. 安装tpl
    * npm方式：

            $ npm install tpl2js -g

    * 源码方式：

            $ cd ~
            $ git clone git://github.com/caolvchong/tpl.git
            $ cd tpl
            $ vim ~/.bashrc
            添加 alias tpl=~/tpl/src/tpl.bin.js，保存
    
##html模板语法
###变量
HTML中的输出变量使用`{{...}}`
###语句：支持if语句，for语句，语句使用{{}}括起来
* if语法：(else if 和 else 可选)

        {{if(...)}}
            ...
        {{else if(...)}}
            ...
        {{else}}
            ...
        {{endif}}

* for语法：(key和item可选，默认key值为_key，item值为_item)

        {{for data=数据list key=索引 item=元}}
            ...
        {{endfor}}

###注释：HTML风格注释，可以支持多行

    <!-- 注释内容 -->
     
##使用
###命令帮助

    tpl 模板文件 [目标文件] [ --fn name] [ --charset charset]  

* 模板文件必须存在
* 目标文件如果没有输入，则在模板文件的同目录下生成同名，以tpl.js结尾的文件
* --fn 指定输出为普通的function结构，把结果返回给name，不指定--fn默认将输出支持seajs的结构
* --charset指定文件的编码，默认UTF-8，非UTF-8时候需要指定，防止乱码

###使用生成好的模板
* seajs方式

        var tpl = require(生成好的模板文件);
        tpl.render(data); // json数据

* 普通function方式：
例如使用： tpl hello.html --fn my.tpl.hello 生成模板hello.tpl.js  
引入该js后可以使用：(需要事先有my.tpl这个命名空间，可以自定义)  

        my.tpl.hello.render(data); // json数据

或者自己将其复制到任意的地方来使用

详细的使用参看samples中的例子
