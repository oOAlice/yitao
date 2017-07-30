(function(){
	function Course(picData,width,height,superView){
		showView(picData);
	}
	function CourseItem(picPath,width,height){
		this.image = $("<img src='"+picPath+"'/>");
		this.image.css({
			width:width+"px",
			height:height+"px"
		})
	}
	//
	Course.prototype.showView = function(picData,width,height,superView){
		var courseBox = $("<div><div>");
		courseBox.css({
			width:width+"px",
			height:height+"px"
		});
		var courseUl = $("<ul></ul>");
		courseBox.append(courseUl);
		this.picData.forEach(function(picPath,width,height){
			courseUl.append(new CourseItem(picPath,width,height).image);
		})
		superView.append(courseBox);
		console.log("showView")

	}

	//定时器，传delay时间
	Course.prototype.setTime = function (delay) {

		return this;
	}
	//上下页按钮
	Course.prototype.twoBtn = function () {
		
		return this;
	}
	//小圆点
	Course.prototype.point = function () {
		
		return this;
	}





	window.Course = Course;




})()
