fetch('data.json').then(i=>i.json()).then(i=>globalThis.klam = i).then(i=>init());
var $ = (s) => [...document.querySelectorAll(s)];

function init() {
	$('#con')[0].innerHTML = `
		<span style='border: 10px double black'><a style='color:white'href = '../index.html'>رجوع</a></span><br>
		${klam.map((i)=>"<div class='item' onclick = 'selCat(" + '"' + i + '")' + "'>" + i + '</div>').join('')}
	`;
}

function selCat (cat) {
	location.href = location.href.replace('main.html', 'viewer.html?' + cat);
}
