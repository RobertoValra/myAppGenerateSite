angular.module('starter.services', [])

.factory('productInfo', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var productInfo = [{
    id: 0,
    product: 'Felps',
    price: 'You on your way?',
    img: 'img/ben.png'
  }, {
    id: 1,
    product: 'Felps',
    price: 'You on your way?',
    img: 'img/ben.png'
  }, {
    id: 2,
    product: 'Felps',
    price: 'You on your way?',
    img: 'img/ben.png'
  }, {
    id: 3,
    product: 'Felps',
    price: 'You on your way?',
    img: 'img/ben.png'
  }, {
    id: 4,
    product: 'Felps',
    price: 'You on your way?',
    img: 'img/ben.png'
  }];

  return {
    all: function() {
      return productInfo;
    },
    remove: function(chat) {
      productInfo.splice(productInfo.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < productInfo.length; i++) {
        if (productInfo[i].id === parseInt(chatId)) {
          return productInfo[i];
        }
      }
      return null;
    }
  };
});
