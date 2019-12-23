// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// Feature format for reading and writing data in the GPX format.
import GPX from 'ol/format/GPX'

// Feature format for reading and writing data in the GeoJSON format.
import GeoJSON from 'ol/format/GeoJSON'

// Provides a source of features for vector layers.
import VectorSource from 'ol/source/Vector'

// Vector data that is rendered client-side.
import VectorLayer from 'ol/layer/Vector'

// Openstreet Map Standard
const openStreetMapLayer = new TileLayer({
  source: new OSM(),
})

// Vector data source in GeoJSON format
const vectorGeoJSON = new VectorLayer({
  source: new VectorSource({
    url: 'https://raw.githubusercontent.com/sandix34/Openlayers-test-workshop/master/data/pays.geojson',
    format: new GeoJSON()
  })
})

// Vector data source in GPX format
const vectorGPX = new VectorLayer({
  source: new VectorSource({
    url: 'https://raw.githubusercontent.com/sandix34/Openlayers-test-workshop/master/data/capitales.gpx',
    format: new GPX()
  })
})

// declare the map 
new Map({
  layers: [openStreetMapLayer, vectorGPX, vectorGeoJSON],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
})