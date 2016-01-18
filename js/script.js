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
  var yelpData = [];
  var iensData = [];
  $.ajax({
    url: "data/Yelp.csv",
    async: false,
    success: function (csv) {
      yelpData = $.csv.toObjects(csv,{"separator":"|"});
    },
    dataType: "text"
  });
  $.ajax({
    url: "data/Iens.csv",
    async: false,
    success: function (csv) {
      iensData = $.csv.toObjects(csv,{"separator":"|"});
    },
    dataType: "text"
  });
  setMarkers(concatData({yelpData,iensData}));
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
    imageMarker = getMarkerImage(obj[i].cijfer);
    var pos = new google.maps.LatLng(obj[i].latitude, obj[i].longitude);
    var marker = new google.maps.Marker({
      position:pos,
      icon:'/img/Marker/'+imageMarker,
      map:map,
      title:obj[i].naam
    });
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

  var html = "<div id='specifications'>"
  // Full image
  html += "<div class='images-full'><img src='http://www.nandos.com/sites/all/themes/nandos/images/restaurants/restaurant-carousel-1.jpg'></div>"

  // Information about restaurant
  html += "<div class='information'>"
  html += "<h1>"+name+"</h1>"
  html += "<div class='Beschrijving'>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e</div>"

  // Adres gegevens
  html += "<div class='adres'><h2>Adresgegevens</h2>"
  html += "<div class='street'>Wijnhaven 101</div>"
  html += "<div class='city'>3303BL Rotterdam</div>"
  html += "</div>"

  // Openings tijden
  html += "<div class='tijden'><h2>Openingstijden</h2>"
  html += "<table>"
  html += "<tr><td>Maandag</td><td>:</td><td>10:00 - 12:00</td></tr>"
  html += "<tr><td>Dinsdag</td><td>:</td><td>10:00 - 12:00</td></tr>"
  html += "<tr><td>Woensdag</td><td>:</td><td>10:00 - 12:00</td></tr>"
  html += "<tr><td>Donderdag</td><td>:</td><td>10:00 - 12:00</td></tr>"
  html += "<tr><td>Vrijdag</td><td>:</td><td>10:00 - 12:00</td></tr>"
  html += "<tr><td>Zaterdag</td><td>:</td><td>10:00 - 12:00</td></tr>"
  html += "<tr><td>Zondag</td><td>:</td><td>Gesloten</td></tr>"
  html += "</table></div>"

  // Reviews
  html += "<div class='recenties'><h2>Recenties</h2></div>"
  html += "<div class='review'>"
  html += "<h3>Leuk eten</h3>"
  html += "<div class='text'>Super lekker eten man</div>"
  html += "</div>"
  html += "<div class='review'>"
  html += "<h3>Water</h3>"
  html += "<div class='text'>Het water was erg lekker van smaak</div>"
  html += "</div>"

  // Social media
  html += "<div class='socialmedia'>"
  html += "<div class='twitter'><h3>Twitter</h3>"
  html += "<div class='info'>test123</div>"
  html += "<div class='info'>test123</div>"
  html += "<div class='info'>test123</div>"
  html += "</div>"
  html += "<div class='facebook'><h3>Facebook</h3>"
  html += "<div class='info'>test123</div>"
  html += "<div class='info'>test123</div>"
  html += "<div class='info'>test123</div>"
  html += "</div>"
  html += "</div>"
  html += "</div>"
  html += "</div>"
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
    // Bepaal de kleur
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

      // Deafult marker
      file = 'default.png';
    } else {
      if (getal <= na && getal > voor) {
        // marker_color1_1_0.png, haal de marker op.
        file = 'marker_color' + color + '_' + a[0] + '_' + a[1] + '.png';
      }
    }

  }
  return file;
}

//
// Verkrijg één tabel met geconcateneerde gegevens van meerdere bronnen.
//
function concatData(data){
  var concatted = new Array();
  var counter = new Array();
  var i = 1;
  for(k in data){
    for(d = 0; d < data[k].length; d++){
      var exists = false;
      var eIndex = 0;
      // Loopen door de al geconcateneerde gegevens om te checken of het restaurant al bestaat, op basis van adres. Als die bestaat de index opslaan voor later gebruik.
      for(f = 0;f < concatted.length; f++){
        if(concatted[f].adres == data[k][d].adres){
          exists = true;
          eIndex = f;
          break;
        }
      }
      if(exists){
        // Als restaurant bestaat, gegevens in de concatted array vullen als die nog niet gevuld zijn.
        concatted[f].naam = (concatted[f].naam == "" ? data[k][d].naam : concatted[f].naam);
        concatted[f].adres = (concatted[f].adres == "" ? data[k][d].adres.replace("+",' ') : concatted[f].adres.replace("+",' '));
        concatted[f].categorie = (concatted[f].categorie == "" ? data[k][d].categorie : concatted[f].categorie);
        if(data[k][d].cijfer.trim() != "" && data[k][d].cijfer.trim().length > 0){
          concatted[f].cijfer = parseFloat(concatted[f].cijfer)+parseFloat(data[k][d].cijfer.replace(",","."));
          counter[f] = counter[f]+1;
        }
        concatted[f].latitude = (concatted[f].latitude == 0 ? data[k][d].latitude : concatted[f].latitude);
        concatted[f].longitude = (concatted[f].longitude == 0 ? data[k][d].longitude : concatted[f].longitude);
        concatted[f].images = (concatted[f].images == "" ? data[k][d].images : concatted[f].images);
      } else {
        // Als restaurant nog niet bestaat, gegevens standaard vullen met wat fout afhandeling voor als de gegevens niet in de csv stonden.
        concatted[d] = {
          naam: (data[k][d].naam != undefined ? data[k][d].naam : ''),
          adres: (data[k][d].adres != undefined ? data[k][d].adres.replace("+",' ') : ''),
          categorie: (data[k][d].categorie ? data[k][d].categorie : ''),
          cijfer: (parseFloat(data[k][d].cijfer.replace(",",".")) != undefined ? parseFloat(data[k][d].cijfer.replace(",",".")) : 0),
          latitude: (data[k][d].latitude != undefined ? data[k][d].latitude : 0),
          longitude: (data[k][d].longitude != undefined ? data[k][d].longitude : 0),
          images: (data[k][d].images ? data[k][d].images : '')
        };
        counter[f] = 1;
      }

      // Als we bij de laatste csv array zijn
      if(i == Object.size(data)){
        // Als de counter groter is dan 1; wat betekend dat het cijfer minimaal 1 keer is opgehoogd met een cijfer uit een ander csv bestand.
        if(counter[f] && counter[f] > 1){
          // Als cijfer is opgehoogd, cijfer delen door het aantal keer dat het is opgehoogd, hierdoor krijgen we het gemiddelde
          concatted[d].cijfer = parseFloat(concatted[d].cijfer)/counter[f];
        }
      }
    }
    i++;  
  }
  return concatted;
}

//
// Lengte van een key-based array terug krijgen.
//
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};