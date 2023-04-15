fetch('data/' + location.search.slice(1) + '.json').then(i=>i.json()).then(i=> {
	globalThis.wis = i;
	selP(0)
});
curi=0
var selP = (i) => {
	document.getElementById('con2').innerHTML = wis.slice(i*30, (i+1)*30).map(i=>`<div>${i.Wisdom}<br><br></div>`).join('');
	curi = i
}