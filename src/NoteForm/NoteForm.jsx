import React, {Component} from 'react';
import './NoteForm.css';
class NoteForm extends Component {
	constructor() {
		super();
		this.addNote=this.addNote.bind(this);
	}
	addNote(){
		console.log(this.textInput.value);
	}
	render(){
		return(
			<article className='NoteForm'>
				<input type='text' placeholder='Introduce una nota' ref={input=>{this.textInput=input;}}/>
				<button type='button' name='Add' onClick={this.addNote}>Añadir</button>
			</article>
		)
	}
}
export default NoteForm;
