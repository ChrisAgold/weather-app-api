// MapBox //
mapboxgl.accessToken = mapboxToken;
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
  center: [-98.4916, 29.4252],
  zoom: 9
});
// Marker
var marker = new mapboxgl.Marker({
  draggable: true
})
  .setLngLat([-98.4916, 29.4252])
  .addTo(map);
// Drag Marker
function onDragEnd() {
  var lngLat = marker.getLngLat();
  coordinates.style.display = 'block';
  coordinates.innerHTML =
    'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);


// Search
let searchString;

// Add an event listener for the search-button 'button'
document.getElementById("city").addEventListener("click", function(){
  searchString = "submitForecast";
  geocode(searchString, mapboxToken).then(function(result){
    console.log(result);
    // map.setCenter(result); // i.e. map.setCenter([-98.48, 29.426])
    map.flyTo({
      center: result,
      zoom: 14,
      speed: 4,
      curve: 1,
    })
    marker.setLngLat(result);

    // Want to add a popup that displays the name of the location at the LONG / LAT coordinates we just found
    reverseGeocode(result, mapboxToken).then(function(placeName) {
      // set the text of the popup to "New York City" (for example)
      console.log("after reverse geocode, the place name is: " + placeName);
      popup.setText(placeName);
      // the popup is already added to the marker, so NO need to add it again with marker.setPopup!

    })
  })
});

// Forcast JS //
$(document).ready(function(){

  $("#submitForecast").click(function(){
return getForecast()
  });
});

function getForecast() {
  
}



