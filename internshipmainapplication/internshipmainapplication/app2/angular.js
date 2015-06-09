// Code goes here
var myModule = angular.module('myApp', []);

myModule.directive('uiSelectable', function ($parse) {
    return {
        link: function (scope, element, attrs, ctrl) {

            scope.$on('clearselection', function (event, document) {
                element.find('.ui-selected').removeClass('ui-selected')
            });

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

  //  $scope.documents = [1, 2, 3, 4, 5, 6];

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
myModule.directive("dayMounths", function ($parse) {
    var mounthdays =[
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
    return function (scope, element, attrs) {
        var i, j = 0, dokument=0;
        
        while (j < 12) {
            //for (i = 0; i < mounthdays[j].day; i++) {
                var k = 0;
                                
            // while (k < 24) {

                    var content = ' <br><span>{{'+dokument+'}}</span><span ng-click="dosomething($index)">Clicke me</span><br>';
                    var listElem = angular.element(content);
                    var compileFn = $parse(listElem);
                    compileFn(scope);
                    element.append(listElem);

                    k++;
                    dokument++;

               // }
                console.log(j);
                
         //   }

            j = j + 1;

        }
        
    } // end of return



    //

});