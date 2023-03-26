function rfon (loc) {
	var nb = 20;
	var el = document.createElement('span');
	el.innerHTML =  `<style>${Array.from({length:nb}).map((ii,i)=>{
		return '@font-face {font-family:"f-' + (i+1) + '"; src: url("' + loc +'/' + (i+1) +'.ttf")}'
	}).join('')}</style>`
	document.body.append(el)
}

function setFon(el) {
	var nb = localStorage.getItem('fon') || 1;
	el.style.fontFamily = 'f-'+nb;
	localStorage.setItem('fon', (nb-0+1) === 21 ? 1 : (nb-0+1))
}

function setFons(el, snb) {
	var nb = (localStorage.getItem('fons') || 20)-0+snb;
	el.style.fontSize = ''+nb + 'px';
	localStorage.setItem('fons', nb)
}