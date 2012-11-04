function full(){
    var elem = $(document).getElementById(map);
    if (elem.requestFullScreen) {
	elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
	elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
	elem.webkitRequestFullScreen();
    }
}
