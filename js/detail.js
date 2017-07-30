(function(){
	var tempgood =decodeURI(window.location.href) ;
	var goodId = /goodId=\d*&*/.exec(tempgood)[0].slice(7);//得到id
//	console.log(localStorage.getItem("goodId"));
	
//	var goodId = localStorage.getItem("goodId");
	function Detail (url,superView) {
		this.goodId = goodId;
		console.log(this.goodId);
		this.getDate(url,{goods_id:this.goodId},superView);
		console.log(superView)
	}
	
	//得到数据
	Detail.prototype.getDate = function(url,id,superView){
		var self = this;
		$.get(url,id,function(result){
			console.log(result.data[0]);
			if(result.code == 0){
				self.showView(result.data[0],superView);
			}
		})
		
	}
	
	
	//得到视图
	Detail.prototype.showView = function(data,superView){
		console.log(data.goods_name)
		var divLeft = $("<div class='good_leftDiv'><img src='"+data.goods_thumb+"'/></div>");
		var divRight = $("<div class='good_rightDiv'></div>");
		superView.append(divLeft);
		superView.append(divRight);
		var p_title = $("<p class='good_title'>"+data.goods_name+"</p>");
		var p_desc = $("<p class='good_desc'>"+data.goods_desc+"</p>");
		var p_price = $("<p class='good_price'> ￥"+data.price+"</p>");
		//加减按钮
		var p_addControl = $("<p class='good_addControl'></p>");
		divRight.append(p_title);
		divRight.append(p_price);
		divRight.append(p_desc);
		divRight.append(p_addControl);
		var newAddControlBtn = new AddControlBtn(p_addControl);
		//购买按钮
		var Odiv = $("<div class='buy_good'></div>");
		var buyBtn = $("<button>立即购买</button>");
		var addcarBtn = $("<button>加入购物车</button>");
		divRight.append(Odiv);
		Odiv.append(buyBtn);
		Odiv.append(addcarBtn);
		
		//结算按钮
		buyBtn.click(function(){
			window.open("pay.html");
		})
		//加入购物车按钮
		addcarBtn.click(function(){
//			localStorage("",)
			$.post(PRODUCT_HOST+ADDTO_SHOPPINGCAR+"?token="+localStorage.getItem("token"),{goods_id:data.goods_id,number:newAddControlBtn.textBtn.val()});
			window.open("shoppingcar.html");
//			console.log(newAddControlBtn.textBtn.val());
			console.log(data.goods_id)
			
		})
		
	}
	

		
	window.Detail = Detail;
})()
