var testJson = {
	"name":"hello",
	"age":"22",
	"sex":"female",
	"hobby":["football","moveie"]
}
function jsonFormat (json) {
	if (typeof json != 'string') {
		json = JSON.stringify(json);
	}
	var str = '';
	str = json.replace(/([\{\}])/g,"\r\n$1\r\n");// {}左右加标记
	str = str.replace(/([\[\]])/g,"\r\n$1\r\n");// []
	str = str.replace(/(\,)/g,"$1\r\n");// 逗号后面标记
	str = str.replace(/(\r\n\r\n)/g,"\r\n");//删除多余的换行
	str = str.replace(/\:/g,": ");
	var strSlice = str.split("\r\n");
	var result = '';
	var PD = '&nbsp;&nbsp;';
	var pad = 0;
	strSlice.forEach(function (value,index) {
		var indent = 0,
		    i = 0,
		    padding = '';
		if (value.match(/\{$/) || value.match(/\[$/)) {
			indent = 1;
		}
		else if (value.match(/\}/) || value.match(/\]/)) {
			pad -= 1;
		}
		else {
			indent = 0;
		}
		for(i = 0;i < pad;i++) {
			padding += PD;
		}
		result += padding + '<span>'+value+'</span><br/>';
		pad += indent;

	});
	console.log(result);
	return result;
}
var text = jsonFormat(testJson);
var o = document.getElementById('test');
o.innerHTML = text;