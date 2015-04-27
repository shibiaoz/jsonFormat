var jsonApp = function  (json) {
	if (typeof json != 'string') {
		json = JSON.stringify(json);
	}
	var str = '';
	var reg = null;
	var sliceArr = [];
	str = json.replace(/(\s)/g,"");//去掉所有的空白字符
	reg = /([\{\}])/g;
	str = str.replace(reg,"\r\n$1\r\n");
	reg = /([\[\]])/g;
	str = str.replace(reg,"\r\n$1\r\n");
	reg = /(\,)/g;
	str = str.replace(reg,"$1\r\n");
	reg = /(\r\n\r\n)/g;
	str = str.replace(reg,"");
	reg = /(\:)/g;
	str = str.replace(reg," $1 ");
	sliceArr = str.split("\r\n");
	var result ='';
	var pad = 0;
	var PAD = '&nbsp;&nbsp;';
	var indent = 0;
	sliceArr.forEach(function (value) {
		var i = 0;
		var padding = '';
		if (value.match(/\{$/) || value.match(/\[$/)) {
			indent = 1;
		}
		else if (value.match(/\}$/) || value.match(/\]$/)) {
			if (pad!=0) {
				pad -= 1;
			}
		}
		else {
			indent = 0;
		}
		for(i = 0;i<pad;i++){
			padding += PAD;
		}
		pad += indent;
		result += padding + value + '<br/>';
	});

	console.log(result);
	return result;
}

