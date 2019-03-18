/**
 * Created By Center on 2018/2/3
 **/
(function(root, factory){
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if(typeof(module) !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    var _previousRoot = root.jsShortId;
	var self = factory();
    self.noConflict = function() {
      root.jsShortId = _previousRoot;
      return self;
    };
    root.jsShortId = self;
  }	
}(this, function(){
	var JsShortId = function () {
	this.symbols = [
		'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
		'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
		'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	}
	JsShortId.prototype = {
	gen: function (len) {
		var _len = len || 8;
		_len = _len < 8?8:_len;
		var n = (new Date()).getTime();
		var conversion = n.toString(36);
		_len -=conversion.length;
		while(_len){
			conversion += this.symbols[Math.floor(Math.random() * 62)];
			_len--;
		}
		return conversion;
	},
	getDate:function (sId,fmt) {
		if(sId.length < 8){
			return "";
		}
		var timesId = sId.slice(0,8);
		var times = new Date(parseInt(timesId,36));
		var o = {
		"M+": times.getMonth() + 1, //月份
		"d+": times.getDate(), //日
		"h+": times.getHours(), //小时
		"m+": times.getMinutes(), //分
		"s+": times.getSeconds(), //秒
		"q+": Math.floor((times.getMonth() + 3) / 3), //季度
		"S": times.getMilliseconds() //毫秒
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (times.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
	}

};
return {
	  gen: function(opt) {
		return new JsShortId().gen(opt);
	  },
	  getDate: function(sId,fmt) {
		return new JsShortId().getDate(sId,fmt);
	  },
	  uuid:function(){
		return new JsShortId().gen(15);
	  }
	};
}));
 