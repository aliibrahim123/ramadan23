
var $ = (s) => [...document.querySelectorAll(s)];
var sor=1, i=1;
var setPage = (sor, i, one = ()=>{}) => {fetch('pages/'+ sor + '/' + i + '.txt').then(i=>{if (!i.ok) {one()} else {return i.text()}}).then(d=> {
	$('#quran-c2')[0].innerText = d;
	$('#b4')[0].innerText = 'صفحة: ' + i;
	$('#b5')[0].innerText = ('سورة: ' + sorInd[sor]);
	$('#b6')[0].innerText = 'جزأ: ' + Math.min((Math.ceil((i-1)/20)||1), 30);
	globalThis.sor =sor;
	globalThis.i = i
})
}
setPage(...location.search.substr(1).split('/').map(i=>Number(i)))