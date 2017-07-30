(function(){
	function Shoppingcar(superView){
		this.loadDate(superView);
		this.count = 0;
	}
	
	function ShoppingcarItem(obj,shoppingcar){
		this.Oul = $("<ul></ul>");
		var oCheckBox = $("<input type='checkbox'/>");
//		var self = this;
		oCheckBox.click(function() {
			console.log(this.checked);//this是个dom
			var pUl = $(this).parent().parent();
			var oPrice = parseInt(pUl.find("li.shoppingcar-li05").text());
			if (this.checked) {
//				console.log($(".shoppingcar-function .amount span").text())// 0
				var nowAmount = parseInt($(".shoppingcar-function .amount span").text());
				$(".shoppingcar-function .amount span").text(nowAmount+oPrice);
				
				//全选关联
				var checkNum = 1;
				pUl.siblings().not(".shoppingcar-head").find("li.shoppingcar-li01 input").each(function(){
					if (this.checked) {
						checkNum++
					}
					console.log(this.checked)
				})	
			}else{
				var nowAmount = parseInt($(".shoppingcar-function .amount span").text());
				$(".shoppingcar-function .amount span").text(nowAmount-oPrice);
			}
			console.log(checkNum)
			if (checkNum == pUl.siblings().not(".shoppingcar-head").length+1) {
					pUl.siblings().first().find("li.shoppingcar-li01 input").prop("checked", true)
			}else{
					pUl.siblings().first().find("li.shoppingcar-li01 input").prop("checked", false)
			}
		});
		

		var Oli01 = $("<li class='shoppingcar-li01'></li>");
		Oli01.append(oCheckBox);
		
		var Oli02 = $("<li class='shoppingcar-li02'><img src='"+obj.goods_thumb+"'><p>"+obj.goods_name+"</p></li>");
		var Oli03 = $("<li class='shoppingcar-li03'></li>");
		var newAddControlBtn = new AddControlBtn(Oli03);
		newAddControlBtn.textBtn.val(obj.goods_number);
//		Oli03.append(newAddControlBtn);
		var Oli04 = $("<li class='shoppingcar-li04'>"+obj.goods_price+"元</li>");
		var Oli05 = $("<li class='shoppingcar-li05'>"+obj.goods_price*obj.goods_number+"元</li>");
		var Oli06 = $("<li class='shoppingcar-li06'></li>");
		var delBtn = $("<button>删除</button>");
		Oli06.append(delBtn);
		Oli01.appendTo(this.Oul);
		Oli02.appendTo(this.Oul);
		Oli03.appendTo(this.Oul);
		Oli04.appendTo(this.Oul);
		Oli05.appendTo(this.Oul);
		Oli06.appendTo(this.Oul);
		//加减按钮
		newAddControlBtn.addBtn.click(function(){
			Oli05.text(newAddControlBtn.textBtn.val()*obj.goods_price);
			shoppingcar.amountPrice();//重置总计
		})
		newAddControlBtn.downBtn.click(function(){
			Oli05.text(newAddControlBtn.textBtn.val()*obj.goods_price);
			shoppingcar.amountPrice();
		})

		//删除事件
//		console.log(this.Oul);
		var self = this;
		delBtn.click(function(){
			self.Oul.has(this).remove();
			$.post(PRODUCT_HOST+ADDTO_SHOPPINGCAR+"?token="+localStorage.getItem("token"),{goods_id:obj.goods_id,number:0});
			shoppingcar.amountPrice();
		})
		
		//批量删除
		$(".dellot").click(function(){
//			console.log(oCheckBox.prop("checked"));
			if(oCheckBox.prop("checked")){
				oCheckBox.parent().parent().remove()
//				self.Oul.has(this).remove();//实现不了
				$.post(PRODUCT_HOST+ADDTO_SHOPPINGCAR+"?token="+localStorage.getItem("token"),{goods_id:obj.goods_id,number:0});
				shoppingcar.amountPrice();
			}
			
		})
	}
	
	
	
	
	Shoppingcar.prototype.loadDate = function (superView) {
		var self = this;
		console.log(localStorage.getItem("token"))
		$.get(PRODUCT_HOST+SHOW_SHOPPINGCAR,{token:localStorage.getItem("token")},function(result){
			console.log(result);
			self.showView(superView,result.data);
			
		})
	}
	
	Shoppingcar.prototype.showView = function(superView,data){
		var self = this;
		data.forEach(function(item){
			superView.append(new ShoppingcarItem(item,self).Oul);
//				console.log(superView);

		})
		this.allCheckClick();//调用全选
//		this.delLotClick(data);//调用批量删除
	}
	//console.log($(".shoppingcar-li01 input").length)
	
	
	/*全选按钮*/
	Shoppingcar.prototype.allCheckClick = function () {
		console.log($(".shoppingcar-li01 input").not('.checkAll input').length)
		var self = this;
		var count = 0;
		$(".checkAll input").click(function(){
			console.log($(".checkAll input").prop("checked"))
			/*dom.checked,选中为true，没选中为空
			$.prop(),选中为true，没选中为FALSE*/
			if ($(".checkAll input").prop("checked")) {
				$(".shoppingcar-li01 input").not('.checkAll input').each(function(){
					this.checked = "ture";
				})
			}else{
				console.log("else")
				$(".shoppingcar-li01 input").not('.checkAll input').each(function(){
					this.checked = "false";
					this.checked = "";
					console.log(this)
				})
			}
			self.amountPrice();
		})
		
	}
	
	
	
	/*总计方法*/
	Shoppingcar.prototype.amountPrice = function(){
		var count = 0;
		console.log($(".shoppingcar-li05").not('.shoppingcar-head .shoppingcar-li05').length)
		$(".shoppingcar-li05").not('.shoppingcar-head .shoppingcar-li05').each(function(){
			var priceThis = this;
//			console.log($(this).siblings(".shoppingcar-li01").children("input").prop("checked"))
			if ($(this).siblings(".shoppingcar-li01").children("input").prop("checked")) {
				count = count + parseInt($(priceThis).text());
			}
			
		});
		$(".shoppingcar-function .amount span").text(count);
	}
	

	
	//批量删除（拿不到ID）
//	Shoppingcar.prototype.delLotClick = function(data){
//		var self = this;
//		$(".dellot").click(function(){
//			$(".shoppingcar-li01 input").not('.checkAll input').each(function(){
//				if (this.checked) {
//					$(this).parent().parent().remove();
//					console.log(data.goods_id)
//					$.post(PRODUCT_HOST+ADDTO_SHOPPINGCAR+"?token="+localStorage.getItem("token"),{goods_id:data.goods_id,number:0},function(result){
//						console.log(result)
//					});
//					self.amountPrice();
//				}
//			})
//		})
//	}
	
	
	
	
	
	window.Shoppingcar = Shoppingcar;
})();
