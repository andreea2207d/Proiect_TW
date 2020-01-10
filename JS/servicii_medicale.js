function videoFunction() {
  var x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {
    x.setAttribute("src","../Video/prezentare.mp4");
  } else {
    x.setAttribute("src","movie.ogg");
  }

  x.setAttribute("width", "300");
  x.setAttribute("style","position:absolute;top:115%;left:25%");
  x.setAttribute("controls", "controls");
  document.body.appendChild(x);
}

function audioFunction() {
    var x = document.createElement("AUDIO");
  
    if (x.canPlayType("audio/mpeg")) {
      x.setAttribute("src","../Audio/audio.mp3");
    } else {
      x.setAttribute("src","horse.ogg");
    }
	x.setAttribute("style","position:absolute;top:125%;left:55%");
    x.setAttribute("controls", "controls");
    document.body.appendChild(x);

}