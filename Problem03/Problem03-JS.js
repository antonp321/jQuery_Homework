var theJSON = [
    {"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},
    {"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},
    {"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}
];

var tableHeaders = Object.keys(theJSON[0]);
console.log(tableHeaders);

var content = "<table border='1px solid'><tr>";
for(var i = 0; i < tableHeaders.length; i++) {
    content += '<th border="1px solid">' + tableHeaders[i] + '</th>';
    if(i === tableHeaders.length - 1){
        content += '</tr>';
    }
}

for(var i = 0; i < theJSON.length; i++){
    for(var o = 0; o < tableHeaders.length; o++) {
        content += '<td border="1px solid">' + theJSON[i][tableHeaders[o]] + '</td>';
        if(o === tableHeaders.length - 1){
            content += '</tr>';
        }
    }
}
content += "</table>";

$('body').append(content);
$('th').css('background', 'green');