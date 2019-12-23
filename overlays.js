import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from 'ol/source/OSM'
import Overlay from "ol/Overlay";
import { fromLonLat } from "ol/proj";

const mountains = [
  {
    name: "everest",
    coordinate: [86.9253141, 27.9879017]
  },
  {
    name: "kilimanjaro",
    coordinate: [37.352013, -3.065653]
  }
];

const createOverlay =  ((position, name) => {
  const elem = document.createElement('div')
  elem.setAttribute('id', `${name}`)
  elem.classList.add('mount')

    return new Overlay({
        element: elem,
        position: fromLonLat(position),
        positioning: 'center-center'
    })
})

const openStreetMapLayer = new OSM()

const map = new Map({ 
  layers: [new TileLayer({ source: openStreetMapLayer })],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
})

mountains.forEach((mount) => {
  console.log(mount);
  let name = mount.name
  console.log(name);
  
  let position = mount.coordinate
  console.log(position);
  

  let overlayMount = createOverlay(position, name)

  console.log(overlayMount);
  
  map.addOverlay(overlayMount)
})


