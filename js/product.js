(function() {
    var app = angular.module('store-products', []);

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
})();