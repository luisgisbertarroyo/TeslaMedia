$(document).ready(function(){
	/* [nombre, URLDirecto, URLDemanda, imagen] */
	/* Img: */
	//$('#infoBox').append('Width: '+$(window).width()+'<br>Height: '+$(window).height())
	
	var televisionArray =
	[
	  ["La 1","http://www.rtve.es/directo/la-1/","http://www.rtve.es/alacarta/tve/la1/","la1.jpg"],
	  ["La 2","http://www.rtve.es/directo/la-2/","http://www.rtve.es/alacarta/tve/la2/","la2.jpg"],
	  ["24H","https://www.rtve.es/directo/canal-24h/","https://www.rtve.es/alacarta/tve/24-horas/","24h.jpg"],
	  ["Teledeporte","http://www.rtve.es/directo/teledeporte/","http://www.rtve.es/alacarta/tve/teledeporte/","teledeporte.jpg"],
	  ["Antena 3","http://www.atresplayer.com/directos/television/","http://www.atresplayer.com/","antena3.jpg"],
	  ["Cuatro","http://www.cuatro.com/en-directo/","http://www.mitele.es/","cuatro.jpg"],
	  ["Telecinco","http://www.telecinco.es/endirecto/","http://www.mitele.es/","telecinco.jpg"],
	  ["La Sexta","https://www.atresplayer.com/directos/lasexta/","https://www.atresplayer.com/lasexta/","lasexta.jpg"]
	  
	  
	];

	for(x=0;x<televisionArray.length;x++)
	{
		theString='<li style="background-image:URL(../img/canales/'+televisionArray[x][3]+');"><span>'
		
		if (televisionArray[x][1]!= '')
			theString+='<a href="'+televisionArray[x][1]+'">Directo</a>'
		
		if (televisionArray[x][2]!= '')
			theString+='<a href="'+televisionArray[x][2]+'">Demanda</a>'
		
				theString+='</span></li>'
		
		$('ul#television').append(theString);
	}
	
	var onDemandArray =
	[
	  ["Amazon Prime","https://www.primevideo.com/region/eu/","amazonprime.png"],
	  ["HBO+","https://play.hbomax.com/","hbomax.png"],
	  ["Disney +","https://www.disneyplus.com/es-es/","disneyplus.jpg"],
	  ["Apple TV Plus","https://tv.apple.com/es","appletvplus.jpg"],
	  ["Netflix","https://www.netflix.com/es/","netflix.jpg"],
	  ["Movistar+","https://ver.movistarplus.es/?nv=5","movistar.jpg"],
   	  ["Orange TV","https://orangetv.orange.es/","orangetv.png"],
   	  ["Vodafone TV","https://www.vodafonetvonline.es/","vodafonetv.png"],
   	  ["Plex","https://app.plex.tv","plex.jpg"],
	  ["Rakuten","https://rakuten.tv/es","rakutentv.jpg"],
	  ["SkyShowTime","https://www.skyshowtime.com/es/start","skyshowtime.jpg"],
	  ["Starz","https://www.starz.com/es/es/","starz.jpg"],
	  ["Vimeo","https://vimeo.com/watch","vimeo.jpg"],	  
	  ["Youtube","https://www.youtube.com","youtube.jpg"],
	  ["Mi Tele","https://www.mitele.es/","mitele.jpg"],
	  ["DAZN","https://www.dazn.com/es-ES/home","dazn.jpg"],
      ["Emby","http://app.emby.media/#!/startup/manualserver.html","emby.jpg"],
      ["Xbox","https://xbox.com/play","xbox.jpg"]
	  
	  
	];
	
	for(x=0;x<onDemandArray.length;x++)
	{
		theString='<li style="background-image:URL(../img/canales/'+onDemandArray[x][2]+');">'
		theString+='<a href="'+onDemandArray[x][1]+'" class="fullLink">&nbsp;</a>'
		theString+='</li>'
		
		$('ul#plataformasOnDemand').append(theString);
	}
	
	var LocalesArray =
	[
		  ["TeleMadrid","http://www.telemadrid.es/?q=%3Eemision_en_directo","","telemadrid.jpg"],
		  ["LaOtra","","http://www.telemadrid.es/la-otra/","laOtra.jpg"],
		  ["TV3","https://www.ccma.cat/tv3/directe/tv3/","","tv3.jpg"],
		  ["Canal Extremadura","http://www.canalextremadura.es/tv/directo#ahora","http://www.canalextremadura.es/tv/programas","extremadura.jpg"],
		  ["RTPA","","https://www.rtpa.es/tpa-television","rtpa.jpg"],
		  ["CMM","https://www.cmmedia.es/en-directo/tv/","https://www.cmmedia.es/programacion/tv/","cmm.jpg"],
		  ["Canal Rias Baixas","","https://canalriasbaixas.tv","canalriasbaixas.jpg"],
		  ["Canal Sur","http://www.canalsur.es/portada-adirecto-722225.html","http://www.canalsur.es/programas_tv.html","canalsur.jpg"],
		  ["Television de Galicia","http://www.crtvg.es/tvg/tvg-en-directo","http://www.crtvg.es/tvg/a-carta","televisiondegalicia.jpg"],
		  ["Malaga24H","http://malaga24h.com/directo-de-malaga-24-horas/","","malaga24h.jpg"],
		  ["ETB 1","https://www.eitb.eus/eu/telebista/etb1/","","etb1.jpg"],
		  ["ETB 2","https://www.eitb.eus/eu/telebista/etb2/","","etb2.jpg"],
		  ["A Punt","https://apuntmedia.es/va/directe/tv","","apunt.jpg"]
		  
		  
		  
		  
	];
	
	for(x=0;x<LocalesArray.length;x++)
	{
		theString='<li style="background-image:URL(../img/canales/'+LocalesArray[x][3]+');"><span>'
		
		if (LocalesArray[x][1]!= '')
			theString+='<a href="'+LocalesArray[x][1]+'">Directo</a>'
		
		if (LocalesArray[x][2]!= '')
			theString+='<a href="'+LocalesArray[x][2]+'">Demanda</a>'
		
				theString+='</span></li>'
		
		$('ul#canalesLocales').append(theString);
	}
	
	
		
	$('.cine_main ul').each(function(){
		$(this).width($(this).children().length*340)
	})
	
	$('.cine_main li a').each(function(){
		$(this).width(100/($(this).siblings().length+1)+'%')
	})
	
	if ($(window).width()== '1105' || $(window).width()== '694')
		$('#fullscreenButton').hide();
	
	
	
	
})