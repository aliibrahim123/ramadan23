fetch('data/' + location.search.slice(1) + '.json').then(i=>i.json()).then(i=> {
	document.getElementById('b1').innerText = 'اسم: ' + i.title;
	document.getElementById('con2').innerHTML = i.article;
})