(function(){
	function AddControlBtn(superView,obj){
		this.showView(superView);
	}
	
	AddControlBtn.prototype.showView = function (superView) {
		this.addBtn = $("<input type='button' value='+' class='addBtn'>/");
		this.textBtn = $("<input type='text' value='1' class='textInput'/>");
		this.downBtn = $("<input type='button' value='-' class='downBtn'>/");
		superView.append(this.addBtn);
		superView.append(this.textBtn);
		superView.append(this.downBtn);
		this.addBtn.click(function(){
			var num = parseInt(this.textBtn.val())+1;
			num<=10?num:num=10;
			this.textBtn.val(num);
		}.bind(this))
		this.downBtn.click(function(){
			var num = parseInt(this.textBtn.val())-1;
			num>=1?num:num = 1;
			this.textBtn.val(num);
		}.bind(this))
		
	}
	
	
	window.AddControlBtn = AddControlBtn;
})()



