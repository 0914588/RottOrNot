$(document).ready(function(){
  google.maps.event.addDomListener(window, 'load', initialize);

  $(document).click(function(event){
    if(!event.target.closest("#specifications, .more")){
      $("#specifications").animate({width:"hide"},350);
    }
  });
});

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
    content:"<div class='marker'>"+
      "<label class='name'>De IJssalon</label>"+
      "<p class='address'>Ice Cream & Frozen Yoghurt</p>"+
      "<div class='more' onclick='showMore(\"De IJssalon\")'>Meer >></div>"+
    "</div>"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

}

function showMore(name){
  var html = "<div id='specifications'><h1>De IJssalon</h1></div>"
  $("body").append(html);
  var height = $("body").height() - $("#head").height();
  $("#specifications").css({"height":height});
  $("#specifications").animate({width:'toggle'},350);
}