// Forcast JS //

$(document).ready(function () {

  $("#submitForecast").click(function () {
    return getForecast();
  });

});

// Search Function
function getForecast() {
  var city = $("#city").val();
  var days = $("#days").val();

  if (city != '' && days != '') {

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=metric" + "&cnt=5" + "&APPID=" + weatherToken,
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        var table = '';

        console.log(data);
        var header = '<h2 style="font-weight:bold; font-size:30px; margin-top:20px;">Weather forecast for ' + data.city.name + ', ' + data.city.country + '</h2>'

        for (var i = 0; i < data.list.length; i++) {
          table += "<tr>";

          table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>";
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
// method to move marker to location in search box
        var long = data.city.coord.lat
        var lat = data.city.coord.lon
        map.flyTo({center: [lat, long]})
        map.set


      }


    });

  } else {
    $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
  }

}

// Dragging Marker //
function updateTable(data) {
  var table = '';

  var header = '<h2 style="font-weight:bold; font-size:30px; margin-top:20px;">Weather forecast for ' + data.city.name + ', ' + data.city.country + '</h2>'

  for (var i = 0; i < data.list.length; i++) {
    table += "<tr>";

    table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>";
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





