
const { mapKey } = require('../config');
// const url = require(src=`https://maps.googleapis.com/maps/api/js?key=AIzaSyBe48Rq5YpegRwCh4OvVTXz8y-jPHB_GCs&callback=initMap`)

url();

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    //  var link = src=`https://maps.googleapis.com/maps/api/js?key=AIzaSyBe48Rq5YpegRwCh4OvVTXz8y-jPHB_GCs&callback=initMap`;

    //  return link;
  
  }



initMap();  

https://maps.googleapis.com/maps/api/geocode/json?address=105+N+Main+Ave,+Gresham,+OR&key=AIzaSyBe48Rq5YpegRwCh4OvVTXz8y-jPHB_GCs

105 N Main Ave, Gresham, OR 97030



