var homepage = document.getElementsByTagName('section');
var reveal = function() {
    for(i = 1; i < homepage.length; i++){
        $(homepage[i]).css({'display': 'block'});
    }
}