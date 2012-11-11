var lastMarker;
var lastCircle;

function onLocationFound(e) {
    var radius = Math.round(e.accuracy / 2);
    if(lastMarker){
	map.removeLayer(lastMarker);
	map.removeLayer(lastCircle);
	}
    lastMarker=L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();

    lastCircle = L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}


function myloc () {
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

    map.locate({setView: true, maxZoom: 16});
}

function point (latlon) {
    map.setView(new L.LatLng(latlon), 15);
}

function togglefull(){
    var fullscreen = document.getElementById("full");
    
    if(fullscreen){
	fullscreen.addEventListener("click",function(){
	    var docElem=document.documentElement;
	    if(docElem.requestFullScreen){
		docElem.requestFullScreen();
		}
	    else if(docElem.mozRequestFullScreen){
		docElem.mozRequestFullScreen();
		}
	    else if(docElem.webkitRequestFullScreen){
		docElem.webkitRequestFullScreen();
		}
	    },false);
    }
    
    

}

