// JS utility to convert address to lat long by google geocode api


var API_KEY = "xxx";

var addressArray = ["Washington D. C., DC, USA"];

var googleApiPreUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?address=";
var googleApiPostUrl = `&components=country:US&key=` + API_KEY;

function buildGoogleApiUrl(addr) {
  return googleApiPreUrl + addr + googleApiPostUrl;
}

function processAddresss() {
  addressArray.forEach(function(geoAddres) {
    var apiUrl = buildGoogleApiUrl(geoAddres);
    $.get(apiUrl, function(data, status) {
      var lat = data.results[0].geometry.location.lat;
      var lng = data.results[0].geometry.location.lng;

      console.log(lat, lng);
    });
  });
}

processAddresss();
