// Compiled with JS++ v.0.7.1

!function(){var JSPPSamples;JSPPSamples={};JSPPSamples.Animate={};JSPPSamples.Animate.Bounce={moveRight:function($el,pixels,callback){pixels=pixels|0;$el.animate(({left:"+="+(pixels+"")+"px"}),callback);},bounce:function($el){function runAnimation(){JSPPSamples.Animate.Bounce.moveRight($el,350|0,function(){JSPPSamples.Animate.Bounce.moveLeft($el,350|0,runAnimation);});}runAnimation();},moveLeft:function($el,pixels,callback){pixels=pixels|0;$el.animate(({left:"-="+(pixels+"")+"px"}),callback);}};!function(){var $el=$("#ball");JSPPSamples.Animate.Bounce.bounce($el);}();}();