// Code goes here
var myModule = angular.module('myApp', []);

myModule.directive('uiSelectable', function ($parse) {
    return {
        link: function (scope, element, attrs, ctrl) {

            scope.$on('clearselection', function (event, document) {
                element.find('.ui-selected').removeClass('ui-selected')
            });
            console.log("burası tammam");

            element.selectable({
                stop: function (evt, ui) {
                    var collection = scope.$eval(attrs.docArray)
                    var selected = element.find('div.parent.ui-selected').map(function () {
                        var idx = $(this).index();
                        return { document: collection[idx] }
                    }).get();

                    scope.selectedItems = selected;
                    scope.$apply()
                }
            });
        }
    }
});

myModule.controller('TempController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {   

    /// other operations
    $scope.selectedItems = [];
    $scope.$watch('selectedItems', function (data) {

    });

    $scope.clearSelection = function () {
        $scope.selectedItems = [];

        $timeout(function () {
            $rootScope.$broadcast('clearselection', '');
        }, 100);
    }

    $scope.dosomething = function (index) {
        console.log('You clicked ' + index);

    }

}]);
myModule.controller("dayCalculateController", function ($scope,$parse) {
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
   //$scope.hours = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    var arraya = new Array();
    arraya = [];
    var arrayb = new Array();
    arrayb = [];
    var arrayc = new Array();
    arrayc = [];
    var object = [];
    // var documents= new 
    var i, j =10;
    while (j < 12) {
        for (i = 0; i < mounthlenghts[j].day; i++) {
            var k = 20;
            while (k < 24) {
                object = {
                    hour: k,
                    day: i,
                    "name": mounthlenghts[j].name,
                }
                arraya.push(object);
                $scope.document = $parse('object');
               k++;
           }

        }

        j++;

    }
    $scope.documents = arrayc.concat(arraya, arrayb);
   
    
    // here is so important plss give more attention , good luck
});

  /*myModule.directive("evalExpression", function ($parse) {    
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

      var content = '';
      var documentt = [];
      var temp;
      var object = [];
      // var documents= new 
      var i, j = 10;
      while (j < 12) {
          for (i = 0; i < mounthlenghts[j].day; i++) {
              var k = 20;
              while (k < 24) {
                  documentt = {
                      hour: i,
                      day: k,
                      "name": mounthlenghts[j].name,
                  }
                  //arraya.push(object);
                  $scope.document = $parse('documentt');                  
                  k++;
              }

          }

          j++;

      }
      /*$scope.name = 'Manish';
$interpolate(string)($scope);
      /*
      return function (scope, element, attrs) {
            var listElem = angular.element(content);
            var compileFn = $compile(listElem);
            compileFn(scope);
            element.append(listElem);
        }

        });
      */
  
