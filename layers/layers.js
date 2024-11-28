var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "Хакасия",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Хакасия'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "Районы",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Районы'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "Населенные пункты",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Населенные пункты'
            });
var format_009_KIRBA_4 = new ol.format.GeoJSON();
var features_009_KIRBA_4 = format_009_KIRBA_4.readFeatures(json_009_KIRBA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_009_KIRBA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_009_KIRBA_4.addFeatures(features_009_KIRBA_4);
var lyr_009_KIRBA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_009_KIRBA_4, 
                style: style_009_KIRBA_4,
                popuplayertitle: "009_KIRBA",
                interactive: true,
    title: '009_KIRBA<br />\
    <img src="styles/legend/009_KIRBA_4_0.png" /> Class 3<br />\
    <img src="styles/legend/009_KIRBA_4_1.png" /> Class 4<br />\
    <img src="styles/legend/009_KIRBA_4_2.png" /> Class 5<br />\
    <img src="styles/legend/009_KIRBA_4_3.png" /> Class 6<br />\
    <img src="styles/legend/009_KIRBA_4_4.png" /> Class 7<br />\
    <img src="styles/legend/009_KIRBA_4_5.png" /> Class 8<br />'
        });
var format_008_Koybal_5 = new ol.format.GeoJSON();
var features_008_Koybal_5 = format_008_Koybal_5.readFeatures(json_008_Koybal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_008_Koybal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_008_Koybal_5.addFeatures(features_008_Koybal_5);
var lyr_008_Koybal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_008_Koybal_5, 
                style: style_008_Koybal_5,
                popuplayertitle: "008_Koybal",
                interactive: true,
    title: '008_Koybal<br />\
    <img src="styles/legend/008_Koybal_5_0.png" /> Class 4<br />\
    <img src="styles/legend/008_Koybal_5_1.png" /> Class 5<br />\
    <img src="styles/legend/008_Koybal_5_2.png" /> Class 6<br />\
    <img src="styles/legend/008_Koybal_5_3.png" /> Class 7<br />\
    <img src="styles/legend/008_Koybal_5_4.png" /> Class 8<br />'
        });
var format_001SB_002_6 = new ol.format.GeoJSON();
var features_001SB_002_6 = format_001SB_002_6.readFeatures(json_001SB_002_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_001SB_002_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_001SB_002_6.addFeatures(features_001SB_002_6);
var lyr_001SB_002_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_001SB_002_6, 
                style: style_001SB_002_6,
                popuplayertitle: "001SB_002",
                interactive: true,
    title: '001SB_002<br />\
    <img src="styles/legend/001SB_002_6_0.png" /> Class 4<br />\
    <img src="styles/legend/001SB_002_6_1.png" /> Class 5<br />\
    <img src="styles/legend/001SB_002_6_2.png" /> Class 6<br />\
    <img src="styles/legend/001SB_002_6_3.png" /> Class 7<br />'
        });
var format_003SM_001_7 = new ol.format.GeoJSON();
var features_003SM_001_7 = format_003SM_001_7.readFeatures(json_003SM_001_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_003SM_001_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_003SM_001_7.addFeatures(features_003SM_001_7);
var lyr_003SM_001_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_003SM_001_7, 
                style: style_003SM_001_7,
                popuplayertitle: "003SM_001",
                interactive: true,
    title: '003SM_001<br />\
    <img src="styles/legend/003SM_001_7_0.png" /> Class 5<br />\
    <img src="styles/legend/003SM_001_7_1.png" /> Class 6<br />\
    <img src="styles/legend/003SM_001_7_2.png" /> Class 7<br />'
        });
var format_002SM_001_8 = new ol.format.GeoJSON();
var features_002SM_001_8 = format_002SM_001_8.readFeatures(json_002SM_001_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_002SM_001_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_002SM_001_8.addFeatures(features_002SM_001_8);
var lyr_002SM_001_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_002SM_001_8, 
                style: style_002SM_001_8,
                popuplayertitle: "002SM_001",
                interactive: true,
    title: '002SM_001<br />\
    <img src="styles/legend/002SM_001_8_0.png" /> Class 5<br />\
    <img src="styles/legend/002SM_001_8_1.png" /> Class 6<br />\
    <img src="styles/legend/002SM_001_8_2.png" /> Class 7<br />\
    <img src="styles/legend/002SM_001_8_3.png" /> Class 8<br />'
        });
var format_001SM_001_9 = new ol.format.GeoJSON();
var features_001SM_001_9 = format_001SM_001_9.readFeatures(json_001SM_001_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_001SM_001_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_001SM_001_9.addFeatures(features_001SM_001_9);
var lyr_001SM_001_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_001SM_001_9, 
                style: style_001SM_001_9,
                popuplayertitle: "001SM_001",
                interactive: true,
    title: '001SM_001<br />\
    <img src="styles/legend/001SM_001_9_0.png" /> Class 4<br />\
    <img src="styles/legend/001SM_001_9_1.png" /> Class 5<br />\
    <img src="styles/legend/001SM_001_9_2.png" /> Class 6<br />\
    <img src="styles/legend/001SM_001_9_3.png" /> Class 7<br />'
        });
var format_003VB_001_10 = new ol.format.GeoJSON();
var features_003VB_001_10 = format_003VB_001_10.readFeatures(json_003VB_001_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_003VB_001_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_003VB_001_10.addFeatures(features_003VB_001_10);
var lyr_003VB_001_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_003VB_001_10, 
                style: style_003VB_001_10,
                popuplayertitle: "003VB_001",
                interactive: true,
    title: '003VB_001<br />\
    <img src="styles/legend/003VB_001_10_0.png" /> Class 5<br />\
    <img src="styles/legend/003VB_001_10_1.png" /> Class 6<br />\
    <img src="styles/legend/003VB_001_10_2.png" /> Class 7<br />\
    <img src="styles/legend/003VB_001_10_3.png" /> Class 8<br />'
        });
var format_002VB_001_11 = new ol.format.GeoJSON();
var features_002VB_001_11 = format_002VB_001_11.readFeatures(json_002VB_001_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_002VB_001_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_002VB_001_11.addFeatures(features_002VB_001_11);
var lyr_002VB_001_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_002VB_001_11, 
                style: style_002VB_001_11,
                popuplayertitle: "002VB_001",
                interactive: true,
    title: '002VB_001<br />\
    <img src="styles/legend/002VB_001_11_0.png" /> Class 7<br />\
    <img src="styles/legend/002VB_001_11_1.png" /> Class 8<br />'
        });
var format_001VB_001_12 = new ol.format.GeoJSON();
var features_001VB_001_12 = format_001VB_001_12.readFeatures(json_001VB_001_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_001VB_001_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_001VB_001_12.addFeatures(features_001VB_001_12);
var lyr_001VB_001_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_001VB_001_12, 
                style: style_001VB_001_12,
                popuplayertitle: "001VB_001",
                interactive: true,
    title: '001VB_001<br />\
    <img src="styles/legend/001VB_001_12_0.png" /> Class 6<br />\
    <img src="styles/legend/001VB_001_12_1.png" /> Class 7<br />\
    <img src="styles/legend/001VB_001_12_2.png" /> Class 8<br />'
        });
var format_Regions_13 = new ol.format.GeoJSON();
var features_Regions_13 = format_Regions_13.readFeatures(json_Regions_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_13.addFeatures(features_Regions_13);
var lyr_Regions_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_13, 
                style: style_Regions_13,
                popuplayertitle: "Regions",
                interactive: true,
                title: '<img src="styles/legend/Regions_13.png" /> Regions'
            });

lyr_Google_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr_009_KIRBA_4.setVisible(true);lyr_008_Koybal_5.setVisible(true);lyr_001SB_002_6.setVisible(true);lyr_003SM_001_7.setVisible(true);lyr_002SM_001_8.setVisible(true);lyr_001SM_001_9.setVisible(true);lyr_003VB_001_10.setVisible(true);lyr_002VB_001_11.setVisible(true);lyr_001VB_001_12.setVisible(true);lyr_Regions_13.setVisible(true);
var layersList = [lyr_Google_0,lyr__1,lyr__2,lyr__3,lyr_009_KIRBA_4,lyr_008_Koybal_5,lyr_001SB_002_6,lyr_003SM_001_7,lyr_002SM_001_8,lyr_001SM_001_9,lyr_003VB_001_10,lyr_002VB_001_11,lyr_001VB_001_12,lyr_Regions_13];
lyr__1.set('fieldAliases', {'name_ru': 'name_ru', });
lyr__2.set('fieldAliases', {'name': 'name', });
lyr__3.set('fieldAliases', {'Name_ru': 'Name_ru', });
lyr_009_KIRBA_4.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_008_Koybal_5.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_001SB_002_6.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_003SM_001_7.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас C в надземной фитомассе древостоя, т': 'Запас C в надземной фитомассе древостоя, т', 'Запас C в подземной фитомассе древостоя, т': 'Запас C в подземной фитомассе древостоя, т', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_002SM_001_8.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас C в надземной фитомассе древостоя, т': 'Запас C в надземной фитомассе древостоя, т', 'Запас C в подземной фитомассе древостоя, т': 'Запас C в подземной фитомассе древостоя, т', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_001SM_001_9.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас C в надземной фитомассе древостоя, т': 'Запас C в надземной фитомассе древостоя, т', 'Запас C в подземной фитомассе древостоя, т': 'Запас C в подземной фитомассе древостоя, т', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_003VB_001_10.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас C в надземной фитомассе древостоя, т': 'Запас C в надземной фитомассе древостоя, т', 'Запас C в подземной фитомассе древостоя, т': 'Запас C в подземной фитомассе древостоя, т', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_002VB_001_11.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас C в надземной фитомассе древостоя, т': 'Запас C в надземной фитомассе древостоя, т', 'Запас C в подземной фитомассе древостоя, т': 'Запас C в подземной фитомассе древостоя, т', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_001VB_001_12.set('fieldAliases', {'Class_Name': 'Class_Name', 'Запас C в надземной фитомассе древостоя, т': 'Запас C в надземной фитомассе древостоя, т', 'Запас C в подземной фитомассе древостоя, т': 'Запас C в подземной фитомассе древостоя, т', 'Запас С в надземной части, травостоя и в подстилке, т': 'Запас С в надземной части, травостоя и в подстилке, т', 'Запас С в подземной части, травостоя и в подстилке, т': 'Запас С в подземной части, травостоя и в подстилке, т', 'Запас углерода в почве, т': 'Запас углерода в почве, т', 'Итого, т': 'Итого, т', 'Регион интереса': 'Регион интереса', });
lyr_Regions_13.set('fieldAliases', {'Name': 'Name', });
lyr__1.set('fieldImages', {'name_ru': 'TextEdit', });
lyr__2.set('fieldImages', {'name': 'TextEdit', });
lyr__3.set('fieldImages', {'Name_ru': 'TextEdit', });
lyr_009_KIRBA_4.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_008_Koybal_5.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_001SB_002_6.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_003SM_001_7.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас C в надземной фитомассе древостоя, т': 'TextEdit', 'Запас C в подземной фитомассе древостоя, т': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_002SM_001_8.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас C в надземной фитомассе древостоя, т': 'TextEdit', 'Запас C в подземной фитомассе древостоя, т': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_001SM_001_9.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас C в надземной фитомассе древостоя, т': 'TextEdit', 'Запас C в подземной фитомассе древостоя, т': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_003VB_001_10.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас C в надземной фитомассе древостоя, т': 'TextEdit', 'Запас C в подземной фитомассе древостоя, т': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_002VB_001_11.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас C в надземной фитомассе древостоя, т': 'TextEdit', 'Запас C в подземной фитомассе древостоя, т': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_001VB_001_12.set('fieldImages', {'Class_Name': 'TextEdit', 'Запас C в надземной фитомассе древостоя, т': 'TextEdit', 'Запас C в подземной фитомассе древостоя, т': 'TextEdit', 'Запас С в надземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас С в подземной части, травостоя и в подстилке, т': 'TextEdit', 'Запас углерода в почве, т': 'TextEdit', 'Итого, т': 'TextEdit', 'Регион интереса': 'TextEdit', });
lyr_Regions_13.set('fieldImages', {'Name': 'TextEdit', });
lyr__1.set('fieldLabels', {'name_ru': 'inline label - visible with data', });
lyr__2.set('fieldLabels', {'name': 'inline label - visible with data', });
lyr__3.set('fieldLabels', {'Name_ru': 'inline label - visible with data', });
lyr_009_KIRBA_4.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_008_Koybal_5.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_001SB_002_6.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_003SM_001_7.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас C в надземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас C в подземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_002SM_001_8.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас C в надземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас C в подземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_001SM_001_9.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас C в надземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас C в подземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_003VB_001_10.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас C в надземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас C в подземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_002VB_001_11.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас C в надземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас C в подземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_001VB_001_12.set('fieldLabels', {'Class_Name': 'inline label - visible with data', 'Запас C в надземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас C в подземной фитомассе древостоя, т': 'inline label - visible with data', 'Запас С в надземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас С в подземной части, травостоя и в подстилке, т': 'inline label - visible with data', 'Запас углерода в почве, т': 'inline label - visible with data', 'Итого, т': 'inline label - visible with data', 'Регион интереса': 'inline label - visible with data', });
lyr_Regions_13.set('fieldLabels', {'Name': 'no label', });
lyr_Regions_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});