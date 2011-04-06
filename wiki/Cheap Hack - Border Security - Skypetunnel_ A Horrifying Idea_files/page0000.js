




/*
     FILE ARCHIVED ON 20:53:27 Jul 2, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:34:47 Apr 6, 2011.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function resizeIframe(id){
	var newheight;
	if (navigator.appName != "Microsoft Internet Explorer" && !window.opera && !document.mimeType && document.all && document.getElementById){
		newheight=document.getElementById(id).contentWindow.document.body.offsetHeight;
	}else if(document.getElementById){
		newheight=document.getElementById(id).contentWindow.document.body.scrollHeight;
	}
	document.getElementById(id).style.height= (newheight + 16) + "px";
}