(function(){
	function Course(picData,width,height,superView){
		this.showView(picData,width,height,superView);
		this.width = width;
		this.picData = picData;
	}
	function CourseItem(picPath,width,height){
		this.image = $("<img src='"+picPath+"'/>");
		this.image.css({
			width:width+"px",
			height:height+"px",
			"float":"left"
		})
		console.log("courseItem")
	}
	//
	Course.prototype.showView = function(picData,width,height,superView){
		this.courseBox = $("<div><div>");
		this.courseBox.css({
			width:width+"px",
			height:height+"px",
			"position":"relative",
			"overflow":"hidden"
		});
		this.courseUl = $("<ul></ul>");
		this.courseUl.css({
			width:width*picData.length+"px",
			height:height+"px"
		})
		this.courseBox.append(this.courseUl);
		var self = this;
		picData.forEach(function(picPath){
			self.courseUl.append(new CourseItem(picPath,width,height).image);
		})
		superView.append(this.courseBox);
		console.log("showView");

	}

	//定时器，传delay时间
	Course.prototype.setTime = function (spead,delay) {
		var self = this;
		var timer = setInterval(function(){
			self.courseUl.animate({marginLeft:-self.width+'px'},spead,function(){
				self.courseUl.css({'margin-left':'0px'}).find('img:first').appendTo(self.courseUl);
			})
		},delay);
		self.courseBox.hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
			self.courseUl.animate({marginLeft:-self.width+'px'},spead,function(){
				self.courseUl.css({'margin-left':'0px'}).find('img:first').appendTo(self.courseUl);
			})
			},delay);
		});
		return this;
	}
	//上下页按钮
	Course.prototype.twoBtn = function () {
		var self = this;
		var preBtn = $("<button><</button>");
		var nextBtn = $("<button>></button>");
		this.courseBox.append(preBtn);
		this.courseBox.append(nextBtn);
		preBtn.css({
			width:"20px",
			height:"20px",
			"position":"absolute",
			"left":"10px",
			"top":"50%",
			"border":"1px solid #eeeeee",
			"border-radius":"50%",
			"background":"rgba(255,255,255,1)",
			"color":"#eeeeee"
		});
		nextBtn.css({
			width:"20px",
			height:"20px",
			"position":"absolute",
			"right":"10px",
			"top":"50%",
			"border":"1px solid #eeeeee",
			"border-radius":"50%",
			"background":"rgba(255,255,255,1)",
			"color":"#eeeeee"
		});
		nextBtn.click(function(){
			self.courseUl.animate({marginLeft:-self.width+'px'},function(){
				self.courseUl.css({'margin-left':'0px'}).find('img:first').appendTo(self.courseUl);
			})
		});
		preBtn.click(function(){
			self.courseUl.css({'margin-left':-self.width+'px'}).find('img:last').prependTo(self.courseUl);
			self.courseUl.animate({marginLeft:0+'px'})
		})
		return this;
	}

	//小圆点
	// function pointItem() {
	// 	this.pointLi = $("<li></li>");
	// 	this.pointLi.css({
	// 		width:"20px",
	// 		height:"20px",
	// 		"border":"1px solid #eeeeee",
	// 		"border-radius":"50%",
	// 		"background":"rgba(255,50,0,0.3)",
	// 		"float":"left",
	// 		"margin-left":"20px"
	// 	})
	// 	// console.log(5)
	// }

	// Course.prototype.pointView = function () {
	// 	var self = this;
	// 	var pointUl = $("<ul></ul>");
	// 	pointUl.css({
	// 		position:'absolute',
	// 		left:'45%',
	// 		bottom:'10%',
	// 		'z-index':'999'
	// 	})
	// 	this.courseBox.append(pointUl);
	// 	console.log(this.picData.length)
	// 	for (var i = 0; i < this.picData.length; i++) {
	// 		// console.log(new pointItem().pointLi)
	// 		pointUl.append(new pointItem().pointLi);
	// 	}
	// 	return this;

	// }





	window.Course = Course;




})()
