var app = angular.module("myapp", []);
app.controller("maincontroller", function ($scope, $http) {
    $http.get("a.txt").success(function (response) {
    $scope.mounthdays=response});
       
});

        app.directive("hourDay", function ($parse,$log) {
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
                    console.log("burası tamam");
                    
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
                    day = day + 1;
                    console.log("burası tamam");

                }
            }
           
        });

        app.directive("mounthDays", function ($compile) {


           return function (scope, element, attrs) {
               var content = "<ul><li ng-repeat='text in mounthdays'>{{text.name}}-{{text.day}}</li></ul>"
               //var content = '"<ul><li>"+$scope.mounthdays[i].name +"<br>" + (j) +"</li></u>"';
               var listElem = angular.element(content);
               var compileFn = $compile(listElem);
               compileFn(scope);
               element.append(listElem);
               console.log("compile işe yaradı  burası tamam");
           }
                
               
        });
        
      /*  app.config(function ($interpolateProvider) {
            $interpolateProvider.startSymbol("!!");
            $interpolateProvider.endSymbol("!!");
        });
        app.directive("mounthDays", function ($interpolate) {
            var interpolationFn;

                interpolationFn= $interpolate("The total is: !!amount | currency!! (including tax)");
                return {
                    scope: {
                        amount: "=amount",
                        tax: "=tax"
                    },
                    link: function (scope, element, attrs) {
                        scope.$watch("amount", function (newValue) {
                            var localData = {
                                total: Number(newValue)
                                + (Number(newValue) * (Number(scope.tax) / 100))
                            }
                            element.text(interpolationFn(scope));
                        });
                    }
                }
        });
      
     */