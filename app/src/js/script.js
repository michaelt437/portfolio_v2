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
function toggleSVG() {
    console.log('firing');
    document.getElementById('circle').setAttribute('class', document.getElementById('circle').getAttribute('class') === 'circle' ? 'circle toggle' : 'circle');
}


/*************
 * PARALLAX SCROLL
 * **********/
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
        
    }else{

    }
}




var tl = new TimelineMax({
    repeat: 1
});
// tl.to($('.home-bg'), 60, {backgroundSize: "200%"});
