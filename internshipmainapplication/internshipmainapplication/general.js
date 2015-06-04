var app = angular.module("myapp", []);
app.controller("maincontroller", function ($scope, $http) {
    $http.get("mounth.txt").success(function (data) {
        $scope.products = data;
    });
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
   /*     app.directive("mounthProp", function ($scope, $interpolate, $http) {
            return function (scope, element, attrs) {
                   var url = "mounth.txt";
                   $http.get(url).success(function (response) {
                    $scope.mounths = response;
                   });
                   var i = 0;
                   while (i < 12) {
                       var daysize = mounths[i].day;
                       
                       var k;
                    

                       for (k = 0; k < daysize; k++) {
                           var content = "<b>" +$scope.mounths[i].name + (k+1) + " </b>"
                           var listElem = angular.element(content);
                           var compileFn = $parse(listElem);
                           compileFn(scope);
                           element.append(listElem);
                           
                       }
                       
                       i = i + 1;


                   }

            }
        });
             /*

                   var i=0;
                   while (i < 12) {
                       var daysize = mounths.day;
                       var k ;
                       for (k = 0; k < daysize; k++) {
                           var content= "{{mounth}}-{{day}}";
                           scope: {
                                   mounth: "=name";
                               day = k + 1;
                           };
                           var listElem = angular.element(content);
                           var compileFn = $interpolate(listElem);
                           compileFn(scope);
                           element.append(listElem);



                           }

                       }                  
                
            }
        });
//var daysize = mounth.day;

/*
$scope.loadData = function () {
$http.get("productData.json").success(function (data) {
$scope.products = data;
});
}

/////
                return {
scope: {
amount: "=amount",
tax: "=tax"
},
link: function (scope, element, attrs) {
scope.$watch("amount", function (newValue) {
var localData = {
total: Number(newValue)
+ (Number(newValue) * (Number(scope.tax) /100))
}
element.text(interpolationFn(scope));
});
}
}
    ////////            
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

        */