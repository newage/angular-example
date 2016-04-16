(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(setTab) {
            return this.tab === setTab;
        };
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        }
    });

    app.directive('productTitle', function() {
        return {
            restrict: 'A',
            templateUrl: 'product-title.html'
        };
    });

    app.directive("productGallery", function() {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function() {
                this.current = 0;
                this.setCurrent = function(imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

    var gems = [
        {
            name: 'Google Cardboard',
            price: 5.96,
            description: '...',
            purchaseButton: true,
            soldOut: false,
            images: [
                'image/1.jpg',
                'image/2.jpg'
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product',
                    author: 'victor@example.no'
                },
                {
                    stars: 1,
                    body: 'Fee-e',
                    author: 'marina@example.no'
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
                'image/1.jpg',
                'image/2.jpg'
            ]
        }
    ];
})();


