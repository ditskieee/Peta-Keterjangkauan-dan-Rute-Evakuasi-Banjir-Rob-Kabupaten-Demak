var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SENTINEL23_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SENTINEL23<br />\
    <img src="styles/legend/SENTINEL23_1_0.png" /> -0.7822<br />\
    <img src="styles/legend/SENTINEL23_1_1.png" /> -0.7753<br />\
    <img src="styles/legend/SENTINEL23_1_2.png" /> -0.7683<br />\
    <img src="styles/legend/SENTINEL23_1_3.png" /> -0.7613<br />\
    <img src="styles/legend/SENTINEL23_1_4.png" /> -0.7544<br />\
    <img src="styles/legend/SENTINEL23_1_5.png" /> -0.7474<br />\
    <img src="styles/legend/SENTINEL23_1_6.png" /> -0.7404<br />\
    <img src="styles/legend/SENTINEL23_1_7.png" /> -0.7335<br />\
    <img src="styles/legend/SENTINEL23_1_8.png" /> -0.7265<br />\
    <img src="styles/legend/SENTINEL23_1_9.png" /> -0.7196<br />\
    <img src="styles/legend/SENTINEL23_1_10.png" /> -0.7126<br />\
    <img src="styles/legend/SENTINEL23_1_11.png" /> -0.7056<br />\
    <img src="styles/legend/SENTINEL23_1_12.png" /> -0.6987<br />\
    <img src="styles/legend/SENTINEL23_1_13.png" /> -0.6917<br />\
    <img src="styles/legend/SENTINEL23_1_14.png" /> -0.6848<br />\
    <img src="styles/legend/SENTINEL23_1_15.png" /> -0.6778<br />\
    <img src="styles/legend/SENTINEL23_1_16.png" /> -0.6708<br />\
    <img src="styles/legend/SENTINEL23_1_17.png" /> -0.6639<br />\
    <img src="styles/legend/SENTINEL23_1_18.png" /> -0.6569<br />\
    <img src="styles/legend/SENTINEL23_1_19.png" /> -0.6499<br />\
    <img src="styles/legend/SENTINEL23_1_20.png" /> -0.6430<br />\
    <img src="styles/legend/SENTINEL23_1_21.png" /> -0.6360<br />\
    <img src="styles/legend/SENTINEL23_1_22.png" /> -0.6291<br />\
    <img src="styles/legend/SENTINEL23_1_23.png" /> -0.6221<br />\
    <img src="styles/legend/SENTINEL23_1_24.png" /> -0.6151<br />\
    <img src="styles/legend/SENTINEL23_1_25.png" /> -0.6082<br />\
    <img src="styles/legend/SENTINEL23_1_26.png" /> -0.6012<br />\
    <img src="styles/legend/SENTINEL23_1_27.png" /> -0.5942<br />\
    <img src="styles/legend/SENTINEL23_1_28.png" /> -0.5873<br />\
    <img src="styles/legend/SENTINEL23_1_29.png" /> -0.5803<br />\
    <img src="styles/legend/SENTINEL23_1_30.png" /> -0.5734<br />\
    <img src="styles/legend/SENTINEL23_1_31.png" /> -0.5664<br />\
    <img src="styles/legend/SENTINEL23_1_32.png" /> -0.5594<br />\
    <img src="styles/legend/SENTINEL23_1_33.png" /> -0.5525<br />\
    <img src="styles/legend/SENTINEL23_1_34.png" /> -0.5455<br />\
    <img src="styles/legend/SENTINEL23_1_35.png" /> -0.5386<br />\
    <img src="styles/legend/SENTINEL23_1_36.png" /> -0.5316<br />\
    <img src="styles/legend/SENTINEL23_1_37.png" /> -0.5246<br />\
    <img src="styles/legend/SENTINEL23_1_38.png" /> -0.5177<br />\
    <img src="styles/legend/SENTINEL23_1_39.png" /> -0.5107<br />\
    <img src="styles/legend/SENTINEL23_1_40.png" /> -0.5037<br />\
    <img src="styles/legend/SENTINEL23_1_41.png" /> -0.4968<br />\
    <img src="styles/legend/SENTINEL23_1_42.png" /> -0.4898<br />\
    <img src="styles/legend/SENTINEL23_1_43.png" /> -0.4829<br />\
    <img src="styles/legend/SENTINEL23_1_44.png" /> -0.4759<br />\
    <img src="styles/legend/SENTINEL23_1_45.png" /> -0.4689<br />\
    <img src="styles/legend/SENTINEL23_1_46.png" /> -0.4620<br />\
    <img src="styles/legend/SENTINEL23_1_47.png" /> -0.4550<br />\
    <img src="styles/legend/SENTINEL23_1_48.png" /> -0.4481<br />\
    <img src="styles/legend/SENTINEL23_1_49.png" /> -0.4411<br />\
    <img src="styles/legend/SENTINEL23_1_50.png" /> -0.4341<br />\
    <img src="styles/legend/SENTINEL23_1_51.png" /> -0.4272<br />\
    <img src="styles/legend/SENTINEL23_1_52.png" /> -0.4202<br />\
    <img src="styles/legend/SENTINEL23_1_53.png" /> -0.4132<br />\
    <img src="styles/legend/SENTINEL23_1_54.png" /> -0.4063<br />\
    <img src="styles/legend/SENTINEL23_1_55.png" /> -0.3993<br />\
    <img src="styles/legend/SENTINEL23_1_56.png" /> -0.3924<br />\
    <img src="styles/legend/SENTINEL23_1_57.png" /> -0.3854<br />\
    <img src="styles/legend/SENTINEL23_1_58.png" /> -0.3784<br />\
    <img src="styles/legend/SENTINEL23_1_59.png" /> -0.3715<br />\
    <img src="styles/legend/SENTINEL23_1_60.png" /> -0.3645<br />\
    <img src="styles/legend/SENTINEL23_1_61.png" /> -0.3575<br />\
    <img src="styles/legend/SENTINEL23_1_62.png" /> -0.3506<br />\
    <img src="styles/legend/SENTINEL23_1_63.png" /> -0.3436<br />\
    <img src="styles/legend/SENTINEL23_1_64.png" /> -0.3367<br />\
    <img src="styles/legend/SENTINEL23_1_65.png" /> -0.3297<br />\
    <img src="styles/legend/SENTINEL23_1_66.png" /> -0.3227<br />\
    <img src="styles/legend/SENTINEL23_1_67.png" /> -0.3158<br />\
    <img src="styles/legend/SENTINEL23_1_68.png" /> -0.3088<br />\
    <img src="styles/legend/SENTINEL23_1_69.png" /> -0.3019<br />\
    <img src="styles/legend/SENTINEL23_1_70.png" /> -0.2949<br />\
    <img src="styles/legend/SENTINEL23_1_71.png" /> -0.2879<br />\
    <img src="styles/legend/SENTINEL23_1_72.png" /> -0.2810<br />\
    <img src="styles/legend/SENTINEL23_1_73.png" /> -0.2740<br />\
    <img src="styles/legend/SENTINEL23_1_74.png" /> -0.2670<br />\
    <img src="styles/legend/SENTINEL23_1_75.png" /> -0.2601<br />\
    <img src="styles/legend/SENTINEL23_1_76.png" /> -0.2531<br />\
    <img src="styles/legend/SENTINEL23_1_77.png" /> -0.2462<br />\
    <img src="styles/legend/SENTINEL23_1_78.png" /> -0.2392<br />\
    <img src="styles/legend/SENTINEL23_1_79.png" /> -0.2322<br />\
    <img src="styles/legend/SENTINEL23_1_80.png" /> -0.2253<br />\
    <img src="styles/legend/SENTINEL23_1_81.png" /> -0.2183<br />\
    <img src="styles/legend/SENTINEL23_1_82.png" /> -0.2113<br />\
    <img src="styles/legend/SENTINEL23_1_83.png" /> -0.2044<br />\
    <img src="styles/legend/SENTINEL23_1_84.png" /> -0.1974<br />\
    <img src="styles/legend/SENTINEL23_1_85.png" /> -0.1905<br />\
    <img src="styles/legend/SENTINEL23_1_86.png" /> -0.1835<br />\
    <img src="styles/legend/SENTINEL23_1_87.png" /> -0.1765<br />\
    <img src="styles/legend/SENTINEL23_1_88.png" /> -0.1696<br />\
    <img src="styles/legend/SENTINEL23_1_89.png" /> -0.1626<br />\
    <img src="styles/legend/SENTINEL23_1_90.png" /> -0.1557<br />\
    <img src="styles/legend/SENTINEL23_1_91.png" /> -0.1487<br />\
    <img src="styles/legend/SENTINEL23_1_92.png" /> -0.1417<br />\
    <img src="styles/legend/SENTINEL23_1_93.png" /> -0.1348<br />\
    <img src="styles/legend/SENTINEL23_1_94.png" /> -0.1278<br />\
    <img src="styles/legend/SENTINEL23_1_95.png" /> -0.1208<br />\
    <img src="styles/legend/SENTINEL23_1_96.png" /> -0.1139<br />\
    <img src="styles/legend/SENTINEL23_1_97.png" /> -0.1069<br />\
    <img src="styles/legend/SENTINEL23_1_98.png" /> -0.1000<br />\
    <img src="styles/legend/SENTINEL23_1_99.png" /> -0.0930<br />\
    <img src="styles/legend/SENTINEL23_1_100.png" /> -0.0860<br />\
    <img src="styles/legend/SENTINEL23_1_101.png" /> -0.0791<br />\
    <img src="styles/legend/SENTINEL23_1_102.png" /> -0.0721<br />\
    <img src="styles/legend/SENTINEL23_1_103.png" /> -0.0652<br />\
    <img src="styles/legend/SENTINEL23_1_104.png" /> -0.0582<br />\
    <img src="styles/legend/SENTINEL23_1_105.png" /> -0.0512<br />\
    <img src="styles/legend/SENTINEL23_1_106.png" /> -0.0443<br />\
    <img src="styles/legend/SENTINEL23_1_107.png" /> -0.0373<br />\
    <img src="styles/legend/SENTINEL23_1_108.png" /> -0.0303<br />\
    <img src="styles/legend/SENTINEL23_1_109.png" /> -0.0234<br />\
    <img src="styles/legend/SENTINEL23_1_110.png" /> -0.0164<br />\
    <img src="styles/legend/SENTINEL23_1_111.png" /> -0.0095<br />\
    <img src="styles/legend/SENTINEL23_1_112.png" /> -0.0025<br />\
    <img src="styles/legend/SENTINEL23_1_113.png" /> 0.0045<br />\
    <img src="styles/legend/SENTINEL23_1_114.png" /> 0.0114<br />\
    <img src="styles/legend/SENTINEL23_1_115.png" /> 0.0184<br />\
    <img src="styles/legend/SENTINEL23_1_116.png" /> 0.0254<br />\
    <img src="styles/legend/SENTINEL23_1_117.png" /> 0.0323<br />\
    <img src="styles/legend/SENTINEL23_1_118.png" /> 0.0393<br />\
    <img src="styles/legend/SENTINEL23_1_119.png" /> 0.0462<br />\
    <img src="styles/legend/SENTINEL23_1_120.png" /> 0.0532<br />\
    <img src="styles/legend/SENTINEL23_1_121.png" /> 0.0602<br />\
    <img src="styles/legend/SENTINEL23_1_122.png" /> 0.0671<br />\
    <img src="styles/legend/SENTINEL23_1_123.png" /> 0.0741<br />\
    <img src="styles/legend/SENTINEL23_1_124.png" /> 0.0810<br />\
    <img src="styles/legend/SENTINEL23_1_125.png" /> 0.0880<br />\
    <img src="styles/legend/SENTINEL23_1_126.png" /> 0.0950<br />\
    <img src="styles/legend/SENTINEL23_1_127.png" /> 0.1019<br />\
    <img src="styles/legend/SENTINEL23_1_128.png" /> 0.1089<br />\
    <img src="styles/legend/SENTINEL23_1_129.png" /> 0.1159<br />\
    <img src="styles/legend/SENTINEL23_1_130.png" /> 0.1228<br />\
    <img src="styles/legend/SENTINEL23_1_131.png" /> 0.1298<br />\
    <img src="styles/legend/SENTINEL23_1_132.png" /> 0.1367<br />\
    <img src="styles/legend/SENTINEL23_1_133.png" /> 0.1437<br />\
    <img src="styles/legend/SENTINEL23_1_134.png" /> 0.1507<br />\
    <img src="styles/legend/SENTINEL23_1_135.png" /> 0.1576<br />\
    <img src="styles/legend/SENTINEL23_1_136.png" /> 0.1646<br />\
    <img src="styles/legend/SENTINEL23_1_137.png" /> 0.1715<br />\
    <img src="styles/legend/SENTINEL23_1_138.png" /> 0.1785<br />\
    <img src="styles/legend/SENTINEL23_1_139.png" /> 0.1855<br />\
    <img src="styles/legend/SENTINEL23_1_140.png" /> 0.1924<br />\
    <img src="styles/legend/SENTINEL23_1_141.png" /> 0.1994<br />\
    <img src="styles/legend/SENTINEL23_1_142.png" /> 0.2064<br />\
    <img src="styles/legend/SENTINEL23_1_143.png" /> 0.2133<br />\
    <img src="styles/legend/SENTINEL23_1_144.png" /> 0.2203<br />\
    <img src="styles/legend/SENTINEL23_1_145.png" /> 0.2272<br />\
    <img src="styles/legend/SENTINEL23_1_146.png" /> 0.2342<br />\
    <img src="styles/legend/SENTINEL23_1_147.png" /> 0.2412<br />\
    <img src="styles/legend/SENTINEL23_1_148.png" /> 0.2481<br />\
    <img src="styles/legend/SENTINEL23_1_149.png" /> 0.2551<br />\
    <img src="styles/legend/SENTINEL23_1_150.png" /> 0.2621<br />\
    <img src="styles/legend/SENTINEL23_1_151.png" /> 0.2690<br />\
    <img src="styles/legend/SENTINEL23_1_152.png" /> 0.2760<br />\
    <img src="styles/legend/SENTINEL23_1_153.png" /> 0.2829<br />\
    <img src="styles/legend/SENTINEL23_1_154.png" /> 0.2899<br />\
    <img src="styles/legend/SENTINEL23_1_155.png" /> 0.2969<br />\
    <img src="styles/legend/SENTINEL23_1_156.png" /> 0.3038<br />\
    <img src="styles/legend/SENTINEL23_1_157.png" /> 0.3108<br />\
    <img src="styles/legend/SENTINEL23_1_158.png" /> 0.3177<br />\
    <img src="styles/legend/SENTINEL23_1_159.png" /> 0.3247<br />\
    <img src="styles/legend/SENTINEL23_1_160.png" /> 0.3317<br />\
    <img src="styles/legend/SENTINEL23_1_161.png" /> 0.3386<br />\
    <img src="styles/legend/SENTINEL23_1_162.png" /> 0.3456<br />\
    <img src="styles/legend/SENTINEL23_1_163.png" /> 0.3526<br />\
    <img src="styles/legend/SENTINEL23_1_164.png" /> 0.3595<br />\
    <img src="styles/legend/SENTINEL23_1_165.png" /> 0.3665<br />\
    <img src="styles/legend/SENTINEL23_1_166.png" /> 0.3734<br />\
    <img src="styles/legend/SENTINEL23_1_167.png" /> 0.3804<br />\
    <img src="styles/legend/SENTINEL23_1_168.png" /> 0.3874<br />\
    <img src="styles/legend/SENTINEL23_1_169.png" /> 0.3943<br />\
    <img src="styles/legend/SENTINEL23_1_170.png" /> 0.4013<br />\
    <img src="styles/legend/SENTINEL23_1_171.png" /> 0.4082<br />\
    <img src="styles/legend/SENTINEL23_1_172.png" /> 0.4152<br />\
    <img src="styles/legend/SENTINEL23_1_173.png" /> 0.4222<br />\
    <img src="styles/legend/SENTINEL23_1_174.png" /> 0.4291<br />\
    <img src="styles/legend/SENTINEL23_1_175.png" /> 0.4361<br />\
    <img src="styles/legend/SENTINEL23_1_176.png" /> 0.4431<br />\
    <img src="styles/legend/SENTINEL23_1_177.png" /> 0.4500<br />\
    <img src="styles/legend/SENTINEL23_1_178.png" /> 0.4570<br />\
    <img src="styles/legend/SENTINEL23_1_179.png" /> 0.4639<br />\
    <img src="styles/legend/SENTINEL23_1_180.png" /> 0.4709<br />\
    <img src="styles/legend/SENTINEL23_1_181.png" /> 0.4779<br />\
    <img src="styles/legend/SENTINEL23_1_182.png" /> 0.4848<br />\
    <img src="styles/legend/SENTINEL23_1_183.png" /> 0.4918<br />\
    <img src="styles/legend/SENTINEL23_1_184.png" /> 0.4988<br />\
    <img src="styles/legend/SENTINEL23_1_185.png" /> 0.5057<br />\
    <img src="styles/legend/SENTINEL23_1_186.png" /> 0.5127<br />\
    <img src="styles/legend/SENTINEL23_1_187.png" /> 0.5196<br />\
    <img src="styles/legend/SENTINEL23_1_188.png" /> 0.5266<br />\
    <img src="styles/legend/SENTINEL23_1_189.png" /> 0.5336<br />\
    <img src="styles/legend/SENTINEL23_1_190.png" /> 0.5405<br />\
    <img src="styles/legend/SENTINEL23_1_191.png" /> 0.5475<br />\
    <img src="styles/legend/SENTINEL23_1_192.png" /> 0.5544<br />\
    <img src="styles/legend/SENTINEL23_1_193.png" /> 0.5614<br />\
    <img src="styles/legend/SENTINEL23_1_194.png" /> 0.5684<br />\
    <img src="styles/legend/SENTINEL23_1_195.png" /> 0.5753<br />\
    <img src="styles/legend/SENTINEL23_1_196.png" /> 0.5823<br />\
    <img src="styles/legend/SENTINEL23_1_197.png" /> 0.5893<br />\
    <img src="styles/legend/SENTINEL23_1_198.png" /> 0.5962<br />\
    <img src="styles/legend/SENTINEL23_1_199.png" /> 0.6032<br />\
    <img src="styles/legend/SENTINEL23_1_200.png" /> 0.6101<br />\
    <img src="styles/legend/SENTINEL23_1_201.png" /> 0.6171<br />\
    <img src="styles/legend/SENTINEL23_1_202.png" /> 0.6241<br />\
    <img src="styles/legend/SENTINEL23_1_203.png" /> 0.6310<br />\
    <img src="styles/legend/SENTINEL23_1_204.png" /> 0.6380<br />\
    <img src="styles/legend/SENTINEL23_1_205.png" /> 0.6449<br />\
    <img src="styles/legend/SENTINEL23_1_206.png" /> 0.6519<br />\
    <img src="styles/legend/SENTINEL23_1_207.png" /> 0.6589<br />\
    <img src="styles/legend/SENTINEL23_1_208.png" /> 0.6658<br />\
    <img src="styles/legend/SENTINEL23_1_209.png" /> 0.6728<br />\
    <img src="styles/legend/SENTINEL23_1_210.png" /> 0.6798<br />\
    <img src="styles/legend/SENTINEL23_1_211.png" /> 0.6867<br />\
    <img src="styles/legend/SENTINEL23_1_212.png" /> 0.6937<br />\
    <img src="styles/legend/SENTINEL23_1_213.png" /> 0.7006<br />\
    <img src="styles/legend/SENTINEL23_1_214.png" /> 0.7076<br />\
    <img src="styles/legend/SENTINEL23_1_215.png" /> 0.7146<br />\
    <img src="styles/legend/SENTINEL23_1_216.png" /> 0.7215<br />\
    <img src="styles/legend/SENTINEL23_1_217.png" /> 0.7285<br />\
    <img src="styles/legend/SENTINEL23_1_218.png" /> 0.7355<br />\
    <img src="styles/legend/SENTINEL23_1_219.png" /> 0.7424<br />\
    <img src="styles/legend/SENTINEL23_1_220.png" /> 0.7494<br />\
    <img src="styles/legend/SENTINEL23_1_221.png" /> 0.7563<br />\
    <img src="styles/legend/SENTINEL23_1_222.png" /> 0.7633<br />\
    <img src="styles/legend/SENTINEL23_1_223.png" /> 0.7703<br />\
    <img src="styles/legend/SENTINEL23_1_224.png" /> 0.7772<br />\
    <img src="styles/legend/SENTINEL23_1_225.png" /> 0.7842<br />\
    <img src="styles/legend/SENTINEL23_1_226.png" /> 0.7911<br />\
    <img src="styles/legend/SENTINEL23_1_227.png" /> 0.7981<br />\
    <img src="styles/legend/SENTINEL23_1_228.png" /> 0.8051<br />\
    <img src="styles/legend/SENTINEL23_1_229.png" /> 0.8120<br />\
    <img src="styles/legend/SENTINEL23_1_230.png" /> 0.8190<br />\
    <img src="styles/legend/SENTINEL23_1_231.png" /> 0.8260<br />\
    <img src="styles/legend/SENTINEL23_1_232.png" /> 0.8329<br />\
    <img src="styles/legend/SENTINEL23_1_233.png" /> 0.8399<br />\
    <img src="styles/legend/SENTINEL23_1_234.png" /> 0.8468<br />\
    <img src="styles/legend/SENTINEL23_1_235.png" /> 0.8538<br />\
    <img src="styles/legend/SENTINEL23_1_236.png" /> 0.8608<br />\
    <img src="styles/legend/SENTINEL23_1_237.png" /> 0.8677<br />\
    <img src="styles/legend/SENTINEL23_1_238.png" /> 0.8747<br />\
    <img src="styles/legend/SENTINEL23_1_239.png" /> 0.8817<br />\
    <img src="styles/legend/SENTINEL23_1_240.png" /> 0.8886<br />\
    <img src="styles/legend/SENTINEL23_1_241.png" /> 0.8956<br />\
    <img src="styles/legend/SENTINEL23_1_242.png" /> 0.9025<br />\
    <img src="styles/legend/SENTINEL23_1_243.png" /> 0.9095<br />\
    <img src="styles/legend/SENTINEL23_1_244.png" /> 0.9165<br />\
    <img src="styles/legend/SENTINEL23_1_245.png" /> 0.9234<br />\
    <img src="styles/legend/SENTINEL23_1_246.png" /> 0.9304<br />\
    <img src="styles/legend/SENTINEL23_1_247.png" /> 0.9373<br />\
    <img src="styles/legend/SENTINEL23_1_248.png" /> 0.9443<br />\
    <img src="styles/legend/SENTINEL23_1_249.png" /> 0.9513<br />\
    <img src="styles/legend/SENTINEL23_1_250.png" /> 0.9582<br />\
    <img src="styles/legend/SENTINEL23_1_251.png" /> 0.9652<br />\
    <img src="styles/legend/SENTINEL23_1_252.png" /> 0.9722<br />\
    <img src="styles/legend/SENTINEL23_1_253.png" /> 0.9791<br />\
    <img src="styles/legend/SENTINEL23_1_254.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SENTINEL23_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12296720.000000, -797812.377988, 12337940.000000, -748461.900158]
        })
    });
var lyr_SENTINEL18_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SENTINEL18<br />\
    <img src="styles/legend/SENTINEL18_2_0.png" /> -0.7983<br />\
    <img src="styles/legend/SENTINEL18_2_1.png" /> -0.7912<br />\
    <img src="styles/legend/SENTINEL18_2_2.png" /> -0.7842<br />\
    <img src="styles/legend/SENTINEL18_2_3.png" /> -0.7772<br />\
    <img src="styles/legend/SENTINEL18_2_4.png" /> -0.7702<br />\
    <img src="styles/legend/SENTINEL18_2_5.png" /> -0.7631<br />\
    <img src="styles/legend/SENTINEL18_2_6.png" /> -0.7561<br />\
    <img src="styles/legend/SENTINEL18_2_7.png" /> -0.7491<br />\
    <img src="styles/legend/SENTINEL18_2_8.png" /> -0.7421<br />\
    <img src="styles/legend/SENTINEL18_2_9.png" /> -0.7350<br />\
    <img src="styles/legend/SENTINEL18_2_10.png" /> -0.7280<br />\
    <img src="styles/legend/SENTINEL18_2_11.png" /> -0.7210<br />\
    <img src="styles/legend/SENTINEL18_2_12.png" /> -0.7140<br />\
    <img src="styles/legend/SENTINEL18_2_13.png" /> -0.7069<br />\
    <img src="styles/legend/SENTINEL18_2_14.png" /> -0.6999<br />\
    <img src="styles/legend/SENTINEL18_2_15.png" /> -0.6929<br />\
    <img src="styles/legend/SENTINEL18_2_16.png" /> -0.6859<br />\
    <img src="styles/legend/SENTINEL18_2_17.png" /> -0.6788<br />\
    <img src="styles/legend/SENTINEL18_2_18.png" /> -0.6718<br />\
    <img src="styles/legend/SENTINEL18_2_19.png" /> -0.6648<br />\
    <img src="styles/legend/SENTINEL18_2_20.png" /> -0.6578<br />\
    <img src="styles/legend/SENTINEL18_2_21.png" /> -0.6507<br />\
    <img src="styles/legend/SENTINEL18_2_22.png" /> -0.6437<br />\
    <img src="styles/legend/SENTINEL18_2_23.png" /> -0.6367<br />\
    <img src="styles/legend/SENTINEL18_2_24.png" /> -0.6297<br />\
    <img src="styles/legend/SENTINEL18_2_25.png" /> -0.6226<br />\
    <img src="styles/legend/SENTINEL18_2_26.png" /> -0.6156<br />\
    <img src="styles/legend/SENTINEL18_2_27.png" /> -0.6086<br />\
    <img src="styles/legend/SENTINEL18_2_28.png" /> -0.6016<br />\
    <img src="styles/legend/SENTINEL18_2_29.png" /> -0.5945<br />\
    <img src="styles/legend/SENTINEL18_2_30.png" /> -0.5875<br />\
    <img src="styles/legend/SENTINEL18_2_31.png" /> -0.5805<br />\
    <img src="styles/legend/SENTINEL18_2_32.png" /> -0.5735<br />\
    <img src="styles/legend/SENTINEL18_2_33.png" /> -0.5664<br />\
    <img src="styles/legend/SENTINEL18_2_34.png" /> -0.5594<br />\
    <img src="styles/legend/SENTINEL18_2_35.png" /> -0.5524<br />\
    <img src="styles/legend/SENTINEL18_2_36.png" /> -0.5454<br />\
    <img src="styles/legend/SENTINEL18_2_37.png" /> -0.5383<br />\
    <img src="styles/legend/SENTINEL18_2_38.png" /> -0.5313<br />\
    <img src="styles/legend/SENTINEL18_2_39.png" /> -0.5243<br />\
    <img src="styles/legend/SENTINEL18_2_40.png" /> -0.5173<br />\
    <img src="styles/legend/SENTINEL18_2_41.png" /> -0.5102<br />\
    <img src="styles/legend/SENTINEL18_2_42.png" /> -0.5032<br />\
    <img src="styles/legend/SENTINEL18_2_43.png" /> -0.4962<br />\
    <img src="styles/legend/SENTINEL18_2_44.png" /> -0.4892<br />\
    <img src="styles/legend/SENTINEL18_2_45.png" /> -0.4822<br />\
    <img src="styles/legend/SENTINEL18_2_46.png" /> -0.4751<br />\
    <img src="styles/legend/SENTINEL18_2_47.png" /> -0.4681<br />\
    <img src="styles/legend/SENTINEL18_2_48.png" /> -0.4611<br />\
    <img src="styles/legend/SENTINEL18_2_49.png" /> -0.4541<br />\
    <img src="styles/legend/SENTINEL18_2_50.png" /> -0.4470<br />\
    <img src="styles/legend/SENTINEL18_2_51.png" /> -0.4400<br />\
    <img src="styles/legend/SENTINEL18_2_52.png" /> -0.4330<br />\
    <img src="styles/legend/SENTINEL18_2_53.png" /> -0.4260<br />\
    <img src="styles/legend/SENTINEL18_2_54.png" /> -0.4189<br />\
    <img src="styles/legend/SENTINEL18_2_55.png" /> -0.4119<br />\
    <img src="styles/legend/SENTINEL18_2_56.png" /> -0.4049<br />\
    <img src="styles/legend/SENTINEL18_2_57.png" /> -0.3979<br />\
    <img src="styles/legend/SENTINEL18_2_58.png" /> -0.3908<br />\
    <img src="styles/legend/SENTINEL18_2_59.png" /> -0.3838<br />\
    <img src="styles/legend/SENTINEL18_2_60.png" /> -0.3768<br />\
    <img src="styles/legend/SENTINEL18_2_61.png" /> -0.3698<br />\
    <img src="styles/legend/SENTINEL18_2_62.png" /> -0.3627<br />\
    <img src="styles/legend/SENTINEL18_2_63.png" /> -0.3557<br />\
    <img src="styles/legend/SENTINEL18_2_64.png" /> -0.3487<br />\
    <img src="styles/legend/SENTINEL18_2_65.png" /> -0.3417<br />\
    <img src="styles/legend/SENTINEL18_2_66.png" /> -0.3346<br />\
    <img src="styles/legend/SENTINEL18_2_67.png" /> -0.3276<br />\
    <img src="styles/legend/SENTINEL18_2_68.png" /> -0.3206<br />\
    <img src="styles/legend/SENTINEL18_2_69.png" /> -0.3136<br />\
    <img src="styles/legend/SENTINEL18_2_70.png" /> -0.3065<br />\
    <img src="styles/legend/SENTINEL18_2_71.png" /> -0.2995<br />\
    <img src="styles/legend/SENTINEL18_2_72.png" /> -0.2925<br />\
    <img src="styles/legend/SENTINEL18_2_73.png" /> -0.2855<br />\
    <img src="styles/legend/SENTINEL18_2_74.png" /> -0.2784<br />\
    <img src="styles/legend/SENTINEL18_2_75.png" /> -0.2714<br />\
    <img src="styles/legend/SENTINEL18_2_76.png" /> -0.2644<br />\
    <img src="styles/legend/SENTINEL18_2_77.png" /> -0.2574<br />\
    <img src="styles/legend/SENTINEL18_2_78.png" /> -0.2503<br />\
    <img src="styles/legend/SENTINEL18_2_79.png" /> -0.2433<br />\
    <img src="styles/legend/SENTINEL18_2_80.png" /> -0.2363<br />\
    <img src="styles/legend/SENTINEL18_2_81.png" /> -0.2293<br />\
    <img src="styles/legend/SENTINEL18_2_82.png" /> -0.2222<br />\
    <img src="styles/legend/SENTINEL18_2_83.png" /> -0.2152<br />\
    <img src="styles/legend/SENTINEL18_2_84.png" /> -0.2082<br />\
    <img src="styles/legend/SENTINEL18_2_85.png" /> -0.2012<br />\
    <img src="styles/legend/SENTINEL18_2_86.png" /> -0.1941<br />\
    <img src="styles/legend/SENTINEL18_2_87.png" /> -0.1871<br />\
    <img src="styles/legend/SENTINEL18_2_88.png" /> -0.1801<br />\
    <img src="styles/legend/SENTINEL18_2_89.png" /> -0.1731<br />\
    <img src="styles/legend/SENTINEL18_2_90.png" /> -0.1661<br />\
    <img src="styles/legend/SENTINEL18_2_91.png" /> -0.1590<br />\
    <img src="styles/legend/SENTINEL18_2_92.png" /> -0.1520<br />\
    <img src="styles/legend/SENTINEL18_2_93.png" /> -0.1450<br />\
    <img src="styles/legend/SENTINEL18_2_94.png" /> -0.1380<br />\
    <img src="styles/legend/SENTINEL18_2_95.png" /> -0.1309<br />\
    <img src="styles/legend/SENTINEL18_2_96.png" /> -0.1239<br />\
    <img src="styles/legend/SENTINEL18_2_97.png" /> -0.1169<br />\
    <img src="styles/legend/SENTINEL18_2_98.png" /> -0.1099<br />\
    <img src="styles/legend/SENTINEL18_2_99.png" /> -0.1028<br />\
    <img src="styles/legend/SENTINEL18_2_100.png" /> -0.0958<br />\
    <img src="styles/legend/SENTINEL18_2_101.png" /> -0.0888<br />\
    <img src="styles/legend/SENTINEL18_2_102.png" /> -0.0818<br />\
    <img src="styles/legend/SENTINEL18_2_103.png" /> -0.0747<br />\
    <img src="styles/legend/SENTINEL18_2_104.png" /> -0.0677<br />\
    <img src="styles/legend/SENTINEL18_2_105.png" /> -0.0607<br />\
    <img src="styles/legend/SENTINEL18_2_106.png" /> -0.0537<br />\
    <img src="styles/legend/SENTINEL18_2_107.png" /> -0.0466<br />\
    <img src="styles/legend/SENTINEL18_2_108.png" /> -0.0396<br />\
    <img src="styles/legend/SENTINEL18_2_109.png" /> -0.0326<br />\
    <img src="styles/legend/SENTINEL18_2_110.png" /> -0.0256<br />\
    <img src="styles/legend/SENTINEL18_2_111.png" /> -0.0185<br />\
    <img src="styles/legend/SENTINEL18_2_112.png" /> -0.0115<br />\
    <img src="styles/legend/SENTINEL18_2_113.png" /> -0.0045<br />\
    <img src="styles/legend/SENTINEL18_2_114.png" /> 0.0025<br />\
    <img src="styles/legend/SENTINEL18_2_115.png" /> 0.0096<br />\
    <img src="styles/legend/SENTINEL18_2_116.png" /> 0.0166<br />\
    <img src="styles/legend/SENTINEL18_2_117.png" /> 0.0236<br />\
    <img src="styles/legend/SENTINEL18_2_118.png" /> 0.0306<br />\
    <img src="styles/legend/SENTINEL18_2_119.png" /> 0.0377<br />\
    <img src="styles/legend/SENTINEL18_2_120.png" /> 0.0447<br />\
    <img src="styles/legend/SENTINEL18_2_121.png" /> 0.0517<br />\
    <img src="styles/legend/SENTINEL18_2_122.png" /> 0.0587<br />\
    <img src="styles/legend/SENTINEL18_2_123.png" /> 0.0658<br />\
    <img src="styles/legend/SENTINEL18_2_124.png" /> 0.0728<br />\
    <img src="styles/legend/SENTINEL18_2_125.png" /> 0.0798<br />\
    <img src="styles/legend/SENTINEL18_2_126.png" /> 0.0868<br />\
    <img src="styles/legend/SENTINEL18_2_127.png" /> 0.0939<br />\
    <img src="styles/legend/SENTINEL18_2_128.png" /> 0.1009<br />\
    <img src="styles/legend/SENTINEL18_2_129.png" /> 0.1079<br />\
    <img src="styles/legend/SENTINEL18_2_130.png" /> 0.1149<br />\
    <img src="styles/legend/SENTINEL18_2_131.png" /> 0.1219<br />\
    <img src="styles/legend/SENTINEL18_2_132.png" /> 0.1290<br />\
    <img src="styles/legend/SENTINEL18_2_133.png" /> 0.1360<br />\
    <img src="styles/legend/SENTINEL18_2_134.png" /> 0.1430<br />\
    <img src="styles/legend/SENTINEL18_2_135.png" /> 0.1500<br />\
    <img src="styles/legend/SENTINEL18_2_136.png" /> 0.1571<br />\
    <img src="styles/legend/SENTINEL18_2_137.png" /> 0.1641<br />\
    <img src="styles/legend/SENTINEL18_2_138.png" /> 0.1711<br />\
    <img src="styles/legend/SENTINEL18_2_139.png" /> 0.1781<br />\
    <img src="styles/legend/SENTINEL18_2_140.png" /> 0.1852<br />\
    <img src="styles/legend/SENTINEL18_2_141.png" /> 0.1922<br />\
    <img src="styles/legend/SENTINEL18_2_142.png" /> 0.1992<br />\
    <img src="styles/legend/SENTINEL18_2_143.png" /> 0.2062<br />\
    <img src="styles/legend/SENTINEL18_2_144.png" /> 0.2133<br />\
    <img src="styles/legend/SENTINEL18_2_145.png" /> 0.2203<br />\
    <img src="styles/legend/SENTINEL18_2_146.png" /> 0.2273<br />\
    <img src="styles/legend/SENTINEL18_2_147.png" /> 0.2343<br />\
    <img src="styles/legend/SENTINEL18_2_148.png" /> 0.2414<br />\
    <img src="styles/legend/SENTINEL18_2_149.png" /> 0.2484<br />\
    <img src="styles/legend/SENTINEL18_2_150.png" /> 0.2554<br />\
    <img src="styles/legend/SENTINEL18_2_151.png" /> 0.2624<br />\
    <img src="styles/legend/SENTINEL18_2_152.png" /> 0.2695<br />\
    <img src="styles/legend/SENTINEL18_2_153.png" /> 0.2765<br />\
    <img src="styles/legend/SENTINEL18_2_154.png" /> 0.2835<br />\
    <img src="styles/legend/SENTINEL18_2_155.png" /> 0.2905<br />\
    <img src="styles/legend/SENTINEL18_2_156.png" /> 0.2976<br />\
    <img src="styles/legend/SENTINEL18_2_157.png" /> 0.3046<br />\
    <img src="styles/legend/SENTINEL18_2_158.png" /> 0.3116<br />\
    <img src="styles/legend/SENTINEL18_2_159.png" /> 0.3186<br />\
    <img src="styles/legend/SENTINEL18_2_160.png" /> 0.3257<br />\
    <img src="styles/legend/SENTINEL18_2_161.png" /> 0.3327<br />\
    <img src="styles/legend/SENTINEL18_2_162.png" /> 0.3397<br />\
    <img src="styles/legend/SENTINEL18_2_163.png" /> 0.3467<br />\
    <img src="styles/legend/SENTINEL18_2_164.png" /> 0.3538<br />\
    <img src="styles/legend/SENTINEL18_2_165.png" /> 0.3608<br />\
    <img src="styles/legend/SENTINEL18_2_166.png" /> 0.3678<br />\
    <img src="styles/legend/SENTINEL18_2_167.png" /> 0.3748<br />\
    <img src="styles/legend/SENTINEL18_2_168.png" /> 0.3819<br />\
    <img src="styles/legend/SENTINEL18_2_169.png" /> 0.3889<br />\
    <img src="styles/legend/SENTINEL18_2_170.png" /> 0.3959<br />\
    <img src="styles/legend/SENTINEL18_2_171.png" /> 0.4029<br />\
    <img src="styles/legend/SENTINEL18_2_172.png" /> 0.4099<br />\
    <img src="styles/legend/SENTINEL18_2_173.png" /> 0.4170<br />\
    <img src="styles/legend/SENTINEL18_2_174.png" /> 0.4240<br />\
    <img src="styles/legend/SENTINEL18_2_175.png" /> 0.4310<br />\
    <img src="styles/legend/SENTINEL18_2_176.png" /> 0.4380<br />\
    <img src="styles/legend/SENTINEL18_2_177.png" /> 0.4451<br />\
    <img src="styles/legend/SENTINEL18_2_178.png" /> 0.4521<br />\
    <img src="styles/legend/SENTINEL18_2_179.png" /> 0.4591<br />\
    <img src="styles/legend/SENTINEL18_2_180.png" /> 0.4661<br />\
    <img src="styles/legend/SENTINEL18_2_181.png" /> 0.4732<br />\
    <img src="styles/legend/SENTINEL18_2_182.png" /> 0.4802<br />\
    <img src="styles/legend/SENTINEL18_2_183.png" /> 0.4872<br />\
    <img src="styles/legend/SENTINEL18_2_184.png" /> 0.4942<br />\
    <img src="styles/legend/SENTINEL18_2_185.png" /> 0.5013<br />\
    <img src="styles/legend/SENTINEL18_2_186.png" /> 0.5083<br />\
    <img src="styles/legend/SENTINEL18_2_187.png" /> 0.5153<br />\
    <img src="styles/legend/SENTINEL18_2_188.png" /> 0.5223<br />\
    <img src="styles/legend/SENTINEL18_2_189.png" /> 0.5294<br />\
    <img src="styles/legend/SENTINEL18_2_190.png" /> 0.5364<br />\
    <img src="styles/legend/SENTINEL18_2_191.png" /> 0.5434<br />\
    <img src="styles/legend/SENTINEL18_2_192.png" /> 0.5504<br />\
    <img src="styles/legend/SENTINEL18_2_193.png" /> 0.5575<br />\
    <img src="styles/legend/SENTINEL18_2_194.png" /> 0.5645<br />\
    <img src="styles/legend/SENTINEL18_2_195.png" /> 0.5715<br />\
    <img src="styles/legend/SENTINEL18_2_196.png" /> 0.5785<br />\
    <img src="styles/legend/SENTINEL18_2_197.png" /> 0.5856<br />\
    <img src="styles/legend/SENTINEL18_2_198.png" /> 0.5926<br />\
    <img src="styles/legend/SENTINEL18_2_199.png" /> 0.5996<br />\
    <img src="styles/legend/SENTINEL18_2_200.png" /> 0.6066<br />\
    <img src="styles/legend/SENTINEL18_2_201.png" /> 0.6137<br />\
    <img src="styles/legend/SENTINEL18_2_202.png" /> 0.6207<br />\
    <img src="styles/legend/SENTINEL18_2_203.png" /> 0.6277<br />\
    <img src="styles/legend/SENTINEL18_2_204.png" /> 0.6347<br />\
    <img src="styles/legend/SENTINEL18_2_205.png" /> 0.6418<br />\
    <img src="styles/legend/SENTINEL18_2_206.png" /> 0.6488<br />\
    <img src="styles/legend/SENTINEL18_2_207.png" /> 0.6558<br />\
    <img src="styles/legend/SENTINEL18_2_208.png" /> 0.6628<br />\
    <img src="styles/legend/SENTINEL18_2_209.png" /> 0.6699<br />\
    <img src="styles/legend/SENTINEL18_2_210.png" /> 0.6769<br />\
    <img src="styles/legend/SENTINEL18_2_211.png" /> 0.6839<br />\
    <img src="styles/legend/SENTINEL18_2_212.png" /> 0.6909<br />\
    <img src="styles/legend/SENTINEL18_2_213.png" /> 0.6979<br />\
    <img src="styles/legend/SENTINEL18_2_214.png" /> 0.7050<br />\
    <img src="styles/legend/SENTINEL18_2_215.png" /> 0.7120<br />\
    <img src="styles/legend/SENTINEL18_2_216.png" /> 0.7190<br />\
    <img src="styles/legend/SENTINEL18_2_217.png" /> 0.7260<br />\
    <img src="styles/legend/SENTINEL18_2_218.png" /> 0.7331<br />\
    <img src="styles/legend/SENTINEL18_2_219.png" /> 0.7401<br />\
    <img src="styles/legend/SENTINEL18_2_220.png" /> 0.7471<br />\
    <img src="styles/legend/SENTINEL18_2_221.png" /> 0.7541<br />\
    <img src="styles/legend/SENTINEL18_2_222.png" /> 0.7612<br />\
    <img src="styles/legend/SENTINEL18_2_223.png" /> 0.7682<br />\
    <img src="styles/legend/SENTINEL18_2_224.png" /> 0.7752<br />\
    <img src="styles/legend/SENTINEL18_2_225.png" /> 0.7822<br />\
    <img src="styles/legend/SENTINEL18_2_226.png" /> 0.7893<br />\
    <img src="styles/legend/SENTINEL18_2_227.png" /> 0.7963<br />\
    <img src="styles/legend/SENTINEL18_2_228.png" /> 0.8033<br />\
    <img src="styles/legend/SENTINEL18_2_229.png" /> 0.8103<br />\
    <img src="styles/legend/SENTINEL18_2_230.png" /> 0.8174<br />\
    <img src="styles/legend/SENTINEL18_2_231.png" /> 0.8244<br />\
    <img src="styles/legend/SENTINEL18_2_232.png" /> 0.8314<br />\
    <img src="styles/legend/SENTINEL18_2_233.png" /> 0.8384<br />\
    <img src="styles/legend/SENTINEL18_2_234.png" /> 0.8455<br />\
    <img src="styles/legend/SENTINEL18_2_235.png" /> 0.8525<br />\
    <img src="styles/legend/SENTINEL18_2_236.png" /> 0.8595<br />\
    <img src="styles/legend/SENTINEL18_2_237.png" /> 0.8665<br />\
    <img src="styles/legend/SENTINEL18_2_238.png" /> 0.8736<br />\
    <img src="styles/legend/SENTINEL18_2_239.png" /> 0.8806<br />\
    <img src="styles/legend/SENTINEL18_2_240.png" /> 0.8876<br />\
    <img src="styles/legend/SENTINEL18_2_241.png" /> 0.8946<br />\
    <img src="styles/legend/SENTINEL18_2_242.png" /> 0.9017<br />\
    <img src="styles/legend/SENTINEL18_2_243.png" /> 0.9087<br />\
    <img src="styles/legend/SENTINEL18_2_244.png" /> 0.9157<br />\
    <img src="styles/legend/SENTINEL18_2_245.png" /> 0.9227<br />\
    <img src="styles/legend/SENTINEL18_2_246.png" /> 0.9298<br />\
    <img src="styles/legend/SENTINEL18_2_247.png" /> 0.9368<br />\
    <img src="styles/legend/SENTINEL18_2_248.png" /> 0.9438<br />\
    <img src="styles/legend/SENTINEL18_2_249.png" /> 0.9508<br />\
    <img src="styles/legend/SENTINEL18_2_250.png" /> 0.9579<br />\
    <img src="styles/legend/SENTINEL18_2_251.png" /> 0.9649<br />\
    <img src="styles/legend/SENTINEL18_2_252.png" /> 0.9719<br />\
    <img src="styles/legend/SENTINEL18_2_253.png" /> 0.9789<br />\
    <img src="styles/legend/SENTINEL18_2_254.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SENTINEL18_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12296720.000000, -797812.377988, 12337940.000000, -748461.900158]
        })
    });
var lyr_RASTERL8_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RASTERL8<br />\
    <img src="styles/legend/RASTERL8_3_0.png" /> -0.2187<br />\
    <img src="styles/legend/RASTERL8_3_1.png" /> -0.2165<br />\
    <img src="styles/legend/RASTERL8_3_2.png" /> -0.2144<br />\
    <img src="styles/legend/RASTERL8_3_3.png" /> -0.2122<br />\
    <img src="styles/legend/RASTERL8_3_4.png" /> -0.2100<br />\
    <img src="styles/legend/RASTERL8_3_5.png" /> -0.2078<br />\
    <img src="styles/legend/RASTERL8_3_6.png" /> -0.2056<br />\
    <img src="styles/legend/RASTERL8_3_7.png" /> -0.2035<br />\
    <img src="styles/legend/RASTERL8_3_8.png" /> -0.2013<br />\
    <img src="styles/legend/RASTERL8_3_9.png" /> -0.1991<br />\
    <img src="styles/legend/RASTERL8_3_10.png" /> -0.1969<br />\
    <img src="styles/legend/RASTERL8_3_11.png" /> -0.1947<br />\
    <img src="styles/legend/RASTERL8_3_12.png" /> -0.1925<br />\
    <img src="styles/legend/RASTERL8_3_13.png" /> -0.1904<br />\
    <img src="styles/legend/RASTERL8_3_14.png" /> -0.1882<br />\
    <img src="styles/legend/RASTERL8_3_15.png" /> -0.1860<br />\
    <img src="styles/legend/RASTERL8_3_16.png" /> -0.1838<br />\
    <img src="styles/legend/RASTERL8_3_17.png" /> -0.1816<br />\
    <img src="styles/legend/RASTERL8_3_18.png" /> -0.1795<br />\
    <img src="styles/legend/RASTERL8_3_19.png" /> -0.1773<br />\
    <img src="styles/legend/RASTERL8_3_20.png" /> -0.1751<br />\
    <img src="styles/legend/RASTERL8_3_21.png" /> -0.1729<br />\
    <img src="styles/legend/RASTERL8_3_22.png" /> -0.1707<br />\
    <img src="styles/legend/RASTERL8_3_23.png" /> -0.1686<br />\
    <img src="styles/legend/RASTERL8_3_24.png" /> -0.1664<br />\
    <img src="styles/legend/RASTERL8_3_25.png" /> -0.1642<br />\
    <img src="styles/legend/RASTERL8_3_26.png" /> -0.1620<br />\
    <img src="styles/legend/RASTERL8_3_27.png" /> -0.1598<br />\
    <img src="styles/legend/RASTERL8_3_28.png" /> -0.1576<br />\
    <img src="styles/legend/RASTERL8_3_29.png" /> -0.1555<br />\
    <img src="styles/legend/RASTERL8_3_30.png" /> -0.1533<br />\
    <img src="styles/legend/RASTERL8_3_31.png" /> -0.1511<br />\
    <img src="styles/legend/RASTERL8_3_32.png" /> -0.1489<br />\
    <img src="styles/legend/RASTERL8_3_33.png" /> -0.1467<br />\
    <img src="styles/legend/RASTERL8_3_34.png" /> -0.1446<br />\
    <img src="styles/legend/RASTERL8_3_35.png" /> -0.1424<br />\
    <img src="styles/legend/RASTERL8_3_36.png" /> -0.1402<br />\
    <img src="styles/legend/RASTERL8_3_37.png" /> -0.1380<br />\
    <img src="styles/legend/RASTERL8_3_38.png" /> -0.1358<br />\
    <img src="styles/legend/RASTERL8_3_39.png" /> -0.1336<br />\
    <img src="styles/legend/RASTERL8_3_40.png" /> -0.1315<br />\
    <img src="styles/legend/RASTERL8_3_41.png" /> -0.1293<br />\
    <img src="styles/legend/RASTERL8_3_42.png" /> -0.1271<br />\
    <img src="styles/legend/RASTERL8_3_43.png" /> -0.1249<br />\
    <img src="styles/legend/RASTERL8_3_44.png" /> -0.1227<br />\
    <img src="styles/legend/RASTERL8_3_45.png" /> -0.1206<br />\
    <img src="styles/legend/RASTERL8_3_46.png" /> -0.1184<br />\
    <img src="styles/legend/RASTERL8_3_47.png" /> -0.1162<br />\
    <img src="styles/legend/RASTERL8_3_48.png" /> -0.1140<br />\
    <img src="styles/legend/RASTERL8_3_49.png" /> -0.1118<br />\
    <img src="styles/legend/RASTERL8_3_50.png" /> -0.1097<br />\
    <img src="styles/legend/RASTERL8_3_51.png" /> -0.1075<br />\
    <img src="styles/legend/RASTERL8_3_52.png" /> -0.1053<br />\
    <img src="styles/legend/RASTERL8_3_53.png" /> -0.1031<br />\
    <img src="styles/legend/RASTERL8_3_54.png" /> -0.1009<br />\
    <img src="styles/legend/RASTERL8_3_55.png" /> -0.0987<br />\
    <img src="styles/legend/RASTERL8_3_56.png" /> -0.0966<br />\
    <img src="styles/legend/RASTERL8_3_57.png" /> -0.0944<br />\
    <img src="styles/legend/RASTERL8_3_58.png" /> -0.0922<br />\
    <img src="styles/legend/RASTERL8_3_59.png" /> -0.0900<br />\
    <img src="styles/legend/RASTERL8_3_60.png" /> -0.0878<br />\
    <img src="styles/legend/RASTERL8_3_61.png" /> -0.0857<br />\
    <img src="styles/legend/RASTERL8_3_62.png" /> -0.0835<br />\
    <img src="styles/legend/RASTERL8_3_63.png" /> -0.0813<br />\
    <img src="styles/legend/RASTERL8_3_64.png" /> -0.0791<br />\
    <img src="styles/legend/RASTERL8_3_65.png" /> -0.0769<br />\
    <img src="styles/legend/RASTERL8_3_66.png" /> -0.0747<br />\
    <img src="styles/legend/RASTERL8_3_67.png" /> -0.0726<br />\
    <img src="styles/legend/RASTERL8_3_68.png" /> -0.0704<br />\
    <img src="styles/legend/RASTERL8_3_69.png" /> -0.0682<br />\
    <img src="styles/legend/RASTERL8_3_70.png" /> -0.0660<br />\
    <img src="styles/legend/RASTERL8_3_71.png" /> -0.0638<br />\
    <img src="styles/legend/RASTERL8_3_72.png" /> -0.0617<br />\
    <img src="styles/legend/RASTERL8_3_73.png" /> -0.0595<br />\
    <img src="styles/legend/RASTERL8_3_74.png" /> -0.0573<br />\
    <img src="styles/legend/RASTERL8_3_75.png" /> -0.0551<br />\
    <img src="styles/legend/RASTERL8_3_76.png" /> -0.0529<br />\
    <img src="styles/legend/RASTERL8_3_77.png" /> -0.0508<br />\
    <img src="styles/legend/RASTERL8_3_78.png" /> -0.0486<br />\
    <img src="styles/legend/RASTERL8_3_79.png" /> -0.0464<br />\
    <img src="styles/legend/RASTERL8_3_80.png" /> -0.0442<br />\
    <img src="styles/legend/RASTERL8_3_81.png" /> -0.0420<br />\
    <img src="styles/legend/RASTERL8_3_82.png" /> -0.0398<br />\
    <img src="styles/legend/RASTERL8_3_83.png" /> -0.0377<br />\
    <img src="styles/legend/RASTERL8_3_84.png" /> -0.0355<br />\
    <img src="styles/legend/RASTERL8_3_85.png" /> -0.0333<br />\
    <img src="styles/legend/RASTERL8_3_86.png" /> -0.0311<br />\
    <img src="styles/legend/RASTERL8_3_87.png" /> -0.0289<br />\
    <img src="styles/legend/RASTERL8_3_88.png" /> -0.0268<br />\
    <img src="styles/legend/RASTERL8_3_89.png" /> -0.0246<br />\
    <img src="styles/legend/RASTERL8_3_90.png" /> -0.0224<br />\
    <img src="styles/legend/RASTERL8_3_91.png" /> -0.0202<br />\
    <img src="styles/legend/RASTERL8_3_92.png" /> -0.0180<br />\
    <img src="styles/legend/RASTERL8_3_93.png" /> -0.0158<br />\
    <img src="styles/legend/RASTERL8_3_94.png" /> -0.0137<br />\
    <img src="styles/legend/RASTERL8_3_95.png" /> -0.0115<br />\
    <img src="styles/legend/RASTERL8_3_96.png" /> -0.0093<br />\
    <img src="styles/legend/RASTERL8_3_97.png" /> -0.0071<br />\
    <img src="styles/legend/RASTERL8_3_98.png" /> -0.0049<br />\
    <img src="styles/legend/RASTERL8_3_99.png" /> -0.0028<br />\
    <img src="styles/legend/RASTERL8_3_100.png" /> -0.0006<br />\
    <img src="styles/legend/RASTERL8_3_101.png" /> 0.0016<br />\
    <img src="styles/legend/RASTERL8_3_102.png" /> 0.0038<br />\
    <img src="styles/legend/RASTERL8_3_103.png" /> 0.0060<br />\
    <img src="styles/legend/RASTERL8_3_104.png" /> 0.0081<br />\
    <img src="styles/legend/RASTERL8_3_105.png" /> 0.0103<br />\
    <img src="styles/legend/RASTERL8_3_106.png" /> 0.0125<br />\
    <img src="styles/legend/RASTERL8_3_107.png" /> 0.0147<br />\
    <img src="styles/legend/RASTERL8_3_108.png" /> 0.0169<br />\
    <img src="styles/legend/RASTERL8_3_109.png" /> 0.0191<br />\
    <img src="styles/legend/RASTERL8_3_110.png" /> 0.0212<br />\
    <img src="styles/legend/RASTERL8_3_111.png" /> 0.0234<br />\
    <img src="styles/legend/RASTERL8_3_112.png" /> 0.0256<br />\
    <img src="styles/legend/RASTERL8_3_113.png" /> 0.0278<br />\
    <img src="styles/legend/RASTERL8_3_114.png" /> 0.0300<br />\
    <img src="styles/legend/RASTERL8_3_115.png" /> 0.0321<br />\
    <img src="styles/legend/RASTERL8_3_116.png" /> 0.0343<br />\
    <img src="styles/legend/RASTERL8_3_117.png" /> 0.0365<br />\
    <img src="styles/legend/RASTERL8_3_118.png" /> 0.0387<br />\
    <img src="styles/legend/RASTERL8_3_119.png" /> 0.0409<br />\
    <img src="styles/legend/RASTERL8_3_120.png" /> 0.0431<br />\
    <img src="styles/legend/RASTERL8_3_121.png" /> 0.0452<br />\
    <img src="styles/legend/RASTERL8_3_122.png" /> 0.0474<br />\
    <img src="styles/legend/RASTERL8_3_123.png" /> 0.0496<br />\
    <img src="styles/legend/RASTERL8_3_124.png" /> 0.0518<br />\
    <img src="styles/legend/RASTERL8_3_125.png" /> 0.0540<br />\
    <img src="styles/legend/RASTERL8_3_126.png" /> 0.0561<br />\
    <img src="styles/legend/RASTERL8_3_127.png" /> 0.0583<br />\
    <img src="styles/legend/RASTERL8_3_128.png" /> 0.0605<br />\
    <img src="styles/legend/RASTERL8_3_129.png" /> 0.0627<br />\
    <img src="styles/legend/RASTERL8_3_130.png" /> 0.0649<br />\
    <img src="styles/legend/RASTERL8_3_131.png" /> 0.0670<br />\
    <img src="styles/legend/RASTERL8_3_132.png" /> 0.0692<br />\
    <img src="styles/legend/RASTERL8_3_133.png" /> 0.0714<br />\
    <img src="styles/legend/RASTERL8_3_134.png" /> 0.0736<br />\
    <img src="styles/legend/RASTERL8_3_135.png" /> 0.0758<br />\
    <img src="styles/legend/RASTERL8_3_136.png" /> 0.0780<br />\
    <img src="styles/legend/RASTERL8_3_137.png" /> 0.0801<br />\
    <img src="styles/legend/RASTERL8_3_138.png" /> 0.0823<br />\
    <img src="styles/legend/RASTERL8_3_139.png" /> 0.0845<br />\
    <img src="styles/legend/RASTERL8_3_140.png" /> 0.0867<br />\
    <img src="styles/legend/RASTERL8_3_141.png" /> 0.0889<br />\
    <img src="styles/legend/RASTERL8_3_142.png" /> 0.0910<br />\
    <img src="styles/legend/RASTERL8_3_143.png" /> 0.0932<br />\
    <img src="styles/legend/RASTERL8_3_144.png" /> 0.0954<br />\
    <img src="styles/legend/RASTERL8_3_145.png" /> 0.0976<br />\
    <img src="styles/legend/RASTERL8_3_146.png" /> 0.0998<br />\
    <img src="styles/legend/RASTERL8_3_147.png" /> 0.1020<br />\
    <img src="styles/legend/RASTERL8_3_148.png" /> 0.1041<br />\
    <img src="styles/legend/RASTERL8_3_149.png" /> 0.1063<br />\
    <img src="styles/legend/RASTERL8_3_150.png" /> 0.1085<br />\
    <img src="styles/legend/RASTERL8_3_151.png" /> 0.1107<br />\
    <img src="styles/legend/RASTERL8_3_152.png" /> 0.1129<br />\
    <img src="styles/legend/RASTERL8_3_153.png" /> 0.1150<br />\
    <img src="styles/legend/RASTERL8_3_154.png" /> 0.1172<br />\
    <img src="styles/legend/RASTERL8_3_155.png" /> 0.1194<br />\
    <img src="styles/legend/RASTERL8_3_156.png" /> 0.1216<br />\
    <img src="styles/legend/RASTERL8_3_157.png" /> 0.1238<br />\
    <img src="styles/legend/RASTERL8_3_158.png" /> 0.1259<br />\
    <img src="styles/legend/RASTERL8_3_159.png" /> 0.1281<br />\
    <img src="styles/legend/RASTERL8_3_160.png" /> 0.1303<br />\
    <img src="styles/legend/RASTERL8_3_161.png" /> 0.1325<br />\
    <img src="styles/legend/RASTERL8_3_162.png" /> 0.1347<br />\
    <img src="styles/legend/RASTERL8_3_163.png" /> 0.1369<br />\
    <img src="styles/legend/RASTERL8_3_164.png" /> 0.1390<br />\
    <img src="styles/legend/RASTERL8_3_165.png" /> 0.1412<br />\
    <img src="styles/legend/RASTERL8_3_166.png" /> 0.1434<br />\
    <img src="styles/legend/RASTERL8_3_167.png" /> 0.1456<br />\
    <img src="styles/legend/RASTERL8_3_168.png" /> 0.1478<br />\
    <img src="styles/legend/RASTERL8_3_169.png" /> 0.1499<br />\
    <img src="styles/legend/RASTERL8_3_170.png" /> 0.1521<br />\
    <img src="styles/legend/RASTERL8_3_171.png" /> 0.1543<br />\
    <img src="styles/legend/RASTERL8_3_172.png" /> 0.1565<br />\
    <img src="styles/legend/RASTERL8_3_173.png" /> 0.1587<br />\
    <img src="styles/legend/RASTERL8_3_174.png" /> 0.1609<br />\
    <img src="styles/legend/RASTERL8_3_175.png" /> 0.1630<br />\
    <img src="styles/legend/RASTERL8_3_176.png" /> 0.1652<br />\
    <img src="styles/legend/RASTERL8_3_177.png" /> 0.1674<br />\
    <img src="styles/legend/RASTERL8_3_178.png" /> 0.1696<br />\
    <img src="styles/legend/RASTERL8_3_179.png" /> 0.1718<br />\
    <img src="styles/legend/RASTERL8_3_180.png" /> 0.1739<br />\
    <img src="styles/legend/RASTERL8_3_181.png" /> 0.1761<br />\
    <img src="styles/legend/RASTERL8_3_182.png" /> 0.1783<br />\
    <img src="styles/legend/RASTERL8_3_183.png" /> 0.1805<br />\
    <img src="styles/legend/RASTERL8_3_184.png" /> 0.1827<br />\
    <img src="styles/legend/RASTERL8_3_185.png" /> 0.1848<br />\
    <img src="styles/legend/RASTERL8_3_186.png" /> 0.1870<br />\
    <img src="styles/legend/RASTERL8_3_187.png" /> 0.1892<br />\
    <img src="styles/legend/RASTERL8_3_188.png" /> 0.1914<br />\
    <img src="styles/legend/RASTERL8_3_189.png" /> 0.1936<br />\
    <img src="styles/legend/RASTERL8_3_190.png" /> 0.1958<br />\
    <img src="styles/legend/RASTERL8_3_191.png" /> 0.1979<br />\
    <img src="styles/legend/RASTERL8_3_192.png" /> 0.2001<br />\
    <img src="styles/legend/RASTERL8_3_193.png" /> 0.2023<br />\
    <img src="styles/legend/RASTERL8_3_194.png" /> 0.2045<br />\
    <img src="styles/legend/RASTERL8_3_195.png" /> 0.2067<br />\
    <img src="styles/legend/RASTERL8_3_196.png" /> 0.2088<br />\
    <img src="styles/legend/RASTERL8_3_197.png" /> 0.2110<br />\
    <img src="styles/legend/RASTERL8_3_198.png" /> 0.2132<br />\
    <img src="styles/legend/RASTERL8_3_199.png" /> 0.2154<br />\
    <img src="styles/legend/RASTERL8_3_200.png" /> 0.2176<br />\
    <img src="styles/legend/RASTERL8_3_201.png" /> 0.2197<br />\
    <img src="styles/legend/RASTERL8_3_202.png" /> 0.2219<br />\
    <img src="styles/legend/RASTERL8_3_203.png" /> 0.2241<br />\
    <img src="styles/legend/RASTERL8_3_204.png" /> 0.2263<br />\
    <img src="styles/legend/RASTERL8_3_205.png" /> 0.2285<br />\
    <img src="styles/legend/RASTERL8_3_206.png" /> 0.2307<br />\
    <img src="styles/legend/RASTERL8_3_207.png" /> 0.2328<br />\
    <img src="styles/legend/RASTERL8_3_208.png" /> 0.2350<br />\
    <img src="styles/legend/RASTERL8_3_209.png" /> 0.2372<br />\
    <img src="styles/legend/RASTERL8_3_210.png" /> 0.2394<br />\
    <img src="styles/legend/RASTERL8_3_211.png" /> 0.2416<br />\
    <img src="styles/legend/RASTERL8_3_212.png" /> 0.2437<br />\
    <img src="styles/legend/RASTERL8_3_213.png" /> 0.2459<br />\
    <img src="styles/legend/RASTERL8_3_214.png" /> 0.2481<br />\
    <img src="styles/legend/RASTERL8_3_215.png" /> 0.2503<br />\
    <img src="styles/legend/RASTERL8_3_216.png" /> 0.2525<br />\
    <img src="styles/legend/RASTERL8_3_217.png" /> 0.2547<br />\
    <img src="styles/legend/RASTERL8_3_218.png" /> 0.2568<br />\
    <img src="styles/legend/RASTERL8_3_219.png" /> 0.2590<br />\
    <img src="styles/legend/RASTERL8_3_220.png" /> 0.2612<br />\
    <img src="styles/legend/RASTERL8_3_221.png" /> 0.2634<br />\
    <img src="styles/legend/RASTERL8_3_222.png" /> 0.2656<br />\
    <img src="styles/legend/RASTERL8_3_223.png" /> 0.2677<br />\
    <img src="styles/legend/RASTERL8_3_224.png" /> 0.2699<br />\
    <img src="styles/legend/RASTERL8_3_225.png" /> 0.2721<br />\
    <img src="styles/legend/RASTERL8_3_226.png" /> 0.2743<br />\
    <img src="styles/legend/RASTERL8_3_227.png" /> 0.2765<br />\
    <img src="styles/legend/RASTERL8_3_228.png" /> 0.2786<br />\
    <img src="styles/legend/RASTERL8_3_229.png" /> 0.2808<br />\
    <img src="styles/legend/RASTERL8_3_230.png" /> 0.2830<br />\
    <img src="styles/legend/RASTERL8_3_231.png" /> 0.2852<br />\
    <img src="styles/legend/RASTERL8_3_232.png" /> 0.2874<br />\
    <img src="styles/legend/RASTERL8_3_233.png" /> 0.2896<br />\
    <img src="styles/legend/RASTERL8_3_234.png" /> 0.2917<br />\
    <img src="styles/legend/RASTERL8_3_235.png" /> 0.2939<br />\
    <img src="styles/legend/RASTERL8_3_236.png" /> 0.2961<br />\
    <img src="styles/legend/RASTERL8_3_237.png" /> 0.2983<br />\
    <img src="styles/legend/RASTERL8_3_238.png" /> 0.3005<br />\
    <img src="styles/legend/RASTERL8_3_239.png" /> 0.3026<br />\
    <img src="styles/legend/RASTERL8_3_240.png" /> 0.3048<br />\
    <img src="styles/legend/RASTERL8_3_241.png" /> 0.3070<br />\
    <img src="styles/legend/RASTERL8_3_242.png" /> 0.3092<br />\
    <img src="styles/legend/RASTERL8_3_243.png" /> 0.3114<br />\
    <img src="styles/legend/RASTERL8_3_244.png" /> 0.3136<br />\
    <img src="styles/legend/RASTERL8_3_245.png" /> 0.3157<br />\
    <img src="styles/legend/RASTERL8_3_246.png" /> 0.3179<br />\
    <img src="styles/legend/RASTERL8_3_247.png" /> 0.3201<br />\
    <img src="styles/legend/RASTERL8_3_248.png" /> 0.3223<br />\
    <img src="styles/legend/RASTERL8_3_249.png" /> 0.3245<br />\
    <img src="styles/legend/RASTERL8_3_250.png" /> 0.3266<br />\
    <img src="styles/legend/RASTERL8_3_251.png" /> 0.3288<br />\
    <img src="styles/legend/RASTERL8_3_252.png" /> 0.3310<br />\
    <img src="styles/legend/RASTERL8_3_253.png" /> 0.3332<br />\
    <img src="styles/legend/RASTERL8_3_254.png" /> 0.3397<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RASTERL8_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12296700.000000, -797822.456322, 12337950.000000, -748441.762298]
        })
    });
var lyr_RASTERL7_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RASTERL7<br />\
    <img src="styles/legend/RASTERL7_4_0.png" /> -0.5343<br />\
    <img src="styles/legend/RASTERL7_4_1.png" /> -0.5310<br />\
    <img src="styles/legend/RASTERL7_4_2.png" /> -0.5278<br />\
    <img src="styles/legend/RASTERL7_4_3.png" /> -0.5245<br />\
    <img src="styles/legend/RASTERL7_4_4.png" /> -0.5213<br />\
    <img src="styles/legend/RASTERL7_4_5.png" /> -0.5180<br />\
    <img src="styles/legend/RASTERL7_4_6.png" /> -0.5148<br />\
    <img src="styles/legend/RASTERL7_4_7.png" /> -0.5116<br />\
    <img src="styles/legend/RASTERL7_4_8.png" /> -0.5083<br />\
    <img src="styles/legend/RASTERL7_4_9.png" /> -0.5051<br />\
    <img src="styles/legend/RASTERL7_4_10.png" /> -0.5018<br />\
    <img src="styles/legend/RASTERL7_4_11.png" /> -0.4986<br />\
    <img src="styles/legend/RASTERL7_4_12.png" /> -0.4953<br />\
    <img src="styles/legend/RASTERL7_4_13.png" /> -0.4921<br />\
    <img src="styles/legend/RASTERL7_4_14.png" /> -0.4888<br />\
    <img src="styles/legend/RASTERL7_4_15.png" /> -0.4856<br />\
    <img src="styles/legend/RASTERL7_4_16.png" /> -0.4824<br />\
    <img src="styles/legend/RASTERL7_4_17.png" /> -0.4791<br />\
    <img src="styles/legend/RASTERL7_4_18.png" /> -0.4759<br />\
    <img src="styles/legend/RASTERL7_4_19.png" /> -0.4726<br />\
    <img src="styles/legend/RASTERL7_4_20.png" /> -0.4694<br />\
    <img src="styles/legend/RASTERL7_4_21.png" /> -0.4661<br />\
    <img src="styles/legend/RASTERL7_4_22.png" /> -0.4629<br />\
    <img src="styles/legend/RASTERL7_4_23.png" /> -0.4596<br />\
    <img src="styles/legend/RASTERL7_4_24.png" /> -0.4564<br />\
    <img src="styles/legend/RASTERL7_4_25.png" /> -0.4531<br />\
    <img src="styles/legend/RASTERL7_4_26.png" /> -0.4499<br />\
    <img src="styles/legend/RASTERL7_4_27.png" /> -0.4467<br />\
    <img src="styles/legend/RASTERL7_4_28.png" /> -0.4434<br />\
    <img src="styles/legend/RASTERL7_4_29.png" /> -0.4402<br />\
    <img src="styles/legend/RASTERL7_4_30.png" /> -0.4369<br />\
    <img src="styles/legend/RASTERL7_4_31.png" /> -0.4337<br />\
    <img src="styles/legend/RASTERL7_4_32.png" /> -0.4304<br />\
    <img src="styles/legend/RASTERL7_4_33.png" /> -0.4272<br />\
    <img src="styles/legend/RASTERL7_4_34.png" /> -0.4239<br />\
    <img src="styles/legend/RASTERL7_4_35.png" /> -0.4207<br />\
    <img src="styles/legend/RASTERL7_4_36.png" /> -0.4174<br />\
    <img src="styles/legend/RASTERL7_4_37.png" /> -0.4142<br />\
    <img src="styles/legend/RASTERL7_4_38.png" /> -0.4110<br />\
    <img src="styles/legend/RASTERL7_4_39.png" /> -0.4077<br />\
    <img src="styles/legend/RASTERL7_4_40.png" /> -0.4045<br />\
    <img src="styles/legend/RASTERL7_4_41.png" /> -0.4012<br />\
    <img src="styles/legend/RASTERL7_4_42.png" /> -0.3980<br />\
    <img src="styles/legend/RASTERL7_4_43.png" /> -0.3947<br />\
    <img src="styles/legend/RASTERL7_4_44.png" /> -0.3915<br />\
    <img src="styles/legend/RASTERL7_4_45.png" /> -0.3882<br />\
    <img src="styles/legend/RASTERL7_4_46.png" /> -0.3850<br />\
    <img src="styles/legend/RASTERL7_4_47.png" /> -0.3817<br />\
    <img src="styles/legend/RASTERL7_4_48.png" /> -0.3785<br />\
    <img src="styles/legend/RASTERL7_4_49.png" /> -0.3753<br />\
    <img src="styles/legend/RASTERL7_4_50.png" /> -0.3720<br />\
    <img src="styles/legend/RASTERL7_4_51.png" /> -0.3688<br />\
    <img src="styles/legend/RASTERL7_4_52.png" /> -0.3655<br />\
    <img src="styles/legend/RASTERL7_4_53.png" /> -0.3623<br />\
    <img src="styles/legend/RASTERL7_4_54.png" /> -0.3590<br />\
    <img src="styles/legend/RASTERL7_4_55.png" /> -0.3558<br />\
    <img src="styles/legend/RASTERL7_4_56.png" /> -0.3525<br />\
    <img src="styles/legend/RASTERL7_4_57.png" /> -0.3493<br />\
    <img src="styles/legend/RASTERL7_4_58.png" /> -0.3461<br />\
    <img src="styles/legend/RASTERL7_4_59.png" /> -0.3428<br />\
    <img src="styles/legend/RASTERL7_4_60.png" /> -0.3396<br />\
    <img src="styles/legend/RASTERL7_4_61.png" /> -0.3363<br />\
    <img src="styles/legend/RASTERL7_4_62.png" /> -0.3331<br />\
    <img src="styles/legend/RASTERL7_4_63.png" /> -0.3298<br />\
    <img src="styles/legend/RASTERL7_4_64.png" /> -0.3266<br />\
    <img src="styles/legend/RASTERL7_4_65.png" /> -0.3233<br />\
    <img src="styles/legend/RASTERL7_4_66.png" /> -0.3201<br />\
    <img src="styles/legend/RASTERL7_4_67.png" /> -0.3168<br />\
    <img src="styles/legend/RASTERL7_4_68.png" /> -0.3136<br />\
    <img src="styles/legend/RASTERL7_4_69.png" /> -0.3104<br />\
    <img src="styles/legend/RASTERL7_4_70.png" /> -0.3071<br />\
    <img src="styles/legend/RASTERL7_4_71.png" /> -0.3039<br />\
    <img src="styles/legend/RASTERL7_4_72.png" /> -0.3006<br />\
    <img src="styles/legend/RASTERL7_4_73.png" /> -0.2974<br />\
    <img src="styles/legend/RASTERL7_4_74.png" /> -0.2941<br />\
    <img src="styles/legend/RASTERL7_4_75.png" /> -0.2909<br />\
    <img src="styles/legend/RASTERL7_4_76.png" /> -0.2876<br />\
    <img src="styles/legend/RASTERL7_4_77.png" /> -0.2844<br />\
    <img src="styles/legend/RASTERL7_4_78.png" /> -0.2811<br />\
    <img src="styles/legend/RASTERL7_4_79.png" /> -0.2779<br />\
    <img src="styles/legend/RASTERL7_4_80.png" /> -0.2747<br />\
    <img src="styles/legend/RASTERL7_4_81.png" /> -0.2714<br />\
    <img src="styles/legend/RASTERL7_4_82.png" /> -0.2682<br />\
    <img src="styles/legend/RASTERL7_4_83.png" /> -0.2649<br />\
    <img src="styles/legend/RASTERL7_4_84.png" /> -0.2617<br />\
    <img src="styles/legend/RASTERL7_4_85.png" /> -0.2584<br />\
    <img src="styles/legend/RASTERL7_4_86.png" /> -0.2552<br />\
    <img src="styles/legend/RASTERL7_4_87.png" /> -0.2519<br />\
    <img src="styles/legend/RASTERL7_4_88.png" /> -0.2487<br />\
    <img src="styles/legend/RASTERL7_4_89.png" /> -0.2455<br />\
    <img src="styles/legend/RASTERL7_4_90.png" /> -0.2422<br />\
    <img src="styles/legend/RASTERL7_4_91.png" /> -0.2390<br />\
    <img src="styles/legend/RASTERL7_4_92.png" /> -0.2357<br />\
    <img src="styles/legend/RASTERL7_4_93.png" /> -0.2325<br />\
    <img src="styles/legend/RASTERL7_4_94.png" /> -0.2292<br />\
    <img src="styles/legend/RASTERL7_4_95.png" /> -0.2260<br />\
    <img src="styles/legend/RASTERL7_4_96.png" /> -0.2227<br />\
    <img src="styles/legend/RASTERL7_4_97.png" /> -0.2195<br />\
    <img src="styles/legend/RASTERL7_4_98.png" /> -0.2162<br />\
    <img src="styles/legend/RASTERL7_4_99.png" /> -0.2130<br />\
    <img src="styles/legend/RASTERL7_4_100.png" /> -0.2098<br />\
    <img src="styles/legend/RASTERL7_4_101.png" /> -0.2065<br />\
    <img src="styles/legend/RASTERL7_4_102.png" /> -0.2033<br />\
    <img src="styles/legend/RASTERL7_4_103.png" /> -0.2000<br />\
    <img src="styles/legend/RASTERL7_4_104.png" /> -0.1968<br />\
    <img src="styles/legend/RASTERL7_4_105.png" /> -0.1935<br />\
    <img src="styles/legend/RASTERL7_4_106.png" /> -0.1903<br />\
    <img src="styles/legend/RASTERL7_4_107.png" /> -0.1870<br />\
    <img src="styles/legend/RASTERL7_4_108.png" /> -0.1838<br />\
    <img src="styles/legend/RASTERL7_4_109.png" /> -0.1805<br />\
    <img src="styles/legend/RASTERL7_4_110.png" /> -0.1773<br />\
    <img src="styles/legend/RASTERL7_4_111.png" /> -0.1741<br />\
    <img src="styles/legend/RASTERL7_4_112.png" /> -0.1708<br />\
    <img src="styles/legend/RASTERL7_4_113.png" /> -0.1676<br />\
    <img src="styles/legend/RASTERL7_4_114.png" /> -0.1643<br />\
    <img src="styles/legend/RASTERL7_4_115.png" /> -0.1611<br />\
    <img src="styles/legend/RASTERL7_4_116.png" /> -0.1578<br />\
    <img src="styles/legend/RASTERL7_4_117.png" /> -0.1546<br />\
    <img src="styles/legend/RASTERL7_4_118.png" /> -0.1513<br />\
    <img src="styles/legend/RASTERL7_4_119.png" /> -0.1481<br />\
    <img src="styles/legend/RASTERL7_4_120.png" /> -0.1448<br />\
    <img src="styles/legend/RASTERL7_4_121.png" /> -0.1416<br />\
    <img src="styles/legend/RASTERL7_4_122.png" /> -0.1384<br />\
    <img src="styles/legend/RASTERL7_4_123.png" /> -0.1351<br />\
    <img src="styles/legend/RASTERL7_4_124.png" /> -0.1319<br />\
    <img src="styles/legend/RASTERL7_4_125.png" /> -0.1286<br />\
    <img src="styles/legend/RASTERL7_4_126.png" /> -0.1254<br />\
    <img src="styles/legend/RASTERL7_4_127.png" /> -0.1221<br />\
    <img src="styles/legend/RASTERL7_4_128.png" /> -0.1189<br />\
    <img src="styles/legend/RASTERL7_4_129.png" /> -0.1156<br />\
    <img src="styles/legend/RASTERL7_4_130.png" /> -0.1124<br />\
    <img src="styles/legend/RASTERL7_4_131.png" /> -0.1092<br />\
    <img src="styles/legend/RASTERL7_4_132.png" /> -0.1059<br />\
    <img src="styles/legend/RASTERL7_4_133.png" /> -0.1027<br />\
    <img src="styles/legend/RASTERL7_4_134.png" /> -0.0994<br />\
    <img src="styles/legend/RASTERL7_4_135.png" /> -0.0962<br />\
    <img src="styles/legend/RASTERL7_4_136.png" /> -0.0929<br />\
    <img src="styles/legend/RASTERL7_4_137.png" /> -0.0897<br />\
    <img src="styles/legend/RASTERL7_4_138.png" /> -0.0864<br />\
    <img src="styles/legend/RASTERL7_4_139.png" /> -0.0832<br />\
    <img src="styles/legend/RASTERL7_4_140.png" /> -0.0799<br />\
    <img src="styles/legend/RASTERL7_4_141.png" /> -0.0767<br />\
    <img src="styles/legend/RASTERL7_4_142.png" /> -0.0735<br />\
    <img src="styles/legend/RASTERL7_4_143.png" /> -0.0702<br />\
    <img src="styles/legend/RASTERL7_4_144.png" /> -0.0670<br />\
    <img src="styles/legend/RASTERL7_4_145.png" /> -0.0637<br />\
    <img src="styles/legend/RASTERL7_4_146.png" /> -0.0605<br />\
    <img src="styles/legend/RASTERL7_4_147.png" /> -0.0572<br />\
    <img src="styles/legend/RASTERL7_4_148.png" /> -0.0540<br />\
    <img src="styles/legend/RASTERL7_4_149.png" /> -0.0507<br />\
    <img src="styles/legend/RASTERL7_4_150.png" /> -0.0475<br />\
    <img src="styles/legend/RASTERL7_4_151.png" /> -0.0442<br />\
    <img src="styles/legend/RASTERL7_4_152.png" /> -0.0410<br />\
    <img src="styles/legend/RASTERL7_4_153.png" /> -0.0378<br />\
    <img src="styles/legend/RASTERL7_4_154.png" /> -0.0345<br />\
    <img src="styles/legend/RASTERL7_4_155.png" /> -0.0313<br />\
    <img src="styles/legend/RASTERL7_4_156.png" /> -0.0280<br />\
    <img src="styles/legend/RASTERL7_4_157.png" /> -0.0248<br />\
    <img src="styles/legend/RASTERL7_4_158.png" /> -0.0215<br />\
    <img src="styles/legend/RASTERL7_4_159.png" /> -0.0183<br />\
    <img src="styles/legend/RASTERL7_4_160.png" /> -0.0150<br />\
    <img src="styles/legend/RASTERL7_4_161.png" /> -0.0118<br />\
    <img src="styles/legend/RASTERL7_4_162.png" /> -0.0086<br />\
    <img src="styles/legend/RASTERL7_4_163.png" /> -0.0053<br />\
    <img src="styles/legend/RASTERL7_4_164.png" /> -0.0021<br />\
    <img src="styles/legend/RASTERL7_4_165.png" /> 0.0012<br />\
    <img src="styles/legend/RASTERL7_4_166.png" /> 0.0044<br />\
    <img src="styles/legend/RASTERL7_4_167.png" /> 0.0077<br />\
    <img src="styles/legend/RASTERL7_4_168.png" /> 0.0109<br />\
    <img src="styles/legend/RASTERL7_4_169.png" /> 0.0142<br />\
    <img src="styles/legend/RASTERL7_4_170.png" /> 0.0174<br />\
    <img src="styles/legend/RASTERL7_4_171.png" /> 0.0207<br />\
    <img src="styles/legend/RASTERL7_4_172.png" /> 0.0239<br />\
    <img src="styles/legend/RASTERL7_4_173.png" /> 0.0271<br />\
    <img src="styles/legend/RASTERL7_4_174.png" /> 0.0304<br />\
    <img src="styles/legend/RASTERL7_4_175.png" /> 0.0336<br />\
    <img src="styles/legend/RASTERL7_4_176.png" /> 0.0369<br />\
    <img src="styles/legend/RASTERL7_4_177.png" /> 0.0401<br />\
    <img src="styles/legend/RASTERL7_4_178.png" /> 0.0434<br />\
    <img src="styles/legend/RASTERL7_4_179.png" /> 0.0466<br />\
    <img src="styles/legend/RASTERL7_4_180.png" /> 0.0499<br />\
    <img src="styles/legend/RASTERL7_4_181.png" /> 0.0531<br />\
    <img src="styles/legend/RASTERL7_4_182.png" /> 0.0564<br />\
    <img src="styles/legend/RASTERL7_4_183.png" /> 0.0596<br />\
    <img src="styles/legend/RASTERL7_4_184.png" /> 0.0628<br />\
    <img src="styles/legend/RASTERL7_4_185.png" /> 0.0661<br />\
    <img src="styles/legend/RASTERL7_4_186.png" /> 0.0693<br />\
    <img src="styles/legend/RASTERL7_4_187.png" /> 0.0726<br />\
    <img src="styles/legend/RASTERL7_4_188.png" /> 0.0758<br />\
    <img src="styles/legend/RASTERL7_4_189.png" /> 0.0791<br />\
    <img src="styles/legend/RASTERL7_4_190.png" /> 0.0823<br />\
    <img src="styles/legend/RASTERL7_4_191.png" /> 0.0856<br />\
    <img src="styles/legend/RASTERL7_4_192.png" /> 0.0888<br />\
    <img src="styles/legend/RASTERL7_4_193.png" /> 0.0920<br />\
    <img src="styles/legend/RASTERL7_4_194.png" /> 0.0953<br />\
    <img src="styles/legend/RASTERL7_4_195.png" /> 0.0985<br />\
    <img src="styles/legend/RASTERL7_4_196.png" /> 0.1018<br />\
    <img src="styles/legend/RASTERL7_4_197.png" /> 0.1050<br />\
    <img src="styles/legend/RASTERL7_4_198.png" /> 0.1083<br />\
    <img src="styles/legend/RASTERL7_4_199.png" /> 0.1115<br />\
    <img src="styles/legend/RASTERL7_4_200.png" /> 0.1148<br />\
    <img src="styles/legend/RASTERL7_4_201.png" /> 0.1180<br />\
    <img src="styles/legend/RASTERL7_4_202.png" /> 0.1213<br />\
    <img src="styles/legend/RASTERL7_4_203.png" /> 0.1245<br />\
    <img src="styles/legend/RASTERL7_4_204.png" /> 0.1277<br />\
    <img src="styles/legend/RASTERL7_4_205.png" /> 0.1310<br />\
    <img src="styles/legend/RASTERL7_4_206.png" /> 0.1342<br />\
    <img src="styles/legend/RASTERL7_4_207.png" /> 0.1375<br />\
    <img src="styles/legend/RASTERL7_4_208.png" /> 0.1407<br />\
    <img src="styles/legend/RASTERL7_4_209.png" /> 0.1440<br />\
    <img src="styles/legend/RASTERL7_4_210.png" /> 0.1472<br />\
    <img src="styles/legend/RASTERL7_4_211.png" /> 0.1505<br />\
    <img src="styles/legend/RASTERL7_4_212.png" /> 0.1537<br />\
    <img src="styles/legend/RASTERL7_4_213.png" /> 0.1570<br />\
    <img src="styles/legend/RASTERL7_4_214.png" /> 0.1602<br />\
    <img src="styles/legend/RASTERL7_4_215.png" /> 0.1634<br />\
    <img src="styles/legend/RASTERL7_4_216.png" /> 0.1667<br />\
    <img src="styles/legend/RASTERL7_4_217.png" /> 0.1699<br />\
    <img src="styles/legend/RASTERL7_4_218.png" /> 0.1732<br />\
    <img src="styles/legend/RASTERL7_4_219.png" /> 0.1764<br />\
    <img src="styles/legend/RASTERL7_4_220.png" /> 0.1797<br />\
    <img src="styles/legend/RASTERL7_4_221.png" /> 0.1829<br />\
    <img src="styles/legend/RASTERL7_4_222.png" /> 0.1862<br />\
    <img src="styles/legend/RASTERL7_4_223.png" /> 0.1894<br />\
    <img src="styles/legend/RASTERL7_4_224.png" /> 0.1927<br />\
    <img src="styles/legend/RASTERL7_4_225.png" /> 0.1959<br />\
    <img src="styles/legend/RASTERL7_4_226.png" /> 0.1991<br />\
    <img src="styles/legend/RASTERL7_4_227.png" /> 0.2024<br />\
    <img src="styles/legend/RASTERL7_4_228.png" /> 0.2056<br />\
    <img src="styles/legend/RASTERL7_4_229.png" /> 0.2089<br />\
    <img src="styles/legend/RASTERL7_4_230.png" /> 0.2121<br />\
    <img src="styles/legend/RASTERL7_4_231.png" /> 0.2154<br />\
    <img src="styles/legend/RASTERL7_4_232.png" /> 0.2186<br />\
    <img src="styles/legend/RASTERL7_4_233.png" /> 0.2219<br />\
    <img src="styles/legend/RASTERL7_4_234.png" /> 0.2251<br />\
    <img src="styles/legend/RASTERL7_4_235.png" /> 0.2283<br />\
    <img src="styles/legend/RASTERL7_4_236.png" /> 0.2316<br />\
    <img src="styles/legend/RASTERL7_4_237.png" /> 0.2348<br />\
    <img src="styles/legend/RASTERL7_4_238.png" /> 0.2381<br />\
    <img src="styles/legend/RASTERL7_4_239.png" /> 0.2413<br />\
    <img src="styles/legend/RASTERL7_4_240.png" /> 0.2446<br />\
    <img src="styles/legend/RASTERL7_4_241.png" /> 0.2478<br />\
    <img src="styles/legend/RASTERL7_4_242.png" /> 0.2511<br />\
    <img src="styles/legend/RASTERL7_4_243.png" /> 0.2543<br />\
    <img src="styles/legend/RASTERL7_4_244.png" /> 0.2576<br />\
    <img src="styles/legend/RASTERL7_4_245.png" /> 0.2608<br />\
    <img src="styles/legend/RASTERL7_4_246.png" /> 0.2640<br />\
    <img src="styles/legend/RASTERL7_4_247.png" /> 0.2673<br />\
    <img src="styles/legend/RASTERL7_4_248.png" /> 0.2705<br />\
    <img src="styles/legend/RASTERL7_4_249.png" /> 0.2738<br />\
    <img src="styles/legend/RASTERL7_4_250.png" /> 0.2770<br />\
    <img src="styles/legend/RASTERL7_4_251.png" /> 0.2803<br />\
    <img src="styles/legend/RASTERL7_4_252.png" /> 0.2835<br />\
    <img src="styles/legend/RASTERL7_4_253.png" /> 0.2868<br />\
    <img src="styles/legend/RASTERL7_4_254.png" /> 0.2965<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RASTERL7_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12296700.000000, -797822.456322, 12337950.000000, -748441.762298]
        })
    });
var format_ServiceArea_5 = new ol.format.GeoJSON();
var features_ServiceArea_5 = format_ServiceArea_5.readFeatures(json_ServiceArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_5.addFeatures(features_ServiceArea_5);
var lyr_ServiceArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_5, 
                style: style_ServiceArea_5,
                popuplayertitle: 'Service Area',
                interactive: false,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_5_0.png" /> 300 m<br />\
    <img src="styles/legend/ServiceArea_5_1.png" /> 600 m<br />\
    <img src="styles/legend/ServiceArea_5_2.png" /> 900 m<br />' });
var format_ServiceArea_6 = new ol.format.GeoJSON();
var features_ServiceArea_6 = format_ServiceArea_6.readFeatures(json_ServiceArea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_6.addFeatures(features_ServiceArea_6);
var lyr_ServiceArea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_6, 
                style: style_ServiceArea_6,
                popuplayertitle: 'Service Area',
                interactive: false,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_6_0.png" /> 300 m<br />\
    <img src="styles/legend/ServiceArea_6_1.png" /> 600 m<br />\
    <img src="styles/legend/ServiceArea_6_2.png" /> 900 m<br />' });
var format_BadanAir_7 = new ol.format.GeoJSON();
var features_BadanAir_7 = format_BadanAir_7.readFeatures(json_BadanAir_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadanAir_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadanAir_7.addFeatures(features_BadanAir_7);
var lyr_BadanAir_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BadanAir_7, 
                style: style_BadanAir_7,
                popuplayertitle: 'Badan Air',
                interactive: false,
                title: '<img src="styles/legend/BadanAir_7.png" /> Badan Air'
            });
var format_FastestRouteEvacuation_8 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_8 = format_FastestRouteEvacuation_8.readFeatures(json_FastestRouteEvacuation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_8.addFeatures(features_FastestRouteEvacuation_8);
var lyr_FastestRouteEvacuation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_8, 
                style: style_FastestRouteEvacuation_8,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: false,
                title: '<img src="styles/legend/FastestRouteEvacuation_8.png" /> Fastest Route Evacuation'
            });
var format_PermukimanBugangan_9 = new ol.format.GeoJSON();
var features_PermukimanBugangan_9 = format_PermukimanBugangan_9.readFeatures(json_PermukimanBugangan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanBugangan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanBugangan_9.addFeatures(features_PermukimanBugangan_9);
var lyr_PermukimanBugangan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanBugangan_9, 
                style: style_PermukimanBugangan_9,
                popuplayertitle: 'Permukiman Bugangan',
                interactive: false,
                title: '<img src="styles/legend/PermukimanBugangan_9.png" /> Permukiman Bugangan'
            });
var format_FastestRouteEvacuation_10 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_10 = format_FastestRouteEvacuation_10.readFeatures(json_FastestRouteEvacuation_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_10.addFeatures(features_FastestRouteEvacuation_10);
var lyr_FastestRouteEvacuation_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_10, 
                style: style_FastestRouteEvacuation_10,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: false,
                title: '<img src="styles/legend/FastestRouteEvacuation_10.png" /> Fastest Route Evacuation'
            });
var format_PermukimanGlondong_11 = new ol.format.GeoJSON();
var features_PermukimanGlondong_11 = format_PermukimanGlondong_11.readFeatures(json_PermukimanGlondong_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanGlondong_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanGlondong_11.addFeatures(features_PermukimanGlondong_11);
var lyr_PermukimanGlondong_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanGlondong_11, 
                style: style_PermukimanGlondong_11,
                popuplayertitle: 'Permukiman Glondong',
                interactive: false,
                title: '<img src="styles/legend/PermukimanGlondong_11.png" /> Permukiman Glondong'
            });
var format_FastestRouteEvacuation_12 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_12 = format_FastestRouteEvacuation_12.readFeatures(json_FastestRouteEvacuation_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_12.addFeatures(features_FastestRouteEvacuation_12);
var lyr_FastestRouteEvacuation_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_12, 
                style: style_FastestRouteEvacuation_12,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: false,
                title: '<img src="styles/legend/FastestRouteEvacuation_12.png" /> Fastest Route Evacuation'
            });
var format_PermukimanMargolinduk_13 = new ol.format.GeoJSON();
var features_PermukimanMargolinduk_13 = format_PermukimanMargolinduk_13.readFeatures(json_PermukimanMargolinduk_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanMargolinduk_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanMargolinduk_13.addFeatures(features_PermukimanMargolinduk_13);
var lyr_PermukimanMargolinduk_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanMargolinduk_13, 
                style: style_PermukimanMargolinduk_13,
                popuplayertitle: 'Permukiman Margolinduk',
                interactive: false,
                title: '<img src="styles/legend/PermukimanMargolinduk_13.png" /> Permukiman Margolinduk'
            });
var format_FastestRouteEvacuation_14 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_14 = format_FastestRouteEvacuation_14.readFeatures(json_FastestRouteEvacuation_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_14.addFeatures(features_FastestRouteEvacuation_14);
var lyr_FastestRouteEvacuation_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_14, 
                style: style_FastestRouteEvacuation_14,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: false,
                title: '<img src="styles/legend/FastestRouteEvacuation_14.png" /> Fastest Route Evacuation'
            });
var format_PermukimanSampit_15 = new ol.format.GeoJSON();
var features_PermukimanSampit_15 = format_PermukimanSampit_15.readFeatures(json_PermukimanSampit_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanSampit_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanSampit_15.addFeatures(features_PermukimanSampit_15);
var lyr_PermukimanSampit_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanSampit_15, 
                style: style_PermukimanSampit_15,
                popuplayertitle: 'Permukiman Sampit',
                interactive: false,
                title: '<img src="styles/legend/PermukimanSampit_15.png" /> Permukiman Sampit'
            });
var format_FastestRouteEvacuation_16 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_16 = format_FastestRouteEvacuation_16.readFeatures(json_FastestRouteEvacuation_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_16.addFeatures(features_FastestRouteEvacuation_16);
var lyr_FastestRouteEvacuation_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_16, 
                style: style_FastestRouteEvacuation_16,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: false,
                title: '<img src="styles/legend/FastestRouteEvacuation_16.png" /> Fastest Route Evacuation'
            });
var format_PermukimanSeklentig_17 = new ol.format.GeoJSON();
var features_PermukimanSeklentig_17 = format_PermukimanSeklentig_17.readFeatures(json_PermukimanSeklentig_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanSeklentig_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanSeklentig_17.addFeatures(features_PermukimanSeklentig_17);
var lyr_PermukimanSeklentig_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanSeklentig_17, 
                style: style_PermukimanSeklentig_17,
                popuplayertitle: 'Permukiman Seklentig',
                interactive: false,
                title: '<img src="styles/legend/PermukimanSeklentig_17.png" /> Permukiman Seklentig'
            });
var format_FasilitasUmum_18 = new ol.format.GeoJSON();
var features_FasilitasUmum_18 = format_FasilitasUmum_18.readFeatures(json_FasilitasUmum_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_18.addFeatures(features_FasilitasUmum_18);
var lyr_FasilitasUmum_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_18, 
                style: style_FasilitasUmum_18,
                popuplayertitle: 'Fasilitas Umum ',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_18.png" /> Fasilitas Umum '
            });
var format_AdministrasiDemak_19 = new ol.format.GeoJSON();
var features_AdministrasiDemak_19 = format_AdministrasiDemak_19.readFeatures(json_AdministrasiDemak_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiDemak_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiDemak_19.addFeatures(features_AdministrasiDemak_19);
var lyr_AdministrasiDemak_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiDemak_19, 
                style: style_AdministrasiDemak_19,
                popuplayertitle: 'Administrasi Demak',
                interactive: false,
                title: '<img src="styles/legend/AdministrasiDemak_19.png" /> Administrasi Demak'
            });
var group_PermukimanSeklenting = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_16,lyr_PermukimanSeklentig_17,],
                                fold: 'open',
                                title: 'Permukiman Seklenting'});
var group_PermukimanSampit = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_14,lyr_PermukimanSampit_15,],
                                fold: 'open',
                                title: 'Permukiman Sampit'});
var group_PermukimanMargolinduk = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_12,lyr_PermukimanMargolinduk_13,],
                                fold: 'open',
                                title: 'Permukiman Margolinduk'});
var group_PermukimanGlondong = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_10,lyr_PermukimanGlondong_11,],
                                fold: 'open',
                                title: 'Permukiman Glondong'});
var group_PermukimanBugangan = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_8,lyr_PermukimanBugangan_9,],
                                fold: 'open',
                                title: 'Permukiman Bugangan'});
var group_PETANDWI = new ol.layer.Group({
                                layers: [lyr_SENTINEL23_1,lyr_SENTINEL18_2,lyr_RASTERL8_3,lyr_RASTERL7_4,],
                                fold: 'close',
                                title: 'PETA NDWI'});
var group_MentahanServiceArea = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Mentahan Service Area'});

lyr_OpenStreetMap_0.setVisible(true);lyr_SENTINEL23_1.setVisible(true);lyr_SENTINEL18_2.setVisible(true);lyr_RASTERL8_3.setVisible(true);lyr_RASTERL7_4.setVisible(true);lyr_ServiceArea_5.setVisible(true);lyr_ServiceArea_6.setVisible(true);lyr_BadanAir_7.setVisible(true);lyr_FastestRouteEvacuation_8.setVisible(true);lyr_PermukimanBugangan_9.setVisible(true);lyr_FastestRouteEvacuation_10.setVisible(true);lyr_PermukimanGlondong_11.setVisible(true);lyr_FastestRouteEvacuation_12.setVisible(true);lyr_PermukimanMargolinduk_13.setVisible(true);lyr_FastestRouteEvacuation_14.setVisible(true);lyr_PermukimanSampit_15.setVisible(true);lyr_FastestRouteEvacuation_16.setVisible(true);lyr_PermukimanSeklentig_17.setVisible(true);lyr_FasilitasUmum_18.setVisible(true);lyr_AdministrasiDemak_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_PETANDWI,lyr_ServiceArea_5,lyr_ServiceArea_6,lyr_BadanAir_7,group_PermukimanBugangan,group_PermukimanGlondong,group_PermukimanMargolinduk,group_PermukimanSampit,group_PermukimanSeklenting,lyr_FasilitasUmum_18,lyr_AdministrasiDemak_19];
lyr_ServiceArea_5.set('fieldAliases', {'id': 'id', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_METERS': 'AA_METERS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_ServiceArea_6.set('fieldAliases', {'id': 'id', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_METERS': 'AA_METERS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_BadanAir_7.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_8.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanBugangan_9.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_10.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanGlondong_11.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_12.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanMargolinduk_13.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_14.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanSampit_15.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_16.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanSeklentig_17.set('fieldAliases', {'id': 'id', });
lyr_FasilitasUmum_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'SrviceArea': 'SrviceArea', 'Jangkauan': 'Jangkauan', 'Foto': 'Foto', });
lyr_AdministrasiDemak_19.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ServiceArea_5.set('fieldImages', {'id': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_METERS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_ServiceArea_6.set('fieldImages', {'id': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_METERS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_BadanAir_7.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_8.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanBugangan_9.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_10.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanGlondong_11.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_12.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanMargolinduk_13.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_14.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanSampit_15.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_16.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanSeklentig_17.set('fieldImages', {'id': 'TextEdit', });
lyr_FasilitasUmum_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'SrviceArea': 'TextEdit', 'Jangkauan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AdministrasiDemak_19.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ServiceArea_5.set('fieldLabels', {'id': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_METERS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_ServiceArea_6.set('fieldLabels', {'id': 'header label - visible with data', 'CENTER_LON': 'header label - visible with data', 'CENTER_LAT': 'header label - visible with data', 'AA_METERS': 'header label - visible with data', 'AA_MODE': 'header label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_BadanAir_7.set('fieldLabels', {'id': 'no label', });
lyr_FastestRouteEvacuation_8.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'no label', 'TO_ID': 'header label - visible with data', });
lyr_PermukimanBugangan_9.set('fieldLabels', {'id': 'no label', });
lyr_FastestRouteEvacuation_10.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_PermukimanGlondong_11.set('fieldLabels', {'id': 'no label', });
lyr_FastestRouteEvacuation_12.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_PermukimanMargolinduk_13.set('fieldLabels', {'id': 'no label', });
lyr_FastestRouteEvacuation_14.set('fieldLabels', {'DIST_KM': 'hidden field', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_PermukimanSampit_15.set('fieldLabels', {'id': 'hidden field', });
lyr_FastestRouteEvacuation_16.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_PermukimanSeklentig_17.set('fieldLabels', {'id': 'hidden field', });
lyr_FasilitasUmum_18.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'SrviceArea': 'inline label - visible with data', 'Jangkauan': 'hidden field', 'Foto': 'inline label - visible with data', });
lyr_AdministrasiDemak_19.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_AdministrasiDemak_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});