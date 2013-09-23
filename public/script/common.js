var common = {
	setCenter: function(obj, target) {
		
		if(!obj && !target) return;

		var left = (target.width() - obj.width()) / 2
			, top = (target.height() - obj.height()) / 2;

		obj.css({top : top, left : left});

		return common;
	}
};