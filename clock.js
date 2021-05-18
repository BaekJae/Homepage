function Clock(){
	var clock = document.getElementById("clock");     
	var date = new Date();
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var chour = addZero(date.getHours(),2);
	var cmin = addZero(date.getMinutes(),2);
	var csec = addZero(date.getSeconds(),2);
	var ap = 'AM';
	if(chour > 12){
		ap = 'PM';
		chour = addZero(chour-12,2);
	}
	else if (chour == 12){
		ap='PM';
	}
	
	clock.innerHTML = year + "년" + month + "월" + day + "일"+ " " + chour+":"+cmin+":"+csec+" "+" <span style='font-size:30px;'>" +ap+"</span>";
	setTimeout("Clock()",1000);
}
function addZero(num,digit){
	var zero='';
	num = num.toString();
	if(num.length<digit){
		for(i=0; i<digit-num.length; i++){
			zero += '0';
		}
	}
	return zero+num;
}
