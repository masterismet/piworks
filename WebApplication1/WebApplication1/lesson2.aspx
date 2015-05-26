<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="lesson2.aspx.cs" Inherits="WebApplication1.lessson2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" data-ng-app="">
<head runat="server">
    <title></title>
      <script src="http://code.angularjs.org/snapshot/angular.js"></script>    
</head>
<body>
    <form id="form1" runat="server">
    <div class="container" data-ng-init="names=['ismet','mehmet','ali']">
        <br />
        <li data-ng-repeat="name in names">{{name}}</li>
    
    </div>
    </form>
</body>
</html>
