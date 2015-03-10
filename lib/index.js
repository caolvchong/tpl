var tpl = require('./tpl.core.js');
var fs = require('fs');
var path = require('path');

var util = {
  checkFileIsExists: function(src) {
    return fs.existsSync(path.resolve(src));
  }
}

function Tpl(src, charset){
  if (!(this instanceof Tpl)) {
    return new Tpl(src, charset);
  }
  this.src = src;
  this.charset = charset || 'utf8';
}

Tpl.prototype.compile = function(callback) {
  var that = this;
  if(!util.checkFileIsExists(that.src)) {
    return callback('error: the source file does not exist!\n');
  }
  tpl.run({
    src: that.src,
    charset: that.charset
  }, function(err, obj) {
    callback(err, obj);
  })
};

module.exports = Tpl;