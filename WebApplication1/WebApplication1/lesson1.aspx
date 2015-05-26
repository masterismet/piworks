<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="lesson1.aspx.cs" Inherits="WebApplication1.intro" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app>
   
    <head>
        
       <title></title>  
         
        <script src="http://code.angularjs.org/snapshot/angular.js"></script>    
     </head>

<body>

 <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
</body>
</html>