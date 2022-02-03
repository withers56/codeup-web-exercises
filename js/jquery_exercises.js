(function (){
    'use strict';

    $(document).ready(function () {
        console.log('DOM READY');
        console.log(`jQuery version : ${$.fn.jquery}`);

        let mainDiv = $('#main-box').html();
        // alert(mainDiv)


        $('.codeup').css('border', '1px solid red');
        $('li').css('font-size', '20px');
        $('h1, p, li').css('background-color', 'yellow');
        alert($('h1').html());




















    });
}());
