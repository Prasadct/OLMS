
$(function alreadyLoggedIn(){
	$.post(
		"/user-login-status.json",
		function(d,s,x){
			if( d.status == "true")
				showPanel()
			else
				showForm()
		},
		"json"
	);
})

function checkLogin(user,pass){
	$.post(
		"/user-login.json",
		$("#login-form").serialize(),
		function(d,s,x){
			if( d.id != 0)
				showPanel()
			else 
				showError()
		},
		"json"
	);
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

function showForm(){
	$("#login-spinner-wrapper").hide();
	$("#login-form-wrapper").show();
	$("#login-wrapper").fadeIn(1500);
}

function showPanel(){
	$("#login-wrapper").fadeOut(function(){
		$("#panel-wrapper").delay(500).fadeIn(function(){
			
		})
	})
}

$("#login-form").submit(function(e){
	$("#login-form-wrapper").slideUp(function(){
		$("#login-spinner-wrapper").fadeIn(function(){
			var user = $("#login-user").val()
			var pass = $("#login-pass").val()
			checkLogin(user,pass);
		})
	})
	return false
})

$("#logout-form").submit(function(e){
	$("#panel-wrapper").slideUp(function(){
		$.post(
			"/user-logout.json",
			function(d,s,x){
				if( d.status == "true")
					showForm()
				else
					showPanel()
			},
			"json"
		);
	})
	return false
})