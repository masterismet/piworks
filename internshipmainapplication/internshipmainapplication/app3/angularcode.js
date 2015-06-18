var myModule = angular.module('myApp', []);
myModule.controller("dayCalculateController", function () {});
myModule.directive("evalExpression", function ($compile) {
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
    var content = '';//'<select multiple="multiple" name="duallistbox_demo1[]">';
    var day, mounth = 0, hour = 0, x = 2;
    for (mounth = 0; mounth < 12; mounth++) {
        for (day = 1; day <= mounthlenghts[mounth].day; day++) {
            if (day % 2 == 0) {
                content = content + '<select multiple="multiple" name="duallistbox_demo1[]" class="leftoptbox">';
                for (hour = 0; hour < 24; hour++)
                {                    
                    content = content + '<option value="date:' + hour + ',' + day + ',' + mounth + '" >' + day + '</option></br>';
                }
                content=content+'</select>'
                    
            }
             
            else {
                content = content + '<select multiple="multiple" name="duallistbox_demo1[]" class="rightoptbox">';
                for (hour = 0; hour < 24; hour++) {
                    content = content + '<option value="date:' + hour + ',' + day + ',' + mounth + '" >' + day + '</option></br>';
                }
                content = content + '</select>'

            }

        }
   
}


        
            
        
 //   content = content + '';
    console.log(x);
    return function (scope, element, attrs) {        
        var listElem = angular.element(content);
        var compileFn = $compile(listElem);
        compileFn(scope);
        element.append(listElem);
    }
   
});
