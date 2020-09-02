$(function()
{

       $("#TextValue").keypress(function (e) {
            if (String.fromCharCode(e.keyCode).match(/[^0-9+-/*]/g) || $(this).val().length > 10) {
                return false;
            }
       });
      
       // Button 0
       $("#b0").click(function () {
           if ($("#TextValue").val().length > 10)
           {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("0"); 
           }
       });
       $("#b1").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("1");
           } else {
               $("#TextValue").val(x + "1");
           }
       });
       $("#b2").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("2");
           } else {
               $("#TextValue").val(x + "2");
           }
       });
       $("#b3").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("3");
           } else {
               $("#TextValue").val(x + "3");
           }
       });
       $("#b4").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("4");
           } else {
               $("#TextValue").val(x + "4");
           }
       });
       $("#b5").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("5");
           } else {
               $("#TextValue").val(x + "5");
           }
       });
       $("#b6").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("6");
           } else {
               $("#TextValue").val(x + "6");
           }
       });
       $("#b7").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("7");
           } else {
               $("#TextValue").val(x + "7");
           }
       });
       $("#b8").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("8");
           } else {
               $("#TextValue").val(x + "8");
           }
       });
       $("#b9").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           if (x === "0") {
               $("#TextValue").val("9");
           } else {
               $("#TextValue").val(x + "9");
           }
       });
       $("#div").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           var y = x.slice(-1);
           if (y === "/" || y === "+" || y === "*" || y === "-") { } else {
               $("#TextValue").val(x + "/");
           }
       });
       $("#multy").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
       
           var y = x.slice(-1);
           if (y === "/" || y === "+" || y === "*" || y === "-") { } else {
               $("#TextValue").val(x + "*");
           }
       });
       $("#sub").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;        
           var y = x.slice(-1);
           if (y === "/" || y === "+" || y === "*" || y === "-") { } else {
               $("#TextValue").val(x + "-");
           }
       });
       $("#add").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;        
           var y = x.slice(-1);
           if (y === "/" || y === "+" || y === "*" || y === "-") { } else {
               $("#TextValue").val(x + "+");
           }
       });
       $("#dot").click(function () {
           if ($("#TextValue").val().length > 10) {
               return false;
           }
           var x = document.getElementById("TextValue").value;
           var y = x.slice(-1);
           if (y === ".") { } else
           {
               $("#TextValue").val(x + ".");
           }
       });
       $("#ce").click(function () {
           var x = document.getElementById("TextValue").value;
           $("#TextValue").val(x.substring(0, x.length - 1));
       });
       $("#ceall").click(function () {
           
           $("#TextValue").val('');
       });
});