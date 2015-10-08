
function multiply(){ 
	if(arguments.length < 2 )
		throw new Error("invalid arguments"); 
	else { 
		var result = 0; 
		for(var i = 0; i<arguments.length; i++){ 
			result += arguments[i]; 
		} 
	return result; 
	} 
} 
 
function factorial (n) {
	if ( parseInt(n) == n ){
		if (n==0 || n==1) return 1;
	else{
		var result = 1;
   		for (var i = 1; i<= n; i++)
		result = result * i;
		return result;
		}
	}
else throw new Error("Invalid arguments");
}

function pow (a,b) {
	if (parseInt(b) == b && typeof a == "number" && b>=0){
		if (b==0) return 1;
		else {
			var result = a;
			for (var i = 1; i<b; i++){
				result = result*a;	
			}
			return result;
		}
	}
	else throw new Error("Invalid arguments");
}

function repeat(str, count, sep){
	if (typeof count == number){
		if (typeof sep == "undefined") sep = "";
		var result = "";
		for (var i=0; i<count-1; i++) {
			result += (str + sep);
		}
		result += str;
		return result;
	}
	else throw new Error("Invalid arguments");
}

function compare(a, b){
	for (var key in a){
		if (a[key] != b[key])
			return false;
	}
	return true;
}


function phoneList(name){
	var List = {};
	function add (name,num){
		List[name] = num;
		add.phoneListName = name;
		add.getAll = function() { return List };
		add.getForName = function(name) () { return List[name] };
		add.getForNum = function(num) {
			for (var key in List)
				if (List[key] == num)
					return key;
			}
		}
		add.getLength = function() {
			var count = 0;
			for (var key in List){
				if(this.win.hasOwnProperty(key)) count++;
			}
			return count;
		}
	return add;
}
