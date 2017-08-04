/* ----------------------------------------------
 * HanbitSoft Service Development Team
 * 돌아온 한비펫 UI Script
 *  Author - njs2000@hanbitsoft.co.kt 2016-05-10
 ------------------------------------------------- */

$(function(){
	var hanbi = new ImgSprAni($('#hanbi'),
		{frameTotal : 14,
			oneFrameW : 362,
			startFrameIdx : 1,
			duration : 120,
			restartTerm : 0
		}
	);
});

var ImgSprAni = function(obj,settings) {

	var obj = obj.find('img'),
		frameTotal = settings.frameTotal,
		oneFrameW = settings.oneFrameW,
		startFrameIdx = settings.startFrameIdx,
		duration = settings.duration,
		restartTerm = settings.restartTerm;

	//obj.load(function(){
		setTimeout(function(){showOn()},0);
	//});

	var showOn = function(){
		obj.width(oneFrameW*frameTotal+'px');
		var i = startFrameIdx;
		var interval = setInterval(function(){
			i++;
			obj.css({'left':-i*oneFrameW+'px'})
			if(i === frameTotal ){
				clearInterval(interval);
				i = 0;
				obj.css({'left':-i*oneFrameW+'px'})
				setTimeout(function(){showOn()},restartTerm)
				return i;
			}
		},duration);
	}
};





