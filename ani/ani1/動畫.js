(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"動畫_atlas_", frames: [[0,0,531,795],[0,797,521,521],[0,1320,520,521]]}
];


// symbols:



(lib.資產1 = function() {
	this.initialize(ss["動畫_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.資產2 = function() {
	this.initialize(ss["動畫_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.資產3 = function() {
	this.initialize(ss["動畫_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.handle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產3();
	this.instance.parent = this;
	this.instance.setTransform(-260,-261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.handle, new cjs.Rectangle(-260,-261,520,521), null);


(lib.desk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產1();
	this.instance.parent = this;
	this.instance.setTransform(-267,-365);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.desk, new cjs.Rectangle(-267,-365,531,795), null);


(lib.cd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產2();
	this.instance.parent = this;
	this.instance.setTransform(-261,-261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cd, new cjs.Rectangle(-261,-261,521,521), null);


// stage content:
(lib.動畫 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handle
	this.instance = new lib.handle();
	this.instance.parent = this;
	this.instance.setTransform(68.8,73.95,0.4708,0.4708,0,0,0,-190.8,-83.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-191.2,regY:-83,rotation:-51.7097,y:74},23).wait(97).to({regX:-191,regY:-83.2,rotation:-40.7361,x:68.75,y:73.9},0).wait(1));

	// cd
	this.instance_1 = new lib.cd();
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.5,111.6,0.4708,0.4708,0,0,0,-0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({regX:0.5,regY:0.6,scaleX:0.4701,scaleY:0.4701,rotation:-33.07,x:170,y:111.7},0).wait(1).to({regX:-0.5,regY:-0.5,rotation:-44.8245,x:169.3,y:111.65},0).wait(1).to({rotation:-56.4887,x:169.25,y:111.75},0).wait(1).to({rotation:-68.0627,x:169.35,y:111.9},0).wait(1).to({rotation:-79.5464,y:112.05},0).wait(1).to({rotation:-90.9399,x:169.45,y:112.15},0).wait(1).to({rotation:-102.2431,x:169.55,y:112.25},0).wait(1).to({rotation:-113.4561,x:169.7,y:112.3},0).wait(1).to({rotation:-124.5788,x:169.85,y:112.4},0).wait(1).to({rotation:-135.6113,x:169.95,y:112.35},0).wait(1).to({rotation:-146.5536,x:170.05,y:112.4},0).wait(1).to({rotation:-157.4056,x:170.2,y:112.35},0).wait(1).to({rotation:-168.1673,x:170.35,y:112.3},0).wait(1).to({rotation:-178.8388,x:170.45,y:112.2},0).wait(1).to({rotation:-189.4201,x:170.55,y:112.1},0).wait(1).to({rotation:-199.9111,x:170.6,y:111.95},0).wait(1).to({rotation:-210.3119,y:111.9},0).wait(1).to({rotation:-220.6224,x:170.7,y:111.8},0).wait(1).to({rotation:-230.8427,y:111.65},0).wait(1).to({rotation:-240.9728,x:170.65,y:111.5},0).wait(1).to({rotation:-251.0126,x:170.6,y:111.45},0).wait(1).to({rotation:-260.9621,y:111.3},0).wait(1).to({rotation:-270.8214,x:170.5,y:111.2},0).wait(1).to({rotation:-280.5905,x:170.4,y:111.1},0).wait(1).to({rotation:-290.2693,x:170.25,y:111.05},0).wait(1).to({rotation:-299.8579,x:170.2},0).wait(1).to({rotation:-309.3562,x:170.1,y:110.95},0).wait(1).to({rotation:-318.7643,x:169.95},0).wait(1).to({rotation:-328.0821,x:169.85,y:111},0).wait(1).to({rotation:-337.3097,x:169.75,y:111.05},0).wait(1).to({rotation:-346.447,x:169.6},0).wait(1).to({rotation:-355.4941,x:169.5,y:111.15},0).wait(1).to({rotation:-364.451,x:169.45},0).wait(1).to({rotation:-373.3176,x:169.4,y:111.25},0).wait(1).to({rotation:-382.0939,x:169.35,y:111.4},0).wait(1).to({rotation:-390.78,y:111.45},0).wait(1).to({rotation:-399.3759,x:169.25,y:111.55},0).wait(1).to({rotation:-407.8815,x:169.3,y:111.65},0).wait(1).to({rotation:-416.2969,x:169.25,y:111.75},0).wait(1).to({rotation:-424.6221,x:169.3,y:111.85},0).wait(1).to({rotation:-432.8569,x:169.4,y:111.95},0).wait(1).to({rotation:-441.0016,x:169.35,y:112.05},0).wait(1).to({rotation:-449.056,x:169.45,y:112.15},0).wait(1).to({rotation:-457.0201,x:169.5,y:112.25},0).wait(1).to({rotation:-464.894,x:169.55,y:112.3},0).wait(1).to({rotation:-472.6777,x:169.7},0).wait(1).to({rotation:-480.3711,x:169.75,y:112.35},0).wait(1).to({rotation:-487.9743,x:169.85,y:112.4},0).wait(1).to({rotation:-495.4872,x:169.95,y:112.35},0).wait(1).to({rotation:-502.9099,x:170.05,y:112.4},0).wait(1).to({rotation:-510.2423,x:170.15,y:112.35},0).wait(1).to({rotation:-517.4845,x:170.2},0).wait(1).to({rotation:-524.6365,x:170.35,y:112.3},0).wait(1).to({rotation:-531.6982},0).wait(1).to({rotation:-538.6696,x:170.45,y:112.2},0).wait(1).to({rotation:-545.5508,x:170.5},0).wait(1).to({rotation:-552.3418,x:170.55,y:112.1},0).wait(1).to({rotation:-559.0425,x:170.6,y:111.95},0).wait(1).to({rotation:-565.653},0).wait(1).to({rotation:-572.1732,x:170.65,y:111.85},0).wait(1).to({rotation:-578.6032,x:170.7,y:111.8},0).wait(1).to({rotation:-584.9429,x:170.65,y:111.7},0).wait(1).to({rotation:-591.1924,x:170.7,y:111.65},0).wait(1).to({rotation:-597.3517,y:111.6},0).wait(1).to({rotation:-603.4207,x:170.65,y:111.5},0).wait(1).to({rotation:-609.3994,x:170.6,y:111.45},0).wait(1).to({rotation:-615.2879,y:111.35},0).wait(1).to({rotation:-621.0862,y:111.3},0).wait(1).to({rotation:-626.7942,x:170.5,y:111.2},0).wait(1).to({rotation:-632.412},0).wait(1).to({rotation:-637.9395,x:170.4,y:111.1},0).wait(1).to({rotation:-643.3768},0).wait(1).to({rotation:-648.7238,x:170.25,y:111.05},0).wait(1).to({rotation:-653.9806},0).wait(1).to({rotation:-659.1472,x:170.2},0).wait(1).to({rotation:-664.2235,x:170.15,y:111},0).wait(1).to({rotation:-669.2095,x:170.1,y:110.95},0).wait(1).to({rotation:-674.1053,x:170,y:111},0).wait(1).to({rotation:-678.9109,x:169.95,y:110.95},0).wait(1).to({rotation:-683.6262,x:169.9},0).wait(1).to({rotation:-688.2513,x:169.8,y:111},0).wait(1).to({rotation:-692.7861},0).wait(1).to({rotation:-697.2307,x:169.75,y:111.05},0).wait(1).to({rotation:-701.5851,x:169.7,y:111.1},0).wait(1).to({rotation:-705.8491,x:169.6,y:111.05},0).wait(1).to({rotation:-710.023},0).wait(1).to({rotation:-714.1066,x:169.5,y:111.15},0).wait(1).to({rotation:-718.1},0).wait(1).to({rotation:-722.0031},0).wait(1).to({rotation:-725.8159,x:169.45,y:111.2},0).wait(1).to({rotation:-729.5385,x:169.4,y:111.25},0).wait(1).to({rotation:-733.1709},0).wait(1).to({rotation:-736.7131,x:169.35,y:111.3},0).wait(1).to({rotation:-740.1649,y:111.4},0).wait(1).to({rotation:-743.5266},0).wait(1).to({rotation:-746.798,y:111.45},0).wait(1).to({rotation:-749.9791},0).wait(1).to({regX:0.5,regY:0.6,rotation:-753.07,x:170,y:111.7},0).wait(1));

	// desk
	this.instance_2 = new lib.desk();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.65,128.05,0.4708,0.4708,0,0,0,-1.2,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.5,-31.7,211,346.9);
// library properties:
lib.properties = {
	id: 'FC7177F521F3E24398FD1B74CB5D8786',
	width: 299,
	height: 226,
	fps: 12,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/動畫_atlas_.png", id:"動畫_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FC7177F521F3E24398FD1B74CB5D8786'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;