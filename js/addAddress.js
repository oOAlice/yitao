(function(){
	function addAddress(){
		this.showAddAddress();
	}
	
	addAddress.prototype.showAddAddress = function () {
		var oDivBox= $("<div></div>");
		var oDiv = $("<div></div>");
		$("body").append(oDivBox);
		oDivBox.append(oDiv);
		oDivBox.css({
			width:"100%",
			height:$(document).height()+"px",
			"background":"rgba(0,0,0,0.1)",
			"position":"absolute",
			"top":"0",
			"left":"0",
			"z-index":"999",
			"display":"block"
		})
		oDiv.css({
			"position":"absolute",
			"width":"600px",
			"height":"400px",
			"background":"#fff",
			"top":"50%",
			"left":"50%",
			"margin":"-200px 0 0 -300px",
			"box-sizing":"border-box"
		})
		var oH1 = $("<h1>新增收货地址</h1>");
		oH1.css({
			"width":"600px",
			"height":"30px",
			"line-height":"30px",
			"background":"#999999",
			"color":"#fff"
		})
		var closeBtn = $("<span>关闭</span>");
		closeBtn.appendTo(oH1);
		oDiv.append(oH1);
		var oDivDown = $("<div></div>");
		oDivDown.css({
			"width":"600px",
			"height":"400px",
			"padding-left":"100px",
			"box-sizing":"border-box"
		})
		oDiv.append(oDivDown);
		var city = $("<div>收货地址：<input type='text'/></div>");
		city.css({"line-height":"50px"})
		var	person = $("<p>收货人：<input type='text' class='person'/></p>");
		var fullAdress = $("<p>详细地址:<input type='text' class='fullAddress'/></p>");
		var telPhone = $("<p>电话号码：0000-<input type='text' class='telPhone'/></p>");
		var mobPhone = $("<p>手机电话：0000-<input type='text' class='mobPhone'/></p>");
		oDivDown.append(city);
		oDivDown.append(person);
		oDivDown.append(fullAdress);
		oDivDown.append(telPhone);
		oDivDown.append(mobPhone);
		oDivDown.children("p").css({
			"height":"50px",
			"line-height":"50px"
		})
		var btn = $("<button>保存收货地址</button>");
		oDivDown.append(btn);
		btn.click(function(){
			var obj = {
				person:$(".person").val(),
				fullAddress:$(".fullAddress").val(),
				telPhone:$(".telPhone").val()
				}
			this.showAddress(obj);
			oDivBox.css({"display":"none"})
		}.bind(this))
		
		
	}
	
	addAddress.prototype.showAddress = function (obj) {
		var oDiv = $("<div></div>");
		oDiv.css({
			"width":"100%",
			"height":"40px",
			"padding":"10px 20px",
			"border":"2px solid #FD4416",
			"box-sizing":"border-box",
			"margin-top":"10px"
		})
		var oP = $("<p>收件人："+obj.person+"  详细收货地址： "+obj.fullAddress+"  手机号码:"+obj.telPhone+"</p>");
		oP.css({
			"line-height":"20px",
			"float":"left"
		})
		var oSpan = $("<span>-</span>");
		oSpan.css({
			"float":"right",
			"border":"2px solid #FD4416",
			"border-radius":"50%",
			"display":"block",
			"width":"20px",
			"height":"20px",
			"color":"#FD4416",
			"font-weight":"bold",
			"text-align":"center",
			"box-sizing":"border-box"
		})
		oSpan.click(function(){
			oDiv.remove();
		})
		$(".address-list").append(oDiv);
		oDiv.append(oP);
		oDiv.append(oSpan);
	}
	
	window.addAddress = addAddress;
})()
