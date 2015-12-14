function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.9163058, 4.4912628),
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

var marker=new google.maps.Marker({
  position:new google.maps.LatLng(51.9163058, 4.4912628),
  icon:'../img/Marker.png'
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Een bericht met meer informatie over de locatie"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });

}
google.maps.event.addDomListener(window, 'load', initialize);