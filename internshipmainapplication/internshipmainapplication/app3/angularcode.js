var myModule = angular.module('myApp', []);
myModule.controller("dayCalculateController", function () {});
myModule.directive("evalExpression", function ($compile,$rootScope) {
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
    content = content + '<select multiple="multiple" name="duallistbox_demo1[]">';
    var day, mounth = 0, hour = 0, x = 0;
    var arraya = new Array();
    arraya = [];
    var arrayb = new Array();
    arrayb = [];
    var arrayc = new Array();
    arrayc = [];
    var time = [];
    var documents = [];
    for (mounth = 0; mounth < 12; mounth++)
    {
        for (day = 1; day <= mounthlenghts[mounth].day; day++)
        {
            for (hour = 0; hour < 24; hour++) {
                time = {
                    hour: hour,
                    day: day,
                    "mounth": mounthlenghts[mounth].name,
                }
                arraya.push(time);
                
                //documents.push(time);

            }
            
          
           /* if (day % 2 == 0) {                
                for (hour = 0; hour < 24; hour++)
                {                    
                    content = content + '<option value="date:' + hour + ',' + day + ',' + mounth + '"class="leftoptbox" >' + hour + '</option>';// class="leftoptbox"
                }             
                console.log("left");
            }
             
            else
            {
                for (hour = 0; hour < 24; hour++)
                {
                    content = content + '<br><option value="date:' + hour + ',' + day + ',' + mounth + '" class="rightoptbox">' + hour + '</option>';//
                }
                console.log("right");

            }
            */
        }
        x++;
   
    }
    $rootScope.columnBreak = x;
    $rootScope.documents = arrayc.concat(arraya, arrayb);
    content = content + '<option ng-repeat="document in documents " value="{{document}}" class="parent"  ng-class="{'+'new-col'+': startNewCol($index, columnBreak) }"> {{document.hour}}</option>';
            
        
    content = content + '</select>';
    console.log(x);
    return function (scope, element, attrs) {        
        var listElem = angular.element(content);
        var compileFn = $compile(listElem);
        compileFn(scope);
        element.append(listElem);
    }
   
});
