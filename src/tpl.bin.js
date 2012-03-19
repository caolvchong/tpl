#!/usr/bin/env node
var path = require('path');
var tpl = require('./tpl.core.js');

var src, dest, fnName, charset = 'utf-8';
var version = '0.0.1';
var index;
var $2 = process.argv[2];
var $3 = process.argv[3];
var util = {
    helper: function() {
        var text = '';
        text += 'usage:\n';
        text += '\ttpl source [ destFile] [ --type fuction] [ --charset charset]\n\n\n';
        text += 'see version:\n'
        text += '\ttpl --version\n\n';
        text += 'see helper:\n'
        text += '\ttpl --helper\n';
        return text;
    },
    version: function() {
        return version + '\n';
    },
    checkFileIsExists: function(src) {
        return path.existsSync(path.resolve(src));
    },
    srcNotExists: function() {
        return 'error: the source file does not exist!\n';
    },
    out: function(str) {
        process.stdout.write(str);
    },
	success: function(dest) {
		var text = '';
		text += 'Covert template to javascript successful!\n';
		text += 'The target file location is: \n';
		text += dest + '\n';
		return text;
	}
};


if ($2 == '--helper') { // 查看帮助
    util.out(util.helper());
} else if ($2 == '--version') { // 查看版本
    util.out(util.version());
} else { // 生成模板
    if (util.checkFileIsExists($2)) {// 判断文件是否存在
        src = path.resolve($2);
        if (!$3 || $3 == '--fn' || $3 == '--charset') { // 不存在目标文件参数
            dest = src.replace(path.extname($2), '.tpl.js');
        } else {
			dest = path.resolve($3);
		}
        
        index = process.argv.indexOf('--fn');
        if (index != -1) { // 输出为function格式
            fnName = process.argv[index + 1];
        }
        index = process.argv.indexOf('--charset');
        if (index != -1) { // 有charset
            if (process.argv[index + 1]) {
                charset = process.argv[index + 1];
            }
        }
		tpl.run({
			src: src,
			dest: dest,
			charset: charset,
			fnName: fnName
		}, function(e) {
			util.out(util.success(dest));
		});
    } else {
        util.out(util.srcNotExists());
    }
}
