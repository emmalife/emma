(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.資產1 = function() {
	this.initialize(img.資產1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,346);


(lib.資產2 = function() {
	this.initialize(img.資產2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,235);


(lib.資產3 = function() {
	this.initialize(img.資產3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,82);


(lib.資產4 = function() {
	this.initialize(img.資產4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,82);


(lib.資產5 = function() {
	this.initialize(img.資產5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,205);


(lib.資產6 = function() {
	this.initialize(img.資產6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,235);// helper functions:

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


(lib.openeve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產6();
	this.instance.parent = this;
	this.instance.setTransform(-104,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.openeve, new cjs.Rectangle(-104,-118,207,235), null);


(lib.open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產3();
	this.instance.parent = this;
	this.instance.setTransform(-91,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.open, new cjs.Rectangle(-91,-41,181,82), null);


(lib.mon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產5();
	this.instance.parent = this;
	this.instance.setTransform(-71,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mon, new cjs.Rectangle(-71,-103,141,205), null);


(lib.eve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產2();
	this.instance.parent = this;
	this.instance.setTransform(-104,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eve, new cjs.Rectangle(-104,-118,207,235), null);


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產4();
	this.instance.parent = this;
	this.instance.setTransform(-91,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.close, new cjs.Rectangle(-91,-41,181,82), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.資產1();
	this.instance.parent = this;
	this.instance.setTransform(-238,-173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-238,-173,475,346), null);


(lib.eveall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_23 = new cjs.Graphics().p("AutOuIAA9bIdbAAIAAdbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_graphics_23,x:3.4,y:-183.25}).wait(98));

	// money
	this.instance = new lib.mon();
	this.instance.parent = this;
	this.instance.setTransform(0,21,1,1,0,0,0,-0.5,-0.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({y:-112.95},48).wait(50));

	// open
	this.instance_1 = new lib.open();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.3,-92.45,1,0.1427,0,0,0,-0.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleY:0.5598,y:-115},5).to({scaleY:1,y:-130.05},9).wait(98));

	// eveopen
	this.instance_2 = new lib.openeve();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(112));

	// close
	this.instance_3 = new lib.close();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,-84.9,1,1,0,0,0,-0.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.528,y:-84.95},4).to({regY:-40.9,scaleY:0.1699,y:-91.95},5).to({_off:true},1).wait(111));

	// eve
	this.ikNode_1 = new lib.eve();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).to({_off:true},9).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-215.4,207,332.9);


// stage content:
(lib.動畫 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.eveall();
	this.instance.parent = this;
	this.instance.setTransform(153.35,141.6,0.4792,0.4792,0,0,0,0.1,0.1);

	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.35,115,0.4792,0.4792,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.5,147.1,74.60000000000002,50.80000000000001);
// library properties:
lib.properties = {
	id: '817873BBA7ED9944A79CEE4323052F9A',
	width: 306,
	height: 230,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/資產1.png", id:"資產1"},
		{src:"images/資產2.png", id:"資產2"},
		{src:"images/資產3.png", id:"資產3"},
		{src:"images/資產4.png", id:"資產4"},
		{src:"images/資產5.png", id:"資產5"},
		{src:"images/資產6.png", id:"資產6"}
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
an.compositions['817873BBA7ED9944A79CEE4323052F9A'] = {
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