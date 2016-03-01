var divElement = $('<div id="color-div"/>');
var elementTextInput = $("<input type='text' id='input1'/>");
var elementColorInput = $("<input type='color' id='someColorId'/>");
var elementButton = $("<button id='paintButton'> Paint </button>");
$('ul').before(divElement);
$('#color-div').prepend("<span id='class1'> Class: </span>");
$('#class1').after(elementTextInput);
$('#input1').after("<br />");
$('#color-div').append("<span id='color1'> Color: </span>");
$('#color-div').append(elementColorInput);
$('#someColorId').after('<br />');
$('#color-div').append(elementButton);

function paintTheBackground(){
    var theClassName = '.';
    theClassName += $('#input1').val();
    var theColorValue = $('#someColorId').val();
    $(theClassName).css('background', theColorValue);
}

$('#paintButton').on('click', paintTheBackground);