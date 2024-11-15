(function(){
    var yearCreated = 2023; //change this to the year the website was made.
    var owners = ['Alexander Weinhart']; //change the string value to the legal name of the web designer or the federally-official DBA for the business owned by the web designer.

    //the rest of this is behind-the-scenes stuff. Please do not modify.
    var ownerNum = owners.length;

    var date = new Date();
    var year = date.getFullYear(); //this gets the full year

    console.log('the current year is: ' + year); //shows current year in console
    console.log('the copyright year is: ' + yearCreated);// shows year created in console
    console.log('the number of copyright owners is: ' + ownerNum); //shows number of copyright owners in console

    var copyid = document.getElementById('copy'); //snag the copyright on the DOM
    var copyright = ''
    for(let i = 0; i < ownerNum; i++){
        if(year > yearCreated){ //decide if an origin year needs to be added in with the current year.
            copyright += '<p>&copy;' + yearCreated + '-' + year + ' ' + owners[i] + '</p>'; //this has an origin year.
        } else {
            copyright += '<p>&copy;' + year + ' ' + owners[i] + '</p>'; //the origin year is this year so no origin year.
        };
    };
    copyid.innerHTML = copyright;
}());