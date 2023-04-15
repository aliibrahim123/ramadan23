fetch('data.json').then(i=>i.json()).then(i=>globalThis.blogs = i).then(i=>init());
var $ = (s) => [...document.querySelectorAll(s)];

function init() {
	blogs['متفرقات'] = undefined;
	$('#con')[0].innerHTML = `
		<span style='border: 10px double black'><a style='color:white'href = '../index.html'>رجوع</a></span><br>
		${Object.keys(blogs).map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
	curCat = blogs;
	curCats = []
}

function selCat (cat) {
	if (curCat[cat].constructor.name === 'Number') location.href = location.href.replace('main.html', 'viewer.html?' + curCat[cat]);
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
	curCat = curCats.reduce((a,b) => a[b], blogs);
	$('#con')[0].innerHTML = `
		<span onclick = 'returnCat()'style='border: 10px double black'>رجوع</span><br>
		${Object.keys(curCat).map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
}