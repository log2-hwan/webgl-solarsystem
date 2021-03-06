var stars = [{
	searchterm:'Sun',
	revRadius:0,
	time:0.1,
	radius:1.5,
	ecc:0.0,
	incl:0.0,
	tilt:0,
	src:"../Planets/sunmap.jpg",
	ring:null,
	bump:"../Planets/green.jpg",
	usebump:false,
	satlites:[]
},{
	searchterm:'Mercury',
	revRadius:6,
	time:0.24,
	radius:0.03825,
	ecc:0.206,
	incl:3.38,
	tilt:0.0352,
	src:"../Planets/mercurymap.jpg",
	ring:null,
	bump:"../Planets/mercurybump_NRM.png",
	usebump:true,
	satlites:[]
},{
	searchterm:'Venus',
	revRadius:12,
	time:0.62,
	radius:0.09488,
	ecc:0.007,
	incl:3.86,
	tilt:177.4,
	src:"../Planets/venusmap.jpg",
	ring:null,
	bump:"../Planets/venusbump_NRM.png",
	usebump:true,
	satlites:[]
},{
	searchterm:'Earth',
	revRadius:18,
	time:1.0,
	radius:0.1,
	ecc:0.017,
	incl:7.25,
	tilt:23.44,
	src:"../Planets/earthmap1k.jpg",
	ring:null,
	bump:"../Planets/earthbump1k_NRM.png",
	usebump:true,
	satlites:[{
		searchterm:'Moon',
		revRadius:1,
		time:0.08,
		radius:0.04,
		ecc:0.0554,
		incl:0.0012,
		src:"../Planets/moonmap1k.jpg",
		ring:null,
		bump:"../Planets/moonbump1k_NRM.png",
		usebump:true
	}]
},{
	searchterm:'Mars',
	revRadius:30,
	time:1.88,
	radius:0.053226,
	ecc:0.093,
	incl:5.65,
	tilt:25.19,
	src:"../Planets/mars_1k_color.jpg",
	ring:null,
	bump:"../Planets/marsbump1k_NRM.png",
	usebump:true,
	satlites:[{
		searchterm:'Phobos',
		revRadius:1,
		time:0.08,
		radius:0.004*2,
		ecc:0.015,
		incl:1.093,
		src:"../Planets/phobos.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Deimos',
		revRadius:2,
		time:0.16,
		radius:0.002*2,
		ecc:0.0,
		incl:0.93,
		src:"../Planets/deimos.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	}]
},{
	searchterm:'Jupiter',
	revRadius:96,
	time:11.86,
	radius:1.1209,
	ecc:0.048,
	incl:6.09,
	tilt:3.13,
	src:"../Planets/jupitermap.jpg",
	ring:null,
	bump:"../Planets/green.jpg",
	usebump:false,
	satlites:[{
		searchterm:'Ganymede',
		revRadius:10,
		time:0.02*4,
		radius:0.023*4,
		ecc:0.0013,
		incl:0.20,
		src:"../Planets/ganymede.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Callisto',
		revRadius:18.9,
		time:0.04*4,
		radius:0.02*4,
		ecc:0.007,
		incl:0.192,
		src:"../Planets/callisto.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Io',
		revRadius:4.23,
		time:0.003*4,
		radius:0.015*4,
		ecc:0.004,
		incl:0.05,
		src:"../Planets/io.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Europa',
		revRadius:6.77,
		time:0.01*4,
		radius:0.012*4,
		ecc:0.009,
		incl:0.470,
		src:"../Planets/europa.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	}]
},{
	searchterm:'Saturn',
	revRadius:240,
	time:29.46,
	radius:0.9449,
	ecc:0.054,
	incl:5.51,
	tilt:26.73,
	src:"../Planets/saturnmap.jpg",
	ring:"../Planets/saturnringcolor.jpg",
	ringalpha:"../Planets/saturnringpattern.gif",
	bump:"../Planets/green.jpg",
	usebump:false,
	satlites:[{
		searchterm:'Titan',
		revRadius:12.57,
		time:0.02*4,
		radius:0.02*4,
		ecc:0.0288,
		incl:0.348,
		src:"../Planets/titan.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Rhea',
		revRadius:5.2,
		time:0.01*4,
		radius:0.012*4,
		ecc:0.001,
		incl:0.345,
		src:"../Planets/rhea.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Iapetus',
		revRadius:35.6,
		time:0.2*4,
		radius:0.011*4,
		ecc:0.028,
		incl:15.47,
		src:"../Planets/iapetus.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Dione',
		revRadius:3.77,
		time:0.006*4,
		radius:0.004*4,
		ecc:0.002,
		incl:0.019,
		src:"../Planets/dione.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Tethys',
		revRadius:2.95,
		time:0.004*4,
		radius:0.009*4,
		ecc:0.0,
		incl:1.12,
		src:"../Planets/tethys.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	}]
},{
	searchterm:'Uranus',
	revRadius:360,
	time:84.41,
	radius:0.4007,
	ecc:0.047,
	incl:6.48,
	tilt:97.77,
	src:"../Planets/uranusmap.jpg",
	ring:"../Planets/uranusringcolor.jpg",
	ringalpha:"../Planets/uranusringtrans.jpg",
	bump:"../Planets/green.jpg",
	usebump:false,
	satlites:[{
		searchterm:'Titania',
		revRadius:4.36,
		time:0.025*4,
		radius:0.007*4,
		ecc:0.0011,
		incl:0.340,
		src:"../Planets/titania.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Oberon',
		revRadius:5.83,
		time:0.038*4,
		radius:0.006*4,
		ecc:0.0014,
		incl:0.058,
		src:"../Planets/oberon.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Umbriel',
		revRadius:2.66,
		time:0.01*4,
		radius:0.005*4,
		ecc:0.0039,
		incl:0.128,
		src:"../Planets/umbriel.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	},{
		searchterm:'Ariel',
		revRadius:1.91,
		time:0.005*4,
		radius:0.005*4,
		ecc:0.0012,
		incl:0.260,
		src:"../Planets/ariel.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	}]
},{
	searchterm:'Neptune',
	revRadius:540,
	time:164.8,
	radius:0.3883,
	ecc:0.009,
	incl:6.43,
	tilt:28.32,
	src:"../Planets/neptunemap.jpg",
	ring:null,
	bump:"../Planets/green.jpg",
	usebump:false,
	satlites:[{
		searchterm:'Triton',
		revRadius:3.55,
		time:0.008*4,
		radius:0.011*4,
		ecc:0.0,
		incl:156.885,
		src:"../Planets/triton.jpg",
		ring:null,
		bump:"../Planets/green.jpg",
		usebump:false
	}]
}];