fetch('data/' + location.search.slice(1) + '.json').then(i=>i.json()).then(i=> {
	document.getElementById('con2').innerHTML = i.map(i=>`<div>${i.aya}<br>${i.source}</div><br><br>`).join('');
})