
function checkLogin(user,pass){
	if(user=="admin" && pass=="password") return true
	else return false
}

function showError(){
	$("#login-spinner-wrapper").fadeOut(function(){
		$("#login-error-wrapper").show()
		$("#login-error").show()
		$("#login-form-wrapper").slideDown(function(){
			$("#login-error").delay(500).fadeOut(500,"swing",function(){
				$("#login-error-wrapper").slideUp()
			});
		});
	})
}

function showPanel(){
	$("#login-spinner-wrapper").fadeOut(function(){
		// Login Successful
	})
}

$("#login-form").submit(function(e){
	$("#login-form-wrapper").slideUp(function(){
		$("#login-spinner-wrapper").fadeIn(function(){
			var user = $("#login-user").val()
			var pass = $("#login-pass").val()
			if(checkLogin(user,pass)){
				showPanel()
			}else{
				showError()
			}
		})
	})
	return false
})