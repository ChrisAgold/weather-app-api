// Initialize the map
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
  container: 'map', // ID
  style: 'mapbox://styles/mapbox/navigation-preview-night-v4', // 2-D View
  center: [-98.4916, 29.4252],
  zoom: 9,
});

// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
var marker = new mapboxgl.Marker({ // add options inside Marker, can get data based on where marker is placed //
  draggable: true,
  color: 'green',
})
  .setLngLat([-98.4916, 29.4260])
  .addTo(map);
let searchString = prompt("What would you like to search?"); // Enter "600 Navarro St #350, San Antonio, TX 78205" in prompt in browser

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
geocode(searchString, mapboxToken).then(function(result){
  console.log(result);
  //map.setCenter(result); //setCenter
  //map.jumpTo(result);
  map.flyTo({
    center: result,
    zoom: 14,
    speed: 1,
    curve: 1,
  }).then(function() {
    marker.setLngLat(result)
  });
  //map.setZoom(20);

  // Want to add popup that displays the name of the location
  marker.setPopup(result);
  reverseGeocode(result, mapboxToken).then(function(placename) {
    popup.setText(placename);
    marker.setPopup(popup);

  })
});
mapboxgl.accessToken = mapboxToken; // from key.js file
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
  center: [-98.4916, 29.4252],
  zoom: 9
});

function geocode(search, token) {
  var baseUrl = 'https://api.mapbox.com';
  var endPoint = '/geocoding/v5/mapbox.places/';
  return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
    .then(function(res) {
      return res.json();
      // to get all the data from the request, comment out the following three lines...
    }).then(function(data) {
      return data.features[0].center;
    });
}




