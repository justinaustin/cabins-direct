var app = angular.module('cabinsSearch', []).controller('ctrl', ctrl);

app.filter('myfilter', function() {
    return function(items, types) {
        var filtered = [];
        angular.forEach(items, function(item) {
            if (types.size <= item.sleeps &&
                (!types.pets || item.pets) && 
                (!types.smoking || item.smoking) && 
                (!types.hottub || item.hottub) && 
                (!types.lakeside || item.lakeside) && 
                (!types.laundry || item.laundry) && 
                (!types.fullkitchen || item.fullkitchen) && 
                (!types.dishwasher || item.dishwasher) && 
                (!types.fishing || item.fishing) && 
                (!types.charcoalgrill || item.charcoalgrill) && 
                (!types.gasgrill || item.gasgrill) && 
                (!types.firepit || item.firepit) && 
                (!types.boat || item.boat) && 
                (!types.tv || item.tv) && 
                (!types.cablesat || item.cablesat) && 
                (!types.fullyfurnished || item.fullyfurnished)) {
                    filtered.push(item);
                }
        });
        return filtered;
    };
});

function ctrl($scope) {
    $scope.cabins = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "https://cabinsdirect.org/cabins/cabins.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    $scope.types = {size: 1, pets:false, smoking:false, hottub: false, lakeside: false,
        laundry:false, fullkitchen: false, dishwasher: false,  fishing: false, charcoalgrill: false,
        gasgrill: false, firepit: false, boat: false, tv: false, cablesat: false, fullyfurnished: false};
}
