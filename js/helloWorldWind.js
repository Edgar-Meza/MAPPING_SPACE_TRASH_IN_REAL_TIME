var globoWorld = new WorldWind.WorldWindow("canvasOne");

globoWorld.addLayer(new WorldWind.BMNGOneImageLayer());
globoWorld.addLayer(new WorldWind.BMNGLandsatLayer());


globoWorld.addLayer(new WorldWind.CompassLayer());
globoWorld.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
globoWorld.addLayer(new WorldWind.ViewControlsLayer(wwd));
