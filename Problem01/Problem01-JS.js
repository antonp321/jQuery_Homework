function addElement(parrent, child, before){

    if(before){
        var appendSomeElement = $(child);
        $(parrent).before(appendSomeElement);
    }
    else{
        var appendSomeElement = $(child);
        $(parrent).after(appendSomeElement);
    }
}

addElement('ul', '<li />', true);
addElement('ul', '<p />', false);