﻿var app = angular.module("myapp", []);



app.controller("maincontroller",function ($scope) {
   
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
            var mounthdays = [
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
                var i, j = 0;
                var content = '<table>';
                var listElem = angular.element(content);
                var compileFn = $parse(listElem);
                compileFn(scope);
                element.append(listElem);
                while (j < 12) {                    
                for(i=0;i<mounthdays[j].day; i++){
                    var k = 0;
                   // var content = '<th><tr>' + mounthdays[j].name +'</tr>';

                    var content = '<th>';
                    var listElem = angular.element(content);
                    var compileFn = $parse(listElem);
                    compileFn(scope);
                    element.append(listElem);
                    console.log("th çalıştı")
                    while(k<24){
                    var content = '<li class="mytable"> ' +k+'</li>';   
                    var listElem = angular.element(content);
                    var compileFn = $parse(listElem);
                    compileFn(scope);
                    element.append(listElem);
                    k++;
                   
                    }
                    console.log(j);
                    var content = '</th>';
                    var listElem = angular.element(content);
                    var compileFn = $parse(listElem);
                    compileFn(scope);
                    element.append(listElem);
                   
                }
                
                j = j + 1;
                
                }
                var content = '</table>';
                var listElem = angular.element(content);
                var compileFn = $parse(listElem);
                compileFn(scope);
                element.append(listElem);

   } // end of return
 });

        
        
    