var Tpl = require('tpl2js');

var template = Tpl('./test.tpl', 'utf8');

var str = "";
var data = {
  title: '关系（一）',
  name: '张三',
  sex: 1,
  friendList: [{
    name: '李四',
    sex: 2
  }, {
    name: '王五'
  }, {
    name: '赵六',
    sex: 1
  }]
};

template.compile(function(err, obj) {

  if(err) {
    console.log(err);
  }else {
    str = obj.render(data);              // get the result
    console.log(str);
  }

});
