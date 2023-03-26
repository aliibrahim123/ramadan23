fetch('data/saa/' + location.search.slice(1) + '.json').then(i=>i.json()).then(i=> {
	if (i.icon === 2) return fetch('data/saat/' + i.type+'.json').then(i=>i.json()).then(i=>initT(i));
	document.getElementById('b1').innerText = 'اسم: ' + i.title;
	document.getElementById('b2').innerText = 'مصدر: ' + i.source;
	document.getElementById('con2').innerText = i.txt;
});
function initT(i) {
	document.getElementById('con2').innerHTML = i.map(i=>i.txt).join('<br><br><br>')
}