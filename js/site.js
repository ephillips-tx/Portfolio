if (window.matchMedia('(min-width: 991px)').matches) {
	sideNavToggle();
}

function sideNavToggle() {
    var sideNav = document.getElementById('sideNav');
    var val = sideNav.style.left;


    if (val == '0px'){
        sideNav.style.left = '-300px';
        console.log(val);
    } else {
        sideNav.style.left = '0px';
        console.log(val);
    }
}

//if viewport is mobile
//change inner html of #arrow to swipe_down
// this should change the google material icon shown