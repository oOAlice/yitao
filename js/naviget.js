function Naviget(){
	// this.showView();
}

function NavigetItem(obj){
	obj = obj||{};
	this.name = obj.cat_name;
	this.id = obj.cat_id;
	this.item = $("<li>"+this.name+"</li>");
}

NavigetItem.prototype.navClick = function(callback){
	this.item.on("click",this,callback)
	return this;
}

Naviget.prototype.showView = function(url,superView,callback){
	$.get(url,function(result){
		console.log(result);
		if (result.code==0) {
			result.data.forEach(function(obj){
				superView.append(new NavigetItem(obj).navClick(callback).item);
			})
		}
	})
}

