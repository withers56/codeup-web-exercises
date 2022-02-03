(function (){
    'use strict';

    function redText(){
        console.log('red');
        $(this).css('color', 'red');
    }

    function blackText () {
        console.log('black')
        $(this).css('color', 'black');
    }





    $(document).ready(function () {
        console.log('DOM READY');
        console.log(`jQuery version : ${$.fn.jquery}`);

       $('h1').click(function (){
           $(this).css('background-color', 'blue');
       });
       $('p').dblclick(function (){
           $(this).css('font-size', '18px');
       });
       $('li').hover(redText, blackText);




















    });
}());
