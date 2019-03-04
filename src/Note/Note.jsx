import React, {Component} from 'react';
import './Note.css';

/**
 * Componente Nota que se almacenara en la base de datos
 * @extends Component
 */
class Note extends Component {
	/**
	 * Constructor por defecto de la clase Note
	 * @param {strinf} props Propiedades de la clase Note
	 */
	constructor(props) {
		super(props);//Constructor heredado de Component
		this.noteContent = props.noteContent;//valor de la propiedad noteContent. texto de la nota
		this.noteId = props.noteId+'';//clave de cada nota
	}

	/**
	 * Elimina un objeto Note a partir de un id
	 * @param  {[type]} id clave del elemento a borrar
	 * @return {void} Elimina el elemento de la base de datos tras una confirmacion
	 */
	handleRemove(id){
		if (window.confirm('¿Estas seguro de eliminar esta nota?')){
			this.props.removeNote(id);//Elimina una nota de la base de datos
		}
	}

	/**
	 * Renderiza un elemento Note
	 * @return {HTML} codigo HTML del elemento Note
	 */
	render(){
		return(
			<section className='Note'>
				<header className='delete' onClick={()=>{this.handleRemove(this.noteId)}}>&times;</header>
				<div className='content'>{this.noteContent}</div>
			</section>
		)
	}
}
export default Note;
