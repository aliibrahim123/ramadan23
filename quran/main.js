var $ = (s) => [...document.querySelectorAll(s)];

var init =()=> {
	$('#quran-c')[0].innerHTML = `
		<span style='border: 10px double black'><a style='color:white'href = '../index.html'>رجوع</a></span>
		<span onclick = 'sorI()'style='border: 10px double black'>سورة</span>
		<span onclick = 'pI()'style='border: 10px double black'>صفحة</span>
		<span onclick = 'partI()'style='border: 10px double black'>جزأ</span>
	`
};
var sorI =()=> {
	$('#quran-c')[0].innerHTML = `
		<span onclick = 'init()'style='border: 10px double black'>رجوع</span>
		${sorInd.slice(1).map((sor, i)=>"<div><a style='color:white'href='viewer.html?" + (i+1) + '/' + sormap[sor].i + "'>" + sor + '</a></div>').join('')}
	`
}
var pI =()=> {
	var p = Math.max(0, Math.min(604,Number(prompt('اي صفحة'))))-1;
	location.href = location.href.replace('main.html', 'viewer.html?' + pind[p] + '/' + (p+1))
}
var partI =()=> {
	var p = ((Math.max(1, Math.min(30,Number(prompt('اي جزأ'))))-1) *20 +1);
	p = p === 1? 0 :p;
	location.href = location.href.replace('main.html', 'viewer.html?' + pind[p] + '/' + (p+1))
}

function getSor123 (n) {
	var arr = sorInd.slice(1);
	for (let i = 0; i<113; i++) {
		if (sormap[arr[i]].e >= n) {
			return i
		}
	}
}
var pind = Array.from({length:604});
curSor = 1;
pind = pind.map((ii,iii, iiii, i=iii+1)=>sormap[sorInd[curSor]].e >=i ? curSor : curSor = getSor123(i) +1)
init()