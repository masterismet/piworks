var app = angular.module("myapp", []);
app.controller("maincontroller", function () {
});

        app.directive("hourDay", function ($parse) {
            return function (scope, element, attrs) {
                var saat = 23;                
                while (saat >=0) {
                    if(saat<10) var content = "<b> 0" + saat + " : 00</b><br>"
                    else var content = "<b>" + saat + " : 00</b><br>"
                    var listElem = angular.element(content);
                    var compileFn = $parse(listElem);
                    compileFn(scope);
                    element.append(listElem);
                    saat = saat - 1;                   
                    
                }
            }
        });
        app.directive("dayMounth", function ($parse) {
            return function (scope, element, attrs) {
                var day = 1;
                while (day<=30) {
                    var content = "<b>" + day + " </b>"
                    var listElem = angular.element(content);
                    var compileFn = $parse(listElem);
                    compileFn(scope);
                    element.append(listElem);
                   day = day +1;

                }
            }

        });
        app.directive("mounthProp", function ($scope,$parse, $http) {
            return function (scope, element, attrs) {
                var url = "mounth.txt";
                   $http.get(url).success(function (response) {
                    $scope.mounths = response;
                });

                //var daysize = mounth.day;
                var i = 0;
                while (i <=12) {
                    var content = "<b>" + $scope.mounth.day + " </b>"
                    var listElem = angular.element(content);
                    var compileFn = $parse(listElem);
                    compileFn(scope);
                    element.append(listElem);
                    i = i + 1;


                }
            }

        });