class fawazirCls {
	constructor (data) {
		this.el = $el('<div id="fawariz-container"><span onclick="fawazir.next(null)" id="start-button">ابطأ</span></div>')[0];
		this.data = data;
		this.curFawazir = null;
		this.curQuestion = null;
		this.curFawazirNb = 0;
		this.curQuestionNb = 0;
		this.statues = [];
		$doc.body.append(this.el);
	}
	get randomQ() {return this.curFawazir.fawazir[Math.round(Math.random() * (this.curFawazir.fawazir.length -1))]}
	next (nb) {
		if (this.curFawazir === null) {
			this.curFawazir = this.data[0];
			this.curQuestion = this.randomQ;
			this.statues.push([])
		} else {
			this.curQuestionNb++;
			if (this.curQuestionNb === this.curFawazir.nb) {
				this.statues.push([]);
				this.curQuestionNb = 0;
				this.curFawazirNb++;
				this.curFawazir = this.data[this.curFawazirNb];
				if (this.curFawazirNb === this.data.length) return this.finish();
				else this.curQuestion = this.randomQ
			} else {
				this.curQuestion = this.randomQ
			}
		}
		
		var el = $el(`<div id="fawazir"><div id="question">${this.curQuestion.question}</div>
		<div id='ans-list'>${this.curQuestion.values.map((str, i) => {
			return "<div class='ans' onclick = 'fawazir.check("+i+")'>"+str+"</div>"
		}).join('')}
		</div></div>`)[0];
		this.el.replaceChildren(el)
	}
	check (ind) {
		this.statues[this.curFawazirNb].push([this.curQuestion.correct === ind, this.curQuestion, ind]);
		$el('.ans').forEach(el => el.classList.add([...el.parentElement.children].indexOf(el) === this.curQuestion.correct ? 'correct' : 'wrong'));
		setTimeout(() => this.next(), 2000)
	}
	finish () {
		var el = $el(`<div id='fawazir'><table>
		${this.statues.map(item => {return ('<tr>'+item.map(item => '<td class="'+(item[0] ? 'correct' : 'wrong')+'"></td>').join('') +'</tr>')}).join('')}
		</table><div id='result'>${this.statues.reduce((nb, item) => nb + item.reduce((nb, item) => nb + item[0], 0),0)}</div></div>`)[0];
		this.el.replaceChildren(el);
		$el('td').forEach(el => el.addEventListener('click', this.checkR.bind(this)))
	}
	checkR(e) {
		var qnb = [...e.target.parentElement.children].indexOf(e.target);
		var fnb = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement);
		$el('#result')[0].innerText = `
			سوآل: ${this.statues[fnb][qnb][1].question}
			الجواب الصحيح: ${this.statues[fnb][qnb][1].values[this.statues[fnb][qnb][1].correct]}
			الجواب المختار: ${this.statues[fnb][qnb][1].values[this.statues[fnb][qnb][2]]}
		`;
	}
}