// Click coordinates
var x1, x2, y1, y2;

//Variable indicates wether a mousedown event within your selection happend or not
var selection = false;

// Global mouse button variables
var gMOUSEUP = false;
var gMOUSEDOWN = false;

sPos = $("#selection").position();

// Global Events if left mousebutton is pressed or nor (usability fix)
$(document).mouseup(function () {
    gMOUSEUP = true;
    gMOUSEDOWN = false;
});
$(document).mousedown(function () {
    gMOUSEUP = false;
    gMOUSEDOWN = true;
});

// Selection frame (playground :D)
$("#YDR-Frame").mousedown(function (e) {
    selection = true;
    // store mouseX and mouseY
    x1 = e.pageX;
    y1 = e.pageY;
});

// If selection is true (mousedown on selection frame) the mousemove 
// event will draw the selection div
$('#YDR-Frame').mousemove(function (e) {
    if (selection) {
        // Store current mouseposition
        x2 = e.pageX;
        y2 = e.pageY;

        // Prevent the selection div to get outside of your frame
        //(x2+this.offsetleft < 0) ? selection = false : ($(this).width()+this.offsetleft < x2) ? selection = false : (y2 < 0) ? selection = false : ($(this).height() < y2) ? selection = false : selection = true;;
        // If the mouse is inside your frame resize the selection div
        if (selection) {
            // Calculate the div selection rectancle for positive and negative values
            var TOP = (y1 < y2) ? y1 : y2;
            var LEFT = (x1 < x2) ? x1 : x2;
            var WIDTH = (x1 < x2) ? x2 - x1 : x1 - x2;
            var HEIGHT = (y1 < y2) ? y2 - y1 : y1 - y2;

            // Use CSS to place your selection div
            $("#selection").css({
                position: 'absolute',
                zIndex: 5000,
                left: LEFT,
                top: TOP,
                width: WIDTH,
                height: HEIGHT
            });
            $("#selection").show();

            // Info output
            $('#status2').html('( x1 : ' + x1 + ' )  ( x2 : ' + x2 + ' )  ( y1 : ' + y1 + '  )  ( y2 : ' + y2 + ' )  SPOS:' + TOP);
        }
    }
});
// Selection complete, hide the selection div (or fade it out)
$('#YDR-Frame').mouseup(function () {
    selection = false;
    $("#selection").hide();
    getIt();
});
// Usability fix. If mouse leaves the selection and enters the selection frame again with mousedown
$("#YDR-Frame").mouseenter(function () {
    (gMOUSEDOWN) ? selection = true : selection = false;
});
// Usability fix. If mouse leaves the selection and enters the selection div again with mousedown
$("#selection").mouseenter(function () {
    (gMOUSEDOWN) ? selection = true : selection = false;
});
// Set selection to false, to prevent further selection outside of your selection frame
$('#YDR-Frame').mouseleave(function () {
    selection = false;
});

//Function for the select
function getIt() {

    // Get all elements that can be selected
    $(".mytable").each(function () {
        var p = $(this).offset();
        // Calculate the center of every element, to save performance while calculating if the element is inside the selection rectangle
        var xmiddle = p.left + $(this).width() / 2;
        var ymiddle = p.top + $(this).height() / 2;
        if (matchPos(xmiddle, ymiddle)) {
            // Colorize border, if element is inside the selection
            $(this).css({
                border: "1px solid red"
            });
        }

    });
}

function matchPos(xmiddle, ymiddle) {
    // If selection is done bottom up -> switch value
    if (x1 > x2) {
        myX1 = x2;
        myX2 = x1;
    } else {
        myX1 = x1;
        myX2 = x2;
    }
    if (y1 > y2) {
        myY1 = y2;
        myY2 = y1;
    } else {
        myY1 = y1;
        myY2 = y2;
    }
    // Matching
    if ((xmiddle > myX1) && (xmiddle < myX2)) {
        if ((ymiddle > myY1) && (ymiddle < myY2)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}