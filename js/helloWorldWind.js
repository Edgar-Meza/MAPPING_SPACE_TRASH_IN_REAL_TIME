var globoWorld = new WorldWind.WorldWindow("canvasOne");

globoWorld.addLayer(new WorldWind.BMNGOneImageLayer());
globoWorld.addLayer(new WorldWind.BMNGLandsatLayer());


globoWorld.addLayer(new WorldWind.CompassLayer());
globoWorld.addLayer(new WorldWind.CoordinatesDisplayLayer(globoWorld));
globoWorld.addLayer(new WorldWind.ViewControlsLayer(globoWorld));


var satelitesData = [
                      {
                        lat:1.0,
                        lon:-10.7
                      },{
                        lat:5.0,
                        lon:-77.7
                      },{
                        lat:19.0,
                        lon:-15.7
                      }
                      ,{
                        lat:0,
                        lon:0
                      }
                    ]

const basuraData = [
                      {
                        lat:10.0,
                        lon:-30.7
                      },
                      {
                        lat:60.1,
                        lon:10.7
                      },
                      {
                        lat:150.1,
                        lon:-130.7
                      },
                      {
                        lat:160.1,
                        lon:80.7
                      },
                      {
                        lat:166.1,
                        lon:-99.4
                      },
                      {
                        lat:136.1,
                        lon:-39.4
                      },
                      {
                        lat:46.1,
                        lon:-19.4
                      }
                    ]

fetchData = () =>{
  let config = {
            mode:'no-cors',
        }
  fetch('https://www.space-track.org/basicspacedata/query/class/satcat/orderby/PERIOD%20asc/emptyresult/show', config)
  .then(res => console.log(res))
  .then(data =>{
    console.log(data);
  })
}


basura = (basuraData) =>{
  for(var i=0; i<basuraData.length; i++){

    var lati = basuraData[i].lat;
    var long = basuraData[i].lon;

    console.log(lati, long);


    var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
    globoWorld.addLayer(placemarkLayer);

    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

    placemarkAttributes.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.3,
        WorldWind.OFFSET_FRACTION, 0.0);

    placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
                WorldWind.OFFSET_FRACTION, 0.5,
                WorldWind.OFFSET_FRACTION, 1.0);

    placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/view/view-pitch-up-32x32.png";

    var position = new WorldWind.Position(lati, long, 64.66);
    var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

    placemark.label = "Basura "+i+" ubicacion: \n" +
        "Latitud " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
        "Longitud " + placemark.position.longitude.toPrecision(5).toString();
    placemark.alwaysOnTop = true;

    placemarkLayer.addRenderable(placemark);
  }
}

satelites = (satelitesData) =>{
  fetchData();
  for(var i=0; i<satelitesData.length; i++){

    var lati = satelitesData[i].lat;
    var long = satelitesData[i].lon;

    console.log(lati, long);


    var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
    globoWorld.addLayer(placemarkLayer);

    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

    placemarkAttributes.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.3,
        WorldWind.OFFSET_FRACTION, 0.0);

    placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
                WorldWind.OFFSET_FRACTION, 0.5,
                WorldWind.OFFSET_FRACTION, 1.0);

    placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/crosshair.png";

    var position = new WorldWind.Position(lati, long, 100.0);
    var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

    placemark.label = "satelite "+i+" ubicacion: \n" +
        "Latitud " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
        "Longitud " + placemark.position.longitude.toPrecision(5).toString();
    placemark.alwaysOnTop = true;

    placemarkLayer.addRenderable(placemark);
  }
}

satelites(satelitesData);
