// Web Site
var web = new Vue({
			el: '#portfolio_web',
			data: {
			Photos: []
		},
created: function() {
		var self = this;
		$.getJSON('/portfolio/common/js/portfolio_web.json', function(data) {
				self.Photos = data;
		});
	}
});

// Apps
var app = new Vue({
			el: '#portfolio_app',
			data: {
			Photos: []
		},
created: function() {
		var self = this;
		$.getJSON('/portfolio/common/js/portfolio_app.json', function(data) {
				self.Photos = data;
		});
	}
});