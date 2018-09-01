var map;
var allArea;
    

// Initiation ---------------------------------------------------------
var initLatLng = {lat: 13.737407, lng: 100.525651};
var initZoom = 15;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: initLatLng,
        zoom: initZoom
    });

    renderInitPolygon(map);
}
// --------------------------------------------------------------------



function renderPolygon(map,name,coord,color){
    var polyglon = new google.maps.Polygon({
        paths: coord,
        strokeColor: 'black',
        strokeOpacity: 0.8,
        strokeWeight: 0,
        fillColor: color,
        fillOpacity: 0.35
      });
      polyglon.setMap(map);
      
}

function renderInitPolygon(map){
    var area1 = [
        {lat: 13.746661, lng: 100.530404},
        {lat: 13.745405, lng: 100.535849},
        {lat: 13.743610, lng: 100.535449},
        {lat: 13.744277, lng: 100.530675}
    ]
    
    var area2 = [
        {lat: 13.730869, lng: 100.533599},
        {lat: 13.729795, lng: 100.536646},
        {lat: 13.726387, lng: 100.528202},
        {lat: 13.728565, lng: 100.527108}
    ]
    
    var area3 = [
        {lat: 13.736210, lng: 100.511642},
        {lat: 13.736200, lng: 100.513541},
        {lat: 13.731927, lng: 100.514925},
        {lat: 13.730020, lng: 100.513874}
    ]

    renderPolygon(map,area1,'green');
    renderPolygon(map,area2,'blue');
    renderPolygon(map,area3,'red');
}
