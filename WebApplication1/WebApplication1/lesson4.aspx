<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="lesson4.aspx.cs" Inherits="WebApplication1.lesson4" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" data-ng-app="">
<head runat="server">
    <script src="http://code.angularjs.org/snapshot/angular.js"></script>  
    <title></title>
</head>
<body data-ng-init="costumer=[{name:'ismet', city:'istanbul'},{name:'Veli', city:'karabük'}]">
    <form id="form1" runat="server">
    <div>

        
        <ul>
            <li data-ng-repeat="cust in costumer">  {{cust.name}}</li><br />
         </ul>
        <ul>
       <li data-ng-repeat="ist in costumer">{{ist.name + " " +ist.city}}</li>
        </ul>
        <ul>
     <li data-ng-repeat="cust in costumer |orderBy:'name'">{{cust.name | uppercase}}</li>
        </ul><br />
        <input type="text" data-ng-model="nameText" />
        <ul>
            <li data-ng-repeat="xx in costumer | filter: nameText| orderBy: 'name'"  >{{xx.name + " " + xx.city}}</li>        
        </ul>


        </div>
    </form>
</body>
</html>
