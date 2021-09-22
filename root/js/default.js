$(function(){
	//Definir playlist
	var playlist=[{
		artist:'Bill Evans',
		title:'Like Someone in Love',
		mp3:'songs/like-someone-in-love.mp3'
	},{
		artist:'Chet Baker',
		title: 'Almost Blue',
		mp3:'songs/almost-blue.mp3'
	}];
	
	var currentTrack = 0;
	var numTracks = playlist.length;

	var player = $(".player").jPlayer({
	ready: function(){
		//Configura a faixa inicial do jPlayer
	player.jPlayer("setMedia", playlist[currentTrack])
	player.playCurrent();
	},
	ended:function(){
		//quando terminar de tocar uma música, ir para a próxima
		$(this).playNext();
	},
	play: function(){
		//quando começar a tocar, escrever o nome da faixa sendo executada
		$('.player-current-track').text(playlist[currentTrack].artist+' - '+playlist[currentTrack].title);

	},
	swfPath: 'js/plugins/jplayer/',
	supplied:"mp3",
	cssSelectorAncestor:"",
	cssSelector:{
		play:'.player-play',
		pause:".player-pause",
		stop:".player-stop",
		seekBar:".player-timeline",
		playBar:".player-timeline-control"
	},
	size:{
		width:"1px",
		height:"1px"
	}

});


player.playCurrent = function(){
	player.jPlayer("setMedia",playlist[currentTrack]).jPlayer("play");
}

player.playNext = function(){
	currentTrack = (currentTrack == (numTracks -1))? 0: ++currentTrack;
	player.playCurrent();
};

player.playPrevious=function(){
	currentTrack = (currentTrack == 0)? numTracks -1: --currentTrack;
	player.playCurrent();
};

$('.player-next').click(function(){
	player.playNext();
});

$('.player-prev').click(function(){
	player.playPrevious();
});
});



// slide background

	