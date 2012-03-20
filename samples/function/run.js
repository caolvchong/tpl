(function() {
    window.onload = function() {
        setTimeout(function() {
            document.body.innerHTML += testTpl.render({
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
            });
            
            setTimeout(function() {
                document.body.innerHTML += testTpl.render({
                    title: '关系（二）',
                    name: '李四',
                    sex: 2,
                    friendList: [{
                        name: '张三',
                        sex: 1
                    }, {
                        name: '王五'
                    }, {
                        name: '钱七',
                        sex: 2
                    }, {
                        name: '孙二'
                    }, {
                        name: '陈八',
                        sex: 2
                    }]
                });
            }, 3000);
        }, 1500);
    };
})();
