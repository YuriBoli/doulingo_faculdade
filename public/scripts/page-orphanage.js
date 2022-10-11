const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}
// Create map

const map = L.map("mapid", options).setView([2.8155207, -60.6982462], 13);

//ceate and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icons
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [175, 2],
});


L.
marker([2.8155207, -60.6982462], {icon})
.addTo(map)
// .openPopup(popup);


/* image gallery */

function selectImage(event) {
  const button = event.currentTarget

  console.log(button.children)

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  /*função curta
  buttons.forEach((button) => {
    button.classList.remove("active")

  })
  */
  buttons.forEach((removeActiveClass))

  function removeActiveClass (button) {
    button.classList.remove("active")

  }
  //selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  
  // atualizar o container da imagem
  imageContainer.src = image.src

  // adicionar a classe .active para esse botão
  button.classList.add("active")



}


