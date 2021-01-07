// // Initialize the map
// mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
//   container: 'map', // ID
//   style: 'mapbox://styles/mapbox/navigation-preview-night-v4', // 2-D View
//   center: [-98.4916, 29.4252],
//   zoom: 9,
// });
//
// // TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
// var marker = new mapboxgl.Marker({ // add options inside Marker, can get data based on where marker is placed //
//   draggable: true,
//   color: 'green',
// })
//   .setLngLat([-98.4916, 29.4260])
//   .addTo(map);
// let searchString = prompt("What would you like to search?"); // Enter "600 Navarro St #350, San Antonio, TX 78205" in prompt in browser
//
// // TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
// geocode(searchString, mapboxToken).then(function(result){
//   console.log(result);
//   //map.setCenter(result); //setCenter
//   //map.jumpTo(result);
//   map.flyTo({
//     center: result,
//     zoom: 14,
//     speed: 1,
//     curve: 1,
//   }).then(function() {
//     marker.setLngLat(result)
//   });
//   //map.setZoom(20);
//
//   // Want to add popup that displays the name of the location
//   marker.setPopup(result);
//   reverseGeocode(result, mapboxToken).then(function(placename) {
//     popup.setText(placename);
//     marker.setPopup(popup);
//
//   })
// });



// mapboxgl.accessToken = mapboxToken; // from key.js file
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
//   center: [-98.4916, 29.4252],
//   zoom: 9
// });

// function geocode(search, token) {
//   var baseUrl = 'https://api.mapbox.com';
//   var endPoint = '/geocoding/v5/mapbox.places/';
//   return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//     .then(function(res) {
//       return res.json();
//       // to get all the data from the request, comment out the following three lines...
//     }).then(function(data) {
//       return data.features[0].center;
//     });
// }

// Project














// // Mapbox api
// var marker = new mapboxgl.Marker({
//   color: 'green',
// })
//   .setLngLat([-98.48613798052709, 29.42598667424656])
//   .addTo(map);
//
// let searchString;
//
// // Add an event listener for the search-button 'button'
// document.getElementById("city").addEventListener("click", function(){
//   searchString = prompt("What would you like to search?");
//   geocode(searchString, mapboxToken).then(function(result){
//     console.log(result);
//     // map.setCenter(result); // i.e. map.setCenter([-98.48, 29.426])
//     map.flyTo({
//       center: result,
//       zoom: 14,
//       speed: 4,
//       curve: 1,
//     })
//     marker.setLngLat(result);
//
//     // Want to add a popup that displays the name of the location at the LONG / LAT coordinates we just found
//     reverseGeocode(result, mapboxToken).then(function(placeName) {
//       // set the text of the popup to "New York City" (for example)
//       console.log("after reverse geocode, the place name is: " + placeName);
//       popup.setText(placeName);
//       // the popup is already added to the marker, so NO need to add it again with marker.setPopup!
//
//     })
//   })
// });



mapboxgl.accessToken = mapboxToken;
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-98.4916, 29.4252],
  zoom: 9
});

var marker = new mapboxgl.Marker({
  draggable: true
})
  .setLngLat([-98.4916, 29.4252])
  .addTo(map);

function onDragEnd() {
  var lngLat = marker.getLngLat();
  coordinates.style.display = 'block';
  coordinates.innerHTML =
    'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);
