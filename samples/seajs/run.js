define(function(require, exports) {
    var tpl = require('./test.tpl.js');
    window.onload = function() {
        setTimeout(function() {
            document.body.innerHTML = tpl.render({
                title: 'hello',
                name: '草履虫',
                sex: 1,
                friendList: [{
                    name: '老虫',
                    sex: 2
                }, {
                    name: '大虫'
                }, {
                    name: '小虫',
                    sex: 1
                }]
            });
            
            setTimeout(function() {
                document.body.innerHTML += tpl.render({
                    title: 'hello2',
                    name: '草履虫2',
                    sex: 2,
                    friendList: [{
                        name: '老虫2',
                        sex: 1
                    }, {
                        name: '大虫2'
                    }, {
                        name: '小虫2',
                        sex: 2
                    }]
                });
            }, 3000);
        }, 1500);
    };
});
