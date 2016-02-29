angular.module('starter.services', [])

.factory('productInfo', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var food = [
	  {	id: 0, name: 'Bread', price: '$20', img: 'img/ben.png'}, 
	  { id: 1, name: 'Eggs', price: '$15', img: 'img/max.png'}, 
	  { id: 2, name: 'Ham', price: '$35', img: 'img/adam.jpg'}, 
	  { id: 3, name: 'Soda', price: '$10', img: 'img/perry.png'}
  ];

  return {
    all: function() {
      return food;
    },
  };
});
