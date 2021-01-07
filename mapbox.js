//MAPBOX
mapboxgl.accessToken = mapboxToken;
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
  center: [-98.4916, 29.4252],
  zoom: 10
});
// adds zoom controls on the map.
map.addControl(new mapboxgl.NavigationControl());



var marker = new mapboxgl.Marker({
  draggable: true

})
  .setLngLat([-98.4916, 29.4252])
  .addTo(map)
  .setDraggable(true)
  .on('dragend', onDragEnd);


// Drag Marker Function //
function onDragEnd() {
  var lngLat = marker.getLngLat();
  $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: weatherToken,
    lat: lngLat.lat,
    lon: lngLat.lng,
    units: "imperial"
  })
    .done(function (data) {
      updateTable(data);
      map.flyTo({center: [lngLat.lng, lngLat.lat]})
      map.set
    });
}


