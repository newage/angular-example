(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.product = gem;
    });
    
    var gem = {
        name: 'Google Cardboard',
        price: 5.96,
        description: '...'
    }
})();


