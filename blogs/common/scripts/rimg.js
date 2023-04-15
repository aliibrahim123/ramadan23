function rimg (loc) {
	var imgnb = 29;
	var rnb = Math.round(Math.random() * (imgnb - 1) + 1);
	document.body.style.background = `url(${loc}${rnb}.jpg) 0% 0%/ 100% 100%`;
	document.body.style.margin = '0';
	document.body.style.height = '100vh'
}