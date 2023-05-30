var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SMGOPOSITION_1 = new ol.format.GeoJSON();
var features_SMGOPOSITION_1 = format_SMGOPOSITION_1.readFeatures(json_SMGOPOSITION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMGOPOSITION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMGOPOSITION_1.addFeatures(features_SMGOPOSITION_1);
var lyr_SMGOPOSITION_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMGOPOSITION_1, 
                style: style_SMGOPOSITION_1,
                interactive: true,
                title: '<img src="styles/legend/SMGOPOSITION_1.png" /> SMGO-POSITION'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SMGOPOSITION_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SMGOPOSITION_1];
lyr_SMGOPOSITION_1.set('fieldAliases', {'A': 'A', 'X': 'X', 'Y': 'Y', });
lyr_SMGOPOSITION_1.set('fieldImages', {'A': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_SMGOPOSITION_1.set('fieldLabels', {'A': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_SMGOPOSITION_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});