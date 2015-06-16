﻿var myModule = angular.module('myApp', []);

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

    $scope.setHour = function (document) {
        var update = document.hour;
        update.push($scope.hour);
        console.log(update);
    }
   
   
}]);
myModule.controller("dayCalculateController", function ($scope, $parse) {
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
    $scope.hours = [0, 1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

    var arraya = new Array();
    arraya = [];
    var arrayb = new Array();
    arrayb = [];
    var arrayc = new Array();
    arrayc = [];
    var time = [];
    var day, mounth = 10;
    while (mounth < 12) {
        for (day = 1; day <= mounthlenghts[mounth].day; day++) {
    time = {
                hour: [],
                day: day,
                "mounth": mounthlenghts[mounth].name,
            }
             arraya.push(time);
           //  $scope.documents.push(time);
           // $scope.document = $parse('time');

        }

       mounth++;

    }
   $scope.documents = arrayc.concat(arraya, arrayb);


    // here is so important plss give more attention , good luck
});
