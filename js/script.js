$(document).ready(function(){
  // Load the map after the page finished loading
  google.maps.event.addDomListener(window, 'load', initialize);

  // If clicked outside the slideout and not on the "Meer >>" button, than close the slideout
  $(document).click(function(event){
    if(!event.target.closest("#specifications, .more")){
      $("#specifications").animate({width:"hide"},350);
    }
  });
});

// Make the map object, when done, start the chain: readCSV() -> setMarker()
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.9163058, 4.4912628),
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  readCSV();
}

//
// Read the CSV file(s) and place it in an multidemensional array
//
function readCSV(){
  $.ajax({
    url: "data/Yelp.csv",
    async: false,
    success: function (csv) {
      csvdata = $.csv.toObjects(csv,{"separator":"|"});
    },
    dataType: "text",
    complete: function () {
      // Call a function on complete
      setMarkers(csvdata);
    }
  });
}

//
// Place a marker on the map with the given data
//
function setMarkers(obj){
  var infoWindow = new google.maps.InfoWindow({
    maxWidth: 310
  });

  var markers = Array();
  for(i = 0; i < obj.length; i++){
    data = obj[i];
    imageMarker = getMarkerImage(data.cijfer);
    var pos = new google.maps.LatLng(data.latitude, data.longitude);
    var marker = new google.maps.Marker({
      position:pos,
      icon:'/img/'+imageMarker,
      map:map,
      title:data.naam
    });
    console.log(data);
    // Push markers to array for future use
    markers.push(marker);
    // Add click listener to the marker, push content for popup
    google.maps.event.addListener(marker, 'click', (function(marker, i){
      return function(){
        infoWindow.setContent("<div class='marker'>"+
            "<div class='left'><img src='"+obj[i].images+"'></div>"+
            "<div class='right'>"+
            "<label class='name'>"+obj[i].naam+"</label>"+
            "<p class='address'>"+obj[i].categorie+"</p>"+
            "<div class='more' onclick='showMore(\""+obj[i].naam+"\")'>Meer >></div>"+
            "</div>"+
            "</div>");
        infoWindow.open(map, marker);
      }
    })(marker, i));
  }

  // Center the map view
  function autoCenter(){
    // new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    for(var i = 0; i < markers.length; i++){
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  }
  autoCenter();
}

//
// Show the extra information after clicking on "Meer >>" in the marker popup
//
function showMore(name){
  // Always remove the previous opened window
  $("#specifications").remove();

  var html = "<div id='specifications'><h1>"+name+"</h1></div>"
  $("body").append(html);
  var height = $("body").height() - $("#head").height();
  $("#specifications").css({"height":height});
  $("#specifications").animate({width:'toggle'},350);
}

//
// Bepaal doormiddel van het cijfer de afbeelding van de marker
//
function getMarkerImage(getal) {
  count = 0;
  file = '';
  while (count < 10) {

    voor = count;
    count = count + 0.5;
    na = count;

    var num=na;
    var str=num.toString();
    var numarray=str.split('.');
    var a=new Array();
    a=numarray;

    if (a[1] != 5) {
      a[1] = 0;
    }

    color =0;
    if (getal <= 2.4 && getal > 0) {
      color = 1
    }
    else if (getal <= 4.4 && getal > 2.4) {
      color = 2
    }
    else if (getal <= 6.4 && getal > 4.4) {
      color = 3
    }
    else if (getal <= 8.4 && getal > 6.4) {
      color = 4
    }
    else if (getal <= 10 && getal > 8.4) {
      color = 5
    }

    if (color == 0) {
      file = 'marker_default.jpeg';
    } else {
      if (getal <= na && getal > voor) {
        file = 'marker_color' + color + '_' + a[0] + '_' + a[1] + '.jpeg';
      }
    }

    file = 'Marker.png';

  }
  return file;
}