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
 $(window).load(function () {
            var SECTION_DIV = "section > div";
            var $SELECTION = $("div.selection");
            var $selected = $();
            var point = [0, 0];
            $(SECTION_DIV).on("mousedown touchstart", function (e) {
                if (e.which === 1 || e.type == "touchstart") {
                    if (!e.ctrlKey) {
                        $(SECTION_DIV).removeClass("marked mark");
                    }
                    $(this).addClass("marked mark");
                }
            });
            $("body").on("mousedown touchstart", function (i) {
                if (i.type == "touchstart" || (i.which === 1 && !$(i.target).is(SECTION_DIV))) {
                    if (!i.ctrlKey && !(i.type == "touchstart" && $(i.target).is(SECTION_DIV))) {
                        $(SECTION_DIV).removeClass("marked mark");
                    } else {
                        console.log(i.target);
                    }
                    if (i.type == "touchstart") {
                        i.pageX = i.originalEvent.touches[0].pageX;
                        i.pageY = i.originalEvent.touches[0].pageY;
                    }
                    if ((point[0] != i.pageX && point[1] != i.pageY) || i.type == "mousedown") {
                        point[0] = i.pageX;
                        point[1] = i.pageY;
                        $SELECTION.css({
                            "top": i.pageY,
                            "left": i.pageX
                        });
                        $SELECTION.removeClass("hide");
                    }
                    $(this).on("mousemove touchmove", function (f) {

                        if (f.type == "touchmove") {
                            f.pageX = f.originalEvent.touches[0].pageX;
                            f.pageY = f.originalEvent.touches[0].pageY;
                        }
                        var rect = {
                            x: i.pageX > f.pageX ? f.pageX : i.pageX,
                            y: i.pageY > f.pageY ? f.pageY : i.pageY,
                            w: i.pageX > f.pageX ? i.pageX - f.pageX : f.pageX - i.pageX,
                            h: i.pageY > f.pageY ? i.pageY - f.pageY : f.pageY - i.pageY
                        };
                        $SELECTION.css({
                            "top": rect.y - 1,
                            "left": rect.x - 1,
                            "width": rect.w + 1,
                            "height": rect.h + 1
                        });
                        var $marked;
                        var filterUnmark = function (index) {
                            if ($(this).is(".marked") && f.ctrlKey) {
                                return (false);
                            } else {
                                return (true);
                            }
                        }
                        // ------------------------------------
                        $selected = $(SECTION_DIV).overlap({
                            rect: rect,
                            mark: "mark",
                            filterUnmark: filterUnmark,
                            unmark: true
                        });
                        //-------------------------------------
                    });
                }
                i.preventDefault();
            }).on("mouseup touchend touchcancel", function (e) {
                if (this === e.target || $SELECTION[0] === e.target || e.type != "mouseup") {
                    if (e.which === 1 || e.type != "mouseup") {
                        $(this).off("mousemove touchmove");
                        $SELECTION.addClass("hide").removeAttr("style");
                        $selected.addClass("marked");
                        e.preventDefault();
                    }
                }
            });
        });