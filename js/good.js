(function(){
	function Good(url,parm,superView,action){
		this.loadDate(url,parm,superView,action);
	}
	//创建单个good对象
	function GoodItem(obj){
//		console.log("obj",obj.goods_id);
		this.goodId = obj.goods_id;
		var space = 35;
        var colume = 5;
		var width = (1150-space*(colume-1))/colume;
		this.item = $("<div class='good-box'></div>");
		this.name = $("<p class='good-name'>"+obj.goods_name+"</p>");
		this.other = $("<p class='good-container-imgbox'><img src='"+obj.goods_thumb+"' width = '"+width+"px'/></p><p class='good-price'>￥："+obj.price+"</p><p class='good-describe'>"+obj.goods_desc+"</p>")
		this.item.append(this.name);
		this.item.append(this.other);
		this.item.css({
			"margin": "0 "+space+"px"+" 20px 0"
		})
		
	}
//	GoodItem.prototype.myclick = function(callback){
//		// this.item.on("click",this,callback);
//		var self = this;
//		console.log("**",self.goodId);
//		// this.item.click(function(){
//			callback(self.goodId);
//		});
//		return this;
//	}
	//获取数据
	Good.prototype.loadDate = function(url,parm,superView,action){
		var self = this;
		$.get(url,parm,function(result){
			console.log(result);
			if (result.code == 0) {
				self.showGoodsView(result.data,superView,action);
			}
						
		})
		return this;
	}
	//显示视图
	Good.prototype.showGoodsView = function(goods,superView,action){
		// console.log(action);
		var count = 1;
		goods.forEach(function(data){
			var newGoodItem = new GoodItem(data);
			var nowItem = newGoodItem.item;
			superView.append(nowItem);		
			console.log(nowItem);
			nowItem.click(function() {
				action(newGoodItem.goodId);
				
			});
			
			if (count++%5==0) {
				nowItem.css({"margin-right":0})	;
			}
		});
		return this;
	}


	
	window.Good = Good;
})()