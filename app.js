$(document).ready(function() {
    var button = $('<button>Test</button>').html('click me').on('click', function(){
        alert('hi');
    });
    $('body').append(button);
    // $('body').append($('tt<div id="root"></div>'));
});