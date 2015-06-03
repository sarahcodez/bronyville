var app = angular.module('MyLittlePony', ['ngSanitize']);

app.controller('mainCtrl', function($scope, $sce, modelManager) {

	$(document).ready(function() {

		$('.scrollbox').enscroll({
	    horizontalScrolling: true,
	    horizontalTrackClass: 'horizontal-track2',
	    horizontalHandleClass: 'horizontal-handle2'
		});
		//enscroll jquery plugin for scrollbars: http://enscrollplugin.com/#demos

	});

	$scope.prePopulatedPonies = modelManager.getPrePopPonies();
	$scope.favPonies = modelManager.getFavPonies();
	$scope.favFlicks = modelManager.getFavFlicks();

	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	} 
	//Fixes iFrame/ng-src interpolate problem. See: https://groups.google.com/forum/#!topic/angular/E4UCjMkePao, http://plnkr.co/edit/tYq22VjwB10WmytQO9Pb?p=preview

	$scope.userPony = {};
	$scope.userFlick = {};
	$scope.errorPic = "";
	$scope.errorFlick = "";
	$scope.errorPicIsTrue = false;
	$scope.errorFlickIsTrue = false;

	$scope.addFavPony = function() {
		
		modelManager.addFavPony($scope.userPony, onEditPony, displayPicError);
		$scope.userPony = {};
	};

	$scope.deleteFavPony = function(index) {
		modelManager.deleteFavPony(index, onEditPony, displayError);
	};

	$scope.addFavFlick = function() {

		modelManager.addFavFlick($scope.userFlick, onEditFlick, displayFlickError);
		$scope.userFlick = {};
	};

	$scope.deleteFavFlick = function(index) {
		modelManager.deleteFavFlick(index, onEditFlick, displayError);
	};

	var onEditPony = function() {
		$scope.errorPicIsTrue = false;
		$scope.favPonies = modelManager.getFavPonies();
	};

	var onEditFlick = function() {
		$scope.errorFlickIsTrue = false;
		$scope.favFlicks = modelManager.getFavFlicks();
	};

	var displayPicError = function(errorMessage) {
		$scope.errorPic = errorMessage;
		$scope.errorPicIsTrue = true;
	};

	var displayFlickError = function(errorMessage) {
		$scope.errorFlick = errorMessage;
		$scope.errorFlickIsTrue = true;
	};

	var displayError = function(errorMessage) {
		console.log(errorMessage);
	};


});