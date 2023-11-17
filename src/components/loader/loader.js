import { DivComponent } from '../../common/div-component'
import { Card } from '../card/card'
import './card.css'

export class Loader extends DivComponent{

	constructor(appState, state){
		super()
		this.appState = appState
		this.state = state
	}

	render(){
		if(this.state.loading && this.state.list.length==0){
			this.el.innerHTML = `
				<h1>Loading....</h1>
			`
			return this.el
		}
		this.el.innerHTML = `
			<h1>Найдено книг – ${this.state.numFound} </h1>
		`
		const cardList = document.createElement('div')
		cardList.classList.add('card__wrapper')
		for(const card of this.state.list){
			cardList.append(new Card(this.appState, card).render())
		}
		this.el.append(cardList)
		return this.el
	}
}