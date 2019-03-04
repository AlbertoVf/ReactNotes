import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component {
	constructor() {
		super();
		this.addNote=this.addNote.bind(this);
	}

	addNote(){
		if(this.textInput.value !==''){
			this.props.addNote(this.textInput.value);
		}else{
			alert('La nota no puede estar vacia');
		}
		this.textInput.value='';
		this.textInput.focus();
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
