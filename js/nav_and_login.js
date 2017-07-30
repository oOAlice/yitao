	new Naviget().showView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav"),function(){
		console.log("点了nav");
	});

	//登录
	if (localStorage.getItem("username")){
			//退出登录
			new Login().showLogOff(function(){
				$(".header-top-menu ul li").first().html("<a href='#'>"+localStorage.getItem("username")+"</a><a class='log_off'>退出登录</a>");
			});
		}else{
			$(".header-top-login").click(function(){
				console.log("点了")
				new Login().showLogin(function(user){
					$(".header-top-menu ul li").first().html("<a href='#'>"+localStorage.getItem("username")+"</a><a class='log_off'>退出登录</a>");
				});
			})
		}