var $ = jQuery.noConflict();
(function(){
	
	function Login(){
//		if (localStorage.getItem("username")){
//			this.showLogOff();
//		}else{			
//			this.showLogin(success);
//		}
//		console.log(success);
	}
	
	
	Login.prototype.showLogin = function(success){
		this.loginBox = $("<div></div>");
		this.loginBox.css({
			width:"100%",
			height:$(document).height()+"px",
			"background":"rgba(0,0,0,0.1)",
			"position":"absolute",
			"top":"0",
			"left":"0",
			"z-index":"99"
		})
		this.loginContainer = $("<div class='loginContainer'></div>");
		var closeButton = $("<button class='login-closeBtn'>关闭</button>");
		var usernameInput = $("<p class='usernameInput'><input type='text' placeholder='用户名'></p>");
		var passwordInput = $("<p class='passwordInput'><input type='text' placeholder='密码'></p>");
		var LoginButton = $("<p><button class='login-loginBtn'>登录</button></p>");
		this.loginContainer.css({
			"width":"400px",
			"height":"300px",
			"border":"5px solid yellow",
			"background":"#FA8002",
			"position":"absolute",
			"top":"200px",
			"left":"50%",
			"margin-left":"-200px",
			"box-sizing":"border-box"
		});
		closeButton.css({
			"float":"right",
			"color":"white",
			"padding":"5px"
		});
		var inputCss = {
			"padding":"20px 0",
			"width":"300px",
			"margin":"0 auto",
			"text-align":"center"
		};
		usernameInput.css(inputCss);
		passwordInput.css(inputCss);
		LoginButton.css(inputCss);
		$("body").append(this.loginBox);
		(this.loginBox).append(this.loginContainer);
		this.loginContainer.append(closeButton);
		this.loginContainer.append(usernameInput);
		this.loginContainer.append(passwordInput);
		this.loginContainer.append(LoginButton);	

		this.closeClick();
		this.loginClick(success);
		return this;
	}
	//关闭
	Login.prototype.closeClick = function(){
		var self = this;
		// console.log(this.loginContainer.children(".login-closeBtn"));
		this.loginContainer.children(".login-closeBtn").click(function(){
			self.loginContainer.slideUp(500,function(){
				self.loginBox.remove();
			});
			
		})
	}
	Login.prototype.loginClick =function(success){
		// console.log(success)
		var self = this;
		console.log(2);
		console.log($(".loginContainer p .login-loginBtn"))
		$(".loginContainer p .login-loginBtn").click(function(){
			// console.log($(".loginContainer .usernameInput input").val());
			$.post(
				PRODUCT_HOST+LOGIN,
				{status:"login",username:$(".loginContainer .usernameInput input").val(),password:$(".loginContainer .passwordInput input").val()},
				function(data){
					console.log(data);
					console.log(data.data.token);
					
					if (data.code==0) {
						localStorage.setItem("token",data.data.token);
						localStorage.setItem("username",data.data.username);
						success(data.data);
						self.loginContainer.slideUp(500,function(){
							self.loginBox.remove();
						});
						
					} else {
						alert(data.message);
					}
				}
			)
		})
	}
	
	
	
	Login.prototype.showLogOff = function(){
		$(".header-top-menu ul li").first().html("<a href='#'>"+localStorage.getItem("username")+"</a><a class='log_off'>退出登录</a>");
		
		$(".header-top-menu ul li .log_off").click(function(){
			console.log("退出");
			localStorage.clear();
			$(".header-top-menu ul li").first().html("<a href='#' class='header-top-login'>亲！请登录</a><a href='#' class='register'>或注册</a>");
//			new Login().showLogin(success);
			$(".header-top-login").click(function(){
				console.log("点了")
				new Login().showLogin(function(user){
					$(".header-top-menu ul li").first().html("<a href='#'>"+localStorage.getItem("username")+"</a><a class='log_off'>退出登录</a>");
				});
			})
		})
		
		return this;
	}
	
	
	
	
	
	window.Login = Login;
})()