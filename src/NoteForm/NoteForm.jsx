import React, {Component} from 'react';
import './NoteForm.css';

/**
 * Clase para crear una nueva nota en la base de datos
 * @extends Component
 */
class NoteForm extends Component {
	/**
	 * Constructor de la clase.
	 */
	constructor() {
		super();//Hereda de la clase Component
		this.addNote = this.addNote.bind(this);//Agrega la nota con la que se esta trabajando.
	}

	/**
	 * Metodo para agregar una nota
	 */
	addNote(){
		//Comprueba si la nota esta vacia
		if(this.textInput.value !==''){
			this.props.addNote(this.textInput.value);
		}else{
			alert('La nota no puede estar vacia');
		}
		this.textInput.value='';//Limpia el campo de la nota
		this.textInput.focus();//Asigna el foco
	}
	/**
	 * Renderiza el formulario para crear la nota
	 * @return {HTML}
	 */
	render(){
		return(
			<article className='NoteForm'>
				<textarea placeholder='Introduce una nota' ref={input=>{this.textInput=input;}}></textarea>
				<button type='button' name='Add' onClick={this.addNote}>Añadir</button>
			</article>
		)
	}
}
export default NoteForm;
