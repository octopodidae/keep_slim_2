$(document).ready(function() {

    // Variables
    var my_table = $('#myTable');
    var protocole = 'http://';
    var ip = '127.0.0.1';
    var port = ':8081';
    var graphic_area = $('.graphic-area');
    var margin_left  = 88;
    var speed = 500;
    var line = $('#line');
    var previous = $('#previous');
    var next = $('#next');
    var rows = $('.rows');
    var start = 0; 
    var end = 10;
    var steps = 0;
    var first_row = rows.first();
    var last_row = rows.last();
    var mySlider = $('#mySlider');
    var settings_btn = $('#btn_settings'); 
    var background_slider = $('.background-slider');
    var goal = 10000;

    // Tablesorter
    my_table.tablesorter();

    // Show / Animate last ten rows when page is loaded
    rows.slice(start,end).show();
    animateAllGraphics();

    // Clean graphic area
    function cleanGraphiArea() {
        graphic_area.children('.my-div').remove();
    }

    // My Animate Graphic Function 
    function animateGraphic (steps, div, speed) {
        var px = 0;
        div.css( 'height', px );
        px = parseInt(Math.round(steps/100));
        //console.log(goal);
        div.html('<span style="bottom: ' + 16 + 'px; ' + '"' + 'class="my-span" >' + steps + '</span>');
        if (goal == 10000) {
            line.css('bottom', '100px');
            if (steps >= 5000 && steps < 10000) {
                div
                    .css('background-color', 'orange')
                    .animate({ height: '+=' + px + 'px' }, steps)
                    .children('span').css({
                        color: 'orange',
                        'background-color': '#f5f5f5'
                    });
            }
            else if  (steps < 5000 ) {
                div
                    .css('background-color', '#FE2E2E')
                    .animate({ height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#FE2E2E',
                        'background-color': '#f5f5f5'
                    });
            }
            else if  (steps >= 10000 ) {
                div
                    .css('background-color', 'rgb(109,202,78)')
                    .animate({  height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: 'rgb(109,202,78)',
                        'background-color': '#f5f5f5'
                    });
            }

        }
        else if (goal == 20000) {
            line.css('bottom', '200px');
            if (steps >= 10000 && steps < 20000) {
                div
                    .css('background-color', 'orange')
                    .animate({ height: '+=' + px + 'px' }, steps)
                    .children('span').css({
                        color: 'orange',
                        'background-color': '#f5f5f5'
                    });
            }
            else if  (steps < 10000 ) {
                div
                    .css('background-color', '#FE2E2E')
                    .animate({ height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#FE2E2E',
                        'background-color': '#f5f5f5'
                    });
            }
            else if  (steps >= 20000 ) {
                div
                    .css('background-color', 'rgb(109,202,78)')
                    .animate({  height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: 'rgb(109,202,78)',
                        'background-color': '#f5f5f5'
                    });
            }
        }
        else if (goal == 5000) {
            line.css('bottom', '50px');
            if (steps >= 2500 && steps < 5000) {
                div
                    .css('background-color', 'orange')
                    .animate({ height: '+=' + px + 'px' }, steps)
                    .children('span').css({
                        color: 'orange',
                        'background-color': '#f5f5f5'
                    });
            }
            else if  (steps < 2500 ) {
                div
                    .css('background-color', '#FE2E2E')
                    .animate({ height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#FE2E2E',
                        'background-color': '#f5f5f5'
                    });
            }
            else if  (steps >= 5000 ) {
                div
                    .css('background-color', 'rgb(109,202,78)')
                    .animate({  height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: 'rgb(109,202,78)',
                        'background-color': '#f5f5f5'
                    });
            }
        }
        else if (goal == 15000) {
            line.css('bottom', '150px');
            if (steps >= 7500 && steps < 15000) {
                div
                    .css('background-color', 'orange')
                    .animate({ height: '+=' + px + 'px' }, steps)
                    .children('span').css({
                        color: 'orange',
                        'background-color': '#f5f5f5'
                    });
            }
            else if  (steps < 7500 ) {
                div
                    .css('background-color', '#FE2E2E')
                    .animate({ height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#FE2E2E',
                        'background-color': '#f5f5f5'
                    });
            }
            else if  (steps >= 15000 ) {
                div
                    .css('background-color', 'rgb(109,202,78)')
                    .animate({  height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: 'rgb(109,202,78)',
                        'background-color': '#f5f5f5'
                    });
            }
        }
        $('.my-span').fadeIn(1500);
    }

    // Loop for animate all graphics
    function animateAllGraphics() {
        margin_left = 88;
        rows
        .slice(start,end)
        .each(function( index ) {
            var data_id = $(this).attr('data-id');
            steps = $( this ).find(':nth-child(3)').text();
            var style = 'style="margin-left:' + margin_left + '%'+ '"';
            var attr = ' data-id=' + data_id; 
            $('<div class="my-div text-center"' + ' id="div_' + (index+1) + '" ' +  style + attr + '>'+ steps +'</div>').appendTo(graphic_area);
            animateGraphic(steps, $('#div_' + (index+1)), speed);
            margin_left-=9.5;
        });
        animateLine(); 
    };
    
    // Previous  
    previous.click(function() {
         if (last_row.is(':visible')){
            /*previous.attr('disabled', 'disabled');
            previous.addClass('disabled');
            next.removeAttr('disabled');
            next.removeClass('disabled');
            next.addClass('active');*/
        } else {
            /*previous.addClass('active');*/
            start+=10;
            end+=10;
            rows.hide();
            cleanGraphiArea();
            rows.slice(start,end).show();
            animateAllGraphics();
        }
    });
   
    // Next
    next.click(function() {
         if (first_row.is(':visible')){
           /* next.attr('disabled', 'disabled');
            next.addClass('disabled');
            previous.removeAttr('disabled');
            previous.removeClass('disabled');
            previous.addClass('active');*/
        } else {
            start-=10;
            end-=10;
            rows.hide();
            cleanGraphiArea();
            rows.slice(start,end).show();
            animateAllGraphics();
        }
    });

    // Transform graphic when mouseenter on row
    rows.mouseenter(function() { 
        var attr = $(this).attr('data-id');
        $( '.my-div[data-id=' + attr + ']')
            .fadeOut('fast')
            .fadeIn('fast');
    });
    
    // Slider
    mySlider
        .slider({
          formatter: function(value) {
               return value;
            }
        })
    mySlider
       .on('slideStop', function() {
           goal = $(this).slider('getValue');
           cleanGraphiArea();
           animateAllGraphics();
        });

    // Settings
    settings_btn.click(function() {
       background_slider.slideToggle('fast');
    });

    // Animate line
    function animateLine() {
        for (var i=0; i<5; i++) {
        line.fadeOut('slow').fadeIn('slow');
        };
    };
})