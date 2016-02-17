function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.2964765, lng: -71.0800167},
    zoom: 17,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'on' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: true
  });

  var marker = new google.maps.Marker({
    position: {lat: 42.2964765, lng: -71.0800167},
    map: map
  });

}