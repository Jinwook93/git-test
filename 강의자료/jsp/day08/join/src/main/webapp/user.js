/**
 *  회원가입 validation check
 */
function sendit(){
	let frm = document.joinForm;
	let userid = frm.userid;
	let userpw = frm.userpw;
	let userpw_re = frm.userpw_re;
	let username = frm.username;
	let userphone = frm.userphone;
	
	// 아이디 빈값체크 	-> alert 아이디를 입력하세요!
	if( userid.value == "" ){
		alert("아이디를 입력하세요!");
		userid.focus();
		return false;
	}
	
	// 아이디 길이체크	-> alert 아이디는 5자리 이상, 16자리 미만으로 작성
	if( userid.value.length <= 4 || userid.value.length >= 16 ){
		alert("아이디는 5자리 이상, 16자리 미만으로 작성해 주세요!");
		userid.focus();
		return false;
	}
	
	// 비밀번호 빈값체크	-> alert 비밀번호를 입력하세요!
	if( userpw.value == "" ){
		alert("비밀번호를 입력하세요!");
		userpw.focus();
		return false;
	}
	
	// 비밀번호 자리체크 	-> alert 비밀번호는 8자리 이상으로 입력하세요
	if( userpw.value.length < 8 ){
		alert("비밀번호는 8자리 이상으로 입력하세요!");
		userpw.focus();
		return false;
	}
	
	// 비밀번호=비밀번호확인-> alert 비밀번호와 비밀번호확인이 일치하지 않습니다!
	if( userpw.value != userpw_re.value ){
		alert("비밀번호와 비밀번호확인이 일치하지 않습니다!");
		userpw_re.focus();
		return false;
	}
	
	// 이름 빈값체크		-> alert 이름을 입력하세요!
	if( username.value == "" ){
		alert("이름을 입력하세요!");
		username.focus();
		return false;
	}
	
	// 휴대폰번호 빈값체크	-> alert 휴대폰번호를 입력하세요!
	if( userphone.value == "" ){
		alert("휴대폰번호를 입력하세요!");
		userphone.focus();
		return false;
	}
	
	// submit();
	frm.submit();
}
 
/*
	로그인 validation check
 */
function loginit(){
	let frm = document.frm;
	let userid = frm.userid;
	let userpw = frm.userpw;
	
	// 아이디 빈값처리
	if( userid.value == "" ){
		alert("아이디를 입력해주세요");
		userid.focus();
		return false;
	}
	
	// 패스워드 빈값처리
	if( userpw.value == "" ){
		alert("패스워드를 입력해주세요");
		userpw.focus();
		return false;
	}
	
	frm.submit();
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 