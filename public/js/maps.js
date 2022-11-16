// Initialize and add the map
function initMap() {
  // The location of Uluru
  const hawaii = { lat: 19.741755, lng: 151.844437 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: hawaii,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: hawaii,
    map: map,
  });
}

window.initMap = initMap;

<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_YP8aCoVnnRWfhHT6ozNbDEFPhshZ81s&callback=initMap"
></script>;
