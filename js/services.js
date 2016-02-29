angular.module('starter.services', [])

.factory('productInfo', function() {
  // Some fake testing data
  var food = [
	  {	id: 0, name: 'Bread', price: '$20.50', img: 'img/ben.png'}, 
	  { id: 1, name: 'Eggs', price: '$15.95', img: 'img/max.png'}, 
	  { id: 2, name: 'Ham', price: '$35.15', img: 'img/adam.jpg'}, 
	  { id: 3, name: 'Soda', price: '$10.55', img: 'img/perry.png'}
  ];
});
