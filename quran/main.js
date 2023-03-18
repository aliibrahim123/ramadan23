fetch('quran.json').then(q=>q.json()).then(q=>globalThis.quran = q).then(()=> {
	init()
});
function init () {
	$('#quran-c')[0].innerHTML = quran.map(i => '<div onclick = "setSor('+ "'" + i.name + "')" + '" class="soritem">' + i.name + '</div>').join('\n');
	var sbt = document.createElement('span');
	sbt.style.border = '10px double black';
	sbt.innerText = 'بحث';
	sbt.onclick = () => setSor($('input')[0]);
	var sin = document.createElement('input');
	sin.oninput = (e) => {$('.soritem').forEach(el => el.style.display = (el.innerText.includes(e.target.value) ? 'block' : 'none'))}
	$('#quran-c')[0].prepend(sin ,sbt);
	quranM = Object.fromEntries(quran.map(i=> [i.name, i]))
}
var $ = (s) => [...document.querySelectorAll(s)];
function setSor (sor, i=0) {
	sor = sor.trim();
	if (sor in quranM) {
		curSor = sor;
		curInd = i;
		let arr = quranM[sor].verses.slice(i*20, (1+i)*20);
		$('#quran-c')[0].innerText = arr.map((i,ii)=> i.text + ' (' + i.id + ') ').join('');
		var backel = document.createElement('span');
		backel.style.border = '10px double black';
		backel.innerText = ' رجوع';
		backel.onclick = () => init() || (curInd = 0);
		var backel2 = document.createElement('span');
		backel2.style.border = '10px double black';
		backel2.innerText = 'الى الخلف';
		backel2.onclick = () => setSor(curSor, Math.max(curInd-1, 0));
		var forel = document.createElement('span');
		forel.style.border = '10px double black';
		forel.innerText = ' الى الامام ';
		forel.onclick = () => setSor(curSor, Math.min(Math.floor(quranM[sor].total_verses / 20), curInd+1));
		$('#quran-c')[0].prepend(backel, backel2, forel)
	}
}
var curInd = 0;
var curSor = 0;