/**
 *
 */



$(function(){

	$('#loginBtn').click(function(){
		loginCheck();

	});



});



function loginCheck(){

	if($('#loginEmail').val() == "" || $('#loginPwd').val() == ""){
		alert("이메일 또는 비밀번호를 입력 해 주십시오.");
		return;
	}
	
	$("#loginFrom").submit();
}
