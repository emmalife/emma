(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At4MhQhpgBhKhJQhKhLAAhpIAAxGQAAhoBKhLQBKhJBpAAIWnAAIAAGQIFSAAQBlAABIBHQBIBIAABmIAALFQAABlhIBJQhIBHhlABg");
	mask.setTransform(192.675,192);

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5B2C02","#683F0E"],[0,1],-64.7,78.8,82.6,-100.6).s().p("A+GCcMAaoggbMAhlAbkMgapAgbg");
	this.shape.setTransform(192.675,192);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(78.5,112,228.39999999999998,160.10000000000002), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsODIQhTAAg6g7Qg7g6AAhTQAAhSA7g7QA6g6BTAAIYdAAQBTAAA6A6QA7A7AABSIAADIg");
	mask.setTransform(98.45,20.675);

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#99590D","#683F0E"],[0,1],-0.1,38.9,0.2,-52.5).s().p("AvYDIIACmWIevAHIgCGWg");
	this.shape.setTransform(98.45,20.675);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.2,0.7,196.60000000000002,40), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkMENQhwhvAAieQAAidBwhvQBvhwCdAAQCeAABvBwQBwBvAACdQAACehwBvQhvBwieAAQidAAhvhwg");
	mask_1.setTransform(73.925,73.925);

	// 圖層_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFBD17","#FFAB15"],[0,1],22.5,-31.8,-14.4,20.6).s().p("AriCAIJjtiINiJjIpjNig");
	this.shape_1.setTransform(73.925,73.925);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(35.9,35.9,76.1,76.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgonAooMAAAhRPMBRPAAAMAAABRPg");
	mask_1.setTransform(260,260);

	// 圖層_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFFFF").s().p("AgTDSIAAgvQhOgIgShTIA9gQQAIA0AwAAQAWAAALgLQAKgLAAgQQAAgQgKgJQgLgIgjgNQghgMgSgKQgTgKgLgUQgMgVAAgaQAAgjAVgcQAUgcAsgGIAAglIAnAAIAAAlQBDAIATBDIg2AXQgRgughAAQgQAAgKAKQgKAKAAAPQAAAPAKAIQAKAIAfAMQAkAOATAKQAUALAMAUQAMAVAAAaQAAAqgYAcQgZAcgvAEIAAAwg");
	this.shape_1.setTransform(394.125,211.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFBD17","#FCBA15"],[0,1],-32.9,0,33,0).s().p("AjpDqQhhhhAAiJQAAiIBhhhQBhhhCIAAQCJAABhBhQBhBhAACIQAACJhhBhQhhBhiJAAQiIAAhhhhgAjijiQheBeAACEQAACFBeBeQBeBeCEAAQCFAABeheQBeheAAiFQAAiEheheQheheiFAAQiEAAheBeg");
	this.shape_2.setTransform(394.925,210.925);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(361.8,177.8,66.30000000000001,66.29999999999998), null);


(lib.wallet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 分離模式
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-1.05,-59.5,1,1.025,0,0,0,98.4,20.7);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.05,0,1,1,0,0,0,192.7,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wallet, new cjs.Rectangle(-192.6,-192,385.29999999999995,384), null);


(lib.coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 分離模式
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(-134.9,49.1,1,1,0,0,0,260,260);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,73.9,73.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin, new cjs.Rectangle(-394.9,-210.9,520,520), null);


// stage content:
(lib.動畫 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_52 = new cjs.Graphics().p("AzdQoIAAjLIgiAAIAAlyIB9AAIAAr3IhDAAIAAoNMAqGAAAIAAINIhSAAIAANNIAmAAIAAHngAnlHaIM7AAIAApDIs7AAg");
	var mask_graphics_95 = new cjs.Graphics().p("AzdQoIAAjLIgiAAIAAlyIB9AAIAAr3IhDAAIAAoNMAqGAAAIAAINIhSAAIAANNIAmAAIAAHngAnlCRIM7AAIAAj6Is7AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_graphics_52,x:147.2616,y:106.3556}).wait(43).to({graphics:mask_graphics_95,x:147.2616,y:106.3556}).wait(25));

	// coin
	this.instance = new lib.coin();
	this.instance.parent = this;
	this.instance.setTransform(129.95,128.05,0.4812,0.4812,0,0,0,0.1,0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({regY:0,x:151.6,y:91.45},14).to({regY:0.1,x:201.65,y:68.85},9).to({regX:0,regY:0,x:240.6,y:126.1},11).to({x:208.95,y:154},8).to({regX:0.1,rotation:-360,x:161.8},10).wait(16));

	// 圖層_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AzdQoIAAjLIgiAAIAAlyIB9AAIAAr3IhDAAIAAoNMAqGAAAIAAINIhSAAIAANNIAmAAIAAHngAnlHaIM7AAIAApDIs7AAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AzdQoIAAjLIgiAAIAAlyIB9AAIAAr3IhDAAIAAoNMAqGAAAIAAINIhSAAIAANNIAmAAIAAHngAnlCRIM7AAIAAj6Is7AAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:147.2616,y:106.3556}).wait(43).to({graphics:mask_1_graphics_43,x:147.2616,y:106.3556}).wait(77));

	// coin
	this.instance_1 = new lib.coin();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.95,128.05,0.4812,0.4812,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,x:151.6,y:91.45},14).to({regY:0.1,x:201.65,y:68.85},9).to({regX:0,regY:0,x:240.6,y:126.1},11).to({x:208.95,y:154},8).to({rotation:-360,x:130.5},10).wait(67).to({regX:-134.8,regY:49.1,x:65.65,y:177.65},0).wait(1));

	// wallet
	this.instance_2 = new lib.wallet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154,115.5,0.4812,0.4812,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(173.3,138.6,121.19999999999999,74.1);
// library properties:
lib.properties = {
	id: 'DB28AE468DC28C489D3CFA01E232130A',
	width: 308,
	height: 231,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
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
an.compositions['DB28AE468DC28C489D3CFA01E232130A'] = {
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