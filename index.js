function inserNumber(number){
	var exj=$("#resualt").val();
	$("#resualt").val(exj+number);
}
function clearR(){
	$("#resualt").val(" ");
}
function calculate(){
	var resual=eval($("#resualt").val());
		$("#resualt").val(resual);
}
function del(){
	var pV=$("#resualt").val();
	if(pV!=''){
		$("#resualt").val(pV.slice(0,-1));
	}
}
