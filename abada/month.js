fetch('month.json').then(i=>i.json()).then(i=>globalThis.month = i).then(i=>init());
var $ = (s) => [...document.querySelectorAll(s)];

function init() {
	$('#con')[0].innerHTML = `
		<span style='border: 10px double black'><a style='color:white'href = 'main.html'>رجوع</a></span><br>
		${Object.keys(month).map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
	curCat = month;
	curCats = [];
}

function selCat (cat) {
	if (curCat[cat]?.constructor?.name === 'Number') location.href = location.href.replace('month.html', 'monthv.html?' + curCat[cat]);
	curCats.push(cat);
	curCat = curCat[cat];
	if ('work' in curCat) return initDay();
	$('#con')[0].innerHTML = `
		<span onclick = 'returnCat()'style='border: 10px double black'>رجوع</span><br>
		${Object.keys(curCat).slice(1).map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
}
function initDay () {
	$('#con')[0].innerHTML = `
		<span onclick = 'returnCat()'style='border: 10px double black'>رجوع</span><br>
		${curCat.monas ? 'مناسبة: </br>' + curCat.monas.replaceAll('@@', ',') : ''}
		${curCat.farsi ? '<br><br>قول سلمان الفارسي عن هذا اليوم: </br><br>' + curCat.farsi : ''}
		${curCat.sadeg ? '<br><br>قول الامام الصادق عن هذا اليوم: </br><br>' + curCat.sadeg : ''}
		<br><br>اعمال: 
		${curCat.work.length ? curCat.work.filter(i=>i[1]).map((i)=>"<div class='item' onclick = 'selWor(" + '"' + i[0] + '")' + "'>" + i[1] + '</div>').join(''):''}
	`;
}
function selWor(work) {
	location.href = location.href.replace('month.html', 'monthv.html?' + work);
}

function returnCat () {
	curCats.pop();
	if (curCats.length === 0) return init();
	curCat = curCats.reduce((a,b) => a[b], month);
	$('#con')[0].innerHTML = `
		<span onclick = 'returnCat()'style='border: 10px double black'>رجوع</span><br>
		${Object.keys(curCat).slice(1).map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
}