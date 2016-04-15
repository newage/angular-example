(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Google Cardboard',
            price: 5.96,
            description: '...',
            purchaseButton: true,
            soldOut: false,
            images: [
                {
                    full: 'image/example_image.png'
                }
            ]
        },
        {
            name: 'Computer',
            price: 1000,
            description: '...',
            purchaseButton: true,
            soldOut: false,
            images: [
                {
                    full: 'image/example_image.png'
                }
            ]
        }
    ];
})();


