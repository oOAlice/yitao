(function(){
	
	//创建购物车列表
	new Shoppingcar($(".shoppingcar-goodlist"));
	//购物车功能
	var btnsDiv = $(".shoppingcar-deal");
	var delLotBtn = $(".dellot");
	var amount = $(".amount")
	var submitBtn = $(".submitbtn");
	
	//提交订单
	$(".submitbtn").click(function(){
		window.open("pay.html");
	})
	
	

	

	
	
})()
