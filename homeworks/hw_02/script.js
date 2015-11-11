/** 
* Задание 1. Создать функцию toGetParams, формирующую из 
* объекта строку параметров для GET-запроса. 
* 
* @example 
* var params = toGetParams({p1: 1, p2: 'hello'}); // p1=1&p2=hello 
* 
* @param {Object} obj 
* Объект, из которого будут формироваться строка параметров. 
* 
* @return {String} строка параметров. 
*/ 
function toGetParams() { 
	var result = ""; 
	var arg = arguments[0]; 
	if (Array.isArray(arg) || typeof arg == 'string') { 
		return ""; 
	} 
	for (var i in arg) { 
		if (Array.isArray(arg[i])) { 
			return ""; 
	} 
		else { 
			result += i + '=' + arg[i] + '&'; 
		} 
	} 
	result = result.slice(0, -1); 
	return result; 
} 
/** 
* Задание 2. Создать функцию formatUrl, формирующую из базового url и объекта 
* строку GET-запроса. 
* 
* @example 
* var getUrl = formatUrl('http://example.com', {a: 1, b: 2}); // 'http://example.com?a=1&b=2' 
* 
* @param {String} url 
* Базовый url 
* 
* @param {Object} obj 
* Объект, из которого будут формироваться строка параметров. 
* 
* @return {String} сформированный url. 
*/ 
function formatUrl() { 
	var result = ""; 
	if (arguments.length == 0) { 
		return ""; 
	} 
	if (typeof arguments[0] != 'string') { 
		return ""; 
	} 
	if (arguments.length == 1) { 
		return arguments[0]; 
	} 
	var params = toGetParams(arguments[1]); 
	if (params == "") { 
		return ""; 
	} 
	result += arguments[0] + '?' + params; 
	return result; 

} 
/** 
* Задание 3. Создать функцию objectFromUrl, формирующую из базового url 
* 
* 
* @example 
* var obj = objectFromUrl('http://example.com/homeworks/hw_01?task=03&team=k..'); 
* obj == { 
* protocol:'http', 
* host:'example.com', 
* port:'', 
* pathname:'/homeworks/hw_01', 
* hash:'#jsjs', 
* originQuery:'?task=03&team=kkk', 
* query:{ 
* 'task':'01', 
* 'team':'kkk' 
* } 
* 
* @param {String} url 
* Базовый url 
* 
* @return {Object} сформированный obj. 
*/ 
function objectFromUrl(url) { 
	var match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/); 
	var obj = {}; 
	obj["protocol"] = match[1]; 
	obj["host"] = match[2]; 
	obj["port"] = match[4]; 
	obj["pathname"] = match[5]; 
	obj["hash"] = match[7]; 
	obj["originQuery"] = match[6]; 
	var query2 = {}; 
	var arr = (obj.originQuery.substr(1)).split('&'); 
	for (var i = 0; i < arr.length; i++) { 
		var param = arr[i].split('='); 
		query2[param[0]] = param[1]; 
	} 
	obj["query"] = query2; 
	return obj; 
}
