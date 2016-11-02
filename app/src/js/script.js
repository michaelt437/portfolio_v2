var homepage = document.getElementsByTagName('section');
var reveal = function() {
    for (i = 1; i < homepage.length; i++) {
        $(homepage[i]).css({
            'display': 'block'
        });
    }
}

function getAnime() {
    document.getElementById('random').textContent = Math.floor((Math.random()*72) + 1 );
}



/*************
 * PARALLAX SCROLL
 * **********/
var fixedItems = document.getElementsByClassName('fixed-nav-item');
window.onscroll = function() {
    var top = window.pageYOffset;
    var homeHeight = document.getElementById('home').scrollHeight;
    var diff = homeHeight - top;
    var shift = -.5;
    var bg = $('.home-bg');
    var yPos = window.pageYOffset;
    var pos = '50%' + (yPos * shift) + 'px';
    bg.css({
        'background-position': pos
    });
    if(diff <= 100){
        document.getElementById('fixed-nav').style.opacity = 1;
        var counter = 0;
        var i = setInterval(function(){
            fixedItems[counter].style.opacity = 1;
            counter++;
            if(counter === fixedItems.length) {
                clearInterval(i);
            }
        }, 50);
    }else{
        document.getElementById('fixed-nav').style.opacity = 0;
        var counter = fixedItems.length;
        var i = setInterval(function(){
            fixedItems[counter].style.opacity = 0;
            counter--;
            if(counter === 0) {
                clearInterval(i);
            }
        }, 2);
    }
}




var tl = new TimelineMax({
    repeat: 1
});
// tl.to($('.home-bg'), 60, {backgroundSize: "200%"});
