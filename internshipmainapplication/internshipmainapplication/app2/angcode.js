﻿// Code goes here
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
  
 var arraya = new Array();
    arraya = [];
 var arrayb = new Array();
 arrayb = [];
 var arrayc = new Array();
 arrayc = [];
 var object = [];
   // var documents= new 
 var i, j=10;
 while (j < 12) {
     for (i = 0; i <mounthlenghts[j].day; i++) {
         var k = 0;
         while (k < 24) {
             object = {
                  hour: i,
                   day: k,
                "name": mounthlenghts[j].name,
             }
             arraya.push(object);


             k++;
         }       

     }

     j++;

 }
   // $scope.documents = arrayc.concat(arraya, arrayb);
    //console.log(arraya);  

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



myModule.directive("dayMounths", function ($scope, $interpolate) {

    return function (scope, element, attrs) {
        var i, j = 0, document=0;
        console.log("diziyi okudu");
       // while (j < 12) {
            //for (i = 0; i < mounthdays[j].day; i++) {
                var k = 0;
                                
            // while (k < 24) {

                    /*var content = '<span> {{document}} </span><span ng-click="dosomething($index)"></span>';
                    var listElem = angular.element(content);
                    var compileFn = $interpolate(listElem);
                    compileFn(scope);
                    element.append(listElem);*/
                    var html = '<span> {{document}} </span><span ng-click="dosomething($index)"></span>';
                    $scope.interpolate = $interpolate(html)($scope);
                    

                    

                    k++;
                    document++;

               // }
                console.log(j);
                
         //   }

            j = j + 1;

     //   }
        
    } // end of return



    //

});