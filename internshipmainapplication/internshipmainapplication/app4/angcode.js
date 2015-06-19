var myApp = angular.module('myApp', []);

//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});

myApp.directive('multiselectDropdown', [function () {
    return function (scope, element, attributes) {

        element = $(element[0]); // Get the element as a jQuery element

        // Below setup the dropdown:

        element.multiselect({
            buttonClass: 'btn btn-small',
           buttonWidth: '200px',
            buttonContainer: '<div class="btn-group"/>',
            maxHeight: 800,
            enableFiltering: true,
            enableCaseInsensitiveFiltering: true,
            buttonText: function (options) {
                if (options.length == 0) {
                    return element.data()['placeholder'] + ' <b class="caret"></b>';
                } else if (options.length > 1) {
                    return _.first(options).text
                    + ' + ' + (options.length - 1)
                    + ' more selected <b class="caret"></b>';
                } else {
                    return _.first(options).text
                    + ' <b class="caret"></b>';
                }
            },
            // Replicate the native functionality on the elements so
            // that angular can handle the changes for us.
            onChange: function (optionElement, checked) {
                optionElement.removeAttr('selected');
                if (checked) {
                    optionElement.attr('selected', 'selected');
                }
                element.change();
            }

        });
        // Watch for any changes to the length of our select element
        scope.$watch(function () {
            return element[0].length;
        }, function () {
            element.multiselect('rebuild');
        });

        // Watch for any changes from outside the directive and refresh
        scope.$watch(attributes.ngModel, function () {
            element.multiselect('refresh');
        });

        // Below maybe some additional setup
    }
}]);

function MyCtrl($scope) {
    $scope.productSelection = '';
    //$scope.Products = ["Apple", "Banana", "Carrort", "Dart"];

    var mounthlenghts = [
              { "name": "jan", "day": 31 },
              { "name": "feb", "day": 28 },
              { "name": "Mar", "day": 31 },
              { "name": "Apr", "day": 30 },
              { "name": "may", "day": 31 },
              { "name": "jun", "day": 30 },
              { "name": "Jul", "day": 31 },
              { "name": "Aug", "day": 31 },
              { "name": "Seb", "day": 30 },
              { "name": "Oct", "day": 31 },
              { "name": "Nov", "day": 30 },
              { "name": "Dec", "day": 31 }];
    
    var day, mounth = 0, hour = 0, x = 0;
    var arraya = new Array();
    arraya = [];
    var arrayb = new Array();
    arrayb = [];
    var arrayc = new Array();
    arrayc = [];
    var time = [];
    var documents = [];
    for (mounth = 0; mounth < 12; mounth++) {
        for (day = 1; day <= mounthlenghts[mounth].day; day++) {
            for (hour = 0; hour < 24; hour++) {
                time = {
                    hour: hour,
                    day: day,
                    "mounth": mounthlenghts[mounth].name,
                }
                arraya.push(time);               

            }


        }
       
    }
   
    $scope.Products = arrayc.concat(arraya, arrayb);
}