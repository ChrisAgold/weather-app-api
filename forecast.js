// // Forcast JS //
// $(document).ready(function () {
//
//   $("#submitForecast").click(function () {
//     return getForecast();
//   });
// });
//
// function getForecast() {
//   var city = $("#city").val();
//   var days = $("#days").val();
//
//   if (city) !='' && days != ''){
//
//     $.ajax({
//       url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=imperial" + "&cnt=5" + "&APPID=" + weatherToken,
//       type: "GET",
//       dataType: "jsonp",
//       success: function (data) {
//         var table = '';
//
//         for (var i = 0; i < data.list.length; i++) {
//           table += "<tr>";
//
//           table += "<td>" + data.list[i].weather[0].icon + "</td>"
//           table += "<td>" + data.list[i].weather[0].main + "</td>"
//           table += "<td>" + data.list[i].weather[0].description + "</td>"
//
//           table += "</tr>"
//         }
//         $("#forecastWeather").html(table);
//         var city = $("#city").val('');
//       }
//     });
//   }
// else
//   {
//     $("#error-message").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
//   }
// }

$(document).ready(function(){

  $("#submitForecast").click(function(){
    return getForecast();
  });

});
// // Lat & long render
// let latLong = [-83.44, -84.03];
// function getWeather(lng, lat) {
//   $.get("http://api.openweathermap.org/data/2,5/onecall", {
//     APPID: weatherToken,
//     lat: lat,
//     lon: lng,
//     units: "imperial"
//   }).done => {
//     $("#weatherArea").html(render(data.daily[0]));
//     console.log(data.daily);
//   });
// }
// var lngLat = marker.getLngLat();
// getWeather(lngLat.lng, lngLat.lat);


// Search Function
function getForecast(){
  var city = $("#city").val();
  var days = $("#days").val();

  if(city != '' && days != ''){

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=metric" + "&cnt=5" + "&APPID=" + weatherToken,
      type: "GET",
      dataType: "jsonp",
      success: function(data){

        var table = '';

        var header = '<h2 style="font-weight:bold; font-size:30px; margin-top:20px;">Weather forecast for ' + data.city.name + ', ' + data.city.country + '</h2>'

        for(var i = 0; i < data.list.length; i++){
          table += "<tr>";

          table += "<td><img src='http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'></td>";
          table += "<td>" + data.list[i].weather[0].main + "</td>";
          table += "<td>" + data.list[i].weather[0].description + "</td>";
          table += "<td>" + data.list[i].temp.morn + "&deg;C</td>";
          table += "<td>" + data.list[i].temp.night + "&deg;C</td>";
          table += "<td>" + data.list[i].temp.min + "&deg;C</td>";
          table += "<td>" + data.list[i].temp.max + "&deg;C</td>";
          table += "<td>" + data.list[i].pressure + "hpa</td>";
          table += "<td>" + data.list[i].humidity + "%</td>";
          table += "<td>" + data.list[i].speed + "m/s</td>";
          table += "<td>" + data.list[i].deg + "&deg;</td>";


          table += "</tr>";
        }

        $("#forecastWeather").html(table);
        $("#header").html(header);

        $("#city").val('');
        $("#days").val('')

      }


    });

  }else{
    $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
  }

}





function onDragEnd() {
  var lngLat = marker.getLngLat();
  $.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat: lngLat.lat,
    lon: lngLat.lng,
    units: "imperial"
  })
    .done(function (data) {
      updateWeatherCards(data);
      map.flyTo({center: [lngLat.lng, lngLat.lat]})
      map.set
    });
}


