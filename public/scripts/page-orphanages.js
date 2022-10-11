// Create map

const map = L.map("mapid").setView([2.8155207, -60.6982462], 13);

//ceate and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icons
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [175, 2],
});

//Create popup

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>'
); 

L.
marker([2.8155207, -60.6982462], {icon})
.addTo(map)
.bindPopup(popup)
// .openPopup(popup);
