    function vidplay() {
       var video = document.getElementById("Video1");
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
       } else {
          video.pause();
       }
    }

    function restart() {
        var video = document.getElementById("Video1");
        video.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("Video1");
        video.currentTime += value;
    }  

    function getPlaySpeed() { 
        var vid = document.getElementById("Video1");
        alert(vid.playbackRate);
    } 

    function setPlaySpeed(value) { 
	var vid = document.getElementById("Video1");
	vid.playbackRate = value;
	} 
	
	function out() {
		var vid=document.getElementById("iframe_a");
		vid.src="pending.mp4";
	}
	
	function notout() {
		var vid=document.getElementById("iframe_a");
		vid.src="notout2.jpg";
	}
	
	function clear() {
		var vid=document.getElementById("iframe_a");
		vid.src="pending(2).mp4";
	}
