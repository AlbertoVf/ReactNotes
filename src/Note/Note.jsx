import React, {Component} from 'react';
import './Note.css';

class Note extends Component {
	constructor(props) {
		super(props);
		this.noteContent=props.noteContent;
		this.noteId=props.noteId+'';
	}

	handleRemove(id){
		console.log(id);
		if (window.confirm('¿Estas seguro de eliminar esta nota?')){
			this.props.removeNote(id);
		}
	}

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
