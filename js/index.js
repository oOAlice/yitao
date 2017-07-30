function init(){
	//nav
/*	new Naviget().showView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav"),function(){
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
*/		

	//登录按钮
//	$(".header-top-login").click(function(){
//		console.log("点了")
//		new Login().showLogin(function(user){
//			$(".header-top-menu ul li").first().html("<a href='#'>"+localStorage.getItem("username")+"</a><a class='log_off'>退出登录</a>");
//		});
//	})

	//轮播图
	new Course(["image/header/hot1.jpg","image/header/hot2.jpg"],200,340,$(".left-course")).setTime(1000,3000).twoBtn();
	new Course(["image/header/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg","image/header/TB1jT3mRVXXXXXnXXXXXXXXXXXX-750-340.jpg"],750,340,$(".center-course")).setTime(1500,4000);

	//Goods
	new Good(PRODUCT_HOST+GOODS,null,$(".goods-container"),function(goodId){
		console.log(goodId);
		window.open("detail.html?goodId="+goodId);
	});
}
init();