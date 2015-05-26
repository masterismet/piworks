<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="lesson3.aspx.cs" Inherits="WebApplication1.lesson3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" data-ng-app="">
<head runat="server">
 <script src="http://code.angularjs.org/snapshot/angular.js"></script>    
    <title></title>
</head>
<body data-ng-init="names=['ahmet','mehmet','veli']">
    <form id="form1" runat="server">
    <div>
      <input type="text" data-ng-model="name" />{{name}}
        <ul>
            <li data-ng-repeat="personName in names">{{personName}}</li>


        </ul>
    
    </div>
    </form>
</body>
</html>
