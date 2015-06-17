﻿var myModule = angular.module('myApp', []);

myModule.directive('uiSelectable', function ($parse) {
    return {
        link: function (scope, element, attrs, ctrl) {

            scope.$on('clearselection', function (event, document) {
                element.find('.ui-selected').removeClass('ui-selected')
            });


            element.selectable({
                stop: function (evt, ui) {
                    var collection = scope.$eval(attrs.docArray)
                    var selected = element.find('div.selection hide.ui-selected');
                    console.log(selected);
                    selected.map(function () {
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



}]);
myModule.controller("dayCalculateController", function ($scope) {
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
    $scope.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    var maparray = new Array();


    var arraya = new Array();
    arraya = [];
    var arrayb = new Array();
    arrayb = [];
    var arrayc = new Array();
    arrayc = [];
    var time = [];
    var day, mounth = 0;
    while (mounth < 12) {
        for (day = 1; day <= mounthlenghts[mounth].day; day++) {
            time = {
                day: day,
                "mounth": mounthlenghts[mounth].name,
            }
            arraya.push(time);

        }

        mounth++;

    }
    $scope.documents = arrayc.concat(arraya, arrayb);


    // here is so important plss give more attention , good luck
});
myModule.directive("evalExpression", function ($compile) {    
      
    return function (scope, element, attrs) {
        var content = '<option value="x">secenek 1</option>';
        //content = content + '<option value="x">secenek 2</option>';
        var listElem = angular.element(content);
        var compileFn = $compile(listElem);
        compileFn(scope);
        element.append(listElem);
    }
    /*
    var html = '<option value="s">dd</option><option value="s">dd</option>';
    $scope.interpolate = $interpolate(html)($scope);

    //$compile
    $scope.compile = $compile(html)($scope);
    */

});
