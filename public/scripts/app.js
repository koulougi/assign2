// IIFE -- IMMEDIATELY INVOKED FUNCTION EXPRESSION
/*
Student Name : Christopher Koulougliotis
Student ID : 301227384
Date: 2022-09-20
 */
(function(){
    function Start(){
        console.log("App Started!");
    }
    window.addEventListener("load", Start);
})();

 // stores information from form in variables
function formStoreInfo() {
   let email = document.getElementById('inputEmail3').value;
   let fName = document.getElementById('inputName').value;
   let lName = document.getElementById('inputLName').value;
   let pNum = document.getElementById('pNum').value;
   //console.log tests to see if storing is functional
   console.log(email, fName, lName, pNum);
}