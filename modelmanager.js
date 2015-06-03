var app = angular.module('MyLittlePony');

app.service('modelManager', function(modelService) {

	this.getPrePopPonies = function() {
		return modelService.prePopulatedPonies;
	};

	this.getFavPonies = function() {
		return modelService.favPonies;
	};

	this.getFavFlicks = function() {
		return modelService.favFlicks;
	}

	this.addFavPony = function(ponyObj, success, error) {
		
		var valid = ponyValidator(ponyObj);
		
		if (valid) {
			modelService.favPonies.unshift(ponyObj);
			success();
		} else {
			error("Make sure you fill out all fields!");
		}

	};

	this.deleteFavPony = function(index, success, error) {
		
		if (index >= 0) {
			var ponyArray = modelService.favPonies;
			ponyArray.splice(index, 1);
			success();
		} else {
			error("Error occurred!");
		}

	};

	this.addFavFlick = function(flickObj, success, error) {
		var validObj = flickValidator(flickObj);

		if (validObj) {
			modelService.favFlicks.unshift(flickObj);
			success();
		} else {
			error("Make sure you fill out all fields and enter a valid Youtube video URL!")
		}
	};

	this.deleteFavFlick = function(index, success, error) {

		if (index >= 0) {
			var flickArray = modelService.favFlicks;
			flickArray.splice(index, 1);
			success();
		} else {
			error("Error occurred!");
		}
	}

	var ponyValidator = function(obj) {

		var validProp = function(obj) {
			if (obj.name && obj.img && obj.userName) {
				return true;
			} else {
				return false;
			}
		};

		var hasNumbers = function(string) {
			return /\d/.test(string); //\d is short for digit [0-9]. The test() method tests for a match in a string.
		};

		var longEnough = function(string) {
			return string.length > 3;
		};
		
		if (obj && validProp(obj) && !hasNumbers(obj.name) && longEnough(obj.name)) {
			return true;
		} else {
			return false;
		}

	};

	var flickValidator = function(obj) {

		var validProp = function(obj) {
			if (obj.title && obj.video && obj.userName) {
				return true;
			} else {
				return false;
			}
		};

		var validUrl = function(string) {

			if (string.indexOf("youtu") > -1 && string.indexOf("v=") > -1) {

				var index = string.indexOf("v=") + 2; 
				var end = string.substr(index);
				string = "https://www.youtube.com/embed/" + end;
				return string;

			} else if ("youtu" && "/") {

				var index = string.lastIndexOf("/") + 1;
				var end = string.substr(index);
				string = "https://www.youtube.com/embed/" + end;
				return string;

			} else {
				return false;
			}

		};

		if (obj && validProp(obj) && validUrl(obj.video)) {
        	obj.video = validUrl(obj.video);
			return obj;
		} else {
			return false;
		}

	};
	

});