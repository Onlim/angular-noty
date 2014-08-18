(function (angular, $) {
	return angular.module('notyModule', []).provider('noty', function () {
		var settings  = $.noty.defaults;

		return {
			settings: settings,
			$get: function () {
				var callNoty = function (newSettings) {
					return noty(newSettings || {});
				};

				return {
					show: function (message, type) {
						callNoty({text: message || settings.text, type: type || settings.type});
					},
					closeAll: function () {
						return $.noty.closeAll()
					},
					clearShowQueue: function () {
						return $.noty.clearQueue();
					}.bind(this)
				}
			}

		};
	})
}(angular, jQuery));