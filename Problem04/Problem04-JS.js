$('body').append('<div id="main-div"/>');

var imgArray = [
    'steven.jpg',
    'Carra.jpg',
    'Suarez.jpg',
    'dani.jpg',
    'klop.jpg'
];
var counter = 0;
var imgSrcString = '<img src="' + imgArray[counter] + '" height="300" width="350" class="imgs">';
$('#main-div').append(imgSrcString);

var buttonRight = '<button id="right-button">Next</button>';
var buttonLeft = '<button id="left-button">Previous</button>';

$('#main-div').append(buttonRight);
$('#main-div').append(buttonLeft);

function nextButtonPressed(){
    if(counter < imgArray.length - 1){
        counter++;
        imgSrcString = '<img src="' + imgArray[counter] + '" height="300" width="350" class="imgs">';
        $('.imgs').remove();
        $('#main-div').prepend(imgSrcString);
        $('.imgs').css({display:'inline-block', position:'absolute'});
        $('#right-button').css({position:'relative', margin:'10em 0em 0em 23em'});
        $('#left-button').css({position:'relative', margin:'10em 0em 0em -26.2em'});
        setTimeout(nextButtonPressed, 5000);
    }
}

function previousButtonPressed(){
    if(counter > 0){
        counter--;
        imgSrcString = '<img src="' + imgArray[counter] + '" height="300" width="350" class="imgs">';
        $('.imgs').remove();
        $('#main-div').prepend(imgSrcString);
        $('.imgs').css({display:'inline-block', position:'absolute'});
        $('#right-button').css({position:'relative', margin:'10em 0em 0em 23em'});
        $('#left-button').css({position:'relative', margin:'10em 0em 0em -26.2em'});
        setTimeout(nextButtonPressed, 5000);
    }
}

$('#right-button').on('click', nextButtonPressed);
$('#left-button').on('click', previousButtonPressed);

$('.imgs').css({display:'inline-block', position:'absolute'});
$('#right-button').css({position:'relative', margin:'10em 0em 0em 23em'});
$('#left-button').css({position:'relative', margin:'10em 0em 0em -26.2em'});

setTimeout(nextButtonPressed, 5000);