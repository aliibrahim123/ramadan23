fetch('pages/' + location.search.slice(1) + '.html').then(i=>i.text()).then(i=> {
	document.getElementById('con2').innerHTML = i;
})