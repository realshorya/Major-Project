var map = L.map('map').setView([28.6139, 77.2090], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

var marker;

function getCoordinates() {
  let place = listingLocation;

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`)
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        document.getElementById("map").innerHTML =
          "<h4 style='text-align:center; margin-top:150px;'>Location not available!</h4>";
        return;
      }

      let lat = parseFloat(data[0].lat);
      let lon = parseFloat(data[0].lon);

      map.setView([lat, lon], 13);

      if (marker) map.removeLayer(marker);

      var redIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [40, 60],
        iconAnchor: [20, 60],
        popupAnchor: [0, -60]
      });

      marker = L.marker([lat, lon], { icon: redIcon })
        .addTo(map)
        .bindPopup(listingTitle)
        .openPopup();
    })
    .catch(() => {
      document.getElementById("map").innerHTML =
        "<h4 style='text-align:center; margin-top:150px;'>Location not available!API fails</h4>";
    });
}

getCoordinates();