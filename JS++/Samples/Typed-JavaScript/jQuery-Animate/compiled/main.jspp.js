// Compiled with JS++ v.0.7.1

!function(){!function(){var $el;function moveLeft(pixels,callback){pixels=pixels|0;$el.animate(({left:"-="+(pixels+"")+"px"}),callback);}function moveRight(pixels,callback){pixels=pixels|0;$el.animate(({left:"+="+(pixels+"")+"px"}),callback);}function bounce(){moveRight(350|0,function(){moveLeft(350|0,bounce);});}$el=$("#ball");bounce();}();}();