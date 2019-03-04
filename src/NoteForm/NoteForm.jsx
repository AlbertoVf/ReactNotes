import React, {Component} from 'react';
import './NoteForm.css';
class NoteForm extends Component {
	constructor() {
		super();
	}
	render(){
		return(
			<article className='NoteForm'>
				<input type='text' placeholder='Introduce una nota'/>
				<button type='button' name='Add'>Añadir</button>
			</article>
		)
	}
}
export default NoteForm;
