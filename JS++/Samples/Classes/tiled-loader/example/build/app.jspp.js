// Compiled with JS++ v.0.7.1

!function(){var Z=(Object.hasOwnProperty('create'))?Object.create:function(p){function f(){}f.prototype=p;return new f();};var aa=(Function.prototype.hasOwnProperty('bind'))?function(f,o){return f.bind(o);}:function(f,o){return function(){return f.apply(o,arguments);};};var global=(function(){return(this);}).call();var Tiled;Tiled={};var System;System={};System.Object=function(){this.mHashCode=0>>>0;};System.Object.prototype.ab="System.Object";System.Object.prototype.toString=function(){return "[object " + this.ab + "]";};Tiled.OrthogonalTileLayer=function(level,tilesetImg,tilesetInfo,mapData,ctx){System.Object.call(this);this.mData=[];this.mTileset;this.mCtx;this.mLevel=null;this.mTileColumns=0|0;this.mSpacing=0|0;this.mCtx=ctx;this.mData=mapData;this.mLevel=level;this.mTileColumns=tilesetInfo.columns|0;this.mSpacing=tilesetInfo.spacing|0;this.mTileset=new Image();this.mTileset.onload=aa(Tiled.OrthogonalTileLayer.prototype.processLayer,this);this.mTileset.src=tilesetImg.src;};Tiled.OrthogonalTileLayer.prototype=Z(System.Object.prototype);Tiled.OrthogonalTileLayer.prototype.ab="Tiled.OrthogonalTileLayer";Tiled.OrthogonalTileLayer.prototype.processLayer=function(){var tileWidth=Tiled.Level.prototype.tileWidth.call(this.mLevel)|0|0;var tileHeight=Tiled.Level.prototype.tileHeight.call(this.mLevel)|0|0;for(var i=0|0,len=this.mData.length|0|0;i<len;i=i+1|0){var tileId=this.mData[i]|0|0;if(tileId===0){continue;}var tileYId=tileId/this.mTileColumns|0;var tileXId=tileId%this.mTileColumns-1|0;if(tileXId== -1){tileXId=this.mTileColumns-1|0;tileYId=tileYId-1|0;}var drawYId=i/(Tiled.Level.prototype.width.call(this.mLevel)|0)|0;var drawXId=i%(Tiled.Level.prototype.width.call(this.mLevel)|0)|0;if(tileXId== -1){continue;}var tileX=tileXId*tileWidth+(tileXId+1)*this.mSpacing|0;var tileY=tileYId*tileHeight+(tileYId+1)*this.mSpacing|0;var drawX=drawXId*tileWidth|0;var drawY=drawYId*tileHeight|0;this.mCtx.drawImage(this.mTileset,tileX,tileY,tileWidth,tileHeight,drawX,drawY,tileWidth,tileHeight);}};Tiled.Level=function(json,tileset){System.Object.call(this);this.mWidth=0>>>0;this.mHeight=0>>>0;this.mTileWidth=0>>>0;this.mTileHeight=0>>>0;this.mLayerCanvases=[];this.mCurrentLayer;this.mCtx;this.mTileset;if(json.tilesets.length==0){throw("No tilesets were found");}Tiled.Level.prototype.validateFeatureSupport.call(this,json);this.mWidth=json.width>>>0;this.mHeight=json.height>>>0;this.mTileWidth=json.tilewidth>>>0;this.mTileHeight=json.tileheight>>>0;this.mTileset=tileset;Tiled.Level.prototype.processLevel.call(this,json);};Tiled.Level.prototype=Z(System.Object.prototype);Tiled.Level.prototype.ab="Tiled.Level";Tiled.Level.prototype.render=function(container){if(!(container instanceof HTMLElement)){throw("Container must be a DOM element");}for(var i=0|0,len=this.mLayerCanvases.length|0;i<len;i=i+1|0){container.appendChild(this.mLayerCanvases[i]);}};Tiled.Level.prototype.processLevel=function(json){if(json.visible===false){return;}else if(json.orientation==="orthogonal"){Tiled.Level.prototype.processOrthogonalLevel.call(this,json);}else {throw("Unsupported level orientation");}};Tiled.Level.prototype.processOrthogonalLevel=function(json){var layers=json.layers;for(var i=0|0,layersLength=layers.length|0;i<layersLength;i=i+1|0){if(layers[i].type=="objectgroup"){}else {Tiled.Level.prototype.addTileLayer.call(this,layers[i].width>>>0,layers[i].height>>>0);new Tiled.OrthogonalTileLayer(this,this.mTileset,json.tilesets[0],ac(layers[i].data),this.mCtx);}}};Tiled.Level.prototype.addTileLayer=function(width,height){width=width>>>0;height=height>>>0;var canvas=document.createElement("canvas");canvas.width=this.mWidth*this.mTileWidth;canvas.height=this.mHeight*this.mTileHeight;this.mLayerCanvases.push(canvas);Tiled.Level.prototype.selectTileLayer.call(this,this.mLayerCanvases.length-1|0);};Tiled.Level.prototype.selectTileLayer=function(index){index=index|0;this.mCurrentLayer=this.mLayerCanvases[index];this.mCtx=this.mCurrentLayer.getContext("2d");};Tiled.Level.prototype.validateFeatureSupport=function(json){if(json.tilesets.length>1){throw("Multiple tilesets are not supported");}for(var i=0|0,len=json.layers.length|0;i<len;i=i+1|0){var layer=json.layers[i];if(layer.opacity!==void 0&&layer.opacity!=1){throw("'opacity is not supported'");}if(layer.compression!==void 0||layer.encoding!==void 0){throw("encoded data are not supported");}if(json.orientation!=="orthogonal"){throw("Unsupported level orientation");}}};Tiled.Level.prototype.width=function(){return(this.mWidth>>>0);};Tiled.Level.prototype.tileWidth=function(){return(this.mTileWidth>>>0);};Tiled.Level.prototype.tileHeight=function(){return(this.mTileHeight>>>0);};!function(){global.jsonp=function(levelJson){var level=new Tiled.Level(levelJson,document.getElementById("tileset"));Tiled.Level.prototype.render.call(level,document.getElementById("render"));};}();function ac(arr){if(arr==null)return[];for(var i1=0,len1=arr.length,el1;i1!=len1;++i1){el1=arr[i1];if(!((el1|0)===el1)){return[];}}return arr;}}();