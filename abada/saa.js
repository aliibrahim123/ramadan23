fetch('saa.json').then(i=>i.json()).then(i=>globalThis.saa = i).then(i=>init());
var $ = (s) => [...document.querySelectorAll(s)];

function init() {
	$('#con')[0].innerHTML = `
		<span style='border: 10px double black'><a style='color:white'href = 'main.html'>رجوع</a></span><br>
		${Object.keys(saa).map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
	curCat = saa;
	curCats = []
}

function selCat (cat) {
	if (curCat[cat].constructor.name === 'Number') location.href = location.href.replace('saa.html', 'saav.html?' + curCat[cat]);
	curCats.push(cat);
	curCat = curCat[cat];
	$('#con')[0].innerHTML = `
		<span onclick = 'returnCat()'style='border: 10px double black'>رجوع</span><br>
		${Object.keys(curCat).map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
}

function returnCat () {
	curCats.pop();
	if (curCats.length === 0) return init();
	curCat = curCats.reduce((a,b) => a[b], saa);
	$('#con')[0].innerHTML = `
		<span onclick = 'returnCat()'style='border: 10px double black'>رجوع</span><br>
		${Object.keys(curCat).map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
}